import type { DiagramTemplate } from "@/types/template";

/**
 * Phase 1: High-impact templates (Must-have)
 * Starting with 6 most useful templates
 */
export const DIAGRAM_TEMPLATES: DiagramTemplate[] = [
  // 1. Employee Onboarding Flow
  {
    id: "employee-onboarding",
    title: "Employee Onboarding Flow",
    description: "新员工入职流程，从Offer到正式开始工作",
    category: "business",
    tags: ["HR", "Onboarding", "Process"],
    difficulty: "beginner",
    isPopular: true,
    icon: "UserPlus",
    gradient: {
      from: "#3b82f6",
      to: "#1d4ed8",
    },
    estimatedTime: "5 min",
    prompt: `Create an employee onboarding flowchart from offer acceptance to first day:
- Pre-onboarding: Background check → Contract signing → IT setup request
- Day 1: Welcome meeting → Office tour → Equipment setup → Access provisioning
- Week 1: Team introductions → Training sessions → Goal setting
- Swimlanes: HR, IT, Manager, New Employee
- Decision points: Background check pass/fail, Equipment ready Y/N
- Use soft blue/green colors, clear timeline indicators
- Keep it clean and professional with proper spacing`,
    brief: {
      intent: "draft",
      tone: "balanced",
      focus: ["flow", "clarity"],
      diagramTypes: ["activity"],
    },
  },

  // 2. API Request/Response Flow
  {
    id: "api-flow",
    title: "API Request/Response Flow",
    description: "API调用的完整生命周期，包含认证、请求、响应",
    category: "development",
    tags: ["API", "Backend", "Integration"],
    difficulty: "intermediate",
    isPopular: true,
    icon: "Workflow",
    gradient: {
      from: "#8b5cf6",
      to: "#6d28d9",
    },
    estimatedTime: "10 min",
    prompt: `Create API request/response sequence diagram:
- Actors: Client, API Gateway, Auth Service, Backend Service, Database
- Flow:
  1. Client → API Gateway: POST /api/users (with JWT token)
  2. API Gateway → Auth Service: Validate token
  3. Auth Service → API Gateway: Token valid (200 OK)
  4. API Gateway → Backend Service: Forward request
  5. Backend Service → Database: Query user data
  6. Database → Backend Service: Return results
  7. Backend Service → API Gateway: Response payload
  8. API Gateway → Client: 200 OK with data
- Add error paths: Invalid token (401), Service timeout (504)
- Include request/response headers, latency indicators
- Use sequence diagram style with lifelines`,
    brief: {
      intent: "draft",
      tone: "enterprise",
      focus: ["flow", "clarity"],
      diagramTypes: ["sequence"],
    },
  },

  // 3. Business Decision Tree
  {
    id: "decision-tree",
    title: "Business Decision Tree",
    description: "商业决策流程，包含多个决策节点和结果评估",
    category: "business",
    tags: ["Strategy", "Decision Making", "Analysis"],
    difficulty: "intermediate",
    isPopular: true,
    icon: "GitBranch",
    gradient: {
      from: "#3b82f6",
      to: "#1d4ed8",
    },
    estimatedTime: "10 min",
    prompt: `Create a business decision tree for "Should we launch product in new market?":
- Root decision: Market size > $10M? (Yes/No)
- Branch 1 (Yes): Competition level? (High/Medium/Low)
  - High: ROI calculation → Go/No-Go
  - Medium: Risk assessment → Go/No-Go  
  - Low: Fast track launch
- Branch 2 (No): Alternative markets analysis
- Include probability percentages, expected outcomes
- Use rectangular decision nodes, diamond shapes for questions
- Color code outcomes: Green (Go), Red (No-Go), Yellow (Review)
- Add clear labels and decision criteria`,
    brief: {
      intent: "draft",
      tone: "enterprise",
      focus: ["hierarchy", "clarity"],
      diagramTypes: ["activity"],
    },
  },

  // 4. Customer Journey Map
  {
    id: "customer-journey",
    title: "Customer Journey Map",
    description: "客户体验旅程，包含阶段、触点、情绪曲线",
    category: "business",
    tags: ["CX", "Journey", "Touchpoints"],
    difficulty: "intermediate",
    icon: "Route",
    gradient: {
      from: "#3b82f6",
      to: "#1d4ed8",
    },
    estimatedTime: "10 min",
    prompt: `Create a customer journey map for SaaS product:
- Stages: Awareness → Consideration → Purchase → Onboarding → Retention
- For each stage:
  - Customer actions (e.g., "Searches for solution", "Reads reviews")
  - Touchpoints (e.g., "Google Ads", "Product website", "Email")
  - Emotions (positive/neutral/negative indicators)
  - Pain points (highlighted in red)
  - Opportunities (highlighted in green)
- Add emotion curve line across all stages
- Use timeline visualization, friendly icons
- Keep it colorful but professional`,
    brief: {
      intent: "draft",
      tone: "playful",
      focus: ["flow", "hierarchy"],
      diagramTypes: ["journey"],
    },
  },

  // 5. Agile Sprint Workflow
  {
    id: "agile-sprint",
    title: "Agile Sprint Workflow",
    description: "Scrum敏捷开发的完整Sprint流程",
    category: "development",
    tags: ["Agile", "Scrum", "Sprint"],
    difficulty: "beginner",
    icon: "Repeat",
    gradient: {
      from: "#8b5cf6",
      to: "#6d28d9",
    },
    estimatedTime: "8 min",
    prompt: `Create an Agile Sprint workflow (2-week cycle):
- Sprint Planning: Backlog refinement → Story selection → Task breakdown → Capacity planning
- Daily activities: Daily standup → Development → Code review → Testing
- Sprint ceremonies timeline:
  - Day 1: Sprint Planning (2-4 hours)
  - Daily: Standups (15 min)
  - Mid-sprint: Backlog grooming
  - Last day: Sprint Review → Sprint Retrospective
- Deliverables: Potentially shippable increment
- Swimlanes: PO, Scrum Master, Dev Team, QA
- Include velocity tracking, burndown chart reference
- Use iterative flow visualization`,
    brief: {
      intent: "draft",
      tone: "balanced",
      focus: ["flow", "hierarchy"],
      diagramTypes: ["activity"],
    },
  },

  // 6. Bug Triage Process
  {
    id: "bug-triage",
    title: "Bug Triage Process",
    description: "Bug处理流程，从报告到修复验证",
    category: "development",
    tags: ["QA", "Bug Tracking", "Process"],
    difficulty: "beginner",
    icon: "Bug",
    gradient: {
      from: "#8b5cf6",
      to: "#6d28d9",
    },
    estimatedTime: "8 min",
    prompt: `Create bug triage workflow:
- Report: User/QA reports bug → Auto-create ticket
- Triage: QA Lead reviews
  - Duplicate? → Close & link to original
  - Valid bug? → Continue
- Severity assessment:
  - Critical (P0): Immediate fix, escalate to on-call
  - High (P1): Assign to current sprint
  - Medium (P2): Add to backlog
  - Low (P3): Add to tech debt list
- Assignment: Auto-assign by component → Engineer picks up
- Development: Fix → Create PR → Code review → Merge
- Verification: Deploy to staging → QA verification → Deploy to prod
- Closure: Verify in prod → Update ticket → Notify reporter
- Swimlanes: Reporter, QA Lead, Engineering, DevOps
- Color code by priority levels`,
    brief: {
      intent: "draft",
      tone: "balanced",
      focus: ["flow", "clarity"],
      diagramTypes: ["activity"],
    },
  },
];

/**
 * Get template by ID
 */
export function getTemplateById(id: string): DiagramTemplate | undefined {
  return DIAGRAM_TEMPLATES.find((template) => template.id === id);
}

/**
 * Get templates by category
 */
export function getTemplatesByCategory(
  category: string
): DiagramTemplate[] {
  if (category === "all") {
    return DIAGRAM_TEMPLATES;
  }
  return DIAGRAM_TEMPLATES.filter(
    (template) => template.category === category
  );
}

/**
 * Get popular templates
 */
export function getPopularTemplates(): DiagramTemplate[] {
  return DIAGRAM_TEMPLATES.filter((template) => template.isPopular);
}

/**
 * Get new templates
 */
export function getNewTemplates(): DiagramTemplate[] {
  return DIAGRAM_TEMPLATES.filter((template) => template.isNew);
}

/**
 * Search templates by query
 */
export function searchTemplates(query: string): DiagramTemplate[] {
  const lowerQuery = query.toLowerCase();
  return DIAGRAM_TEMPLATES.filter(
    (template) =>
      template.title.toLowerCase().includes(lowerQuery) ||
      template.description.toLowerCase().includes(lowerQuery) ||
      template.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}
