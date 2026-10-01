export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  image: string;
  /**
   * Public URL of the delivered site or product. Omit when the work is not
   * publicly reachable (internal systems, NDA) — the UI hides the link rather
   * than rendering a dead one.
   */
  liveUrl?: string;
  architecture: {
    title: string;
    description: string;
    items: string[];
    accent: 'purple' | 'teal' | 'blue' | 'green';
  }[];
  capabilities: {
    title: string;
    description: string;
    tags: string[];
  }[];
  solutionCards: {
    title: string;
    problem: string;
    response: string;
    result: string;
  }[];
  delivery: {
    phase: string;
    title: string;
    description: string;
  }[];
  automationHighlights: {
    title: string;
    description: string;
    metric: string;
  }[];
  cta: {
    title: string;
    description: string;
  };
}

export const PROJECTS: Record<string, Project> = {
  'atal-tinkering-lab-setup': {
    slug: 'atal-tinkering-lab-setup',
    title: 'Atal Tinkering Lab Setup',
    client: 'Ministry of Education',
    category: 'School Tinkering Lab',
    description: 'Equipped 500+ students with hands-on innovation infrastructure in government schools.',
    challenge: 'Schools lacked modern STEM lab facilities, leaving students without practical exposure to emerging technologies.',
    solution: 'Deployed government-standard ATL with robotics kits, 3D printers, and IoT sensors, accompanied by comprehensive teacher training.',
    outcome: 'Successfully established labs with high student engagement, fostering a culture of innovation and hands-on learning.',
    metrics: [
      { label: 'Students Impacted', value: '500+' },
      { label: 'Equipment Units', value: '120+' },
      { label: 'Teachers Trained', value: '25' },
      { label: 'Participation Rate', value: '95%' }
    ],
    technologies: ['Robotics', '3D Printing', 'IoT', 'Arduino'],
    image: 'https://akechiwebcraft.com/images/resource/project-1.jpg',
    architecture: [
      {
        title: 'Lab Infrastructure',
        description: 'Government-standard physical learning environment with safe maker-space zones.',
        items: ['Robotics kits', '3D printers', 'IoT benches', 'Safety SOPs'],
        accent: 'purple',
      },
      {
        title: 'Learning Stack',
        description: 'Hands-on curriculum mapped to ATL outcomes and teacher-led project cycles.',
        items: ['Arduino', 'Sensors', 'Scratch', 'Design thinking'],
        accent: 'teal',
      },
      {
        title: 'Enablement Model',
        description: 'Train-the-trainer model designed for long-term ownership by the school.',
        items: ['Teacher workshops', 'Student cohorts', 'Usage audits', 'Maintenance plans'],
        accent: 'green',
      },
    ],
    capabilities: [
      {
        title: 'Site Readiness & Procurement',
        description: 'Mapped available rooms, safety requirements, equipment mix, and installation dependencies.',
        tags: ['Readiness', 'Procurement', 'Safety'],
      },
      {
        title: 'Hands-On Lab Deployment',
        description: 'Installed robotics, 3D printing, IoT, and electronics stations with clear usage zones.',
        tags: ['Installation', 'STEM', 'ATL'],
      },
      {
        title: 'Educator Enablement',
        description: 'Trained teachers to run project-based sessions and maintain the lab after launch.',
        tags: ['Training', 'Curriculum', 'Ownership'],
      },
      {
        title: 'Student Activation',
        description: 'Introduced practical build challenges so students could use the lab from week one.',
        tags: ['Workshops', 'Projects', 'Engagement'],
      },
    ],
    solutionCards: [
      {
        title: 'Infrastructure Gap',
        problem: 'Students had theory exposure but no reliable maker-space for experimentation.',
        response: 'Akechi built a standards-aligned lab with clear equipment zones and usage flows.',
        result: '500+ students gained recurring access to practical innovation infrastructure.',
      },
      {
        title: 'Teacher Adoption',
        problem: 'Faculty needed confidence to run tools and guide open-ended projects.',
        response: 'We delivered role-specific training, lab manuals, and session plans.',
        result: '25 teachers were trained to sustain the lab independently.',
      },
      {
        title: 'Project Momentum',
        problem: 'New labs often remain underused after inauguration.',
        response: 'Akechi launched student cohorts with guided challenges and showcase cycles.',
        result: 'Participation reached 95% across the initial activation window.',
      },
    ],
    delivery: [
      { phase: '01', title: 'Assess', description: 'Audit room readiness, safety, curriculum needs, and school operating constraints.' },
      { phase: '02', title: 'Equip', description: 'Procure, install, and test equipment with ratio-locked lab zones and checklists.' },
      { phase: '03', title: 'Enable', description: 'Train educators on tools, maintenance, assessment, and project facilitation.' },
      { phase: '04', title: 'Activate', description: 'Run student workshops and build cycles to convert infrastructure into outcomes.' },
      { phase: '05', title: 'Sustain', description: 'Hand over documentation, maintenance routines, and utilization review cadence.' },
    ],
    automationHighlights: [
      {
        title: 'Lab Utilization Tracking',
        description: 'Simple operating dashboards helped schools monitor equipment use and training progress.',
        metric: '95% participation',
      },
      {
        title: 'Curriculum Reuse',
        description: 'Reusable session kits reduced planning load for educators and kept workshops consistent.',
        metric: '25 teachers trained',
      },
      {
        title: 'Maintenance Rhythm',
        description: 'Scheduled checks reduced downtime for high-use robotics and prototyping equipment.',
        metric: '120+ units managed',
      },
    ],
    cta: {
      title: 'Build a STEM ecosystem that keeps working after launch.',
      description: 'Akechi can plan, install, train, and operationalize a practical innovation lab for your institution.',
    },
  },
  'enterprise-ai-automation': {
    slug: 'enterprise-ai-automation',
    title: 'AI Demand Prediction Agent',
    client: 'Retail Enterprise',
    category: 'Artificial Intelligence',
    description: 'Implemented an AI-driven forecasting and routing system to optimize global supply chain logistics.',
    challenge: 'Inefficient routing and poor demand forecasting led to high operational costs and delayed deliveries.',
    solution: 'Developed custom machine learning models to predict demand spikes and integrated a dynamic routing algorithm.',
    outcome: 'Drastically reduced fuel consumption and improved on-time delivery rates across the network.',
    metrics: [
      { label: 'Cost Reduction', value: '22%' },
      { label: 'On-Time Delivery', value: '98%' },
      { label: 'Forecast Accuracy', value: '94%' },
      { label: 'ROI Timeline', value: '6 mos' }
    ],
    technologies: ['Python', 'TensorFlow', 'AWS', 'PostgreSQL'],
    image: 'https://akechiwebcraft.com/images/resource/project-3.jpg',
    architecture: [
      {
        title: 'Intelligence Layer',
        description: 'Forecasting models tuned to operational data, demand patterns, and routing constraints.',
        items: ['Python', 'TensorFlow', 'Feature pipelines', 'Model monitoring'],
        accent: 'purple',
      },
      {
        title: 'Data Foundation',
        description: 'Reliable storage and query layer for inventory, logistics, and delivery signals.',
        items: ['PostgreSQL', 'ETL jobs', 'Validation rules', 'Audit logs'],
        accent: 'blue',
      },
      {
        title: 'Cloud Delivery',
        description: 'Scalable runtime for batch scoring, routing updates, and stakeholder dashboards.',
        items: ['AWS', 'APIs', 'Worker queues', 'Observability'],
        accent: 'teal',
      },
    ],
    capabilities: [
      {
        title: 'Demand Forecasting',
        description: 'Built models that identify spikes, seasonal drift, and location-level demand pressure.',
        tags: ['Forecasting', 'ML', 'Retail'],
      },
      {
        title: 'Dynamic Routing',
        description: 'Connected predictions to routing decisions so logistics teams could act in real time.',
        tags: ['Routing', 'Optimization', 'Operations'],
      },
      {
        title: 'Decision Dashboard',
        description: 'Created compact operational views for inventory, delivery status, and exception handling.',
        tags: ['Dashboards', 'UX', 'Visibility'],
      },
      {
        title: 'Performance Governance',
        description: 'Added accuracy checks and model review rhythms to keep predictions business-safe.',
        tags: ['Monitoring', 'Governance', 'QA'],
      },
    ],
    solutionCards: [
      {
        title: 'Forecast Volatility',
        problem: 'Demand signals were noisy and teams reacted after stock and route issues appeared.',
        response: 'Akechi trained forecasting models on historic and live operational signals.',
        result: 'Forecast accuracy reached 94%, enabling earlier intervention.',
      },
      {
        title: 'Routing Cost',
        problem: 'Static routing increased fuel consumption and delayed delivery decisions.',
        response: 'We built an adaptive routing layer tied to demand and delivery constraints.',
        result: 'Operational costs dropped by 22% with 98% on-time delivery.',
      },
      {
        title: 'Decision Lag',
        problem: 'Managers lacked a single view of demand, routes, and exceptions.',
        response: 'We shipped role-specific dashboards with real-time alerts and metrics.',
        result: 'The project showed ROI inside a 6-month window.',
      },
    ],
    delivery: [
      { phase: '01', title: 'Discover', description: 'Profile demand signals, existing workflows, and operational decision points.' },
      { phase: '02', title: 'Model', description: 'Train and validate forecasting models against business-critical accuracy thresholds.' },
      { phase: '03', title: 'Integrate', description: 'Connect predictions to routing APIs, dashboards, and data stores.' },
      { phase: '04', title: 'Operate', description: 'Launch with monitoring, model review, and exception-handling workflows.' },
      { phase: '05', title: 'Optimize', description: 'Tune routing, thresholds, and reporting as teams adopt the system.' },
    ],
    automationHighlights: [
      {
        title: 'AI Forecast Engine',
        description: 'Automated demand prediction reduced manual planning and improved route readiness.',
        metric: '94% accuracy',
      },
      {
        title: 'Exception Detection',
        description: 'Alerts surfaced demand spikes and delivery risk before they became service failures.',
        metric: '98% on-time',
      },
      {
        title: 'Cost Feedback Loop',
        description: 'Delivery outcomes fed back into planning so the system kept improving after launch.',
        metric: '22% lower cost',
      },
    ],
    cta: {
      title: 'Turn operational data into decisions that move faster.',
      description: 'Akechi can design AI automation around your real workflows, not a generic demo model.',
    },
  },
  'salesforce-crm-migration': {
    slug: 'salesforce-crm-migration',
    title: 'Salesforce LWC Customization',
    client: 'FinServe Financial',
    category: 'Enterprise CRM',
    description: 'Consolidated legacy CRM systems into a unified Salesforce Sales & Service Cloud environment.',
    challenge: 'Siloed customer data across three different legacy systems resulted in poor customer service and lost sales opportunities.',
    solution: 'Executed a complex data migration to Salesforce, implementing custom Lightning Web Components for tailored workflows.',
    outcome: 'Achieved a unified 360-degree customer view, significantly improving agent response times and sales conversion.',
    metrics: [
      { label: 'Data Unified', value: '10M+ rows' },
      { label: 'Agent Efficiency', value: '+40%' },
      { label: 'Sales Conversion', value: '+15%' },
      { label: 'System Uptime', value: '99.9%' }
    ],
    technologies: ['Salesforce', 'Apex', 'LWC', 'MuleSoft'],
    image: 'https://akechiwebcraft.com/images/resource/project-2.jpg',
    architecture: [
      {
        title: 'CRM Core',
        description: 'Unified Salesforce Sales and Service Cloud setup with role-specific business flows.',
        items: ['Salesforce', 'Sales Cloud', 'Service Cloud', 'Permissions'],
        accent: 'purple',
      },
      {
        title: 'Custom Experience',
        description: 'Lightning Web Components and Apex logic shaped around the client service journey.',
        items: ['LWC', 'Apex', 'SOQL', 'Validation rules'],
        accent: 'blue',
      },
      {
        title: 'Integration Fabric',
        description: 'Data movement and process integration across legacy CRM, ERP, and reporting systems.',
        items: ['MuleSoft', 'APIs', 'Data migration', 'Reconciliation'],
        accent: 'teal',
      },
    ],
    capabilities: [
      {
        title: 'Data Consolidation',
        description: 'Merged fragmented customer records into a governed 360-degree account view.',
        tags: ['Migration', 'Data Quality', 'CRM'],
      },
      {
        title: 'Custom LWC Workflows',
        description: 'Built fast interfaces for agents to act without jumping across disconnected screens.',
        tags: ['LWC', 'Agent UX', 'Workflow'],
      },
      {
        title: 'Sales Process Automation',
        description: 'Automated routing, follow-ups, and service triggers across the customer lifecycle.',
        tags: ['Automation', 'Sales', 'Service'],
      },
      {
        title: 'Enterprise Integration',
        description: 'Connected Salesforce with downstream systems through API and middleware patterns.',
        tags: ['MuleSoft', 'API', 'ERP'],
      },
    ],
    solutionCards: [
      {
        title: 'Customer Fragmentation',
        problem: 'Three legacy systems created inconsistent customer records and poor service context.',
        response: 'Akechi unified records into Salesforce with reconciliation and governance rules.',
        result: '10M+ rows were migrated into a single customer view.',
      },
      {
        title: 'Agent Friction',
        problem: 'Teams spent time navigating disconnected tools instead of resolving customer needs.',
        response: 'We developed LWC interfaces tailored to agent workflows and approvals.',
        result: 'Agent efficiency improved by 40%.',
      },
      {
        title: 'Sales Visibility',
        problem: 'Leadership lacked reliable pipeline visibility and conversion signals.',
        response: 'We implemented dashboards, automation, and standardized opportunity stages.',
        result: 'Sales conversion improved by 15%.',
      },
    ],
    delivery: [
      { phase: '01', title: 'Map', description: 'Document data sources, user roles, journeys, and existing CRM friction.' },
      { phase: '02', title: 'Migrate', description: 'Clean, migrate, and reconcile records with validation and rollback plans.' },
      { phase: '03', title: 'Customize', description: 'Build LWC and Apex workflows aligned to real sales and service patterns.' },
      { phase: '04', title: 'Integrate', description: 'Connect Salesforce with legacy systems, middleware, and reporting layers.' },
      { phase: '05', title: 'Adopt', description: 'Train teams, monitor adoption, and refine workflows after launch.' },
    ],
    automationHighlights: [
      {
        title: 'Lead Routing Automation',
        description: 'Rules moved qualified leads to the right team with less manual coordination.',
        metric: '+15% conversion',
      },
      {
        title: 'Service Context',
        description: 'Agents saw customer history and actions in one place instead of searching tools.',
        metric: '+40% efficiency',
      },
      {
        title: 'Data Governance',
        description: 'Validation and reconciliation routines kept migrated records accurate post-launch.',
        metric: '99.9% uptime',
      },
    ],
    cta: {
      title: 'Create a CRM your teams actually want to use.',
      description: 'Akechi can unify customer data, automate workflows, and customize Salesforce around your business.',
    },
  },
  'sap-erp-modernization': {
    slug: 'sap-erp-modernization',
    title: 'SAP S/4HANA Modernization',
    client: 'Manufacturing Innovators Ltd',
    category: 'SAP ERP & IoT',
    description: 'Seamless migration from legacy SAP ECC to S/4HANA with custom Fiori applications.',
    challenge: 'Aging ERP infrastructure struggled to keep up with manufacturing scale, lacking real-time analytics.',
    solution: 'Performed a brownfield migration to S/4HANA and developed role-based SAP Fiori apps for floor managers.',
    outcome: 'Enabled real-time production tracking and significantly improved user experience for plant workers.',
    metrics: [
      { label: 'Processing Speed', value: '3x Faster' },
      { label: 'Downtime', value: '< 12 hrs' },
      { label: 'User Adoption', value: '90%' },
      { label: 'Inventory Acc.', value: '99%' }
    ],
    technologies: ['SAP S/4HANA', 'ABAP', 'SAP Fiori', 'HANA DB'],
    image: 'https://akechiwebcraft.com/images/resource/project-4.jpg',
    architecture: [
      {
        title: 'ERP Foundation',
        description: 'S/4HANA core migration with business continuity and downtime control.',
        items: ['SAP S/4HANA', 'HANA DB', 'Brownfield migration', 'Cutover planning'],
        accent: 'purple',
      },
      {
        title: 'Experience Layer',
        description: 'Role-based Fiori applications for plant, inventory, and management users.',
        items: ['SAP Fiori', 'OData', 'Role apps', 'Mobile access'],
        accent: 'blue',
      },
      {
        title: 'Process Extensions',
        description: 'Custom ABAP and integration routines for manufacturing-specific workflows.',
        items: ['ABAP', 'Custom reports', 'Interfaces', 'Production tracking'],
        accent: 'green',
      },
    ],
    capabilities: [
      {
        title: 'S/4HANA Readiness',
        description: 'Assessed system dependencies, custom code, reporting needs, and migration windows.',
        tags: ['Assessment', 'ERP', 'Risk'],
      },
      {
        title: 'Controlled Migration',
        description: 'Executed cutover with downtime planning and validated production-critical flows.',
        tags: ['Migration', 'Cutover', 'Continuity'],
      },
      {
        title: 'Fiori UX Modernization',
        description: 'Built role-specific Fiori apps that made plant operations faster and easier to adopt.',
        tags: ['Fiori', 'UX', 'Mobile'],
      },
      {
        title: 'Operational Reporting',
        description: 'Enabled real-time visibility into production, inventory, and floor-level performance.',
        tags: ['Analytics', 'Operations', 'HANA'],
      },
    ],
    solutionCards: [
      {
        title: 'Legacy ERP Drag',
        problem: 'The aging ECC environment slowed production planning and decision cycles.',
        response: 'Akechi migrated core flows to S/4HANA with validation across critical modules.',
        result: 'Processing speed improved by 3x.',
      },
      {
        title: 'Plant User Experience',
        problem: 'Floor teams struggled with dated interfaces and slow task completion.',
        response: 'We shipped role-based Fiori apps for common plant and inventory actions.',
        result: 'User adoption reached 90%.',
      },
      {
        title: 'Operational Visibility',
        problem: 'Managers lacked reliable real-time inventory and production visibility.',
        response: 'We added HANA-backed reporting and process-specific dashboards.',
        result: 'Inventory accuracy reached 99%.',
      },
    ],
    delivery: [
      { phase: '01', title: 'Readiness', description: 'Assess custom code, data quality, modules, and cutover risk.' },
      { phase: '02', title: 'Design', description: 'Define target S/4HANA architecture, Fiori roles, and reporting model.' },
      { phase: '03', title: 'Migrate', description: 'Execute technical migration, validation, and business process testing.' },
      { phase: '04', title: 'Modernize', description: 'Build Fiori experiences and custom extensions around plant needs.' },
      { phase: '05', title: 'Stabilize', description: 'Monitor adoption, performance, and production support after go-live.' },
    ],
    automationHighlights: [
      {
        title: 'Cutover Control',
        description: 'Planned migration windows and validation routines kept business interruption low.',
        metric: '< 12 hrs downtime',
      },
      {
        title: 'Real-Time Reports',
        description: 'HANA-powered dashboards surfaced production and inventory status quickly.',
        metric: '3x faster',
      },
      {
        title: 'Fiori Adoption',
        description: 'Role-based screens reduced training friction for plant users.',
        metric: '90% adoption',
      },
    ],
    cta: {
      title: 'Modernize ERP without losing operational control.',
      description: 'Akechi can plan and deliver SAP modernization with careful cutover, UX, and reporting discipline.',
    },
  },

  'bahikhata-pro': {
    slug: 'bahikhata-pro',
    title: 'Bahi Khata Pro',
    client: 'Bahi Khata Pro',
    category: 'SaaS Website',
    description: 'Bahi Khata Pro combines the simplicity of Khatabook with the power of Tally — an ERP platform managing purchases, lot-based sales, inventory, ledger, and payments. Akechi Webcraft built a multilingual, conversion-engineered marketing platform that turns visitors into free-trial signups.',
    challenge: 'Selling an ERP is difficult: the product is powerful and technical, while buyers — marble traders, timber merchants, mandi operators — want a simple answer. The site needed to explain six ERP modules and six industry solutions without overwhelming anyone, speak in 11 Indian languages, and convert interest into free-trial signups.',
    solution: 'We applied a benefit-first information architecture with one anchor promise, six plain-language module cards, and progressive disclosure. Every industry gets its own vocabulary — slab management for marble, volume-based pricing for wood, POS workflows for retail. Full internationalization with URL-based locale routing makes every language shareable and SEO-friendly.',
    outcome: 'The result is a marketing site that sells enterprise software with consumer-grade clarity. Full localization across 11 Indian languages, light and dark themes, conversion mechanics at every scroll depth, and edge CDN delivery ensure visitors from any industry and any language find their reason to start a free trial.',
    metrics: [
      { label: 'Businesses Using Platform', value: '10,000+' },
      { label: 'Transactions Processed', value: '₹500 Cr+' },
      { label: 'Uptime Guarantee', value: '99.9%' },
      { label: 'Supported Platforms', value: '5' },
    ],
    technologies: ['React', 'Vite', 'i18next', 'Light/Dark Theming', 'Vercel Edge', 'Code-Split Bundles', 'SEO Optimization', 'Inter Typography', 'Responsive Design'],
    image: '/images/cases/bahikhata-pro.png',
    architecture: [
      {
        title: 'Conversion-Engineered Hero',
        description: 'The homepage opens with a confident positioning statement backed instantly by hard proof: 10,000+ businesses, ₹500 Cr+ in transactions, and 99.9% uptime. Triple CTAs capture visitors at every stage of buying intent.',
        items: ['Live trust statistics', 'Product credibility badges', 'Multiple CTA buttons', 'Hero positioning statement'],
        accent: 'purple',
      },
      {
        title: 'Six-Module Product Showcase',
        description: 'The product showcase distills a complex ERP into six digestible cards — Smart Purchase, Lot-Based Sales, Inventory, Ledger, WhatsApp Automation, and Multi-Tenant management. Each card pairs a plain-language benefit with a Learn More pathway.',
        items: ['Benefit-led copy', 'Progressive disclosure', 'Visual hierarchy', 'Feature explanations'],
        accent: 'teal',
      },
      {
        title: 'Industry-Specific Solutions',
        description: "Rather than generic feature lists, the site speaks each trade's language: slab management for Marble, volume-based pricing for Wood, BOM for Furniture, heat numbers for Steel, POS for Retail, mandi rates for Agriculture.",
        items: ['Industry-specific vocabulary', 'Targeted positioning', 'Use case examples', 'Vertical messaging'],
        accent: 'blue',
      },
    ],
    capabilities: [
      {
        title: 'Full Internationalization',
        description: 'Every string on the site is translated into Hindi, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, and Telugu with clean URL-based language routing.',
        tags: ['11 Languages', 'URL Routing', 'Content Management', 'SEO-Friendly'],
      },
      {
        title: 'Conversion Toolkit',
        description: 'A four-tier pricing table with monthly/yearly toggle, five-star customer testimonials, exit-intent popups, sticky offer bars, and "No credit card required" reassurance at every CTA.',
        tags: ['Pricing Toggle', 'Social Proof', 'Exit-Intent', 'Sticky CTAs'],
      },
      {
        title: 'Performance & SEO',
        description: 'Vendor code-splitting, font preconnects, pre-paint theme scripts eliminating dark-mode flash, and per-page SEO head component managing titles, descriptions, Open Graph, and Twitter cards.',
        tags: ['Code Splitting', 'CDN Delivery', 'SEO Optimization', 'Theme System'],
      },
      {
        title: 'Mobile-First Design',
        description: 'Fully responsive layout with dedicated mobile CTA variants, tested across phones, tablets, and desktops.',
        tags: ['Responsive', 'Mobile Variants', 'Touch Optimization', 'Cross-Device'],
      },
    ],
    solutionCards: [
      {
        title: 'Product Education',
        problem: "A marble trader cares about slab wastage; a steel trader about heat numbers. Generic messaging resonates with none of them.",
        response: "Industry-specific solution cards written in each trade's vocabulary with matching testimonials from real business owners.",
        result: 'Every visitor sees their own business reflected. Credibility loop closes immediately.',
      },
      {
        title: 'Language Barrier',
        problem: 'The target customer often prefers Hindi, Tamil, or Bengali over English. Most SaaS sites ship English-only, excluding the majority market.',
        response: 'Structured internationalization with per-language translation files and URL-based locale routing for SEO.',
        result: '11 Indian language support with shareable, SEO-friendly language pages.',
      },
      {
        title: 'SPA Speed & SEO',
        problem: 'Rich single-page experiences with animations can mean heavy JavaScript, slow first paint on mobile, and weak search visibility.',
        response: 'Vendor code-splitting with parallel cacheable chunks, font preconnects, pre-paint theme scripts, per-page SEO head component.',
        result: 'Product-grade feel while staying fast on 4G. Edge CDN delivery ensures global performance.',
      },
    ],
    delivery: [
      { phase: 'Phase 01', title: 'Discovery & Architecture', description: 'Audit ERP feature complexity, identify 6 core modules, map 6 industry verticals, plan 11-language structure with URL routing strategy.' },
      { phase: 'Phase 02', title: 'Design & Localization', description: 'Create benefit-first information architecture, design hero and module cards, establish color system for dark/light themes, begin translation pipeline.' },
      { phase: 'Phase 03', title: 'Build & Conversion', description: 'Build React + Vite SPA with i18next integration, implement code-splitting, create exit-intent popup and sticky offer bar, wire up all CTAs.' },
      { phase: 'Phase 04', title: 'Performance & Launch', description: 'Optimize images and fonts, enable Vercel Edge caching, test on real 4G networks, set up SEO monitoring, launch across all 11 languages.' },
    ],
    automationHighlights: [
      { title: 'Multi-Language Automatic Routing', description: 'URL-based locale routing automatically detects visitor language preference and serves content in their chosen language.', metric: '11 languages, zero manual redirects' },
      { title: 'Theme System with Zero Flash', description: 'Pre-paint theme detection eliminates the dark-mode flash on reload by running theme logic before page render.', metric: 'Instant theme on page load' },
      { title: 'Conversion Toolkit Automation', description: 'Exit-intent detection, sticky offer bar timing, and CTA sequencing all work automatically based on scroll depth and time on page.', metric: '40%+ higher trial signups' },
    ],
    cta: {
      title: 'Want to Launch a High-Converting SaaS Website?',
      description: 'If you have a product that deserves to be understood — and bought — Akechi Webcraft can design and build a website that explains it, localizes it, and converts for it.',
    },
  },

  'ikonnic': {
    slug: 'ikonnic',
    title: 'Ikonnic',
    client: 'Ikonnic',
    category: 'E-Commerce',
    description: 'Ikonnic turns personal memories into custom-made products — acrylic wall photos, nameplates, magnets, keychains, and more. A photography-first storefront with per-product customization and dual-hub fulfillment dispatching made-to-order pieces within 3 business days across India.',
    challenge: "Personalized products sell on emotion but buy with hesitation. Customers aren't designers, uploads are poor-quality, and in a no-returns category, buyers hesitate to click order. Twelve product categories with different price points and buyer intents risk overwhelming the catalog.",
    solution: 'We designed a guided "Personalise Yours" flow with a photo-poses guide teaching customers how to shoot print-ready pictures. The store answers hesitation everywhere: 10K+ customers, 50K+ prints, 4.9★ rating, quality checks, secure packaging. Dual-hub routing from Jaipur and Bengaluru enables a 3-business-day dispatch promise.',
    outcome: 'A store that feels like the brand and sells emotions, not SKUs. Made-to-order products dispatch within 3 days pan-India. Trust signals at every step replace a traditional returns policy with visible proof and reachable people.',
    metrics: [
      { label: 'Happy Customers', value: '10K+' },
      { label: 'Prints Delivered', value: '50K+' },
      { label: 'Dispatch Promise', value: '3 Days' },
      { label: 'Fulfillment Hubs', value: '2' },
    ],
    technologies: ['E-Commerce Platform', 'Product Customizer', 'Image Pipeline', 'Dual-Hub Fulfillment', 'Order Tracking', 'WhatsApp Support', 'Blog & SEO', 'Social Integration', 'Mobile-First Design'],
    image: '/images/cases/ikonnic.png',
    architecture: [
      {
        title: 'Twelve Personalized Categories',
        description: 'A catalog built around memories, not SKUs. Acrylic wall photos as hero, plus nameplates, monogram plates, fridge magnets, keychains, aluminium acrylics, photo stands, mini galleries, wall clocks, luggage tags, albums, and gift bundles.',
        items: ['Hero product positioning', 'Category hierarchy', 'Lifestyle photography', 'Trending gift rails'],
        accent: 'purple',
      },
      {
        title: 'Customization Flow',
        description: 'Per-product "Personalise Yours" entry into a guided journey: upload photo, choose size and finish, preview, and order. Backed by a photo-poses guide showing customers how to shoot print-ready pictures.',
        items: ['Guided upload flow', 'Photo education', 'Preview before order', 'Simplified design'],
        accent: 'teal',
      },
      {
        title: 'Dual-Hub Fulfillment',
        description: 'Creative Fulfillment Hub in Jaipur and Print & Dispatch Studio in Bengaluru route every order to the nearest hub. Dispatch within 3 business days with pan-India coverage.',
        items: ['Nearest-hub routing', '3-day dispatch', 'Pan-India shipping', 'Operational efficiency'],
        accent: 'blue',
      },
    ],
    capabilities: [
      {
        title: 'Trust & Emotional Selling',
        description: '10K+ customers, 50K+ prints, 4.9★ rating visible up front. Quality checks, secure packaging promised on every order. Human support via email, phone, and WhatsApp.',
        tags: ['Social Proof', 'Reviews', 'Human Support', 'Quality Promise'],
      },
      {
        title: 'Content & Conversion',
        description: 'Blog for gifting ideas and SEO, detailed FAQ, order tracking for peace of mind, social presence across Instagram, Facebook, YouTube. Trending-gift rails and bundles drive seasonal spikes.',
        tags: ['Blog', 'FAQ', 'Tracking', 'Social Media'],
      },
      {
        title: 'Photography-First Design',
        description: 'Full-bleed campaign imagery and editorial layout showcase the tactile quality of custom products. Lifestyle photography helps customers envision the product in their space.',
        tags: ['Hero Images', 'Lifestyle Photography', 'Editorial Design', 'Visual Storytelling'],
      },
    ],
    solutionCards: [
      {
        title: 'Designer Empowerment',
        problem: "Customers aren't designers but every order is a design. Low-resolution uploads and poorly lit pictures produce disappointing prints.",
        response: 'Guided "Personalise Yours" flow with photo-poses guide showing exactly how to shoot pictures that print beautifully.',
        result: 'Customer feels creative, not burdened. Hub receives files worth printing.',
      },
      {
        title: 'Trust Building',
        problem: 'Personalized products cannot be returned or resold. Buyers paying ₹999–₹1,699 need reasons to click order without a safety net.',
        response: 'Made trust the loudest element: 10K+ customers, 50K+ prints, 4.9★ rating, quality checks, secure packaging.',
        result: 'Store replaces returns policy with visible proof and reachable people.',
      },
      {
        title: 'Speed & Scale',
        problem: 'Made-to-order usually means slow. Single production site means long transit to half the country.',
        response: 'Dual-hub model with nearest-hub routing and 3-business-day dispatch promise.',
        result: 'Print-on-demand speed that gift buyers can trust.',
      },
    ],
    delivery: [
      { phase: 'Phase 01', title: 'Product Research & Category Definition', description: "Audit Ikonnic's 12 product categories, pricing strategy, and photo customization requirements. Map fulfillment hubs and dispatch timelines." },
      { phase: 'Phase 02', title: 'Design & User Experience', description: 'Create photography-first brand design, design "Personalise Yours" flows, create photo-poses guide, establish trust badge system.' },
      { phase: 'Phase 03', title: 'Build & E-Commerce', description: 'Build full e-commerce storefront with product customizer, cart and checkout, order tracking, integrations with fulfillment hubs.' },
      { phase: 'Phase 04', title: 'Launch & Growth', description: 'Optimize for conversion, set up blog and SEO, integrate social channels, launch trending-gift campaigns and seasonal bundles.' },
    ],
    automationHighlights: [
      { title: 'Hub-Based Order Routing', description: 'Every order automatically routes to the nearest fulfillment hub based on shipping address, reducing transit time.', metric: '3-day dispatch guarantee' },
      { title: 'Photo Quality Guidance', description: 'Photo-poses guide provides instant education, reducing upload rejections and print disappointments.', metric: '40%+ fewer revisions' },
      { title: 'Review & Social Proof', description: 'Customer reviews automatically surface on product cards and aggregated into ratings that build trust.', metric: '4.9★ average rating' },
    ],
    cta: {
      title: 'Want to Launch an E-Commerce Brand of Your Own?',
      description: 'If you have a product people will love and need a store that makes them feel it, Akechi Webcraft can design and build the complete experience — quickly, and the right way.',
    },
  },

  'lab-of-innovation': {
    slug: 'lab-of-innovation',
    title: 'Lab of Innovation',
    client: 'Lab of Innovation',
    category: 'EdTech Platform',
    description: 'Lab of Innovation empowers the next generation with robotics education for ages 6–18, corporate training in Industry 4.0, a products store, and an innovation lab with mentorship. A multi-audience platform serving students, institutions, corporates, and innovators in one seamless experience.',
    challenge: "One platform serving four audiences with completely different expectations: parents researching classes, college deans evaluating partnerships, corporate L&D heads budgeting training, and startup founders seeking incubation. Each audience speaks different languages and has different buying criteria.",
    solution: "Audience-first information architecture with universal credibility elements followed by clearly signposted pathways into dedicated sections. Each section written in its audience's language with tailored CTAs, proof points, and forms. Animation-rich storytelling with scroll-triggered reveals, animated counters, and gradient energy throughout.",
    outcome: 'Single platform where four audiences each find a tailored journey. Motion-rich design backed by concrete proof through workshop galleries and success stories. Students see educational progression, schools see placement support, corporates see ROI metrics, startups see funding support.',
    metrics: [
      { label: 'Students Trained', value: '1,000+' },
      { label: 'Kits Sold', value: '2,000+' },
      { label: 'Partner Organizations', value: '20+' },
      { label: 'Success Rate', value: '95%' },
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Animation Engine', 'E-Commerce Module', 'Booking System', 'Poppins + Inter Typography', 'Vercel Edge Hosting', 'Responsive Design'],
    image: '/images/cases/lab-of-innovation.png',
    architecture: [
      {
        title: 'Multi-Audience Architecture',
        description: 'Universal hero establishing credibility for everyone, followed by four clearly signposted pathways: robotics education, corporate training, products store, and innovation lab.',
        items: ['Animated stat counters', 'Gradient hero', 'Audience routing', 'Shared credibility'],
        accent: 'purple',
      },
      {
        title: 'Age-Tiered Curriculum',
        description: 'Curriculum ladder from play-based mechanisms to text-based coding to AI and engineering. School and college programs with industry alignment, internships, and placement support.',
        items: ['6–18 progression', 'Industry alignment', 'Placement support', 'Faculty credentials'],
        accent: 'teal',
      },
      {
        title: 'Corporate & Innovation',
        description: 'Industry 4.0 programs with ROI case studies: 30% productivity increase, computer-vision inspection replacing 15% defect rate. Innovation Lab offers equipment worth ₹10 Crores+ and startup mentorship.',
        items: ['ROI case studies', 'Industry programs', 'Lab access', 'Funding support'],
        accent: 'blue',
      },
    ],
    capabilities: [
      {
        title: 'Built-In E-Commerce',
        description: "Product cards with specs, cart management, order notes, and encrypted checkout all sharing the platform's design system.",
        tags: ['Store Integration', 'Encrypted Checkout', 'Product Specs', 'Design Consistency'],
      },
      {
        title: 'Consultation & Support',
        description: 'Free consultation scheduler with video, phone, and in-person options. 24/7 support hub with live chat, forum, FAQ, and certifications with LinkedIn badges.',
        tags: ['Booking System', 'Support Hub', 'Certifications', 'Social Proof'],
      },
      {
        title: 'Success Stories & Motion',
        description: 'Scroll-triggered animations, photo galleries with lightbox, success stories like crop-monitoring drones and smart-city traffic systems.',
        tags: ['Animations', 'Photo Gallery', 'Success Stories', 'Case Studies'],
      },
    ],
    solutionCards: [
      {
        title: 'Audience Routing',
        problem: 'Parents, college deans, corporate leaders, and founders all land on the same homepage with completely different expectations.',
        response: "Audience-first architecture with universal hero credibility followed by dedicated pathways written in each audience's language.",
        result: 'Every visitor finds their reason to engage within the first scroll.',
      },
      {
        title: 'Tangible Experience Online',
        problem: 'Core value is physical: hands-on building, real robots, industrial automation rigs. Website risked flattening that energy.',
        response: 'Motion-rich storytelling with animated counters, scroll reveals, galleries with lightbox, and concrete success stories.',
        result: 'Platform feels alive. Proof through workshop photos and success stories.',
      },
      {
        title: 'Native E-Commerce Integration',
        problem: 'Need shopping functionality without bolting on a separate system or breaking design continuity.',
        response: "Native storefront with product cards, cart, and encrypted checkout sharing the platform's design system.",
        result: 'Shopping feels like a natural extension of learning, not a bolted-on shop.',
      },
    ],
    delivery: [
      { phase: 'Phase 01', title: 'Audience Analysis & Navigation', description: 'Map four distinct audiences and their buyer journeys. Plan information architecture with shared hero and dedicated pathways.' },
      { phase: 'Phase 02', title: 'Design & Animation', description: 'Create animated hero with stat counters. Design four dedicated audience sections. Build animation library for scroll triggers.' },
      { phase: 'Phase 03', title: 'Build E-Commerce & Booking', description: 'Build React app with native storefront. Implement consultation booking system with video/phone/in-person options.' },
      { phase: 'Phase 04', title: 'Content & Launch', description: 'Create success story galleries, testimonials, FAQs. Integrate certifications with LinkedIn badge system. Launch with all audience pathways.' },
    ],
    automationHighlights: [
      { title: 'Animated Stat Counters', description: 'Live counters for students trained, kits sold, partnerships, and success rate animate on scroll.', metric: 'Dynamic credibility on load' },
      { title: 'Audience Routing', description: 'Clear pathways route each visitor to their dedicated section automatically.', metric: '4 distinct journeys' },
      { title: 'Certification Badges', description: 'Completed certifications automatically generate LinkedIn badges with unique IDs.', metric: 'Social proof at scale' },
    ],
    cta: {
      title: 'Want to Launch a Multi-Audience Digital Platform?',
      description: 'If your business serves more than one audience — and deserves a platform that speaks to each of them — Akechi Webcraft can design and build it the right way.',
    },
  },

  'parcelace': {
    slug: 'parcelace',
    title: 'ParcelAce',
    client: 'ParcelAce',
    category: 'Logistics Platform',
    description: "ParcelAce is a reverse logistics company with 10+ years experience serving DKMS, Dentsu, and Intugine. A bold, story-driven platform that positions ParcelAce against courier aggregators, showcases metric-led case studies, and converts enterprise visitors into qualified consultations.",
    challenge: "Every logistics website promises reliable shipping and great support. ParcelAce's real advantage — direct hub-manager relationships and custom programs — is invisible in standard feature lists. Visitors default to price comparison. Six different industries need different messaging but cannot each get a separate site.",
    solution: "Narrative-first positioning with contrast storytelling: side-by-side module showing what happens when a shipment breaks — aggregator's five-step spiral vs. ParcelAce's direct hub-manager call resolved in 2–3 hours. Six industry-specific landing pages with language tailored to each vertical's pain. Lead-qualifying consultation form filters for the right fit.",
    outcome: 'Platform where brand positioning, enterprise proof, and lead qualification work together. Metric-led case studies show 50% DKMS pickup improvement, 2-hour resolutions vs. 48-hour industry standard. Selectivity in lead capture reinforces premium positioning.',
    metrics: [
      { label: 'Years Experience', value: '10+' },
      { label: 'On-Time Air Delivery', value: '98%' },
      { label: 'Client Churn', value: '0%' },
      { label: 'Air Express Deliveries', value: '5K+' },
    ],
    technologies: ['HTML5/CSS3/JS', 'Responsive Design System', 'Lead Capture & Routing', 'WhatsApp Integration', 'Order Tracking', 'Customer Portal', 'SEO & Metadata', 'App Store Integration', 'Performance Optimization'],
    image: '/images/cases/parcelace.png',
    architecture: [
      {
        title: 'Narrative-Driven Positioning',
        description: "Homepage directly challenges visitor reliance on courier aggregators. Comparison section shows aggregator ticket spiral vs. ParcelAce direct hub-manager escalation resolved in 2–3 hours.",
        items: ['Contrast storytelling', 'Named marquee clients', 'Direct positioning', 'Comparison module'],
        accent: 'purple',
      },
      {
        title: 'Industry Solutions',
        description: 'Six dedicated landing pages for IT Corporate kits, Healthcare NGO logistics, GPS IoT pickups, D2C brands, Instagram sellers, and IT asset moves. Each page addresses specific operational pain.',
        items: ['Industry-first IA', 'Targeted landing pages', 'Pain point focus', 'Solution positioning'],
        accent: 'teal',
      },
      {
        title: 'Metric-Led Case Studies',
        description: 'Real outcomes with hard numbers: 50% DKMS donor pickup improvement, 2-hour resolution vs. 48-hour industry standard. Client logo wall and founder letter for credibility.',
        items: ['Outcome metrics', 'Client testimonials', 'Proof points', 'Founder credibility'],
        accent: 'blue',
      },
    ],
    capabilities: [
      {
        title: 'Enterprise Proof',
        description: 'Aggregator comparison, client logo wall, metric-led case studies, capability grid covering Meta Tech Partner WhatsApp API and AI voice agents.',
        tags: ['Differentiation', 'Social Proof', 'Enterprise Grade', 'Tech Stack'],
      },
      {
        title: 'Lead Qualification',
        description: 'Consultation form qualifies every lead with industry, monthly volume, WhatsApp, and biggest problem. Selective copy filters poor-fit enquiries.',
        tags: ['Qualifying Form', 'Selectivity', 'Lead Filtering', 'Premium Positioning'],
      },
      {
        title: 'Platform Ecosystem',
        description: 'Public order tracking, customer login to web app, newsletter capture, WhatsApp contact, iOS/Android app downloads.',
        tags: ['Order Tracking', 'Portal Access', 'Multi-Channel', 'App Integration'],
      },
    ],
    solutionCards: [
      {
        title: 'Differentiation Strategy',
        problem: 'Premium logistics compete on price with commodity aggregators. Hard to communicate real advantage in feature lists.',
        response: 'Contrast storytelling showing exactly what happens when shipments break. Direct comparison of resolution times and processes.',
        result: 'Conversation moves from price to proof before pricing is discussed.',
      },
      {
        title: 'Multi-Industry Targeting',
        problem: 'NGO donor kit logistics, IT corporate dispatch, and Instagram sellers have almost nothing in common.',
        response: "Industry-first IA with six dedicated landing pages, each opening with that audience's specific operational pain.",
        result: 'Every visitor lands on a page written just for them.',
      },
      {
        title: 'Lead Quality',
        problem: "ParcelAce deliberately doesn't work with everyone. Generic contact form floods operations with poor-fit enquiries.",
        response: 'Qualification-first consultation flow with industry, volume, and problem fields. Copy reinforces selectivity.',
        result: 'Filters leads before humans read them. Selectivity itself reinforces the brand.',
      },
    ],
    delivery: [
      { phase: 'Phase 01', title: 'Positioning & Strategy', description: "Define ParcelAce's differentiation story. Map six industry verticals and their pain points. Plan lead qualification criteria." },
      { phase: 'Phase 02', title: 'Design & Content', description: 'Create contrast storytelling module. Design six industry landing pages. Develop metric-led case studies and founder letter.' },
      { phase: 'Phase 03', title: 'Build & Integration', description: 'Build responsive storefront. Create lead-qualifying form with routing. Integrate order tracking and customer portal.' },
      { phase: 'Phase 04', title: 'Launch & Optimization', description: 'Optimize for SEO across industry keywords. Integrate WhatsApp and app store links. Launch with lead qualification metrics.' },
    ],
    automationHighlights: [
      { title: 'Lead Qualification Routing', description: 'Consultation form automatically qualifies leads by industry and volume, routing qualified prospects to the right team.', metric: '40%+ higher-quality leads' },
      { title: 'Industry Landing Pages', description: 'Distinct landing pages auto-generate for each industry vertical with tailored copy and messaging.', metric: '6 verticals covered' },
      { title: 'Case Study Metrics', description: 'Real operational outcomes automatically highlight the competitive advantage.', metric: '2-hour resolution promise' },
    ],
    cta: {
      title: 'Want a Website That Sells Like Your Best Salesperson?',
      description: 'If your business solves hard problems, your website should prove it. Akechi Webcraft builds story-driven platforms that turn visitors into qualified leads.',
    },
  },

  'raqz': {
    slug: 'raqz',
    title: 'RAQZ',
    client: 'RAQZ',
    category: 'E-Commerce',
    description: 'RAQZ is a direct-to-consumer brand selling handcrafted full-grain leather wallets, crossbody bags, pouches, and duffels made by artisans in Rajasthan. A storefront where heritage craftsmanship meets modern, conversion-focused shopping with pan-India free shipping.',
    challenge: 'Premium handcrafted leather sells on touch and texture — things a website cannot literally offer. Full-grain and suede leather risk looking like mass-market alternatives online. Catalog spans diverse price points (₹799 to ₹8,999) and buyer intents. Building trust for a young D2C brand without marketplace reputation.',
    solution: 'Built visual language around texture and story: full-bleed campaign photography, earthy editorial palette, narrative product copy describing origin and hand-tooling. Collection-first taxonomy with seven curated collections. Layered trust signals throughout: verified reviews, transparent policies, secure checkout, free shipping removes final objection.',
    outcome: 'Store that feels like the brand and sells like a platform. Editorial richness signals craftsmanship. Verified reviews and free shipping build trust for new D2C label. Fast CDN delivery keeps rich imagery fast on 4G connections.',
    metrics: [
      { label: 'Product Collections', value: '7' },
      { label: 'Price Range', value: '₹799–₹8,999' },
      { label: 'Shipping', value: 'Pan-India Free' },
      { label: 'Customer Reviews', value: 'Verified' },
    ],
    technologies: ['Shopify', 'Custom Liquid Theme', 'HTML5/CSS3/JavaScript', 'Digital Wallet Payments', 'Product Review System', 'Shopify CDN', 'SEO & Structured Data', 'Shipping Integration', 'Instagram Integration'],
    image: '/images/cases/raqz.png',
    architecture: [
      {
        title: 'Brand-First Storefront',
        description: 'Homepage leads with full-bleed campaign imagery and confident, minimal copy — "Carry Less. Keep More." and "Built to be Kept." Warm earthy palette and editorial layout mirror the tactile quality of leather.',
        items: ['Campaign imagery', 'Minimal copy', 'Earthy palette', 'Editorial design'],
        accent: 'purple',
      },
      {
        title: 'Collection Architecture',
        description: 'Seven curated collections — Bestsellers, Tri-fold Wallets, Bi-fold Wallets, Card-holders, Shoulder Bags, Leather Pouches, Duffel Bags. Intuitive navigation lets shoppers reach the right product in two clicks.',
        items: ['Collection-first IA', 'Curated grouping', 'Featured products', 'Navigation clarity'],
        accent: 'teal',
      },
      {
        title: 'Product Storytelling',
        description: 'Each product page combines narrative copy with practical detail — dimensions, leather type, hardware, origin. Signature pieces get evocative descriptions and multi-angle photography.',
        items: ['Narrative copy', 'Product specs', 'Multi-angle photos', 'Craftsmanship details'],
        accent: 'blue',
      },
    ],
    capabilities: [
      {
        title: 'Trust & Conversion',
        description: 'Verified customer reviews on every product card, transparent refund/exchange and shipping policies, secure checkout with digital wallets, active Instagram presence linked from store.',
        tags: ['Social Proof', 'Trust Signals', 'Transparent Policies', 'Social Media'],
      },
      {
        title: 'Sales Mechanics',
        description: 'Live sale countdown timer, strike-through pricing, "Shop the Look" modules, featured bestseller spotlight guide visitors toward proven favorites.',
        tags: ['Urgency', 'Pricing Display', 'Cross-sell', 'AOV Lift'],
      },
      {
        title: 'Performance & Delivery',
        description: 'Responsive image delivery via Shopify CDN serving right-sized renditions per device. Lazy loading below fold, compressed hero assets. Fast on 4G networks.',
        tags: ['CDN Delivery', 'Responsive Images', 'Mobile Speed', 'Performance'],
      },
    ],
    solutionCards: [
      {
        title: 'Conveying Craftsmanship',
        problem: 'Full-grain and suede leather sell on touch and texture. Online, photos risk making handcrafted goods look mass-market.',
        response: 'Entire visual language built around texture and story: campaign photography, earthy palette, narrative product copy describing origin and hand-tooling.',
        result: 'Site design itself signals craft. Price point feels earned before reading specifications.',
      },
      {
        title: 'Catalog Structure',
        problem: 'Wallets to duffels span different price bands and buyer intents. Flat product list buries hero products.',
        response: 'Collection-first taxonomy with seven curated collections. Bestsellers as default landing point.',
        result: 'Wallet buyers see bag cross-sells. Browse patterns lift average order value.',
      },
      {
        title: 'Building D2C Trust',
        problem: 'Young brand with no marketplace reputation. Shoppers hesitate to prepay thousands to unfamiliar label.',
        response: 'Verified reviews on cards, transparent policies, secure checkout with digital wallets, free pan-India shipping removes final objection.',
        result: 'D2C brand positioned with established retailer trust signals.',
      },
    ],
    delivery: [
      { phase: 'Phase 01', title: 'Brand & Product Strategy', description: 'Audit product range and price bands. Define brand positioning around craftsmanship. Plan seven collections.' },
      { phase: 'Phase 02', title: 'Design & Photography', description: 'Create earthy brand design. Conduct campaign and product photography. Write narrative product copy.' },
      { phase: 'Phase 03', title: 'Shopify Build & Integration', description: 'Build custom Liquid theme. Set up seven collections. Integrate product reviews and digital wallet payments.' },
      { phase: 'Phase 04', title: 'Launch & Growth', description: 'Optimize CDN images for 4G. Set up Instagram integration. Launch promotional mechanics and free-shipping campaign.' },
    ],
    automationHighlights: [
      { title: 'Sale Countdown Timer', description: 'Live countdown timer creates urgency on featured products, driving FOMO-driven conversions.', metric: '20%+ higher conversion' },
      { title: 'Verified Review Display', description: 'Customer reviews automatically surface on product cards and aggregate into ratings.', metric: 'Social proof on every product' },
      { title: 'Responsive Image Delivery', description: 'Shopify CDN automatically serves right-sized images per device, keeping rich photography fast.', metric: 'Fast on 4G connections' },
    ],
    cta: {
      title: 'Want to Launch a Premium E-Commerce Brand?',
      description: 'If you have a product worth telling a story about, Akechi Webcraft can design and build a store that does it justice — quickly, and the right way.',
    },
  },

  'akechi-crm': {
    slug: 'akechi-crm',
    title: 'AKechi CRM',
    client: 'Internal Product',
    category: 'Multi-Tenant CRM/PSA SaaS',
    description: 'AKechi CRM brings the whole customer lifecycle onto one secure, modular stack — leads, projects, billing, support, and AI. 22 independently deployable NestJS + Prisma microservices behind a single API gateway, and four Next.js frontends (portal, admin, customer, marketing) built so teams can ship customer value in minutes, not months.',
    challenge: 'Most teams run across scattered CRM and PSA point tools with data split between them. The platform must feel simple to five-person startups yet safe to enterprises, and deep engineering — microservices, multi-tenancy, RBAC, audit — risks intimidating non-technical buyers if it is not backed by a genuinely deny-by-default security posture underneath.',
    solution: 'Architected as 22 database-per-service microservices (152 models) behind a single API gateway, with a unified permission dialect and server-side deny-by-default authorization enforced in every service, in-cluster network policies for defense-in-depth, and a full observability stack (structured logs, Prometheus, OTel tracing) shipped before the feature work that depends on it.',
    outcome: "Docs 01–30 shipped: the security gate, RBAC administration, observability, deploy pipeline, and E2E/perf baselines all closed out Phases 1–2, and Phase 6's first module-depth pass (doc 30 — Work Management Suite) is complete across all eight of its workstreams, with Phase 3 (SSO & SCIM) under way next.",
    metrics: [
      { label: 'Microservices', value: '22' },
      { label: 'Data Models', value: '152' },
      { label: 'Frontend Apps', value: '4' },
      { label: 'Docs Shipped', value: '30+' },
    ],
    technologies: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'API Gateway', 'RBAC & SSO/SCIM', 'Azure AKS', 'Terraform'],
    image: '/images/cases/rocketcrm.png',
    // Relative, not absolute: this is the same domain as this site
    // (akechiwebcraft.com/akechi-crm via a Next.js Multi-Zones rewrite in
    // next.config.ts), so a relative path resolves correctly in every
    // environment — dev, staging, prod — with nothing to keep in sync.
    liveUrl: '/akechi-crm',
    architecture: [
      {
        title: 'CRM, Projects & Billing Together',
        description: 'Leads, contacts, companies, activities with a pipeline; project and work management with Kanban, WBS and time logging; billing built in with plans, subscriptions, invoices. No integrations to babysit, no data silos.',
        items: ['Unified CRM', 'Work management', 'Native billing', 'Time tracking'],
        accent: 'purple',
      },
      {
        title: 'Microservices Foundation',
        description: '22 independent, database-per-service microservices behind a single API gateway. Multi-tenant from day one, every query scoped by a stamped tenant header, on infra that targets Azure AKS with a documented free-tier fallback path.',
        items: ['Independent scaling', 'Database-per-service', 'Tenant-scoped queries', 'Azure + fallback infra'],
        accent: 'teal',
      },
      {
        title: 'Enterprise Security',
        description: 'Server-side deny-by-default authorization on every route, in-cluster network policies as defense-in-depth, full audit trail on every mutation, and a permission catalog so no permission string ever lives in component logic.',
        items: ['Deny-by-default authz', 'Network policies', 'Audit trail', 'Permission catalog'],
        accent: 'blue',
      },
    ],
    capabilities: [
      {
        title: 'Unified Lifecycle',
        description: 'CRM, projects, billing, and support all in one platform, aggregated into a single cross-module approvals inbox. No integrations means no data silos and no context-switching.',
        tags: ['Unified Platform', 'Approvals Inbox', 'Workflows', 'Cross-Module Automation'],
      },
      {
        title: 'Observability & Ops',
        description: 'Pino structured logging, Prometheus metrics, and OTel tracing on every service and the gateway, with real health aggregation and a free-tier Grafana/Loki/Jaeger stack for local and fallback environments.',
        tags: ['Prometheus', 'OTel Tracing', 'Structured Logs', 'Health Aggregation'],
      },
      {
        title: 'Accessible by Default',
        description: 'CI-gated Storybook axe scans, real WCAG contrast checks, and keyboard/touch-accessible drag-and-drop everywhere native HTML5 DnD used to be the only path.',
        tags: ['A11y CI', 'Keyboard DnD', 'Contrast Gate', 'Playwright E2E'],
      },
    ],
    solutionCards: [
      {
        title: 'Platform Cohesion',
        problem: 'Replacing five tools without building a tangled monolith risks the all-in-one trap.',
        response: '22 microservices each own their own database and deploy independently behind one gateway, communicating through contract events.',
        result: 'One seamless product for users. Independence and resilience for engineering.',
      },
      {
        title: 'Enterprise Trust',
        problem: 'Shared SaaS platforms must guarantee data isolation, granular access control, and complete accountability.',
        response: 'Deny-by-default authorization, tenant-scoped queries, and an audit trail on every mutation were built as Phase 1 of the roadmap, not retrofitted later.',
        result: 'Every one of the 22 services enforces the same permission dialect server-side.',
      },
      {
        title: 'Depth Over Breadth',
        problem: "Shipping 30 breadth documents can still leave individual modules shallow if depth work never gets scheduled.",
        response: 'A binding numbered-document workflow requires 100% completion — acceptance criteria and testing checklist — before the next document opens, with a dedicated module-depth phase after breadth closes.',
        result: 'Work Management Suite (doc 30) shipped complete across all eight of its workstreams as the first depth pass.',
      },
    ],
    delivery: [
      { phase: 'Phase 01', title: 'Security Gate', description: 'Unify the permission dialect, ship the authz guard package, and enforce server-side deny-by-default authorization across all 22 services.' },
      { phase: 'Phase 02', title: 'Platform Hardening', description: 'Add RBAC administration, tenant security policies, full observability, CI/CD with automatic rollback, and an E2E + load-test baseline.' },
      { phase: 'Phase 03', title: 'Identity & Access', description: 'Layer in SSO and SCIM provisioning on top of the hardened authorization core.' },
      { phase: 'Phase 06', title: 'Module Depth', description: 'Revisit shipped modules one at a time for real depth — Work Management Suite first, complete across all eight workstreams.' },
    ],
    automationHighlights: [
      { title: 'Route Coverage Gate', description: 'CI fails if any controller route is missing a permission key or an explicit @Public() marker.', metric: 'Zero unguarded routes' },
      { title: 'Cross-Module Approvals Inbox', description: 'Timesheets, deal governance, WBS plans and project requests aggregate into one inbox with optimistic approve/reject.', metric: '4 modules, 1 inbox' },
      { title: 'Automatic Rollback Pipeline', description: 'Build-once deploys move through staging smoke tests to a manual-approval production gate, rolling back automatically on smoke failure.', metric: 'Zero manual rollback steps' },
    ],
    cta: {
      title: 'Want to Launch a SaaS Platform of Your Own?',
      description: 'If you have a product vision that needs serious engineering and a website that can sell it, Akechi Webcraft can design and build both — quickly, and the right way.',
    },
  },

  'carohitvijay': {
    slug: 'carohitvijay',
    title: 'CA Rohit Vijay & Associates',
    client: 'CA Rohit Vijay & Associates',
    category: 'Professional Services Website',
    description: 'A comprehensive digital presence for a leading Chartered Accountancy firm in Jaipur, offering auditing, taxation, corporate advisory, business registration, NGO compliance, and trademark services across Rajasthan and India.',
    challenge: 'Chartered Accountancy firms traditionally rely on referrals with minimal digital presence. CA Rohit Vijay & Associates needed a website that could clearly communicate 50+ distinct services — from ITR filing to FCRA registration — without overwhelming visitors, while building trust for a regulated profession where solicitation rules apply.',
    solution: 'Built a structured, service-first website with dedicated sections for each practice area: business registration, audit & tax, compliance, NGO, and IP. Quick-link portals to GST and Income Tax sites reduce friction for returning clients. Animated statistics, client testimonials, and sector-specific messaging establish credibility across 8 industries served.',
    outcome: 'A professional digital platform that serves both new and existing clients. Visitors can navigate directly to the specific service they need, access government portals, and initiate consultations — all within a clean, compliance-aware design that respects Bar Council advertising guidelines.',
    metrics: [
      { label: 'Services Listed', value: '50+' },
      { label: 'Industries Served', value: '8+' },
      { label: 'Practice Areas', value: '5' },
      { label: 'Established', value: '2010' },
    ],
    technologies: ['HTML5/CSS3/JavaScript', 'Responsive Design', 'GST Portal Integration', 'Income Tax Portal Links', 'WhatsApp Integration', 'Google Maps', 'SEO Optimization', 'Animated Counters', 'Multi-Section Navigation'],
    image: '/images/cases/carohitvijay.png',
    architecture: [
      {
        title: 'Service-First Information Architecture',
        description: 'Five distinct practice areas — Business Registration, Audit & Tax, Compliance, NGO, and Trademark & IP — each with dedicated sections and service pages. Visitors reach any of 50+ services within two clicks.',
        items: ['Business Registration', 'Audit & Tax', 'NGO & Non-Profit', 'Trademark & IP', 'Compliance Management'],
        accent: 'blue',
      },
      {
        title: 'Quick-Access Government Portals',
        description: 'Curated direct links to GST Portal and Income Tax Department services — e-Pay Tax, e-Verify Return, Instant e-PAN, Tax Calendar, Income Tax Calculator — saving clients from navigating government websites independently.',
        items: ['GST Portal', 'Income Tax Portal', 'e-Pay Tax', 'e-Verify Return', 'Tax Calendar'],
        accent: 'teal',
      },
      {
        title: 'Trust & Credibility Layer',
        description: 'Animated counters for ITR filings, GST returns, company registrations, and clients served. Three-tier testimonials from verified clients across tech, manufacturing, and industrial sectors. Sector coverage across 8 industries.',
        items: ['Animated statistics', 'Client testimonials', '8 industry sectors', 'Established since 2010'],
        accent: 'purple',
      },
    ],
    capabilities: [
      {
        title: 'Business Registration Suite',
        description: 'End-to-end company incorporation covering Private Limited, LLP, OPC, Nidhi, Producer Company, Partnership, GST, FSSAI, IEC, MSME, RERA, and Startup India registration.',
        tags: ['Pvt Ltd', 'LLP', 'OPC', 'GST Registration', 'MSME', 'Startup India'],
      },
      {
        title: 'Audit & Tax Management',
        description: 'Comprehensive compliance filing: ITR, GST Returns, ROC, TDS, XBRL, and full audit services — GST Audit, NGO Audit, Tax Audit, Statutory Audit, Stock Audit, and Bank Audit.',
        tags: ['ITR Filing', 'GST Returns', 'Tax Audit', 'Statutory Audit', 'TDS Returns'],
      },
      {
        title: 'NGO & Non-Profit',
        description: 'Complete non-profit setup: Trust, Society, Section-8 Company registration, FCRA, NGO Darpan, 80G & 12A, and CSR-1 filing for charitable and social impact organizations.',
        tags: ['Trust Registration', 'Section-8', 'FCRA', '80G & 12A', 'NGO Audit'],
      },
      {
        title: 'Trademark & IP',
        description: 'Full intellectual property protection — trademark, copyright, design, and patent registration for brands, creators, and innovators across India.',
        tags: ['Trademark', 'Copyright', 'Design', 'Patent'],
      },
    ],
    solutionCards: [
      {
        title: 'Service Discoverability',
        problem: 'With 50+ services across 5 practice areas, visitors risk landing on a wall of text that obscures the specific help they need.',
        response: 'Service-first architecture with clear section headings, card-based layouts, and direct links to individual service pages. Quick-link portals reduce steps for returning clients.',
        result: 'Any visitor — new or returning — finds their required service or government portal within two clicks.',
      },
      {
        title: 'Regulatory Compliance in Design',
        problem: 'CA firms operate under Bar Council advertising guidelines that prohibit direct solicitation. Website design had to build credibility without appearing promotional.',
        response: 'Built a disclaimer-first flow, informational tone throughout, and a CTA structure framed around consultation and enquiry rather than sales conversion.',
        result: 'Site meets professional conduct guidelines while still generating qualified consultation requests.',
      },
      {
        title: 'Multi-Industry Trust Signals',
        problem: 'A CA firm serving real estate, healthcare, manufacturing, and retail simultaneously risks appearing generic to each sector.',
        response: 'Dedicated sector grid with 8 industry verticals, testimonials from verified clients in tech, manufacturing, and industry, and animated proof metrics.',
        result: 'Each prospective client sees their own sector represented — building immediate relevance before reading a word of copy.',
      },
    ],
    delivery: [
      { phase: 'Phase 01', title: 'Service Audit & Structure', description: 'Map all 50+ services across 5 practice areas. Plan URL structure, navigation hierarchy, and quick-link portals for government resources.' },
      { phase: 'Phase 02', title: 'Design & Content', description: 'Create professional, trust-first design. Write compliance-aware copy for each service page. Build sector grid and testimonial framework.' },
      { phase: 'Phase 03', title: 'Build & Integration', description: 'Develop responsive multi-page website with animated counters, Google Maps embed, WhatsApp CTA, and government portal quick links.' },
      { phase: 'Phase 04', title: 'SEO & Launch', description: 'Optimize all service pages for local Jaipur CA search terms. Set up Google Search Console. Launch with consultation inquiry tracking.' },
    ],
    automationHighlights: [
      { title: 'Animated Proof Counters', description: 'ITR filings, GST returns, company registrations, and client counts animate on scroll — building credibility without explicit claims.', metric: '50+ services showcased' },
      { title: 'Government Portal Quick Links', description: 'Direct links to 8+ Income Tax Department services eliminate navigation friction for repeat clients.', metric: 'Zero extra navigation steps' },
      { title: 'WhatsApp Consultation Flow', description: 'Single-tap WhatsApp CTA connects prospective clients directly to the firm for consultation requests.', metric: 'Instant lead capture' },
    ],
    cta: {
      title: 'Need a Professional Website for Your CA or Advisory Firm?',
      description: 'Akechi Webcraft builds clean, compliance-aware digital platforms for financial and legal professionals — structured for discoverability, trust, and qualified consultation flow.',
    },
  },

  'at-solar': {
    slug: 'at-solar',
    title: 'A&T Solar',
    client: 'Ark & Tavish Compute LLP',
    category: 'Renewable Energy',
    description: "A&T Solar is India's trusted solar EPC partner, delivering residential, commercial, and government installations while exporting Balance of System components worldwide. A conversion-focused platform built to serve homeowners chasing lower bills and international distributors sourcing BOS parts, in the same visit.",
    challenge: 'Domestic homeowners want a simple, trustworthy path to subsidy-backed rooftop solar. International BOS buyers want a serious industrial supplier. A single site had to earn both kinds of trust without one audience diluting the other, while proving four years of MNRE-registered delivery at scale.',
    solution: 'Built a dual-track homepage: a consumer-facing survey CTA and subsidy messaging up top, with a dedicated "Explore BOS Export" path for international buyers. Live stat counters for installed capacity, completed projects, and active states sit directly under the fold, backed by Tier-1 component and 25-year warranty guarantees.',
    outcome: 'One platform now serves two very different buyers without compromise. Homeowners see subsidy assistance and a free site survey within seconds; export partners get a dedicated BOS pathway. Trust signals — MNRE registration, 672 projects completed, 4.9★ across 300+ installations — do the selling before a form is ever filled.',
    metrics: [
      { label: 'Projects Completed', value: '672+' },
      { label: 'Capacity Installed', value: '30 MWp' },
      { label: 'Commercial Plants', value: '12' },
      { label: 'States Active', value: '4' },
    ],
    technologies: ['Next.js', 'React', 'Solar ROI Calculator', 'Lead Capture & Routing', 'WhatsApp Integration', 'SEO Optimization', 'Animated Counters', 'Responsive Design'],
    image: '/images/cases/at-solar.png',
    architecture: [
      {
        title: 'Dual-Audience Homepage',
        description: 'Hero splits attention cleanly: "Get Free Site Survey" for domestic homeowners and businesses, "Explore BOS Export" for international installers and distributors sourcing components.',
        items: ['Dual CTA hero', 'MNRE badge', 'Trust checklist', 'Live stat counters'],
        accent: 'blue',
      },
      {
        title: 'Solar ROI Calculator',
        description: 'Interactive calculator lets prospective homeowners estimate savings and payback period before ever speaking to a sales rep, lowering the barrier to a survey request.',
        items: ['Savings estimate', 'Payback modeling', 'Subsidy awareness', 'Self-serve qualification'],
        accent: 'teal',
      },
      {
        title: 'Global Export Desk',
        description: 'A dedicated BOS export section speaks to a completely different buyer — mounting structures, cables, and connectors — positioned as an industrial supply relationship, not a residential upsell.',
        items: ['BOS component catalog', 'Export positioning', 'Distributor messaging', 'International framing'],
        accent: 'purple',
      },
    ],
    capabilities: [
      {
        title: 'Proof at a Glance',
        description: '30 MWp installed, 672+ projects completed, 12 commercial plants, and 4 active states surface immediately below the hero, before any pitch is made.',
        tags: ['Stat Counters', 'Social Proof', 'Scale Signals'],
      },
      {
        title: 'Subsidy & Survey Funnel',
        description: 'Residential and commercial visitors are guided straight to a free site survey request, with subsidy assistance called out as a core part of the offer.',
        tags: ['Lead Capture', 'Subsidy Messaging', 'Residential Funnel'],
      },
      {
        title: 'Government & Enterprise Credibility',
        description: 'Jal Jeevan Mission and Indian Railways project experience is used to reassure large institutional buyers evaluating EPC partners at scale.',
        tags: ['Government Projects', 'Enterprise Trust', 'EPC Credibility'],
      },
    ],
    solutionCards: [
      {
        title: 'Two Buyers, One Site',
        problem: 'A homeowner comparing subsidy quotes and an overseas distributor sourcing BOS components have nothing in common — except landing on the same domain.',
        response: 'Split the hero into two clear pathways from the first screen: site survey for domestic buyers, export desk for international ones.',
        result: 'Neither audience has to wade through irrelevant messaging to find their reason to act.',
      },
      {
        title: 'Earning Trust Fast',
        problem: 'Solar EPC is a high-consideration purchase; visitors are wary of inflated claims and unclear warranties.',
        response: 'Led with MNRE registration, Tier-1 component guarantees, 25-year warranties, and hard installation numbers instead of generic promises.',
        result: 'Visitors reach a credible picture of the company before scrolling past the hero.',
      },
      {
        title: 'Lowering the First Step',
        problem: "Requesting a site survey feels like a commitment when a visitor hasn't even confirmed solar makes financial sense for them.",
        response: 'Built a self-serve ROI calculator so visitors can estimate savings before requesting a survey.',
        result: 'Warmer leads reach the survey form, already convinced of the numbers.',
      },
    ],
    delivery: [
      { phase: 'Phase 01', title: 'Audience & Offer Mapping', description: 'Separate residential/commercial buyers from international BOS distributors. Define distinct CTAs, proof points, and messaging for each.' },
      { phase: 'Phase 02', title: 'Design & Trust System', description: 'Design dual-path hero, stat counter system, and trust checklist. Build the BOS export section with industrial-supplier positioning.' },
      { phase: 'Phase 03', title: 'Build & Calculator', description: 'Build responsive Next.js site with the solar ROI calculator, lead capture forms, and WhatsApp contact integration.' },
      { phase: 'Phase 04', title: 'Launch & Optimization', description: 'Optimize for local solar search terms, connect survey and export enquiry routing, launch with stat counters live.' },
    ],
    automationHighlights: [
      { title: 'ROI Calculator Qualification', description: 'Visitors self-qualify by estimating savings before requesting a survey, reducing low-intent enquiries.', metric: 'Pre-qualified survey leads' },
      { title: 'Dual-Funnel Routing', description: 'Residential and export enquiries are separated at the CTA level, keeping sales follow-up relevant from message one.', metric: '2 distinct lead paths' },
      { title: 'Live Proof Counters', description: 'Installed capacity and project counts animate on load, keeping credibility numbers current without manual page edits.', metric: '672+ projects shown live' },
    ],
    cta: {
      title: 'Want a Website That Sells to Two Markets at Once?',
      description: "If your business serves a domestic customer and an international one under the same brand, Akechi Webcraft can design a platform that speaks to both without compromise.",
    },
  },

  'nh-dry-fruits': {
    slug: 'nh-dry-fruits',
    title: 'NH Dry Fruits',
    client: 'NH Dry Fruits',
    category: 'E-Commerce',
    description: 'NH Dry Fruits is a third-generation Jaipur dry fruit retailer selling hand-graded almonds, cashews, pistachios, saffron, and gift boxes with a 48-hour farm-to-pack promise. A storefront built to sell freshness and authenticity to health-conscious families, corporate gifters, and wholesale buyers alike.',
    challenge: 'Dry fruits are a low-differentiation commodity online — every seller claims "premium quality." NH needed to prove freshness and sourcing integrity that customers normally verify by touch and smell, while serving three very different buyers: retail families, corporate gifters, and wholesale accounts.',
    solution: "Built the entire storefront narrative around verifiable freshness: 48-hour farm-to-pack turnaround, two-pass hand-grading, nitrogen-flushed weekly batches with printed dates, and on-request lab reports. Dedicated Gifting, Corporate, and Wholesale paths route each buyer type to relevant products and terms instead of one flat catalog.",
    outcome: 'A store that turns commodity anxiety into confidence. 50,000+ families and a 4.8★ average rating sit directly under the hero, alongside free delivery above ₹799 and a 7-day no-questions return policy. Family-legacy storytelling gives a routine purchase an origin story worth trusting.',
    metrics: [
      { label: 'Happy Families', value: '50,000+' },
      { label: 'Average Rating', value: '4.8★' },
      { label: 'Farm to Pack', value: '48 hrs' },
      { label: 'Delivery Window', value: '1–3 Days' },
    ],
    technologies: ['Next.js', 'React', 'E-Commerce Storefront', 'Product Search', 'Wholesale Portal', 'Order Tracking', 'SEO Optimization', 'Responsive Design'],
    image: '/images/cases/nh-dry-fruits.png',
    architecture: [
      {
        title: 'Freshness-First Hero',
        description: 'Homepage opens with "The finest dry fruits, graded by hand" backed instantly by 50,000+ happy families, a 4.8★ rating, and a 48-hour farm-to-pack claim — proof before pitch.',
        items: ['Trust statistics', 'Freshness promise', 'Dual CTA', 'Origin storytelling'],
        accent: 'purple',
      },
      {
        title: 'Three-Path Navigation',
        description: 'Shop All, Gifting, and Wholesale sit as distinct top-level paths so a retail buyer, a corporate gifter, and a bulk purchaser each reach relevant products and pricing immediately.',
        items: ['Categories menu', 'Gifting path', 'Wholesale program', 'Corporate accounts'],
        accent: 'teal',
      },
      {
        title: 'Transparency Layer',
        description: 'FSSAI certification, origin certificates, and lab reports are surfaced as available-on-request, turning a normally invisible supply chain into a visible trust signal.',
        items: ['FSSAI certified', 'Origin certificates', 'Lab reports', 'Batch date printing'],
        accent: 'blue',
      },
    ],
    capabilities: [
      {
        title: 'Verifiable Freshness',
        description: 'Two-pass hand-grading and nitrogen-flushed weekly batch packing are explained as process, not adjective, giving "fresh" a concrete backing.',
        tags: ['Hand-Grading', 'Batch Packing', 'Freshness Proof'],
      },
      {
        title: 'Multi-Buyer Storefront',
        description: 'Retail shoppers, corporate gift buyers, and wholesale accounts each get a dedicated path instead of being funneled through one generic catalog.',
        tags: ['Gifting', 'Corporate', 'Wholesale'],
      },
      {
        title: 'Risk-Free Purchasing',
        description: 'Free delivery above ₹799 and a 7-day no-questions return policy remove the hesitation that commodity food purchases carry online.',
        tags: ['Free Delivery', 'Returns Policy', 'Purchase Confidence'],
      },
    ],
    solutionCards: [
      {
        title: 'Commodity Differentiation',
        problem: 'Every dry fruit seller online claims premium quality, leaving customers unable to tell real freshness from marketing copy.',
        response: 'Made freshness concrete: 48-hour farm-to-pack turnaround, two-pass hand-grading, and nitrogen-flushed batch dates explained as process.',
        result: "Freshness becomes something the customer can verify, not just a word on the label.",
      },
      {
        title: 'Serving Three Buyers',
        problem: 'A family buying almonds, a company ordering festival gift boxes, and a retailer placing a bulk order need entirely different information and pricing.',
        response: 'Built dedicated Gifting and Wholesale paths alongside the main catalog, each with its own framing and terms.',
        result: 'Each buyer type finds their relevant path within the first navigation click.',
      },
      {
        title: 'Building Purchase Confidence',
        problem: 'Food purchases are hard to return, and unfamiliar online sellers face natural buyer hesitation.',
        response: 'Layered free delivery above ₹799, a 7-day no-questions return policy, and family-legacy storytelling throughout the site.',
        result: 'A 4.8★ rating and 50,000+ family base become believable, not just claimed.',
      },
    ],
    delivery: [
      { phase: 'Phase 01', title: 'Product & Audience Research', description: 'Audit the full product catalog across nuts, seeds, dried fruits, and spices. Map retail, gifting, and wholesale buyer needs separately.' },
      { phase: 'Phase 02', title: 'Design & Trust Content', description: 'Design a warm, minimalist brand system. Write process-based freshness copy and family-legacy storytelling.' },
      { phase: 'Phase 03', title: 'Storefront Build', description: 'Build the e-commerce storefront with search, cart, checkout, and dedicated Gifting and Wholesale sections.' },
      { phase: 'Phase 04', title: 'Launch & Optimization', description: 'Optimize for local Rajasthan and dry fruit search terms, connect delivery and returns policy messaging, launch across all categories.' },
    ],
    automationHighlights: [
      { title: 'Batch Date Transparency', description: 'Printed batch dates on nitrogen-flushed packs give every order a visible freshness timestamp.', metric: 'Weekly batch turnover' },
      { title: 'Buyer-Path Routing', description: 'Gifting and Wholesale navigation routes each buyer type to relevant products without filtering through the full catalog.', metric: '3 dedicated buyer paths' },
      { title: 'Review & Rating Display', description: 'Customer ratings surface on product cards and roll up into the storewide 4.8★ average automatically.', metric: '4.8★ average rating' },
    ],
    cta: {
      title: 'Want to Sell a Commodity Product Like a Premium Brand?',
      description: 'If your product competes on trust and freshness that customers usually verify in person, Akechi Webcraft can design a storefront that proves it online.',
    },
  },
  'akechi-trade': {
    slug: 'akechi-trade',
    title: 'AkechiTrade',
    client: 'Internal Product',
    category: 'AI Trading Platform',
    description: 'AkechiTrade is an AI-powered market intelligence and paper-trading platform for Indian financial markets (NSE, BSE, MCX), combining a real-time data terminal, a sandbox trading engine, and a multi-agent AI research desk under SEBI Research Analyst governance.',
    challenge: 'Retail traders in India are left choosing between bare-bones charting apps and expensive institutional terminals, with no risk-free way to test AI-assisted research against live market data before trusting it with real capital.',
    solution: 'Built a full-stack platform on Azure and Azure Databricks: a real-time WebSocket market-data gateway, a virtual-money sandbox trading engine that models Indian brokerage/STT/GST charges exactly, and a LangGraph multi-agent research desk (five analysts plus a CIO) that produces daily pre-market recommendations behind an immutable audit trail and a human SEBI RA review gate.',
    outcome: 'Currently in active build: seventeen backend services, six Databricks lakehouse packages, and the full Next.js terminal are landing against a complete engineering documentation suite, with compliance and audit-trail guardrails built in from day one rather than retrofitted before launch.',
    metrics: [
      { label: 'Services Shipped', value: '17' },
      { label: 'AI Analyst Agents', value: '5 + CIO' },
      { label: 'Markets Covered', value: 'NSE·BSE·MCX' },
      { label: 'Compliance', value: 'SEBI RA Governed' },
    ],
    technologies: ['Next.js', 'FastAPI', 'LangGraph', 'Claude', 'Azure Databricks', 'PostgreSQL', 'Redis', 'Terraform'],
    image: '/images/cases/case-2.png',
    // Relative, not absolute: this is the same domain as this site
    // (akechiwebcraft.com/akechi-trade via a Next.js Multi-Zones rewrite in
    // next.config.ts), so a relative path resolves correctly in every
    // environment — dev, staging, prod — with nothing to keep in sync.
    liveUrl: '/akechi-trade',
    architecture: [
      {
        title: 'Market Data Layer',
        description: 'Real-time WebSocket gateway and Redis hot path feeding candles, options Greeks, and an alerts engine off a live exchange tape.',
        items: ['WebSocket gateway', 'Redis hot path', 'Candles & Greeks', 'Alerts engine'],
        accent: 'blue',
      },
      {
        title: 'Sandbox Trading Engine',
        description: 'Virtual-money order lifecycle with fill simulation and the full Indian charges stack — brokerage, STT/CTT, exchange fees, GST, stamp duty.',
        items: ['Order lifecycle', 'Charges engine', 'Margin & risk checks', 'P&L accounting'],
        accent: 'green',
      },
      {
        title: 'AI Research Desk',
        description: 'LangGraph multi-agent panel on Databricks Mosaic AI, publishing to an immutable audit trail behind a human RA review gate.',
        items: ['LangGraph agents', 'Claude on Databricks', 'Audit trail', 'RA review gate'],
        accent: 'purple',
      },
    ],
    capabilities: [
      {
        title: 'Real-Time Terminal',
        description: 'Live market data, option chains, and charting for NSE, BSE, MCX, currency, and mutual funds in one Next.js terminal.',
        tags: ['Market Data', 'Options', 'Charting'],
      },
      {
        title: 'Risk-Managed Paper Trading',
        description: 'A sandbox engine that models real Indian order types (CNC/MIS/NRML/GTT/BO/CO) and charges against live prices with virtual money only.',
        tags: ['Paper Trading', 'Risk Engine', 'Charges Model'],
      },
      {
        title: 'Governed AI Recommendations',
        description: 'A daily pre-market pipeline where AI-generated calls are scored, audited, and gated behind SEBI Research Analyst review before publication.',
        tags: ['LangGraph', 'Compliance', 'Audit Trail'],
      },
      {
        title: 'Graduate-to-Live Path',
        description: 'A broker-bridge service behind four explicit gates — feature flag, versioned consent, step-up MFA, per-order confirmation — for users who choose to connect a real broker.',
        tags: ['Broker Bridge', 'DPDP Consent', 'Kill Switch'],
      },
    ],
    solutionCards: [
      {
        title: 'Research Without Risk',
        problem: 'Traders have no safe way to see whether AI-generated research is actually good before risking real money on it.',
        response: 'Built a sandbox engine on live market data so every AI call and every strategy can be paper-traded first, charges and all.',
        result: 'A track record traders can inspect before they ever fund a live account.',
      },
      {
        title: 'Compliance as Architecture',
        problem: 'AI-generated financial content is an easy way to accidentally cross into unregistered investment advice.',
        response: 'Wired the immutable audit trail and the human SEBI RA review gate into the publication pipeline itself, not as a policy layered on afterward.',
        result: 'Every recommendation is traceable and reviewable by design, not by exception.',
      },
      {
        title: 'India-Specific by Default',
        problem: 'Generic trading platforms get Indian market mechanics wrong — settlement cycles, circuit bands, MCX lot sizing, CTT vs STT.',
        response: 'Modeled Indian market calendars, charges, and product terms (CNC/MIS/NRML/GTT) directly into the shared packages every service imports.',
        result: 'Domain correctness that does not have to be re-derived service by service.',
      },
    ],
    delivery: [
      { phase: '01', title: 'Specify', description: 'Write the SRD and binding architecture ADRs before code, covering compliance, data flows, and disaster recovery.' },
      { phase: '02', title: 'Build the Platform', description: 'Land shared packages, the seventeen services, and the Databricks lakehouse against that spec.' },
      { phase: '03', title: 'Wire Compliance In', description: 'Build the audit trail, SEBI RA review gate, and DPDP consent flows as load-bearing parts of the pipeline, not add-ons.' },
      { phase: '04', title: 'Verify Without a Cluster', description: 'Give every lakehouse and infra package a deterministic CI gate that checks real invariants without needing Databricks or Terraform applied.' },
      { phase: '05', title: 'Go Live', description: 'Work the go-live runbook — credentials, registrations, and the day-two rotation calendar — toward a supervised launch.' },
    ],
    automationHighlights: [
      { title: 'Deterministic Compliance Gates', description: 'Each lakehouse package ships a pure-Python CI gate that checks its Databricks-reference semantics without a live cluster.', metric: '7 CI gates' },
      { title: 'IaC Verified Before Apply', description: 'Terraform, Helm, and GitHub Actions are asserted against parsed files — naming, private access, deploy windows — before anything is ever applied.', metric: 'Zero live applies' },
      { title: 'Audit-First Publication', description: 'Every AI recommendation writes to the immutable audit trail before it can be published, never after.', metric: '100% pre-publish audit' },
    ],
    cta: {
      title: 'Building something that needs both AI research and real compliance guardrails?',
      description: 'Akechi Webcraft can design and build platforms where AI, trading logic, and regulatory constraints have to work together from day one.',
    },
  },

  'akechi-lms': {
    slug: 'akechi-lms',
    title: 'Akechi LMS',
    client: 'Internal Product',
    category: 'AI-First Enterprise LMS',
    description: 'Akechi Lms is a multi-tenant, AI-first Enterprise Learning Management System serving schools, universities, coaching institutes, and corporate L&D under one white-labelled backend, built to scale to millions of learners across thousands of tenants.',
    challenge: 'Schools, universities, coaching institutes, and corporate L&D teams each need a full LMS — courses, assessments, live classes, grading, finance, placements, HR — but every existing option forces a choice between a rigid single-tenant product or a fragile pile of point tools stitched together per customer.',
    solution: 'Built as one NestJS modular-monolith backend and one Next.js 15 frontend around a trust layer shipped first: tenant isolation, identity, deny-by-default authorization, and audit — with every one of 31 vertical-slice modules built on top of it rather than bolted alongside it.',
    outcome: 'Twenty-nine epics (E0–E28) have shipped against 60 Prisma migrations, with white-label branding per tenant, Postgres RLS enforcing isolation as the backstop behind every tenant-scoped query, and a Definition of Done that will not let a module ship without its permission keys, audit event, and accessibility pass.',
    metrics: [
      { label: 'Backend Modules', value: '31' },
      { label: 'Epics Shipped', value: 'E0–E28' },
      { label: 'DB Migrations', value: '60' },
      { label: 'Target Scale', value: 'Thousands of Tenants' },
    ],
    technologies: ['NestJS 11', 'Next.js 15', 'Prisma 6', 'PostgreSQL 16', 'Redis', 'BullMQ', 'Socket.IO', 'Zod', 'Azure'],
    image: '/images/cases/case-2.png',
    // Absolute, unlike the other in-house products: the LMS is deployed on its
    // own subdomain (lms.akechiwebcraft.com), so "Visit live site" goes there
    // directly instead of through the /akechi-lms Multi-Zones rewrite in
    // next.config.ts, which stays in place for the zone itself.
    liveUrl: 'https://lms.akechiwebcraft.com',
    architecture: [
      {
        title: 'Trust Layer Foundation',
        description: 'Tenancy, identity, deny-by-default authorization, and audit are built first and shared by every module, not reimplemented per feature.',
        items: ['Tenant-scoped queries', 'Permission catalog', 'Postgres RLS backstop', 'Domain event audit trail'],
        accent: 'purple',
      },
      {
        title: 'Modular Monolith Backend',
        description: '31 vertical-slice NestJS modules — course, assess, live, grade, finance, crm, placement, hr, ai — each owning its own controller, service, repository, and domain layer.',
        items: ['NestJS 11', 'Prisma 6', 'BullMQ jobs', 'Socket.IO realtime'],
        accent: 'teal',
      },
      {
        title: 'Role-Based Frontend',
        description: "One Next.js 15 app renders every role's dashboard after a single login, with Zod contracts shared end-to-end between forms and the API.",
        items: ['Next.js 15 App Router', 'React Query', 'Zustand', 'next-intl'],
        accent: 'blue',
      },
    ],
    capabilities: [
      {
        title: 'Multi-Tenant White-Labelling',
        description: 'Schools, universities, coaching institutes, and corporate L&D each get branded tenant experiences on shared infrastructure, isolated at the database and query layer.',
        tags: ['Multi-Tenant', 'White-Label', 'Postgres RLS'],
      },
      {
        title: 'Deny-by-Default Authorization',
        description: 'Every route carries an explicit permission key or is explicitly public; a permission catalog and route-coverage check keep the guard honest in CI.',
        tags: ['RBAC', 'Permission Catalog', 'CI Enforced'],
      },
      {
        title: 'Full Learning Lifecycle',
        description: 'Courses, live classes, assessments, gradebook, attendance, certificates, finance, placements, and HR all ship as first-class modules, not add-ons.',
        tags: ['Assessment', 'Live Classes', 'Gradebook', 'Finance'],
      },
      {
        title: 'AI-First by Design',
        description: 'An AI module and generation-usage tracking are built into the core schema from the first migration, not retrofitted after launch.',
        tags: ['AI Generations', 'Usage Metering', 'Search'],
      },
    ],
    solutionCards: [
      {
        title: 'Fragmented Point Tools',
        problem: 'Institutes typically stitch together a course host, a video tool, a spreadsheet gradebook, and a separate CRM, with no shared identity or audit trail.',
        response: 'Akechi Lms unifies courses, assessment, live classes, grading, finance, CRM, and placements behind one authenticated session and one permission model.',
        result: '31 modules share one trust layer instead of 31 separate access-control implementations.',
      },
      {
        title: 'Tenant Isolation at Scale',
        problem: "A single misfiltered query in a multi-tenant system can leak one institute's learner data into another's dashboard.",
        response: 'Every tenant-owned query filters on tenantId from the authenticated context, backed by Postgres RLS as the enforced last line of defense.',
        result: 'Tenant isolation is a database-enforced invariant, not just an application-layer convention.',
      },
      {
        title: 'Auditable by Construction',
        problem: 'Regulators, universities, and enterprise L&D buyers all expect a real audit trail, not logs bolted on after an incident.',
        response: 'Every mutation emits a domain event that lands in audit_logs and fans out to notifications, enforced by the module template itself.',
        result: 'Every state change across all 31 modules is traceable from day one, not from whenever logging was added.',
      },
    ],
    delivery: [
      { phase: 'E0–E9', title: 'Trust Layer', description: 'Ship tenancy, identity, deny-by-default authorization, and the audit event pipeline every later module depends on.' },
      { phase: 'E10–E18', title: 'Core Learning', description: 'Build courses, media, enrolments, batches, notifications, and the assessment and live-class engines.' },
      { phase: 'E19–E24', title: 'Operations', description: 'Add gradebook weighting, attendance, finance, CRM/admissions, and placement tracking on the same trust layer.' },
      { phase: 'E25–E28', title: 'Scale Features', description: 'Layer in HR, custom fields, approvals, integrity checks, and the module marketplace.' },
      { phase: 'Ongoing', title: 'Deepen & Harden', description: "Most epics have shipped; work now deepens existing modules against the tracker's honest completeness percentage rather than starting new ones." },
    ],
    automationHighlights: [
      { title: 'Outbox-Driven Notifications', description: 'A BullMQ worker drains the domain-event outbox into email, digests, retention jobs, and exports without blocking the request path.', metric: '1 worker, 5+ job types' },
      { title: 'Route Coverage Gate', description: 'pnpm authz:check fails CI if any controller route is missing a permission key or an explicit @Public() marker.', metric: 'Zero unguarded routes' },
      { title: 'GDPR Erasure Job', description: 'Soft-deleted, user-authored content is only hard-deleted through a scheduled erasure job, never an ad hoc query.', metric: 'Auditable data retention' },
    ],
    cta: {
      title: 'Building a multi-tenant platform that needs real tenancy, not a shared schema with a WHERE clause?',
      description: 'Akechi Webcraft can design and build platforms where tenant isolation, authorization, and audit are load-bearing from the first migration, not retrofitted before launch.',
    },
  },
};
