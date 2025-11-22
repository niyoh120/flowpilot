# Template Gallery UI Design 🎨

## 视觉设计方案

为27个模板打造优雅的展示界面

---

## 🎯 Design Goals

1. **美观** - 视觉吸引力强，专业感十足
2. **易用** - 快速找到需要的模板
3. **可扩展** - 未来可轻松添加更多模板
4. **性能** - 流畅的加载和交互体验

---

## 🎨 Visual Design System

### Color Palette (按类别)

```css
/* Business & Strategy */
--business-from: #3b82f6;  /* Blue 500 */
--business-to: #1d4ed8;    /* Blue 700 */

/* Software Development */
--dev-from: #8b5cf6;       /* Purple 500 */
--dev-to: #6d28d9;         /* Purple 700 */

/* Product & Design */
--product-from: #ec4899;   /* Pink 500 */
--product-to: #be185d;     /* Pink 700 */

/* IT & Security */
--security-from: #10b981;  /* Green 500 */
--security-to: #059669;    /* Green 700 */

/* Creative & Workshops */
--creative-from: #f59e0b;  /* Amber 500 */
--creative-to: #d97706;    /* Amber 700 */
```

### Typography
```css
--font-heading: 'Inter', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

### Spacing
```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
```

---

## 📐 Layout Design

### Main Gallery View
```
┌──────────────────────────────────────────────────────────────────────┐
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │  🎨 Template Gallery                    [🔍 Search templates...]│  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                       │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │  [All 27] [🏢 Business 7] [💻 Dev 8] [📊 Product 5]              │  │
│  │  [🛡️ Security 4] [🎨 Creative 3]                                 │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                       │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │  Sort: [⭐ Popular] [🆕 Newest] [⏱️ Quickest] [🔤 A-Z]          │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │  ╔══════╗│  │  ╔══════╗│  │  ╔══════╗│  │  ╔══════╗│            │
│  │  ║ Icon ║│  │  ║ Icon ║│  │  ║ Icon ║│  │  ║ Icon ║│            │
│  │  ║ Area ║│  │  ║ Area ║│  │  ║ Area ║│  │  ║ Area ║│            │
│  │  ╚══════╝│  │  ╚══════╝│  │  ╚══════╝│  │  ╚══════╝│            │
│  │          │  │          │  │          │  │          │            │
│  │ Template │  │ Template │  │ Template │  │ Template │            │
│  │  Title   │  │  Title   │  │  Title   │  │  Title   │            │
│  │          │  │          │  │          │  │          │            │
│  │ Brief... │  │ Brief... │  │ Brief... │  │ Brief... │            │
│  │          │  │          │  │          │  │          │            │
│  │ [⏱️ 5min]│  │ [⏱️ 8min]│  │ [⏱️10min]│  │ [⏱️12min]│            │
│  │ [Tags]   │  │ [Tags]   │  │ [Tags]   │  │ [Tags]   │            │
│  │          │  │          │  │          │  │          │            │
│  │ [Use It] │  │ [Use It] │  │ [Use It] │  │ [Use It] │            │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘            │
│                                                                       │
│  ... (more cards in grid, infinite scroll)                           │
└──────────────────────────────────────────────────────────────────────┘
```

### Responsive Grid
- **Desktop (>1280px)**: 4 columns
- **Tablet (768-1280px)**: 3 columns
- **Mobile (<768px)**: 1 column (full width cards)

---

## 🎴 Template Card Design

### Card Anatomy
```
┌─────────────────────────────────┐
│  ╔═══════════════════════════╗  │ ← Gradient background (120px high)
│  ║                           ║  │
│  ║      [Category Icon]      ║  │   Icon centered, 48x48px
│  ║                           ║  │   White color, 20% opacity
│  ║                           ║  │
│  ╚═══════════════════════════╝  │
│                        │
│  ✨ Template Title              │ ← 16px, font-semibold, line-clamp-1
│                                 │
│  Brief description of what this │ ← 14px, text-muted, line-clamp-2
│  template helps you create...   │   Max 80 characters
│                                 │
│  ┌─────────────────────────┐   │ ← Metadata row
│  │ ⏱️ 5 min │ 💡 Beginner   │   │   12px, flex space-between
│  └─────────────────────────┘   │
│                                 │
│  [🏷️ Tag1] [🏷️ Tag2] [🏷️ Tag3]│ ← Tag badges (max 3)
│                                 │   12px, rounded-full
│                                 │
│  ┌───────────────────────────┐ │
│  │    Use Template    →      │ │ ← Primary CTA button
│  └───────────────────────────┘ │   Full width, hover effect
│                                 │
└─────────────────────────────────┘
    Card: 280px wide
    Border-radius: 12px
    Shadow: soft (hover: elevated)
    Padding: 16px
