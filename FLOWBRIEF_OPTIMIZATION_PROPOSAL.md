# FlowBrief 通用性优化建议

基于业界最佳实践（Flowchart Best Practices, UML Standards, Diagram Design Guidelines）

## 🎯 优化目标
让 FlowBrief 更通用、更符合国际标准、适用于更多场景

---

## 📊 当前问题分析

### 1. FOCUS 选项过于特定
**现状：**
- ✗ "泳道清晰" - 仅适用于跨功能流程图
- ✗ "数据流动" - 仅适用于数据流图
- ✗ "叙事节奏" - 概念模糊

**建议改为更通用的：**
- ✓ **"清晰流向"** (Clear Flow Direction)
- ✓ **"层次分组"** (Hierarchical Grouping) 
- ✓ **"简洁明了"** (Simplicity & Clarity)

---

### 2. GUARDRAIL 不完整

**现状：**
- ✓ "单屏锁定" - 好
- ✓ "保持命名" - 好
- ✓ "高对比标注" - 好
- ✗ **缺少：节点数量限制**
- ✗ **缺少：一致性符号使用**
- ✗ **缺少：标注规范**

**建议新增：**
1. **"限制复杂度"** (Limit Complexity)
   - 最多 15-20 个节点/形状
   - 避免过度分支（每个决策点最多 3-4 个分支）
   
2. **"标准符号"** (Standard Symbols)
   - 使用行业标准符号（矩形=过程，菱形=决策，圆角矩形=开始/结束）
   - 保持符号一致性

3. **"清晰标注"** (Clear Annotations)
   - 所有连线有明确标签
   - 决策点有条件说明
   - 关键节点有简短注释

---

### 3. 缺少流向规则

**业界标准：**
- **首选：左到右** (Left-to-Right) - 符合阅读习惯
- **次选：上到下** (Top-to-Bottom) - 适合垂直流程
- **禁止：随意方向** - 降低可读性

**建议新增 GUARDRAIL：**
- **"统一流向"** (Unified Direction)
  - 主流程从左到右或从上到下
  - 返回线路在图表下方，不交叉主流程

---

### 4. 缺少间距/对齐标准

**建议新增：**
- **"对齐与间距"** (Alignment & Spacing)
  - 相同层级的节点水平/垂直对齐
  - 节点间距一致（推荐 40-60px）
  - 使用网格对齐

---

## 🎨 完整优化方案

### 新的 FOCUS 选项（更通用）

```typescript
export const FOCUS_OPTIONS: Option<BriefFocusId>[] = [
    {
        id: "flow_direction",
        title: "清晰流向",
        description: "统一方向，易于追踪",
        prompt: "Ensure consistent flow direction (left-to-right or top-to-bottom). Main process flows in one primary direction. Return lines run underneath without crossing main flow. Use arrows to clearly indicate direction.",
    },
    {
        id: "grouping",
        title: "层次分组",
        description: "逻辑分区，结构清晰",
        prompt: "Group related elements using containers, swimlanes, or visual clusters. Use consistent spacing between groups. Apply clear visual hierarchy with size, color, or borders. Label each group clearly.",
    },
    {
        id: "simplicity",
        title: "简洁明了",
        description: "最小化，去杂质",
        prompt: "Minimize visual clutter. Limit to 15-20 nodes maximum. Keep labels concise (2-5 words). Remove unnecessary decorations. Use white space effectively. Focus on essential information only.",
    },
    {
        id: "readability",
        title: "可读性优先",
        description: "清晰字体，高对比",
        prompt: "Ensure all text is readable (minimum 12-14px font). Use high contrast for text (4.5:1 minimum). Avoid overlapping elements. Maintain consistent spacing. Use clear, sans-serif fonts.",
    },
];
```

### 新的 GUARDRAIL 选项（补充）

```typescript
export const GUARDRAIL_OPTIONS: GuardrailOption<BriefGuardrailId>[] = [
    // 保留现有的
    {
        id: "singleViewport",
        title: "单屏锁定",
        description: "所有节点保持在 800×600 内",
        prompt: "Ensure all elements fit within 800×600 viewport without scrolling or pagination.",
        badge: "画布",
    },
    {
        id: "respectLabels",
        title: "保持命名",
        description: "不改动现有标签含义",
        prompt: "Preserve existing node names and connection meanings. Add comments for new elements.",
        badge: "内容",
    },
    {
        id: "contrast",
        title: "高对比标注",
        description: "关键步骤突出显示",
        prompt: "Use accent color or labels for key steps. Ensure visibility for presentations and large displays.",
        badge: "强调",
    },
    
    // 新增
    {
        id: "limitComplexity",
        title: "限制复杂度",
        description: "最多 15-20 个节点",
        prompt: "Limit diagram to 15-20 nodes maximum. Each decision point should have no more than 3-4 branches. If more complex, split into multiple diagrams.",
        badge: "复杂度",
    },
    {
        id: "standardSymbols",
        title: "标准符号",
        description: "使用行业标准图形",
        prompt: "Use standard flowchart symbols: Rectangle for processes, Diamond for decisions, Rounded rectangle for start/end, Parallelogram for input/output. Maintain symbol consistency throughout.",
        badge: "符号",
    },
    {
        id: "clearLabels",
        title: "清晰标注",
        description: "所有连线和条件标注",
        prompt: "Label all connections with action or condition. Add brief annotations to complex nodes. Use concise language (2-5 words per label).",
        badge: "标注",
    },
    {
        id: "alignment",
        title: "对齐规整",
        description: "网格对齐，间距一致",
        prompt: "Align nodes to grid (8px or 16px). Maintain consistent spacing between elements (40-60px). Align nodes of same hierarchy horizontally or vertically.",
        badge: "对齐",
    },
];
```

---

## 📈 预期效果

### 优化前
- ❌ 选项过于特定（泳道、数据流）
- ❌ 缺少复杂度管理
- ❌ 没有流向标准
- ❌ 缺少标注规范

### 优化后
- ✅ 选项通用化（流向、分组、简洁）
- ✅ 有明确的复杂度限制（15-20 节点）
- ✅ 标准化的流向规则（左到右/上到下）
- ✅ 完整的标注和对齐规范

---

## 🌍 国际标准对齐

符合以下业界标准：
- ✓ ISO 5807 - Information processing flowcharts
- ✓ BPMN 2.0 - Business Process Model and Notation
- ✓ UML 2.5 - Unified Modeling Language
- ✓ Flowchart Best Practices (SmartDraw, Lucidchart)

---

## 🎯 适用场景扩展

优化后可支持：
1. ✅ 软件工程流程图
2. ✅ 业务流程图 (BPMN)
3. ✅ 系统架构图
4. ✅ 用户旅程图
5. ✅ 算法流程图
6. ✅ 故障排查流程
7. ✅ 决策树
8. ✅ 数据流图

**之前：** 主要适用于软件开发和技术文档  
**之后：** 适用于各行各业的流程可视化需求
