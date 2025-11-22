# FlowPilot Template Catalog 📚

## 完整模板列表 (27个)

基于 Google 搜索研究，精选最常用、最通用的图表场景。

---

## 🏢 Business & Strategy (7 templates)

### 1. Employee Onboarding Flow
**描述**: 新员工入职流程，从offer到正式开始工作  
**难度**: Beginner  
**标签**: HR, Onboarding, Process  
**预计时间**: 5分钟  
**Brief配置**:
- Intent: draft
- Tone: balanced
- Focus: flow, clarity
- DiagramType: activity

**Prompt**:
```
Create an employee onboarding flowchart from offer acceptance to first day:
- Pre-onboarding: Background check → Contract signing → IT setup request
- Day 1: Welcome meeting → Office tour → Equipment setup → Access provisioning
- Week 1: Team introductions → Training sessions → Goal setting
- Swimlanes: HR, IT, Manager, New Employee
- Decision points: Background check pass/fail, Equipment ready Y/N
- Use soft blue/green colors, clear timeline indicators
```

---

### 2. Business Decision Tree
**描述**: 商业决策流程，包含多个决策节点和结果评估  
**难度**: Intermediate  
**标签**: Strategy, Decision Making, Analysis  
**预计时间**: 10分钟  
**Brief配置**:
- Intent: draft
- Tone: enterprise
- Focus: hierarchy, clarity
- DiagramType: activity

**Prompt**:
```
Create a business decision tree for "Should we launch product in new market?":
- Root decision: Market size > $10M? (Yes/No)
- Branch 1 (Yes): Competition level? (High/Medium/Low)
  - High: ROI calculation → Go/No-Go
  - Medium: Risk assessment → Go/No-Go  
  - Low: Fast track launch
- Branch 2 (No): Alternative markets analysis
- Include probability percentages, expected outcomes
- Use rectangular decision nodes, diamond shapes for questions
- Color code outcomes: Green (Go), Red (No-Go), Yellow (Review)
```

---

### 3. Approval Workflow
**描述**: 多层级审批流程，适用于采购、请假、报销等场景  
**难度**: Beginner  
**标签**: Workflow, Approval, Process  
**预计时间**: 5分钟  
**Brief配置**:
- Intent: draft
- Tone: balanced
- Focus: flow, clarity
- DiagramType: activity

**Prompt**:
```
Create a multi-level approval workflow for purchase requests:
- Start: Employee submits request
- Decision 1: Amount < $1,000? 
  - Yes: Direct manager approval → End
  - No: Continue to Decision 2
- Decision 2: Amount < $10,000?
  - Yes: Department head approval → Finance review → End
  - No: VP approval → CFO approval → CEO approval → End
- Each approval can reject (returns to employee) or approve (continues)
- Swimlanes: Employee, Manager, Department Head, Finance, Executives
- Add parallel paths for urgent requests
```

---

### 4. Organizational Chart
**描述**: 公司组织架构图，展示层级关系和汇报线  
**难度**: Beginner  
**标签**: Org Chart, Structure, Hierarchy  
**预计时间**: 5分钟  
**Brief配置**:
- Intent: draft
- Tone: enterprise
- Focus: hierarchy, clarity
- DiagramType: component

**Prompt**:
```
Create a clean onal chart for a tech startup:
- CEO at top
- C-Level: CTO, CPO, CFO, CMO (report to CEO)
- Engineering (under CTO): Frontend Team, Backend Team, DevOps Team
- Product (under CPO): Product Managers, Designers, Researchers
- Finance (under CFO): Accounting, FP&A
- Marketing (under CMO): Growth, Content, Brand
- Use hierarchical tree layout, consistent spacing
- Color code by department, show headcount in each team
```

---

### 5. Customer Journey Map
**描述**: 客户体验旅程，包含阶段、触点、情绪曲线  
**难度**: Intermediate  
**标签**: CX, Journey, Touchpoints  
**预计时间**: 10分钟  
**Brief配置**:
- Intent: draft
- Tone: playful
- Focus: flow, hierarchy
- DiagramType: journey