```

### Card States

**Default:**
```css
.template-card {
  border: 1px solid rgb(226, 232, 240);
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}
```

**Hover:**
```css
.template-card:hover {
  border-color: rgb(148, 163, 184);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}
```

**Popular (badge):**
```
┌─────────────────────────────────┐
│ [⭐ Popular]                     │ ← Top-right corner badge
│  ╔═══════════════════════════╗  │   Position: absolute
│  ║      [Icon]               ║  │   Background: amber
│  ╚═══════════════════════════╝  │
│  ...
```

**New (badge):**
```
┌─────────────────────────────────┐
│ [🆕 New]                         │ ← Top-right corner badge
│  ╔═══════════════════════════╗  │   Background: green
│  ║      [Icon]               ║  │
│  ╚═══════════════════════════╝  │
│  ...
```

---

## 🎯 Category Tab Design

### Active State
```
┌──────────────┐
│ 💻 Dev (8) ✓ │ ← Background: category color (light)
└──────────────┘   Border-bottom: 2px solid category color
                   Font-weight: 600
```

### Inactive State
```
┌──────────────┐
│ 🏢 Business 7│ ← Background: transparent
└──────────────┘   Text-color: muted
                   Hover: light background
```

### Tab Bar Layout
```
┌──────────────────────────────────────────────────────────────────┐
│ ┌──────────┐┌──────────┐┌──────────┐┌──────────┐┌──────────┐   │
│ │ All (27) ││🏢 Bus (7)││💻 Dev (8)││📊 Prod(5)││🛡️ IT (4) │   │
│ └──────────┘└──────────┘└──────────┘└──────────┘└──────────┘   │
│ ┌──────────┐                                                    │
│ │🎨 Idea(3)│                                                    │
│ └──────────┘                                                    │
└──────────────────────────────────────────────────────────────────┘

Horizontal scroll on mobile
Sticky header on scroll
```

---

## 🔍 Search & Filter Design

### Search Bar
```
┌────────────────────────────────────────────────────┐
│  🔍  Search templates...                        [x]│
└────────────────────────────────────────────────────┘
     ↓ (when typing)
┌────────────────────────────────────────────────────┐
│  🔍  api                                        [x]│
├────────────────────────────────────────────────────┤
│  💡 Suggestions:                                   │
│  → API Request/Response Flow  [💻 Dev]             │
│  → Microservices Communication [💻 Dev]            │
│  → API Gateway Architecture [🛡️ Security]          │
└────────────────────────────────────────────────────┘

Features:
- Instant search (debounced 300ms)
- Highlight matching keywords
- Search by title, description, tags
- Show category badges in results
```

### Sort Options
```
┌──────────────────────────────────────────┐
│ Sort by: [⭐ Popular ▼]                   │
├──────────────────────────────────────────┤
│ ⭐ Most Popular                           │
│ 🆕 Newest First                           │
│ ⏱️ Quickest (by estimated time)          │
│ 🔤 Alphabetical (A-Z)                    │
│ 📊 Most Used (your history)              │
└──────────────────────────────────────────┘

Dropdown with icons
Smooth transition on change
Remember user preference
```

---

## 🎭 Empty States

### No Results
```
┌────────────────────────────────────────────────────┐
│                                                    │
│              🔍                                    │
│                                                    │
│       No templates found for "xyz"                 │
│                                                    │
│       Try searching for:                           │
│       • "workflow" • "diagram" • "process"         │
│                                                    │
│       Or browse all templates above ↑              │
│                                                    │
└────────────────────────────────────────────────────┘
```

### Loading State
```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  ▁▁▁▁▁▁▁▁▁  │  │  ▁▁▁▁▁▁▁▁▁  │  │  ▁▁▁▁▁▁▁▁▁  │
│  ▁▁▁▁▁▁▁▁▁  │  │  ▁▁▁▁▁▁▁▁▁  │  │  ▁▁▁▁▁▁▁▁▁  │
│  ▁▁▁▁  ▁▁▁  │  │  ▁▁▁▁  ▁▁▁  │  │  ▁▁▁▁  ▁▁▁  │
│  ▁▁▁▁▁▁▁▁▁  │  │  ▁▁▁▁▁▁▁▁▁  │  │  ▁▁▁▁▁▁▁▁▁  │
└─────────────┘  └─────────────┘  └─────────────┘

