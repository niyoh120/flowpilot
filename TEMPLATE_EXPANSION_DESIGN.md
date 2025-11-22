# Template Expansion Design 📚

## 🎯 Research Summary

Based on Google Search research, I've identified the most popular and universal diagram scenarios across different industries:

### Most Common Scenarios (by frequency):

1. **Software Development** (highest frequency)
   - API flow diagrams
   - Sprint/Agile workflows
   - Git branching strategies
   - CI/CD pipelines
   - Microservices architecture

2. **Business Operations**
   - Employee onboarding processes
   - Decision trees for business decisions
   - Customer journey maps
   - Cross-functional flowcharts (swimlanes)
   - Approval workflows

3. **Product Management**
   - Product development lifecycle
   - Feature release processes
   - User story mapping
   - Roadmap visualization
   - A/B test planning

4. **IT/Security**
   - Incident response runbooks
   - Network topology diagrams
   - Security audit flows
   - Disaster recovery plans
   - Access control matrices

5. **General Business**
   - Organizational charts
   - Process improvement (before/after)
   - SWOT analysis flows
   - Meeting agendas with decision points
   - Training program structures

---

## 📦 Proposed Template Categories

To handle 20+ templates beautifully, I propose a **category-based organization** with visual filtering:

### Category Structure:

```
🏢 Business & Strategy (7 templates)
  - Employee Onboarding Flow
  - Decision Tree (Business)
  - Approval Workflow
  - Organizational Chart
  - Customer Journey Map
  - SWOT to Action Plan
  - Meeting Decision Flow

💻 Software Development (8 templates)
  - API Request/Response Flow
  - Agile Sprint Workflow
  - Git Branching Strategy
  - CI/CD Pipeline
  - Feature Release Process
  - Microservices Communication
  - Database Schema Design
  - Bug Triage Process

📊 Product & Design (5 templates)
  - Product Development Lifecycle
  - User Story Mapping
  - A/B Test Planning
  - Design System Workflow
  - Analytics Dashboard Flow

🛡️ IT & Security (4 templates)
  - Incident Response Runbook
  - Network Architecture
  - Security Audit Flow
  - Access Control Matrix

🎨 Creative & Workshops (3 templates)
  - Mind Map (Brainstorming)
  - Workshop Facilitation
  - Strategic Canvas
```

Total: **27 templates** across 5 categories

---

## 🎨 UI/UX Design Proposal

### Option 1: **Tabbed Category View** (Recommended)
```
┌────────────────────────────────────────────────────────────┐
│ 📚 Templates                                      [搜索🔍]  │
├────────────────────────────────────────────────────────────┤
│ [🏢 Business]  [💻 Dev]  [📊 Product]  [🛡️ IT]  [🎨 Creative] │
├────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ─────┐  ┌──────────┐                │
│  │ Template │  │ Template │  │ Template │                │
│  │   Card   │  │   Card   │  │   Card   │                │
│  │          │  │          │  │          │                │
│  └──────────┘  └──────────┘  └──────────┘                │
│                                                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                │
│  │ Template │  │ Template │  │ Template │                │
│  │   Card   │  │   Card   │  │   Card   │                │
│  │          │  │          │  │          │                │
│  └──────────┘  └──────────┘  └──────────┘                │
└────────────────────────────────────────────────────────────┘
```

**Pros:**
- Clean separation of concerns
- Easy to navigate
- Scales well (can add more categories)
- Familiar pattern (like Notion templates)

**Cons:**
- Requires one extra click to switch categories
- Templates not visible across categories simultaneously

---

### Option 2: **Accordion View**
```
┌────────────────────────────────────────────────────────────┐
│ 📚 Templates                                      [搜索🔍]  │
├────────────────────────────────────────────────────────────┤
│ ▼ 🏢 Business & Strategy (7)                               │
│   [Template] [Template] [Template] [Template]              │
│   [Template] [Template] [Template]                         │
│                                                            │
│ ▶ 💻 Software Development (8)                              │
│                                                            │
│ ▶ 📊 Product & Design (5)                                  │
│                                                            │
│ ▶ 🛡️ IT & Security (4)                                     │
│                                                            │
│ ▶ 🎨 Creative & Workshops (3)                              │
└────────────────────────────────────────────────────────────┘
```

**Pros:**
- All categories visible at once
- Quick overview of what's available
- Easy to expand/collapse

**Cons:**
- Can become long when all expanded
- Scroll fatigue if many templates

---

### Option 3: **Grid with Filter Tags** (Most Modern)
```
┌────────────────────────────────────────────────────────────┐
│ 📚 Templates                                      [搜索🔍]  │
├────────────────────────────────────────────────────────────┤
│ Filters: [All] [Business] [Dev] [Product] [IT] [Creative]  │
│          [Beginner] [Advanced] [Popular] [New]            │
├────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│ │Template │ │Template │ │Template │ │Template │          │
│ │  Card   │ │  Card   │ │  Card   │ │  Card   │          │
│ │  🏢 💻  │ │  📊     │ │  🛡️     │ │  🎨     │          │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
│                                                            │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│ │Template │ │Template │ │Template │ │Template │          │
│ │  Card   │ │  Card   │ │  Card   │ │  Card   │          │
│ │  💻     │ │  🏢 📊  │ │  💻 🛡️  │ │  🎨     │          │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
└────────────────────────────────────────────────────────────┘
```

