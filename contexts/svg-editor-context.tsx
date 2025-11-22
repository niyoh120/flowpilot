"use client";

import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
import { nanoid } from "nanoid";
import { svgToDataUrl } from "@/lib/svg";

export type SvgTool = "select" | "rect" | "ellipse" | "line" | "text";

type Transform = {
    x?: number;
    y?: number;
    scaleX?: number;
    scaleY?: number;
    rotation?: number;
};

export type SvgElementBase = {
    id: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    opacity?: number;
    transform?: Transform;
    visible?: boolean;
    locked?: boolean;
};

export type RectElement = SvgElementBase & {
    type: "rect";
    x: number;
    y: number;
    width: number;
    height: number;
    rx?: number;
    ry?: number;
};

export type EllipseElement = SvgElementBase & {
    type: "ellipse";
    cx: number;
    cy: number;
    rx: number;
    ry: number;
};

export type LineElement = SvgElementBase & {
    type: "line";
    x1: number;
    y1: number;
    x2: number;
    y2: number;
};

export type PathElement = SvgElementBase & {
    type: "path";
    d: string;
};

export type TextElement = SvgElementBase & {
    type: "text";
    x: number;
    y: number;
    text: string;
    fontSize?: number;
    fontWeight?: string;
    textAnchor?: "start" | "middle" | "end";
};

export type SvgElement =
    | RectElement
    | EllipseElement
    | LineElement
    | PathElement
    | TextElement;

type SvgDocument = {
    width: number;
    height: number;
    viewBox?: string | null;
};

type HistoryEntry = {
    svg: string;
    dataUrl: string | null;
    timestamp: number;
};

type EditorSnapshot = {
    doc: SvgDocument;
    elements: SvgElement[];
    defs?: string | null;
};

type SvgEditorContextValue = {
        doc: SvgDocument;
        elements: SvgElement[];
        tool: SvgTool;
        setTool: (tool: SvgTool) => void;
        selectedId: string | null;
        setSelectedId: (id: string | null) => void;
        selectedIds: Set<string>;
        setSelectedIds: (ids: Set<string>) => void;
    addElement: (element: Omit<SvgElement, "id"> | SvgElement) => string;
    updateElement: (
        id: string,
        updater: Partial<SvgElement> | ((element: SvgElement) => SvgElement),
        options?: { record?: boolean }
    ) => void;
    moveElement: (id: string, dx: number, dy: number, options?: { record?: boolean }) => void;
    removeElement: (id: string) => void;
    duplicateElement: (id: string) => string | null;
    duplicateMany: (ids: Iterable<string>) => string[];
    removeMany: (ids: Iterable<string>) => void;
    loadSvgMarkup: (svg: string, options?: { saveHistory?: boolean }) => void;
    exportSvgMarkup: () => string;
    clearSvg: () => void;
    history: HistoryEntry[];
    activeHistoryIndex: number;
    restoreHistoryAt: (index: number) => void;
    undo: () => void;
    redo: () => void;
    commitSnapshot: () => void;
    defsMarkup?: string | null;
};

const DEFAULT_DOC: SvgDocument = {
    width: 960,
    height: 640,
    viewBox: "0 0 960 640",
};

const SvgEditorContext = createContext<SvgEditorContextValue | null>(null);

function parseNumber(value: string | null | undefined, fallback = 0) {
    if (!value) return fallback;
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : fallback;
}

function parseOptionalNumber(value: string | null | undefined): number | undefined {
    if (!value) return undefined;
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : undefined;
}

function parseTransform(transform: string | null): Transform | undefined {
    if (!transform) return undefined;
    const result: Transform = {};
    const translateMatch = transform.match(/translate\(([^)]+)\)/);
    if (translateMatch?.[1]) {
        const [x, y] = translateMatch[1].split(/[, ]+/).map(parseFloat);
        if (Number.isFinite(x)) result.x = x;
        if (Number.isFinite(y)) result.y = y;
    }
    const scaleMatch = transform.match(/scale\(([^)]+)\)/);
    if (scaleMatch?.[1]) {
        const [sx, sy] = scaleMatch[1].split(/[, ]+/).map(parseFloat);
        if (Number.isFinite(sx)) result.scaleX = sx;
        if (Number.isFinite(sy)) result.scaleY = sy;
    }
    const rotateMatch = transform.match(/rotate\(([^)]+)\)/);
    if (rotateMatch?.[1]) {
        const angle = parseFloat(rotateMatch[1]);
        if (Number.isFinite(angle)) result.rotation = angle;
    }
    return Object.keys(result).length > 0 ? result : undefined;
}