**Prompt**:
```
Create a customer journey map for SaaS product:
- Stages: Awareness → Consideration → Purchase → Onboarding → Retention
- For each stage:
  - Customer actions (e.g., "Searches for solution", "Reads reviews")
  - Touchpoints (e.g., "Google Ads", "Product website", "Email")
  - Emotions (positive/neutral/negative indicators)
  - Pain points (highlighted in red)
  - Opportunities (highlighted in green)
- Add emotion curve line across all stages
- Use timeline visualization, friendly icons
```

---

### 6. SWOT to Action Plan
**描述**: SWOT分析转化为可执行的行动计划  
**难度**: Intermediate  
**标签**: Strategy, Planning, Analysis  
**预计时间**: 10分钟  
**Brief配置**:
- Intent: draft
- Tone: enterprise
- Focus: hierarchy, clarity
- DiagramType: mindmap

**Prompt**:
```
Create a SWOT analysis with action plan conversion:
- Four quadrants: Strengths, Weaknesses, Opportunities, Threats
- Each quadrant has 3-4 items
- Center: Strategic objectives
- Connections from SWOT to actions:
  - Strengths + Opportunities → Growth strategies
  - Strengths + Threats → Defensive strategies
  - Weaknesses + Opportunities → Improvement areas
  - Weaknesses + Threats → Contingency plans
- Use color coding, clear labels for each action
```

---

### 7. Meeting Decision Flow
**描述**: 会议决策流程，从议题讨论到行动项分配  
**难度**: Beginner  
**标签**: Meeting, Decision, Action Items  
**预计时间**: 5分钟  
**Brief配置**:
- Intent: draft
- Tone: balanced
- Focus: flow, clarity
- DiagramType: activity

**Prompt**:
```
Create a meeting decision flow:
- Agenda review → Discussion → Decision point
- Decision outcomes:
  - Approved: Create action items → Assign owners → Set deadlines
  - Needs more info: Schedule follow-up → Assign research tasks
  - Rejected: Document reasons → Archive
- Parallel track: Meeting notes → Share with stakeholders
- Post-meeting: Track action items → Send reminder before deadline
- Use swimlanes for roles: Facilitator, Participants, Action owners
```

---

## 💻 Software Development (8 templates)

### 8. API Request/Response Flow
**描述**: API调用的完整生命周期，包含认证、请求、响应  
**难度**: Intermediate  
**标签**: API, Backend, Integration  
**预计时间**: 10分钟  
**Brief配置**:
- Intent: draft
- Tone: enterprise
- Focus: flow, clarity
- DiagramType: sequence

**Prompt**:
```
Create API request/response sequence diagram:
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
```

---

### 9. Agile Sprint Workflow
**描述**: Scrum敏捷开发的完整Sprint流程  
**难度**: Beginner  
**标签**: Agile, Scrum, Sprint  
**预计时间**: 8分钟  
**Brief配置**:
- Intent: draft
- Tone: balanced
- Focus: flow, hierarchy
- DiagramType: activity

**Prompt**:
```
Create an Agile Sprint workflow (2-week cycle):
- Sprint Planning: Backlog refinement → Story selection → Task breakdown → Capacity planning
- Daily activities: Daily standup → Development → Code review → Testing
- Sprint ceremonies timeline:
  - Day 1: Sprint Planning
  - Daily: Standups (15 min)
  - Mid-sprint: Backlog grooming
  - Last day: Sprint Review → Sprint Retrospective
- Deliverables: Potentially shippable increment
- Swimlanes: PO, Scrum Master, Dev Team, QA
- Include velocity tracking, burndown chart reference
```

---

### 10. Git Branching Strategy
**描述**: Git工作流，包含feature、develop、release、hotfix分支  
**难度**: Intermediate  
**标签**: Git, Version Control, DevOps  
**预计时间**: 10分钟  
**Brief配置**:
- Intent: draft
- Tone: enterprise
- Focus: flow, hierarchy
- DiagramType: activity

**Prompt**:
```
Create a Git branching strategy diagram (Gitflow):
- Main branches: main (production), develop (integration)
- Supporting branches:
  - Feature branches: Branch from develop → Merge back to develop
  - Release branches: Branch from develop → Merge to main + develop
  - Hotfix branches: Branch from main → Merge to main + develop
- Typical flow:
  1. Create feature/new-feature from develop
  2. Develop → Commit → Push
  3. Pull request → Code review → Merge to develop
  4. Create release/v1.2.0 from develop
  5. Test → Bug fixes → Merge to main
  6. Tag v1.2.0 → Deploy
- Use different colors for branch types, show merge directions
```

