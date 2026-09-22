export interface ServiceCapability {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ServicePage {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  capabilities: ServiceCapability[];
  technologies: string[];
}

export const SERVICES: Record<string, ServicePage> = {
  'ai-machine-learning': {
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    tagline: 'Deploy intelligent automation at enterprise scale',
    description: 'Custom AI systems engineered for enterprise transformation. We build tailored machine learning models that integrate seamlessly into your existing workflows, driving efficiency and discovering new value in your data.',
    benefits: [
      'Reduce manual processes by 60-90%',
      'Accelerate decision-making with real-time insights',
      'Unlock new revenue streams with AI-powered products',
      'Enhance customer experiences through personalization'
    ],
    capabilities: [
      {
        id: 'llms',
        title: 'Large Language Models',
        description: 'Custom LLM fine-tuning, RAG systems, and OpenAI integrations',
        icon: 'brain-circuit',
        features: [
          'Fine-tuning on domain data',
          'Retrieval Augmented Generation (RAG)',
          'Multi-language support',
        ],
      },
      {
        id: 'computer-vision',
        title: 'Computer Vision',
        description: 'Automated visual inspection and analysis systems',
        icon: 'eye',
        features: [
          'Object detection & tracking',
          'Quality assurance automation',
          'Facial recognition systems'
        ]
      },
      {
        id: 'predictive-analytics',
        title: 'Predictive Analytics',
        description: 'Forecasting models to anticipate market trends',
        icon: 'trending-up',
        features: [
          'Demand forecasting',
          'Churn prediction',
          'Risk assessment modeling'
        ]
      }
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'],
  },
  'tinkering-lab-setup': {
    slug: 'tinkering-lab-setup',
    title: 'Tinkering Lab Setup',
    tagline: 'Empowering the next generation of innovators',
    description: 'End-to-end setup of STEM and Atal Tinkering Labs (ATL) for educational institutions. We provide hardware, curriculum, and educator training to foster a culture of hands-on innovation.',
    benefits: [
      'Compliance with government ATL standards',
      'Comprehensive educator training programs',
      'Future-ready curriculum integration',
      'Ongoing technical support and maintenance'
    ],
    capabilities: [
      {
        id: 'lab-infrastructure',
        title: 'Lab Infrastructure',
        description: 'Procurement and installation of state-of-the-art equipment',
        icon: 'box',
        features: [
          '3D Printers & CNC machines',
          'Robotics & IoT kits',
          'Safety protocol implementation'
        ]
      },
      {
        id: 'curriculum',
        title: 'Curriculum Development',
        description: 'Age-appropriate STEM learning modules',
        icon: 'book-open',
        features: [
          'Project-based learning frameworks',
          'Coding & electronics basics',
          'Advanced prototyping'
        ]
      },
      {
        id: 'training',
        title: 'Educator Training',
        description: 'Empowering teachers to lead innovation',
        icon: 'users',
        features: [
          'Hands-on equipment training',
          'Pedagogical support',
          'Continuous learning workshops'
        ]
      }
    ],
    technologies: ['Arduino', 'Raspberry Pi', '3D Printing', 'IoT Sensors', 'Scratch'],
  },
  'salesforce-development': {
    slug: 'salesforce-development',
    title: 'Salesforce Development',
    tagline: 'Unify your customer journey',
    description: 'Custom Salesforce solutions that align perfectly with your business processes. From implementation to custom Apex development, we help you maximize the ROI of your CRM investment.',
    benefits: [
      '360-degree view of customer interactions',
      'Automated sales and marketing workflows',
      'Seamless integration with legacy systems',
      'Data-driven decision making'
    ],
    capabilities: [
      {
        id: 'implementation',
        title: 'Implementation & Setup',
        description: 'Tailored deployment of Sales, Service, and Marketing Clouds',
        icon: 'cloud',
        features: [
          'Business process mapping',
          'Data migration strategies',
          'User role configuration'
        ]
      },
      {
        id: 'custom-dev',
        title: 'Custom Development',
        description: 'Bespoke features beyond out-of-the-box capabilities',
        icon: 'code',
        features: [
          'Apex triggers & classes',
          'Lightning Web Components (LWC)',
          'Visualforce pages'
        ]
      },
      {
        id: 'integration',
        title: 'System Integration',
        description: 'Connecting Salesforce with your broader tech stack',
        icon: 'link',
        features: [
          'REST/SOAP API integration',
          'ERP syncing',
          'Middleware configuration'
        ]
      }
    ],
    technologies: ['Apex', 'LWC', 'SOQL', 'Sales Cloud', 'Service Cloud'],
  },
  'sap-erp-systems': {
    slug: 'sap-erp-systems',
    title: 'SAP ERP Systems',
    tagline: 'Streamline enterprise operations',
    description: 'Comprehensive SAP implementation and consulting services. We optimize your supply chain, finance, and HR processes with robust ERP solutions built for scale.',
    benefits: [
      'Centralized operational data',
      'Optimized supply chain logistics',
      'Regulatory compliance automation',
      'Enhanced financial reporting'
    ],
    capabilities: [
      {
        id: 's4hana',
        title: 'S/4HANA Migration',
        description: 'Transitioning legacy systems to next-gen ERP',
        icon: 'database',
        features: [
          'Readiness assessment',
          'Brownfield/Greenfield deployment',
          'Downtime minimization'
        ]
      },
      {
        id: 'abap',
        title: 'ABAP Development',
        description: 'Customizing standard SAP modules',
        icon: 'terminal',
        features: [
          'Custom reports & interfaces',
          'Enhancement frameworks',
          'OData services'
        ]
      },
      {
        id: 'fiori',
        title: 'SAP Fiori UX',
        description: 'Modernizing the user experience',
        icon: 'smartphone',
        features: [
          'Role-based app deployment',
          'Mobile accessibility',
          'Custom app development'
        ]
      }
    ],
    technologies: ['SAP S/4HANA', 'ABAP', 'Fiori', 'SAP BTP', 'OData'],
  },
  'stem-edtech-platforms': {
    slug: 'stem-edtech-platforms',
    title: 'STEM EdTech Platforms',
    tagline: 'Digital platforms for immersive learning',
    description: 'Custom learning management systems (LMS) and interactive educational platforms designed specifically for STEM curriculums.',
    benefits: [
      'Engaging interactive content delivery',
      'Detailed student progress analytics',
      'Scalable cloud infrastructure',
      'Cross-device accessibility'
    ],
    capabilities: [
      {
        id: 'lms',
        title: 'Custom LMS Development',
        description: 'Platforms tailored to specific educational frameworks',
        icon: 'monitor',
        features: [
          'Course authoring tools',
          'Gamification elements',
          'Assessment engines'
        ]
      },
      {
        id: 'virtual-labs',
        title: 'Virtual Laboratories',
        description: 'Simulated environments for safe experimentation',
        icon: 'flask-conical',
        features: [
          'Physics & chemistry simulations',
          'Interactive coding environments',
          'Real-time feedback'
        ]
      },
      {
        id: 'analytics',
        title: 'Learning Analytics',
        description: 'Data insights into student performance',
        icon: 'pie-chart',
        features: [
          'Predictive intervention',
          'Cohort analysis',
          'Engagement tracking'
        ]
      }
    ],
    technologies: ['React', 'Node.js', 'WebGL', 'AWS', 'WebSockets'],
  },
  'full-stack-development': {
    slug: 'full-stack-development',
    title: 'Full-Stack Development',
    tagline: 'Robust web and mobile applications',
    description: 'End-to-end software development services. From intuitive frontend interfaces to scalable backend architectures, we build digital products that perform.',
    benefits: [
      'High-performance architectures',
      'Seamless user experiences',
      'Secure and scalable backends',
      'Agile delivery methodology'
    ],
    capabilities: [
      {
        id: 'frontend',
        title: 'Frontend Engineering',
        description: 'Responsive, accessible, and fast user interfaces',
        icon: 'layout',
        features: [
          'Single Page Applications (SPAs)',
          'Progressive Web Apps (PWAs)',
          'Micro-frontends'
        ]
      },
      {
        id: 'backend',
        title: 'Backend Systems',
        description: 'Scalable APIs and microservices',
        icon: 'server',
        features: [
          'RESTful & GraphQL APIs',
          'Database optimization',
          'Serverless architecture'
        ]
      },
      {
        id: 'devops',
        title: 'DevOps & Cloud',
        description: 'Automated deployment and infrastructure',
        icon: 'cloud-cog',
        features: [
          'CI/CD pipelines',
          'Containerization (Docker/K8s)',
          'Infrastructure as Code'
        ]
      }
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  'digital-marketing-seo': {
    slug: 'digital-marketing-seo',
    title: 'Digital Marketing & SEO',
    tagline: 'Data-driven growth strategies',
    description: 'Comprehensive digital marketing strategies that increase visibility, drive qualified traffic, and maximize conversions.',
    benefits: [
      'Increased organic search visibility',
      'Higher conversion rates',
      'Measurable ROI on ad spend',
      'Stronger brand authority'
    ],
    capabilities: [
      {
        id: 'seo',
        title: 'Search Engine Optimization',
        description: 'Technical and content SEO for sustainable growth',
        icon: 'search',
        features: [
          'Technical site audits',
          'Keyword strategy',
          'Link building'
        ]
      },
      {
        id: 'performance-marketing',
        title: 'Performance Marketing',
        description: 'Targeted ad campaigns across platforms',
        icon: 'target',
        features: [
          'Google Ads management',
          'Social media advertising',
          'Retargeting campaigns'
        ]
      },
      {
        id: 'analytics',
        title: 'Data & Analytics',
        description: 'Actionable insights from marketing data',
        icon: 'bar-chart',
        features: [
          'Custom dashboard creation',
          'Conversion rate optimization',
          'A/B testing'
        ]
      }
    ],
    technologies: ['Google Analytics', 'SEMrush', 'Meta Ads', 'Google Ads', 'HubSpot'],
  }
};