**Pros:**
- Most flexible filtering
- Can combine multiple filters
- Modern UX (like Figma templates)
- Shows all templates at once

**Cons:**
- Can feel overwhelming initially
- Requires more screen space

---

## 🎯 Recommended Approach

**Hybrid: Tabbed + Search + Tags**

```
┌─────────────────────────────────────────────────────────────┐
│ 📚 Templates                            [🔍 Search...]       │
├─────────────────────────────────────────────────────────────┤
│ ┌─────┬─────┬─────┬─────┬─────┐                            │
│ │🏢 All│💻 Dev│📊 Prod│🛡️ IT│🎨 Idea│  More ▼              │
│ └─────┴─────┴─────┴─────┴─────┘                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│ │              │  │              │  │              │      │
│ │  [Preview]   │  │  [Preview]   │  │  [Preview]   │      │
│ │              │  │              │  │              │      │
│ ├──────────────┤  ├──────────────┤  ├──────────────┤      │
│ │ Template Name│  │ Template Name│  │ Template Name│      │
│ │ Description  │  │ Description  │  │ Description  │      │
│ │ [🏷️Tags]     │  │ [🏷️Tags]     │  │ [🏷️Tags]     │      │
│ │ [Use Template│  │ [Use Template│  │ [Use Template│      │
│ └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                             │
│ ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│ │              │  │              │  │              │      │
│ │  [Preview]   │  │  [Preview]   │  │  [Preview]   │      │
│ │              │  │              │  │              │      │
│ ├──────────────┤  ├──────────────┤  ├──────────────┤      │
│ │ Template Name│  │ Template Name│  │ Template Name│      │
│ │ Description  │  │ Description  │  │ Description  │      │
│ │ [🏷️Tags]     │  │ [🏷️Tags]     │  │ [🏷️Tags]     │      │
│ │ [Use Template│  │ [Use Template│  │ [Use Template│      │
│ └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

**Features:**
- Default "All" tab shows popular templates
- Category tabs for quick filtering
- Search bar for instant keyword matching
- Each card shows visual preview
- Tags for multi-category templates
- 3-column grid (responsive 1-2-3 columns)
- Max 6 visible cards, scroll for more

---

## 🎨 Template Card Design

```
┌──────────────────────────────┐
│  ┌────────────────────────┐  │ ← Visual Preview (gradient or icon)
│  │                        │  │
│  │    [Diagram Icon]      │  │
│  │                        │  │
│  └────────────────────────┘  │
│                              │
│  ✨ Template Title           │ ← Bold, 16px
│  Short description of what   │ ← Gray, 14px, max 2 lines
│  this template helps with... │
│                              │
│  🏷️ Dev  API  Backend       │ ← Tags (badges)
│                              │
│  ┌────────────────────────┐  │
│  │   Use Template    →    │  │ ← Primary button
│  └────────────────────────┘  │
└──────────────────────────────┘
```

**Visual Hierarchy:**
1. Preview image (40% of card height)
2. Template name (prominent)
3. Description (supportive)
4. Tags (scannable)
5. CTA button (clear action)

---

## 🚀 Implementation Plan

### Phase 1: Core Infrastructure
- [x] Design template data structure
- [ ] Create template card component
- [ ] Implement category filtering
- [ ] Add search functionality

### Phase 2: Template Content
- [ ] Write 27 template prompts
- [ ] Define FlowBrief configs for each
- [ ] Create preview assets (optional)
- [ ] Add template metadata

### Phase 3: UI Polish
- [ ] Smooth animations
- [ ] Loading states
- [ ] Empty states
- [ ] Responsive layout

### Phase 4: Advanced Features
- [ ] Template favorites
- [ ] Recently used
- [ ] Custom templates (user-created)
- [ ] Template sharing

---

## 📝 Template Data Structure

```typescript
export type TemplateCategory = 
  | "business"
  | "development"
  | "product"
  | "security"
  | "creative";

export type TemplateDifficulty = "beginner" | "intermediate" | "advanced";

export interface DiagramTemplate {
  id: string;
  title: string;
  description: string;
  category: TemplateCategory;
  tags: string[];
  difficulty: TemplateDifficulty;
  isPopular?: boolean;
  isNew?: boolean;
  
  // Visual
  icon?: string; // lucide icon name
  gradient: { from: string; to: string };
  previewImage?: string; // optional screenshot
  
  // Prompt
  prompt: string;
  brief: FlowPilotBriefState;
  
  // Metadata
  estimatedTime?: string; // "5 min", "15 min"
  usageCount?: number;
  lastUsed?: Date;
}
```

---

## 🎯 Next Steps

1. **Get approval on design** ✅ 
2. **Finalize template list** ← YOU ARE HERE
3. **Implement UI components**
4. **Write template prompts**
5. **Test & iterate**

---

*Last Updated: 2025-11-22*  
*Research Source: Google Search (Canva, Lucid, Miro, Microsoft Visio, Draw.io)*