---

### 11. CI/CD Pipeline
**描述**: 持续集成/持续部署流水线，从代码提交到生产发布  
**难度**: Advanced  
**标签**: CI/CD, DevOps, Automation  
**预计时间**: 15分钟  
**Brief配置**:
- Intent: draft
- Tone: enterprise
- Focus: flow, clarity
- DiagramType: activity

**Prompt**:
```
Create a comprehensive CI/CD pipeline:
- Trigger: Git push to main branch
- CI Stage:
  - Checkout code
  - Install dependencies
  - Run linting
  - Run unit tests (parallel)
  - Run integration tests (parallel)
  - Build artifacts
  - Security scanning (SAST/DAST)
- CD Stage:
  - Deploy to staging environment
  - Run smoke tests
  - Manual approval gate
  - Deploy to production (blue-green deployment)
  - Health check
  - Rollback capability
- Include success/failure paths, notification steps
- Show parallel execution where possible
- Add icons for each tool (Jenkins, Docker, K8s, etc.)
```

---

### 12. Feature Release Process
**描述**: 新功能发布的完整流程，从开发到上线  
**难度**: Intermediate  
**标签**: Release, Feature, Deployment  
**预计时间**: 10分钟  
**Brief配置**:
- Intent: draft
- Tone: balanced
- Focus: flow, clarity
- DiagramType: activity

**Prompt**:
```
Create feature release process:
- Development phase:
  - Feature planning → Design review → Development → Code review
- Testing phase:
  - Unit tests → Integration tests → QA testing
  - Decision: Pass/Fail (if fail, return to development)
- Pre-release:
  - Feature flag configuration
  - Deploy to staging → Stakeholder demo → Feedback
- Release:
  - Gradual rollout: 5% → 25% → 50% → 100%
  - Monitor metrics at each stage
  - Decision points: Continue/Pause/Rollback
- Post-release:
  - User feedback collection → Analytics review → Iteration planning
- Swimlanes: PM, Engineering, QA, DevOps, Support
```

---

### 13. Microservices Communication
**描述**: 微服务架构的服务间通信模式  
**难度**: Advanced  
**标签**: Microservices, Architecture, Communication  
**预计时间**: 15分钟  
**Brief配置**:
- Intent: draft
- Tone: enterprise
- Focus: flow, hierarchy
- DiagramType: component

**Prompt**:
```
Create microservices communication diagram:
- Services: API Gateway, User Service, Order Service, Payment Service, Notification Service, Inventory Service
- Communication patterns:
  - Synchronous: REST API calls (solid lines)
  - Asynchronous: Message queue (dashed lines)
  - Event-driven: Event bus (dotted lines)
- Example flows:
  1. Client → API Gateway → Order Service
  2. Order Service → Payment Service (sync REST)
  3. Order Service → Inventory Service (sync REST)
  4. Order Service → Message Queue → Notification Service (async)
  5. Payment Service → Event Bus → Analytics Service (event)
- Show protocols (HTTP, gRPC, RabbitMQ, Kafka)
- Include service registry, load balancer, circuit breaker patterns
- Color code by communication type
```

---

### 14. Database Schema Design
**描述**: 数据库关系模型，包含表、字段、关系  
**难度**: Intermediate  
**标签**: Database, ERD, Schema  
**预计时间**: 10分钟  
**Brief配置**:
- Intent: draft
- Tone: enterprise
- Focus: hierarchy, clarity
- DiagramType: component

**Prompt**:
```
Create an e-commerce database schema (ERD):
- Tables:
  - Users: id (PK), email, password_hash, created_at
  - Products: id (PK), name, description, price, inventory
  - Orders: id (PK), user_id (FK), status, total_amount, created_at
  - OrderItems: id (PK), order_id (FK), product_id (FK), quantity, price
  - Categories: id (PK), name, parent_id (FK - self-referencing)
  - Reviews: id (PK), product_id (FK), user_id (FK), rating, comment
- Relationships:
  - Users 1:N Orders
  - Orders 1:N OrderItems
  - Products 1:N OrderItems
  - Products 1:N Reviews
  - Users 1:N Reviews
  - Categories 1:N Products (many-to-many via junction table)
- Show PK/FK, data types, indexes, constraints
```

