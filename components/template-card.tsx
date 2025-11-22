"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Badge,
  BarChart,
  Briefcase,
  Bug,
  Building,
  CheckCircle,
  Clock,
  Code2,
  Database,
  GitBranch,
  Layers,
  Lightbulb,
  Lock,
  Map,
  MessageSquare,
  Network,
  Package,
  Palette,
  Repeat,
  Rocket,
  Route,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TestTube,
  UserPlus,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { DiagramTemplate } from "@/types/template";

// Icon mapping for templates
const ICON_MAP: Record<string, any> = {
  UserPlus,
  Workflow,
  GitBranch,
  Route,
  Repeat,
  Bug,
  Briefcase,
  Code2,
  Sparkles,
  Badge,
  CheckCircle,
  Zap,
  Building,
  Lightbulb,
  Package,
  Network,
  Map,
  Shield,
  Server,
  Rocket,
  Target,
  TestTube,
  Database,
  ShieldCheck,
  Lock,
  Users,
  Layers,
  Palette,
  BarChart,
  MessageSquare,
};

interface TemplateCardProps {
  template: DiagramTemplate;
  onUse: (template: DiagramTemplate) => void;
  variant?: "grid" | "list";
  onHover?: (template: DiagramTemplate) => void;
  onClick?: (template: DiagramTemplate) => void;
}

export function TemplateCard({
  template,
  onUse,
  variant = "grid",
  onHover,
  onClick,
}: TemplateCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const Icon = ICON_MAP[template.icon] || Sparkles;

  const difficultyConfig = {
    beginner: { label: "初级", color: "text-green-600 bg-green-50" },
    intermediate: { label: "中级", color: "text-blue-600 bg-blue-50" },
    advanced: { label: "高级", color: "text-purple-600 bg-purple-50" },
  };

  const difficulty = difficultyConfig[template.difficulty];

  const badges = (
    <div className="flex gap-1">
      {template.isPopular && (
        <div className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-medium text-amber-700 shadow-sm">
          <Star className="inline h-3 w-3 fill-amber-500 text-amber-500" /> 热门
        </div>
      )}
      {template.isNew && (
        <div className="rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-medium text-green-700 shadow-sm">
          ✨ 新品
        </div>
      )}
    </div>
  );

  const previewBlock = (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-md"
      style={{
        background: `linear-gradient(135deg, ${template.gradient.from} 0%, ${template.gradient.to} 100%)`,
      }}
    >
      {template.previewUrl ? (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url(${template.previewUrl})` }}
        />
      ) : null}
      <Icon className="relative h-8 w-8 text-white drop-shadow-sm" strokeWidth={1.5} />
    </div>
  );

  if (variant === "list") {
    return (
      <div
        className={cn(
          "group relative flex items-center gap-3 rounded-lg border bg-white px-3 py-3 transition-all duration-150 cursor-pointer",
          "hover:-translate-y-[1px] hover:shadow-sm hover:border-slate-300"
        )}
        onClick={() => onClick?.(template)}
        onMouseEnter={() => {
          setIsHovered(true);
          onHover?.(template);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-14 w-14 shrink-0">{previewBlock}</div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="line-clamp-1 text-sm font-semibold text-slate-900">
              {template.title}
            </h3>
            {badges}
          </div>
          <p className="mt-0.5 line-clamp-2 text-xs text-slate-600">
            {template.description}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
            <div className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5">
              <Clock className="h-3 w-3" />
              <span>{template.estimatedTime}</span>
            </div>
            <div className={cn("rounded-full px-2 py-0.5", difficulty.color)}>
              {difficulty.label}
            </div>
            {template.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="shrink-0"
          onClick={(e) => {
            e.stopPropagation();
            onUse(template);
          }}
        >
          使用
        </Button>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-xl border bg-white shadow-sm transition-all duration-200 cursor-pointer",
        "hover:shadow-lg hover:-translate-y-1",
        isHovered && "border-slate-300"
      )}
      onClick={() => onClick?.(template)}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover?.(template);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute right-3 top-3 z-10 flex gap-1">{badges}</div>

      {/* Gradient Header / Preview */}
      <div className="flex h-[120px] items-center justify-center rounded-t-xl">
        {previewBlock}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Title */}
        <h3 className="mb-1.5 line-clamp-1 text-base font-semibold text-slate-900">
          {template.title}
        </h3>

        {/* Description */}
        <p className="mb-3 line-clamp-2 text-sm text-slate-600">
          {template.description}
        </p>

        {/* Metadata */}
        <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{template.estimatedTime}</span>
          </div>
          <div className={cn("rounded-full px-2 py-0.5", difficulty.color)}>
            {difficulty.label}
          </div>
        </div>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {template.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600 transition-colors hover:bg-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onUse(template);
          }}
          className={cn(
            "group/btn mt-auto w-full transition-all duration-200",
            "bg-gradient-to-r hover:shadow-md",
            isHovered && "translate-x-0.5"
          )}
          style={{
            backgroundImage: `linear-gradient(to right, ${template.gradient.from}, ${template.gradient.to})`,
          }}
        >
          <span>使用模板</span>
          <span
            className={cn(
              "ml-1 inline-block transition-transform duration-200",
              isHovered && "translate-x-1"
            )}
          >
            →
          </span>
        </Button>
        
        {/* Click to view hint */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/5 rounded-xl flex items-center justify-center backdrop-blur-[0.5px] pointer-events-none">
            <div className="bg-white/95 px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-slate-700">
              点击查看详情
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Skeleton loader for template card
 */
export function TemplateCardSkeleton() {
  return (
    <div className="flex flex-col rounded-xl border bg-white shadow-sm">
      {/* Gradient Header Skeleton */}
      <div className="h-[120px] animate-pulse rounded-t-xl bg-gradient-to-br from-slate-200 to-slate-300" />

      {/* Content Skeleton */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 h-5 w-3/4 animate-pulse rounded bg-slate-200" />
        <div className="mb-1 h-4 w-full animate-pulse rounded bg-slate-100" />
        <div className="mb-3 h-4 w-5/6 animate-pulse rounded bg-slate-100" />
        <div className="mb-3 flex gap-2">
          <div className="h-5 w-16 animate-pulse rounded bg-slate-100" />
          <div className="h-5 w-12 animate-pulse rounded bg-slate-100" />
        </div>
        <div className="mb-4 flex gap-1.5">
          <div className="h-6 w-14 animate-pulse rounded bg-slate-100" />
          <div className="h-6 w-16 animate-pulse rounded bg-slate-100" />
        </div>
        <div className="mt-auto h-9 w-full animate-pulse rounded-md bg-slate-200" />
      </div>
    </div>
  );
}