Skeleton screens with shimmer animation
3-6 cards shown during load
```

---

## 🎬 Animations & Interactions

### Card Entrance
```css
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

.template-card {
  animation: fadeInUp 0.3s ease;
  animation-delay: calc(var(--index) * 0.05s);
}
```

### Hover Effects
```css
/* Button hover */
.use-template-btn:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(var(--category-color), 0.3);
}

/* Tag hover */
.tag-badge:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### Category Switch
```css
/* Fade out old, fade in new */
@keyframes fadeSwitch {
  0% { opacity: 1; }
  50% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
}

.template-grid {
  animation: fadeSwitch 0.4s ease;
}
```

---

## 📱 Mobile Optimizations

### Card on Mobile
```
┌───────────────────────────────────────────┐
│  ╔═══════════════════════════════════════╗│ ← Full width
│  ║           [Icon 64x64]                ║│   Height: 140px
│  ╚═══════════════════════════════════════╝│
│                                           │
│  ✨ Template Title (18px)                 │
│                                           │
│  Description with more lines allowed      │
│  on mobile for better readability...      │
│                                           │
│  ⏱️ 5 min  •  💡 Beginner                 │
│                                           │
│  [Tag1] [Tag2] [Tag3]                     │
│                                           │
│  ┌─────────────────────────────────────┐ │
│  │      Use Template    →              │ │
│  └─────────────────────────────────────┘ │
└───────────────────────────────────────────┘
    Padding: 20px
    Larger touch targets
```

### Category Tabs (Mobile)
```
← →  [Swipe indicator]
┌──────┬──────┬──────┬──────┬──────┐
│ All  │🏢 Bus│💻 Dev│📊Prod│ ... →│
└──────┴──────┴──────┴──────┴──────┘

Horizontal scroll
Snap to tabs
Show overflow indicator
```

---

## 🎨 Icon System

### Category Icons (Lucide)
```javascript
const categoryIcons = {
  business: Briefcase,      // 🏢
  development: Code2,       // 💻
  product: BarChart3,       // 📊
  security: Shield,         // 🛡️
  creative: Sparkles,       // 🎨
};
```

### Template Icons (per template)
```javascript
// Example mappings
const templateIcons = {
  'employee-onboarding': UserPlus,
  'api-flow': Workflow,
  'decision-tree': GitBranch,
  'org-chart': Sitemap,
  'customer-journey': Route,
  'swot': Target,
  // ... 21 more
};
```

---

## 🚀 Performance Optimizations

### Lazy Loading
```javascript
// Load 12 cards initially
// Infinite scroll: Load 12 more when user reaches 80% scroll

const INITIAL_LOAD = 12;
const LOAD_MORE_THRESHOLD = 0.8;
const ITEMS_PER_PAGE = 12;
```

### Image Optimization
```javascript
// Use gradient backgrounds instead of images for cards
// Faster load, smaller bundle size
// Optional: Add preview screenshots later with lazy loading
```

### Search Debounce
```javascript
const SEARCH_DEBOUNCE_MS = 300;
// Only trigger search after user stops typing for 300ms
```

---

## 🎯 Accessibility

### ARIA Labels
```html
<button
  aria-label="Use Employee Onboarding Flow template"
  role="button"
>
  Use Template →
</button>

<div
  role="region"
  aria-label="Template gallery"
  aria-live="polite"
>
  <!-- Cards -->
</div>
```

### Keyboard Navigation
- `Tab`: Navigate through cards
- `Enter/Space`: Activate "Use Template" button
- `Arrow keys`: Navigate between category tabs
- `/`: Focus search bar

### Focus Indicators
```css
.template-card:focus-visible {
  outline: 3px solid var(--category-color);
  outline-offset: 2px;
}
```

---

## 📊 Metrics to Track

1. **Template Usage**
   - Which templates are most popular?
   - Time to create diagram per template
   
2. **User Behavior**
   - Search terms used
   - Categories clicked most
   - Templates browsed vs. used
   
3. **Performance**
   - Time to first render
   - Infinite scroll trigger count
   - Search response time

---

## 🎯 Next Steps

1. ✅ Design approved
2. [ ] Create React components
3. [ ] Implement filtering logic
4. [ ] Add search functionality
5. [ ] Test on different devices
6. [ ] Gather user feedback
7. [ ] Iterate based on usage data

---

*Design inspired by: Figma Community, Canva Templates, Notion Template Gallery, Miro Marketplace*