---

### 15. Bug Triage Process
**描述**: Bug处理流程，从报告到修复验证  
**难度**: Beginner  
**标签**: QA, Bug Tracking, Process  
**预计时间**: 8分钟  
**Brief配置**:
- Intent: draft
- Tone: balanced
- Focus: flow, clarity
- DiagramType: activity

**Prompt**:
```
Create bug triage workflow:
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
```

---

## 📊 Product & Design (5 templates)

### 16. Product Development Lifecycle
**描述**: 产品从概念到发布的完整生命周期  
**难度**: Intermediate  
**标签**: Product, Lifecycle, Development  
**预计时间**: 12分钟  
**Brief配置**:
- Intent: draft
- Tone: balanced
- Focus: flow, hierarchy
- DiagramType: activity

**Prompt**:
```
Create product development lifecycle:
- Discovery phase:
  - Market research → User interviews → Competitor analysis
  - Problem validation: Is this a real problem? (Yes/No)
- Definition phase:
  - User personas → User stories → Feature prioritization
  - PRD creation → Design specs → Tech specs
- Design phase:
  - Wireframes → Mockups → Prototype → Usability testing
  - Design approval gate
- Development phase:
  - Sprint planning → Agile development → QA testing
- Launch phase:
  - Beta testing → Feedback collection → Production release
  - Marketing campaign → User onboarding
- Growth phase:
  - Analytics monitoring → A/B testing → Feature iteration
- Include feedback loops from each phase back to discovery
```

---

### 17. User Story Mapping
**描述**: 用户故事地图，按用户旅程组织功能需求  
**难度**: Intermediate  
**标签**: Agile, User Stories, Planning  
**预计时间**: 10分钟  
**Brief配置**:
- Intent: draft
- Tone: playful
- Focus: hierarchy, flow
- DiagramType: mindmap

**Prompt**:
```
Create user story map for online shopping app:
- User activities (top level, left to right):
  - Browse products → Search → View details → Add to cart → Checkout → Track order
- User tasks (below each activity):
  - Browse: Filter by category, Sort by price, View recommendations
  - Search: Keyword search, Voice search, Barcode scan
  - View details: Read description, Check reviews, See related items
  - Add to cart: Select quantity, Choose variants, Save for later
  - Checkout: Enter shipping, Select payment, Apply coupon
  - Track: View status, Contact support, Request return
- Priority levels (vertical):
  - MVP (top row, must-have)
  - Release 2 (middle row)
  - Future (bottom row, nice-to-have)
- Use sticky note style, color code by priority
```

---

### 18. A/B Test Planning
**描述**: A/B测试设计，包含假设、变量、成功指标  
**难度**: Intermediate  
**标签**: Testing, Experimentation, Analytics  
**预计时间**: 10分钟  
**Brief配置**:
- Intent: draft
- Tone: balanced
- Focus: clarity, hierarchy
- DiagramType: activity

**Prompt**:
```
Create A/B test planning flow:
- Hypothesis: "Changing CTA button color from blue to green will increase conversion by 15%"
- Test setup:
  - Control group (50%): Blue button
  - Treatment group (50%): Green button
  - Sample size calculation: Need 10,000 users per variant
  - Duration: Run for 2 weeks
- Metrics:
  - Primary: Conversion rate (%)
  - Secondary: Click-through rate, Time on page, Bounce rate
- Implementation:
  - Feature flag setup → Traffic splitting → Event tracking
- Monitoring:
  - Daily checks → Statistical significance test → Early stopping rules
- Analysis:
  - Calculate lift → Confidence interval → P-value
  - Decision: Ship winner / Continue testing / Iterate
- Rollout: Gradual deployment of winner
- Include decision tree for edge cases (e.g., no clear winner, negative results)
```

---