function serializeTransform(transform?: Transform): string | undefined {
    if (!transform) return undefined;
    const segments: string[] = [];
    if (Number.isFinite(transform.x) || Number.isFinite(transform.y)) {
        const x = transform.x ?? 0;
        const y = transform.y ?? 0;
        segments.push(`translate(${x} ${y})`);
    }
    if (
        Number.isFinite(transform.scaleX) ||
        Number.isFinite(transform.scaleY)
    ) {
        const sx = transform.scaleX ?? 1;
        const sy = transform.scaleY ?? sx;
        segments.push(`scale(${sx} ${sy})`);
    }
    if (Number.isFinite(transform.rotation)) {
        segments.push(`rotate(${transform.rotation})`);
    }
    return segments.length > 0 ? segments.join(" ") : undefined;
}

function elementToMarkup(element: SvgElement): string {
    const common = [
        element.fill ? `fill="${element.fill}"` : 'fill="none"',
        element.stroke ? `stroke="${element.stroke}"` : "",
        element.strokeWidth
            ? `stroke-width="${element.strokeWidth}"`
            : "",
        element.opacity != null ? `opacity="${element.opacity}"` : "",
    ]
        .filter(Boolean)
        .join(" ");

    const transform = serializeTransform(element.transform);
    const transformAttr = transform ? ` transform="${transform}"` : "";

    switch (element.type) {
        case "rect":
            return `<rect id="${element.id}" x="${element.x}" y="${element.y}" width="${element.width}" height="${element.height}"${element.rx ? ` rx="${element.rx}"` : ""}${element.ry ? ` ry="${element.ry}"` : ""} ${common}${transformAttr} />`;
        case "ellipse":
            return `<ellipse id="${element.id}" cx="${element.cx}" cy="${element.cy}" rx="${element.rx}" ry="${element.ry}" ${common}${transformAttr} />`;
        case "line":
            return `<line id="${element.id}" x1="${element.x1}" y1="${element.y1}" x2="${element.x2}" y2="${element.y2}" ${common}${transformAttr} />`;
        case "path":
            return `<path id="${element.id}" d="${element.d}" ${common}${transformAttr} />`;
        case "text":
            return `<text id="${element.id}" x="${element.x}" y="${element.y}" ${element.fontSize ? `font-size="${element.fontSize}"` : ""} ${element.fontWeight ? `font-weight="${element.fontWeight}"` : ""} ${element.textAnchor ? `text-anchor="${element.textAnchor}"` : ""} ${common}${transformAttr}>${element.text}</text>`;
        default:
            return "";
    }
}

function buildSvgMarkup(doc: SvgDocument, elements: SvgElement[]): string {
    const viewBox =
        doc.viewBox && doc.viewBox.trim().length > 0
            ? doc.viewBox
            : `0 0 ${doc.width} ${doc.height}`;
    const body = elements
        .filter((el) => el.visible !== false)
        .map(elementToMarkup)
        .join("\n");
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${doc.width}" height="${doc.height}" viewBox="${viewBox}">${body}</svg>`;
}

