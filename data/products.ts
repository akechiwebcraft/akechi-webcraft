import { Brain, Database, MonitorPlay, Shield, Workflow, BarChart3, Cpu, Code2 } from "lucide-react";

export const PRODUCTS = [
  {
    id: "ai-studio",
    title: "AI Studio",
    description: "Design, evaluate, and ship agentic workflows from a governed product surface.",
    icon: Brain,
    features: ["Model fine-tuning", "Custom LLMs", "Agent frameworks"],
    ctaLink: "/contact"
  },
  {
    id: "cloud-database",
    title: "Cloud Database",
    description: "Operate reliable data stores with replication, backup, and observable health signals.",
    icon: Database,
    features: ["Global replication", "Automated backups", "High availability"],
    ctaLink: "/contact"
  },
  {
    id: "virtual-machines",
    title: "Virtual Machines",
    description: "Provision compute for product teams with policy-aware templates and cost guardrails.",
    icon: MonitorPlay,
    features: ["Policy-aware templates", "Cost guardrails", "Instant provisioning"],
    ctaLink: "/contact"
  },
  {
    id: "security-center",
    title: "Security Center",
    description: "Unify posture, identity, compliance, and incident signals across the platform.",
    icon: Shield,
    features: ["Identity management", "Compliance checks", "Incident signals"],
    ctaLink: "/contact"
  },
  {
    id: "automation-hub",
    title: "Automation Hub",
    description: "Connect tools, approvals, and release paths into repeatable business operations.",
    icon: Workflow,
    features: ["CI/CD pipelines", "Approval workflows", "Release paths"],
    ctaLink: "/contact"
  },
  {
    id: "analytics-engine",
    title: "Analytics Engine",
    description: "Transform product and business telemetry into crisp dashboards and predictions.",
    icon: BarChart3,
    features: ["Real-time telemetry", "Crisp dashboards", "Predictive signals"],
    ctaLink: "/contact"
  },
  {
    id: "developer-apis",
    title: "Developer APIs",
    description: "Build seamlessly with our REST and GraphQL APIs for deep platform integration.",
    icon: Code2,
    features: ["REST & GraphQL", "SDKs available", "Detailed documentation"],
    ctaLink: "/contact"
  },
  {
    id: "edge-compute",
    title: "Edge Compute",
    description: "Deploy functions globally with low latency execution at the network edge.",
    icon: Cpu,
    features: ["Global edge network", "Low latency", "Serverless execution"],
    ctaLink: "/contact"
  }
];