### 19. Design System Workflow
**描述**: 设计系统的创建、维护和使用流程  
**难度**: Advanced  
**标签**: Design System, UX, Collaboration  
**预计时间**: 12分钟  
**Brief配置**:
- Intent: draft
- Tone: enterprise
- Focus: hierarchy, flow
- DiagramType: component

**Prompt**:
```
Create design system workflow:
- Foundation layer:
  - Design tokens: Colors, Typography, Spacing, Shadows
  - Guidelines: Accessibility, Tone of voice, Principles
- Component layer:
  - Atoms: Button, Input, Icon, Badge
  - Molecules: Form field, Card header, Search bar
  - Organisms: Navigation, Form, Data table
- Documentation:
  - Storybook → Component specs → Usage guidelines → Code examples
- Contribution process:
  - Designer proposes new component → Design review → Prototype
  - Engineer builds → Code review → Tests → Publish to npm
  - Update Figma library → Update Storybook → Announce to team
- Consumption workflow:
  - Product team requests component → Check library first
  - Found: Use existing → Customize via props
  - Not found: Submit request OR build custom (with review)
- Swimlanes: Design team, Engineering, Product teams
- Show feedback loops for improvements
```

---

### 20. Analytics Dashboard Flow
**描述**: 数据分析仪表板的数据流和交互逻辑  
**难度**: Intermediate  
**标签**: Analytics, Dashboard, Data  
**预计时间**: 10分钟  
**Brief配置**:
- Intent: draft
- Tone: enterprise
- Focus: flow, hierarchy
- DiagramType: component

**Prompt**:
```
Create analytics dashboard data flow:
- Data sources:
  - Application DB → ETL pipeline → Data warehouse
  - Event tracking → Real-time stream → Analytics DB
  - External APIs → Cache layer → Aggregation service
- Processing layer:
  - Scheduled jobs: Daily/weekly/monthly aggregations
  - Real-time processing: User sessions, Live metrics
- Dashboard components:
  - KPI cards: Users, Revenue, Conversion rate, Churn
  - Charts: Time series (line), Distribution (bar), Cohorts (heatmap)
  - Filters: Date range, Segment, Region, Platform
- Interaction flow:
  - User selects filter → Query builder → Cache check
  - Cache hit: Return cached data (fast path)
  - Cache miss: Query DB → Transform data → Update cache → Return
- Include latency SLAs, refresh strategies, drill-down paths
```

---

## 🛡️ IT & Security (4 templates)

### 21. Incident Response Runbook
**描述**: 安全事件响应流程，从检测到恢复  
**难度**: Advanced  
**标签**: Security, Incident, SRE  
**预计时间**: 15分钟  
**Brief配置**:
- Intent: draft
- Tone: enterprise
- Focus: flow, clarity
- DiagramType: activity

**Prompt**:
```
Create incident response runbook:
- Detection phase:
  - Monitoring alert triggers OR User report
  - On-call engineer receives page
  - Initial assessment: Severity level (P0/P1/P2/P3)
- Triage phase:
  - P0 (Critical): Assemble war room, notify executives
  - P1 (High): Assign incident commander, create incident channel
  - P2/P3: Standard on-call handling
- Investigation:
  - Collect logs → Identify root cause → Assess impact scope
  - Parallel: Customer communication, Status page update
- Containment:
  - Isolate affected systems → Implement temporary fix
  - Decision: Can we patch in place OR Need rollback?
- Resolution:
  - Deploy fix → Verify in staging → Rollout to production
  - Monitor key metrics → Confirm resolution
- Post-mortem:
  - Write incident report → Blameless review → Action items
  - Update runbook → Share learnings
- Swimlanes: On-call, Incident Commander, Engineering, Communications, Leadership
- Include escalation paths, communication templates
```

---

### 22. Network Architecture
**描述**: 企业网络拓扑，包含DMZ、防火墙、VPC等  
**难度**: Advanced  
**标签**: Network, Infrastructure, Security  
**预计时间**: 15分钟  
**Brief配置**:
- Intent: draft
- Tone: enterprise
- Focus: hierarchy, clarity
- DiagramType: deployment