function parseElement(node: Element, inheritedTransform?: string): SvgElement | null {
    const nodeTransform = node.getAttribute("transform");
    const combinedTransform = [inheritedTransform, nodeTransform]
        .filter(Boolean)
        .join(" ")
        .trim();
    const transform = parseTransform(combinedTransform || null);
    switch (node.tagName.toLowerCase()) {
        case "rect":
            return {
                id: node.getAttribute("id") || nanoid(),
                type: "rect",
                x: parseNumber(node.getAttribute("x")),
                y: parseNumber(node.getAttribute("y")),
                width: parseNumber(node.getAttribute("width")),
                height: parseNumber(node.getAttribute("height")),
                rx: parseOptionalNumber(node.getAttribute("rx")),
                ry: parseOptionalNumber(node.getAttribute("ry")),
                fill: node.getAttribute("fill") || undefined,
                stroke: node.getAttribute("stroke") || undefined,
                strokeWidth: parseNumber(node.getAttribute("stroke-width")),
                opacity: parseOptionalNumber(node.getAttribute("opacity")),
                transform,
                visible: node.getAttribute("data-visible") !== "false",
                locked: node.getAttribute("data-locked") === "true",
            } as RectElement;
        case "circle": {
            const r = parseNumber(node.getAttribute("r"));
            return {
                id: node.getAttribute("id") || nanoid(),
                type: "ellipse",
                cx: parseNumber(node.getAttribute("cx")),
                cy: parseNumber(node.getAttribute("cy")),
                rx: r,
                ry: r,
                fill: node.getAttribute("fill") || undefined,
                stroke: node.getAttribute("stroke") || undefined,
                strokeWidth: parseNumber(node.getAttribute("stroke-width")),
                opacity: parseOptionalNumber(node.getAttribute("opacity")),
                transform,
                visible: node.getAttribute("data-visible") !== "false",
                locked: node.getAttribute("data-locked") === "true",
            } as EllipseElement;
        }
        case "ellipse":
            return {
                id: node.getAttribute("id") || nanoid(),
                type: "ellipse",
                cx: parseNumber(node.getAttribute("cx")),
                cy: parseNumber(node.getAttribute("cy")),
                rx: parseNumber(node.getAttribute("rx")),
                ry: parseNumber(node.getAttribute("ry")),
                fill: node.getAttribute("fill") || undefined,
                stroke: node.getAttribute("stroke") || undefined,
                strokeWidth: parseNumber(node.getAttribute("stroke-width")),
                opacity: parseOptionalNumber(node.getAttribute("opacity")),
                transform,
                visible: node.getAttribute("data-visible") !== "false",
                locked: node.getAttribute("data-locked") === "true",
            } as EllipseElement;
        case "line":
            return {
                id: node.getAttribute("id") || nanoid(),
                type: "line",
                x1: parseNumber(node.getAttribute("x1")),
                y1: parseNumber(node.getAttribute("y1")),
                x2: parseNumber(node.getAttribute("x2")),
                y2: parseNumber(node.getAttribute("y2")),
                stroke: node.getAttribute("stroke") || undefined,
                strokeWidth: parseNumber(node.getAttribute("stroke-width")),
                opacity: parseOptionalNumber(node.getAttribute("opacity")),
                transform,
                visible: node.getAttribute("data-visible") !== "false",
                locked: node.getAttribute("data-locked") === "true",
            } as LineElement;
        case "path":
            return {
                id: node.getAttribute("id") || nanoid(),
                type: "path",
                d: node.getAttribute("d") || "",
                fill: node.getAttribute("fill") || undefined,
                stroke: node.getAttribute("stroke") || undefined,
                strokeWidth: parseNumber(node.getAttribute("stroke-width")),
                opacity: parseOptionalNumber(node.getAttribute("opacity")),
                transform,
                visible: node.getAttribute("data-visible") !== "false",
                locked: node.getAttribute("data-locked") === "true",
            } as PathElement;
        case "text":
            return {
                id: node.getAttribute("id") || nanoid(),
                type: "text",
                x: parseNumber(node.getAttribute("x")),
                y: parseNumber(node.getAttribute("y")),
                text: node.textContent || "",
                fontSize: parseOptionalNumber(node.getAttribute("font-size")),
                fontWeight: node.getAttribute("font-weight") || undefined,
                textAnchor: (node.getAttribute("text-anchor") as any) || undefined,
                fill: node.getAttribute("fill") || undefined,
                stroke: node.getAttribute("stroke") || undefined,
                strokeWidth: parseNumber(node.getAttribute("stroke-width")),
                opacity: parseOptionalNumber(node.getAttribute("opacity")),
                transform,
                visible: node.getAttribute("data-visible") !== "false",
                locked: node.getAttribute("data-locked") === "true",
            } as TextElement;
        default:
            return null;
    }
}

