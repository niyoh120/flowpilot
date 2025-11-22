"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { TemplateCard, TemplateCardSkeleton } from "@/components/template-card";
import { DIAGRAM_TEMPLATES } from "@/data/templates";
import type { TemplateCategory, DiagramTemplate } from "@/types/template";

interface TemplateGalleryProps {
  onSelectTemplate: (template: DiagramTemplate) => void;
}

// Category metadata
const CATEGORIES = [
  { id: "all" as const, label: "全部", icon: "✨", count: 0 },
  { id: "business" as const, label: "商业策略", icon: "🏢", count: 0 },
  { id: "development" as const, label: "软件开发", icon: "💻", count: 0 },
  { id: "product" as const, label: "产品设计", icon: "📊", count: 0 },
  { id: "security" as const, label: "IT安全", icon: "🛡️", count: 0 },
  { id: "creative" as const, label: "创意工坊", icon: "🎨", count: 0 },
];

export function TemplateGallery({ onSelectTemplate }: TemplateGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading] = useState(false);

  // Calculate category counts
  const categoriesWithCounts = useMemo(() => {
    return CATEGORIES.map((cat) => ({
      ...cat,
      count:
        cat.id === "all"
          ? DIAGRAM_TEMPLATES.length
          : DIAGRAM_TEMPLATES.filter((t) => t.category === cat.id).length,
    }));
  }, []);

  // Filter templates
  const filteredTemplates = useMemo(() => {
    let result = DIAGRAM_TEMPLATES;

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((t) => t.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(query) ||
          t.description.toLowerCase().includes(query) ||
          t.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="border-b bg-gradient-to-r from-slate-50 to-white px-6 py-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              <span className="mr-2">📚</span>
              模板库
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              选择一个模板快速开始，或从空白画布创建
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            type="text"
            placeholder="搜索模板..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="border-b bg-white px-6">
        <div className="scrollbar-hide -mb-px flex gap-1 overflow-x-auto">
          {categoriesWithCounts.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "flex items-center gap-2 whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors",
                selectedCategory === category.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900"
              )}
            >
              <span className="text-base">{category.icon}</span>
              <span>{category.label}</span>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-xs",
                  selectedCategory === category.id
                    ? "bg-blue-100 text-blue-600"
                    : "bg-slate-100 text-slate-600"
                )}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Template Grid */}
      <div className="flex-1 overflow-y-auto bg-slate-50 px-6 py-6">
        {isLoading ? (
          // Loading state
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <TemplateCardSkeleton key={i} />
            ))}
          </div>
        ) : filteredTemplates.length > 0 ? (
          // Templates grid
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTemplates.map((template, index) => (
              <div
                key={template.id}
                style={{
                  animation: `fadeInUp 0.3s ease forwards`,
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0,
                }}
              >
                <TemplateCard
                  template={template}
                  onUse={onSelectTemplate}
                />
              </div>
            ))}
          </div>
        ) : (
          // Empty state
          <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
            <div className="mb-4 text-6xl">🔍</div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              未找到匹配的模板
            </h3>
            <p className="mb-4 text-sm text-slate-600">
              尝试搜索其他关键词，或浏览全部模板
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                清除搜索条件
              </button>
            )}
          </div>
        )}
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