**Prompt**:
```
Create enterprise network architecture:
- External zone (Internet):
  - Users → CDN → WAF → Load Balancer
- DMZ (Demilitarized Zone):
  - Public-facing web servers
  - Reverse proxy / API Gateway
  - Firewall rules: Only ports 80/443 open
- Internal zone (Private VPC):
  - Application servers (private subnet)
  - Database cluster (isolated subnet)
  - Internal services (message queue, cache)
- Management zone:
  - Bastion host (jump server)
  - Monitoring & logging servers
  - Admin workstations
- Security layers:
  - Firewall between each zone
  - VPN for remote access
  - IDS/IPS sensors
  - Network segmentation with VLANs
- Show IP ranges, security groups, traffic flow arrows
- Include backup/DR site connection
```

---

### 23. Security Audit Flow
**描述**: 安全审计流程，从范围定义到报告发布  
**难度**: Intermediate  
**标签**: Security, Audit, Compliance  
**预计时间**: 10分钟  
**Brief配置**:
- Intent: draft
- Tone: enterprise
- Focus: flow, clarity
- DiagramType: activity

**Prompt**:
```
Create security audit workflow:
- Planning phase:
  - Define audit scope → Select frameworks (SOC2, ISO27001, etc.)
  - Create audit checklist → Schedule interviews
- Data collection:
  - Document review: Policies, procedures, architecture diagrams
  - Technical scans: Vulnerability scan, Penetration test, Code review
  - Interviews: IT team, Security team, Management
- Assessment:
  - Control evaluation: Effective / Needs improvement / Ineffective
  - Risk rating: Critical / High / Medium / Low
  - Evidence gathering: Screenshots, logs, configurations
- Findings:
  - Identify gaps → Map to compliance requirements
  - Recommend remediation actions → Prioritize by risk
- Reporting:
  - Draft audit report → Review with stakeholders → Finalize
  - Present to leadership → Issue formal report
- Remediation tracking:
  - Create action plan → Assign owners → Set deadlines
  - Follow-up audits → Verify closure
- Swimlanes: Auditor, IT/Security team, Management
```

---

### 24. Access Control Matrix
**描述**: 基于角色的访问控制(RBAC)权限矩阵  
**难度**: Intermediate  
**标签**: Security, RBAC, Permissions  
**预计时间**: 10分钟  
**Brief配置**:
- Intent: draft
- Tone: enterprise
- Focus: hierarchy, clarity
- DiagramType: component

**Prompt**:
```
Create RBAC access control matrix:
- Roles (rows):
  - Admin: Full system access
  - Manager: Department-level access
  - Developer: Code & dev environment access
  - Analyst: Read-only data access
  - Guest: Limited public access
- Resources (columns):
  - User management, Configuration, Code repository, Production DB
  - Staging environment, Analytics dashboard, Financial reports, Audit logs
- Permissions (cells):
  - C (Create), R (Read), U (Update), D (Delete), X (Execute)
- Matrix layout:
  - Admin: CRUDX for all resources
  - Manager: CRUD for department resources, R for others
  - Developer: CRUDX for code/staging, R for prod
  - Analyst: R for analytics/reports, no access to configs
  - Guest: R for public resources only
- Include approval workflows:
  - Elevated access request → Manager approval → Time-limited grant
  - Show inheritance relationships between roles
- Color code: Green (allowed), Red (denied), Yellow (requires approval)
```

---

## 🎨 Creative & Workshops (3 templates)

### 25. Mind Map (Brainstorming)
**描述**: 发散思维导图，用于头脑风暴和创意整理  
**难度**: Beginner  
**标签**: Brainstorming, Ideation, Creativity  
**预计时间**: 5分钟  
**Brief配置**:
- Intent: draft
- Tone: playful
- Focus: hierarchy, flow
- DiagramType: mindmap

**Prompt**:
```
Create a brainstorming mind map for "Product Innovation Ideas":
- Center node: "Product Innovation 2025"
- Main branches (Level 1):
  - New Features
  - User Experience
  - Business Model
  - Technology Stack
  - Marketing Channels
- Sub-branches (Level 2-3):
  - New Features:
    - AI-powered recommendations → Personalization engine
    - Social sharing → Viral loops
    - Mobile app → Offline mode
  - User Experience:
    - Onboarding redesign → Interactive tutorial
    - Accessibility → Screen reader support
    - Performance → Sub-second loading
  - Business Model:
    - Freemium tier → Feature comparison
    - Enterprise plan → Custom SLA
    - Marketplace → Revenue sharing
- Use organic shapes, varied colors, playful icons
- Add "hot" indicators for high-priority ideas
- Include connections between related ideas across branches
```