function parseSvgMarkup(svg: string): { doc: SvgDocument; elements: SvgElement[]; defs?: string | null } {
    const parser = new DOMParser();
    const parsed = parser.parseFromString(svg, "image/svg+xml");
    const svgEl = parsed.querySelector("svg");
    if (!svgEl) {
        throw new Error("SVG 内容缺少 <svg> 根节点，无法解析。");
    }
    const widthAttr = svgEl.getAttribute("width");
    const heightAttr = svgEl.getAttribute("height");
    const viewBox = svgEl.getAttribute("viewBox");
    const [vbX, vbY, vbW, vbH] = (viewBox || "")
        .split(/[\s,]+/)
        .map((value) => parseFloat(value))
        .filter((value) => Number.isFinite(value));
    const width =
        parseNumber(widthAttr, Number.isFinite(vbW) ? vbW : DEFAULT_DOC.width) || DEFAULT_DOC.width;
    const height =
        parseNumber(heightAttr, Number.isFinite(vbH) ? vbH : DEFAULT_DOC.height) || DEFAULT_DOC.height;

    const elements: SvgElement[] = [];
    const defsEl = svgEl.querySelector("defs");
    const defs = defsEl ? defsEl.innerHTML : null;
    const walker = (nodeList: Iterable<Node>, inheritedTransform?: string) => {
        for (const node of nodeList) {
            if (!(node instanceof Element)) continue;
            const parsedElement = parseElement(node, inheritedTransform);
            const nextTransform = [inheritedTransform, node.getAttribute("transform")]
                .filter(Boolean)
                .join(" ")
                .trim();
            if (parsedElement) {
                elements.push(parsedElement);
            }
            if (node.children && node.children.length > 0) {
                walker(Array.from(node.children), nextTransform || undefined);
            }
        }
    };
    walker(Array.from(svgEl.children));

    return {
        doc: { width, height, viewBox: viewBox || `0 0 ${width} ${height}` },
        elements,
        defs,
    };
}

