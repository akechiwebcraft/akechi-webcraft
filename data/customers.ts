export const CUSTOMERS = [
  {
    id: "retail-enterprise",
    companyType: "Retail Enterprise (500+ Stores)",
    challenge: "Inefficient routing and poor demand forecasting led to high operational costs ($2.1M lost annually in stock-outs) and delayed deliveries. Forecast accuracy was under 65%.",
    solution: "Developed custom machine learning models (Prophet + custom LSTM) to predict demand spikes and integrated a dynamic routing algorithm. Deployed via React frontend + Node.js APIs, integrated with SAP ERP.",
    result: "Achieved 94% forecast accuracy, $1.8M annual savings, and a 15% reduction in excess inventory within 12 weeks.",
    metrics: [
      { value: "94%", label: "Forecast Accuracy" },
      { value: "$1.8M", label: "Annual Savings" },
      { value: "15%", label: "Excess Inventory Reduction" }
    ],
    image: "/images/cases/case-1.png"
  },
  {
    id: "financial-services",
    companyType: "Financial Services Group",
    challenge: "Siloed customer data across 12 divisions and 4 legacy CRM systems resulted in poor customer service, lost opportunities, and low lead conversion (8%).",
    solution: "Executed a complex data migration to Salesforce, implementing custom Lightning Web Components (LWC) and Apex logic for tailored workflows. Integrated with ERP via MuleSoft.",
    result: "Achieved a unified 360-degree customer view, improving agent response times and driving lead conversion from 8% to 22%.",
    metrics: [
      { value: "22%", label: "Lead Conversion Rate" },
      { value: "3x", label: "Pipeline Visibility" },
      { value: "40%", label: "Faster Deal Cycles" }
    ],
    image: "/images/cases/case-2.png"
  },
  {
    id: "healthcare-platform",
    companyType: "Healthcare Platform (2M+ Users)",
    challenge: "Legacy monolithic PHP application couldn't handle 2M+ concurrent users. Downtime averaged 14 hours/month. Deployment cycles took 3 weeks minimum.",
    solution: "Decomposed the monolith into 18 microservices on Kubernetes, implemented CI/CD pipelines, blue-green deployments, and comprehensive observability with Datadog.",
    result: "Achieved a unified 99% uptime while reducing infrastructure costs by 60% and speeding up deployment cycles to 45 minutes.",
    metrics: [
      { value: "99%", label: "Uptime Achieved" },
      { value: "45min", label: "Deployment Cycle" },
      { value: "60%", label: "Cost Reduction" }
    ],
    image: "/images/cases/case-3.png"
  },
  {
    id: "manufacturing-innovators",
    companyType: "Manufacturing Innovators Ltd",
    challenge: "Aging ERP infrastructure struggled to keep up with manufacturing scale, lacking real-time analytics for the warehouse floor.",
    solution: "Performed a brownfield migration to SAP S/4HANA and developed role-based SAP Fiori apps for floor managers.",
    result: "Enabled real-time production tracking, achieving 3x faster processing speeds and 99% inventory accuracy with 90% user adoption.",
    metrics: [
      { value: "3x", label: "Faster Processing" },
      { value: "99%", label: "Inventory Accuracy" },
      { value: "90%", label: "User Adoption" }
    ],
    image: "/images/cases/case-4.png"
  }
];
