import type { FlowPilotBriefState } from "@/components/flowpilot-brief";

/**
 * Template categories for organizing diagram templates
 */
export type TemplateCategory =
  | "all"
  | "business"
  | "development"
  | "product"
  | "security"
  | "creative";

/**
 * Template difficulty levels
 */
export type TemplateDifficulty = "beginner" | "intermediate" | "advanced";

/**
 * Single diagram template definition
 */
export interface DiagramTemplate {
  // Unique identifier
  id: string;

  // Display information
  title: string;
  description: string;
  
  // Categorization
  category: TemplateCategory;
  tags: string[];
  difficulty: TemplateDifficulty;
  
  // Special badges
  isPopular?: boolean;
  isNew?: boolean;
  
  // Visual styling
  icon: string; // Lucide icon name
  gradient: {
    from: string; // Hex color
    to: string;   // Hex color
  };
  
  // Template content
  prompt: string;
  brief: FlowPilotBriefState;
  
  // Metadata
  estimatedTime: string; // e.g., "5 min", "10 min"
  usageCount?: number;
  createdAt?: string;
}

/**
 * Category metadata for display
 */
export interface TemplateCategoryMeta {
  id: TemplateCategory;
  label: string;
  icon: string;
  count: number;
}

/**
 * Sort options for templates
 */
export type TemplateSortOption =
  | "popular"
  | "newest"
  | "quickest"
  | "alphabetical";

/**
 * Filter state for template gallery
 */
export interface TemplateFilterState {
  category: TemplateCategory;
  searchQuery: string;
  sortBy: TemplateSortOption;
  difficulty?: TemplateDifficulty;
}