export function SvgEditorProvider({ children }: { children: React.ReactNode }) {
    const [doc, setDoc] = useState<SvgDocument>(DEFAULT_DOC);
    const [elements, setElements] = useState<SvgElement[]>([]);
    const [tool, setTool] = useState<SvgTool>("select");
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const [activeHistoryIndex, setActiveHistoryIndex] = useState(-1);
    const [past, setPast] = useState<EditorSnapshot[]>([]);
    const [future, setFuture] = useState<EditorSnapshot[]>([]);
    const [defsMarkup, setDefsMarkup] = useState<string | null>(null);

    const takeSnapshot = useCallback(
        (
            customElements?: SvgElement[],
            customDoc?: SvgDocument,
            customDefs?: string | null
        ): EditorSnapshot => ({
            doc: { ...(customDoc ?? doc) },
            elements: (customElements ?? elements).map((el) => ({ ...el })),
            defs: customDefs ?? defsMarkup,
        }),
        [doc, elements, defsMarkup]
    );

    const pushHistorySnapshot = useCallback(
        (customElements?: SvgElement[], customDoc?: SvgDocument, customDefs?: string | null) => {
            setPast((prev) => {
                const next = [...prev, takeSnapshot(customElements, customDoc, customDefs)];
                return next.slice(-50);
            });
            setFuture([]);
        },
        [takeSnapshot]
    );

    const addHistory = useCallback(
        (snapshotSvg: string) => {
            const dataUrl = svgToDataUrl(snapshotSvg);
            setHistory((prev) => {
                const next = [...prev, { svg: snapshotSvg, dataUrl, timestamp: Date.now() }];
                setActiveHistoryIndex(next.length - 1);
                return next;
            });
        },
        []
    );

    const exportSvgMarkup = useCallback(() => {
        const viewBox =
            doc.viewBox && doc.viewBox.trim().length > 0
                ? doc.viewBox
                : `0 0 ${doc.width} ${doc.height}`;
        const defsContent = defsMarkup ? `<defs>${defsMarkup}</defs>` : "";
        const body = elements
            .filter((el) => el.visible !== false)
            .map(elementToMarkup)
            .join("\n");
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${doc.width}" height="${doc.height}" viewBox="${viewBox}">${defsContent}${body}</svg>`;
    }, [doc, elements, defsMarkup]);

    const addElement = useCallback(
        (element: Omit<SvgElement, "id"> | SvgElement) => {
            pushHistorySnapshot();
            const next: SvgElement =
                "id" in element && element.id
                    ? (element as SvgElement)
                    : { ...(element as SvgElement), id: nanoid() };
            if (next.visible === undefined) next.visible = true;
            if (next.locked === undefined) next.locked = false;
            setElements((prev) => [...prev, next]);
            setSelectedId(next.id);
            return next.id;
        },
        [pushHistorySnapshot]
    );

    const updateElement = useCallback(
        (
            id: string,
            updater: Partial<SvgElement> | ((element: SvgElement) => SvgElement),
            options?: { record?: boolean }
        ) => {
            if (options?.record !== false) {
                pushHistorySnapshot();
            }
            setElements((prev) =>
                prev
                    .map((item) => {
                        if (item.id !== id) return item;
                        const next =
                            typeof updater === "function"
                                ? (updater as (element: SvgElement) => SvgElement)(item)
                                : { ...item, ...updater };
                        return next as SvgElement;
                    }) as SvgElement[]
            );
        },
        [pushHistorySnapshot]
    );

    const moveElement = useCallback(
        (id: string, dx: number, dy: number, options?: { record?: boolean }) => {
            if (options?.record) {
                pushHistorySnapshot();
            }
            setElements((prev) =>
                prev.map((element) => {
                    if (element.id !== id) return element;
                    switch (element.type) {
                        case "rect":
                            return { ...element, x: element.x + dx, y: element.y + dy };
                        case "ellipse":
                            return { ...element, cx: element.cx + dx, cy: element.cy + dy };
                        case "line":
                            return {
                                ...element,
                                x1: element.x1 + dx,
                                y1: element.y1 + dy,
                                x2: element.x2 + dx,
                                y2: element.y2 + dy,
                            };
                        case "text":
                            return { ...element, x: element.x + dx, y: element.y + dy };
                        case "path": {
                            const transform = {
                                ...(element.transform || {}),
                                x: (element.transform?.x || 0) + dx,
                                y: (element.transform?.y || 0) + dy,
                            };
                            return { ...element, transform };
                        }
                        default:
                            return element;
                    }
                })
            );
        },
        [pushHistorySnapshot]
    );

    const removeElement = useCallback(
        (id: string) => {
            pushHistorySnapshot();
            setElements((prev) => prev.filter((item) => item.id !== id));
            setSelectedId((prev) => (prev === id ? null : prev));
        },
        [pushHistorySnapshot]
    );

    const duplicateElement = useCallback(
        (id: string) => {
            const original = elements.find((el) => el.id === id);
            if (!original) return null;
            pushHistorySnapshot();
            const clone: SvgElement = {
                ...(original as SvgElement),
                id: nanoid(),
            };
            switch (clone.type) {
                case "rect":
                    clone.x += 12;
                    clone.y += 12;
                    break;
                case "ellipse":
                    clone.cx += 12;
                    clone.cy += 12;
                    break;
                case "line":
                    clone.x1 += 12;
                    clone.x2 += 12;
                    clone.y1 += 12;
                    clone.y2 += 12;
                    break;
                case "text":
                    clone.x += 12;
                    clone.y += 12;
                    break;
                case "path":
                    clone.transform = {
                        ...(clone.transform || {}),
                        x: (clone.transform?.x || 0) + 12,
                        y: (clone.transform?.y || 0) + 12,
                    };
                    break;
                default:
                    break;
            }
            setElements((prev) => [...prev, clone]);
            setSelectedId(clone.id);
            return clone.id;
        },
        [elements, pushHistorySnapshot]
    );

    const duplicateMany = useCallback(
        (ids: Iterable<string>) => {
            const idList = Array.from(ids);
            if (idList.length === 0) return [];
            pushHistorySnapshot();
            const created: string[] = [];
            setElements((prev) => {
                const next: SvgElement[] = [...prev];
                idList.forEach((id) => {
                    const original = prev.find((el) => el.id === id);
                    if (!original) return;
                    const clone: SvgElement = {
                        ...(original as SvgElement),
                        id: nanoid(),
                    };
                    switch (clone.type) {
                        case "rect":
                            clone.x += 12;
                            clone.y += 12;
                            break;
                        case "ellipse":
                            clone.cx += 12;
                            clone.cy += 12;
                            break;
                        case "line":
                            clone.x1 += 12;
                            clone.x2 += 12;
                            clone.y1 += 12;
                            clone.y2 += 12;
                            break;
                        case "text":
                            clone.x += 12;
                            clone.y += 12;
                            break;
                        case "path":
                            clone.transform = {
                                ...(clone.transform || {}),
                                x: (clone.transform?.x || 0) + 12,
                                y: (clone.transform?.y || 0) + 12,
                            };
                            break;
                        default:
                            break;
                    }
                    created.push(clone.id);
                    next.push(clone);
                });
                return next;
            });
            setSelectedId(created.length === 1 ? created[0] : null);
            setSelectedIds(new Set(created));
            return created;
        },
        [elements, pushHistorySnapshot]
    );

    const removeMany = useCallback(
        (ids: Iterable<string>) => {
            const idList = Array.from(ids);
            if (idList.length === 0) return;
            pushHistorySnapshot();
            setElements((prev) => prev.filter((item) => !idList.includes(item.id)));
            setSelectedId(null);
            setSelectedIds(new Set());
        },
        [pushHistorySnapshot]
    );

    const loadSvgMarkup = useCallback(
        (svg: string, options?: { saveHistory?: boolean }) => {
            try {
                const parsed = parseSvgMarkup(svg);
                setDoc(parsed.doc);
                setElements(parsed.elements);
                setDefsMarkup(parsed.defs ?? null);
                setSelectedId(null);
                pushHistorySnapshot(parsed.elements, parsed.doc, parsed.defs ?? null);
                if (options?.saveHistory !== false) {
                    const snapshot = buildSvgMarkup(parsed.doc, parsed.elements);
                    addHistory(snapshot);
                }
            } catch (error) {
                console.error("解析 SVG 失败：", error);
            }
        },
        [addHistory, pushHistorySnapshot]
    );

    const clearSvg = useCallback(() => {
        pushHistorySnapshot();
        setDoc(DEFAULT_DOC);
        setElements([]);
        setDefsMarkup(null);
        setSelectedId(null);
        setHistory([]);
        setActiveHistoryIndex(-1);
        setPast([]);
        setFuture([]);
    }, [pushHistorySnapshot]);

    const restoreHistoryAt = useCallback((index: number) => {
        const entry = history[index];
        if (!entry) return;
        try {
            const parsed = parseSvgMarkup(entry.svg);
            setDoc(parsed.doc);
            setElements(
                parsed.elements.map((el) => ({
                    ...el,
                    visible: el.visible !== false,
                    locked: el.locked === true,
                }))
            );
            setSelectedId(null);
            setActiveHistoryIndex(index);
        } catch (error) {
            console.error("恢复历史失败：", error);
        }
    }, [history]);

    const undo = useCallback(() => {
        setPast((prev) => {
            if (prev.length === 0) return prev;
            const last = prev[prev.length - 1];
            setFuture((f) => [takeSnapshot(), ...f].slice(0, 50));
            setDoc(last.doc);
            setElements(last.elements);
            setSelectedId(null);
            return prev.slice(0, -1);
        });
    }, [takeSnapshot]);

    const redo = useCallback(() => {
        setFuture((prev) => {
            if (prev.length === 0) return prev;
            const next = prev[0];
            setPast((p) => [...p, takeSnapshot()].slice(-50));
            setDoc(next.doc);
            setElements(next.elements);
            setSelectedId(null);
            return prev.slice(1);
        });
    }, [takeSnapshot]);

    const value = useMemo(
        () => ({
            doc,
            elements,
            tool,
            setTool,
            selectedId,
            setSelectedId,
            selectedIds,
            setSelectedIds,
            addElement,
            updateElement,
            moveElement,
            loadSvgMarkup,
            exportSvgMarkup,
            clearSvg,
            removeElement,
            duplicateElement,
            duplicateMany,
            removeMany,
            history,
            activeHistoryIndex,
            restoreHistoryAt,
            undo,
            redo,
            commitSnapshot: () => pushHistorySnapshot(),
            defsMarkup,
        }),
        [
            doc,
            elements,
            tool,
            selectedId,
            selectedIds,
            addElement,
            updateElement,
            moveElement,
            loadSvgMarkup,
            exportSvgMarkup,
            clearSvg,
            removeElement,
            duplicateElement,
            duplicateMany,
            removeMany,
            history,
            activeHistoryIndex,
            restoreHistoryAt,
            undo,
            redo,
            pushHistorySnapshot,
            defsMarkup,
        ]
    );

    return (
        <SvgEditorContext.Provider value={value}>
            {children}
        </SvgEditorContext.Provider>
    );
}

export function useSvgEditor() {
    const context = useContext(SvgEditorContext);
    if (!context) {
        throw new Error("useSvgEditor must be used within SvgEditorProvider");
    }
    return context;
}
