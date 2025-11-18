import type { LucideIcon } from "lucide-react";
import type { RuntimeModelConfig } from "@/types/model-config";

export type ToolPanel = "brief" | "calibration" | "actions";

export interface ToolbarActionDefinition {
    label: string;
    description: string;
    icon: LucideIcon;
}

export interface DiagramUpdateMeta {
    origin: "display" | "edit";
    modelRuntime?: RuntimeModelConfig;
    toolCallId?: string;
}

export type ComparisonNotice = {
    type: "success" | "error";
    message: string;
};