---

### 26. Workshop Facilitation
**描述**: 工作坊流程设计，包含破冰、活动、产出  
**难度**: Intermediate  
**标签**: Workshop, Facilitation, Collaboration  
**预计时间**: 10分钟  
**Brief配置**:
- Intent: draft
- Tone: playful
- Focus: flow, clarity
- DiagramType: activity

**Prompt**:
```
Create a 2-hour workshop facilitation flow:
- Pre-work (before workshop):
  - Send agenda → Prepare materials → Set up tools (Miro, Zoom)
- Introduction (15 min):
  - Welcome & context → Icebreaker activity → Review objectives
- Activity 1: Problem framing (30 min):
  - Individual brainstorm (5 min) → Pair sharing (10 min) → Group discussion (15 min)
  - Output: Problem statements
- Break (10 min)
- Activity 2: Solution ideation (40 min):
  - Crazy 8s rapid sketching → Vote on ideas → Converge to top 3
  - Output: Solution concepts
- Activity 3: Action planning (20 min):
  - Identify next steps → Assign owners → Set timelines
  - Output: Action plan
- Wrap-up (5 min):
  - Recap key decisions → Share artifacts → Schedule follow-up
- Include facilitator tips, timing cues, backup activities
- Show parallel tracks for virtual vs. in-person variations
```

---

### 27. Strategic Canvas
**描述**: 战略画布，综合展示商业策略全貌  
**难度**: Advanced  
**标签**: Strategy, Business Model, Planning  
**预计时间**: 15分钟  
**Brief配置**:
- Intent: draft
- Tone: enterprise
- Focus: hierarchy, clarity
- DiagramType: mindmap

**Prompt**:
```
Create a strategic canvas combining multiple frameworks:
- Center: Company vision & mission
- Quadrant 1 (Top-left): Market analysis
  - TAM/SAM/SOM → Growth trends → Competitive landscape
- Quadrant 2 (Top-right): Value proposition
  - Customer segments → Jobs-to-be-done → Unique value
- Quadrant 3 (Bottom-left): Business model
  - Revenue streams → Cost structure → Key partnerships
- Quadrant 4 (Bottom-right): Execution plan
  - OKRs → Key initiatives → Roadmap milestones
- Connecting elements:
  - From market analysis to value prop: Insights arrows
  - From value prop to business model: Monetization paths
  - From business model to execution: Resource allocation
- Include KPIs for each quadrant
- Use enterprise color scheme, clear hierarchy
- Add "strategic bets" highlights for high-risk/high-reward initiatives
```

---

## 🎯 Implementation Priority

### Phase 1: High-impact templates (Must-have)
1. Employee Onboarding Flow
2. API Request/Response Flow
3. Business Decision Tree
4. Customer Journey Map
5. Agile Sprint Workflow
6. Bug Triage Process

### Phase 2: Common scenarios (Should-have)
7. Approval Workflow
8. CI/CD Pipeline
9. Product Development Lifecycle
10. Incident Response Runbook
11. Git Branching Strategy
12. Mind Map (Brainstorming)

### Phase 3: Advanced use cases (Nice-to-have)
13. Microservices Communication
14. Network Architecture
15. Design System Workflow
16. Strategic Canvas
17. Remaining templates

---

## 📊 Template Metadata Summary

| Category | Count | Avg Difficulty | Popular Tags |
|----------|-------|----------------|--------------|
| Business & Strategy | 7 | Beginner-Intermediate | Process, Decision, Strategy |
| Software Development | 8 | Intermediate-Advanced | API, DevOps, Agile |
| Product & Design | 5 | Intermediate | UX, Testing, Analytics |
| IT & Security | 4 | Intermediate-Advanced | Security, Infrastructure |
| Creative & Workshops | 3 | Beginner-Intermediate | Brainstorming, Collaboration |

**Total: 27 templates** across 5 categories

---

*Next: Implement template UI components and integrate with FlowPilot*
