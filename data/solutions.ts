import { Sparkles, Cloud, BarChart3, Workflow, Shield, Zap } from "lucide-react";

export const SOLUTIONS = [
  {
    id: "ai-transformation",
    title: "AI Transformation",
    description: "Move from experiments to governed AI workflows with clear deployment paths, human review, and measurable operating impact.",
    icon: Sparkles,
    metrics: [
      { value: "42%", label: "Less manual effort" },
      { value: "8 weeks", label: "Pilot to rollout" }
    ],
    problem: "Scattered AI experiments failing to reach production due to lack of governance and integration.",
    approach: "Implement centralized AI operations, train custom models on proprietary data, and establish human-in-the-loop review processes.",
    outcome: "Measurable operational efficiency with clear compliance and scalable AI deployments.",
    relevantProducts: ["AI Studio", "Automation Hub"]
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration",
    description: "Modernize legacy systems into resilient cloud foundations with observability, cost control, and phased adoption.",
    icon: Cloud,
    metrics: [
      { value: "60%", label: "Faster release cycles" },
      { value: "99%", label: "Target uptime" }
    ],
    problem: "Brittle legacy infrastructure causing downtime and slowing down product releases.",
    approach: "Phased brownfield migration to scalable cloud infrastructure using infrastructure-as-code and containerization.",
    outcome: "Resilient, highly available systems with complete observability and reduced total cost of ownership.",
    relevantProducts: ["Virtual Machines", "Cloud Database"]
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Turn fragmented business data into executive dashboards, predictive signals, and always-current decision loops.",
    icon: BarChart3,
    metrics: [
      { value: "4x", label: "Faster reporting" },
      { value: "1 view", label: "Of business truth" }
    ],
    problem: "Siloed data sources preventing accurate forecasting and delaying critical business decisions.",
    approach: "Unify data pipelines into a single source of truth and build real-time predictive models.",
    outcome: "Always-current decision loops and accurate demand forecasting for executive leadership.",
    relevantProducts: ["Analytics Engine", "Cloud Database"]
  },
  {
    id: "application-modernization",
    title: "Application Modernization",
    description: "Reframe monoliths and brittle workflows into modular product platforms ready for scale and automation.",
    icon: Workflow,
    metrics: [
      { value: "30%", label: "Lower maintenance" },
      { value: "2x", label: "Delivery throughput" }
    ],
    problem: "Monolithic architectures hindering feature development and scaling efforts.",
    approach: "Decompose monoliths into microservices, update tech stacks, and implement CI/CD pipelines.",
    outcome: "Modular platforms ready for rapid iteration and scalable automation.",
    relevantProducts: ["Developer APIs", "Automation Hub"]
  },
  {
    id: "security-compliance",
    title: "Security and Compliance",
    description: "Embed identity, policy, compliance checks, and monitoring into every layer of the digital platform.",
    icon: Shield,
    metrics: [
      { value: "24/7", label: "Security posture" },
      { value: "Zero", label: "Trust baseline" }
    ],
    problem: "Fragmented security tools and manual compliance checks exposing the organization to risk.",
    approach: "Implement a Zero Trust architecture, unify identity management, and automate compliance audits.",
    outcome: "A hardened platform with continuous monitoring and automated incident response.",
    relevantProducts: ["Security Center", "Cloud Database"]
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description: "Connect disparate systems and manual tasks into streamlined, automated business processes.",
    icon: Zap,
    metrics: [
      { value: "50%", label: "Process acceleration" },
      { value: "100%", label: "Audit trail" }
    ],
    problem: "Manual hand-offs and disconnected tools leading to errors and delays.",
    approach: "Map existing workflows, integrate APIs, and deploy intelligent agents to handle routine tasks.",
    outcome: "Accelerated business processes with full visibility and reduced error rates.",
    relevantProducts: ["Automation Hub", "AI Studio"]
  }
];
