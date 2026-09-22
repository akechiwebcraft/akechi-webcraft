export interface ResourceSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Resource {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  intro: string;
  sections: ResourceSection[];
}

export const RESOURCES: Resource[] = [
  {
    id: "cloud-migration-guide",
    title: "Cloud Migration Guide",
    category: "Guide",
    excerpt:
      "A comprehensive playbook for migrating legacy on-premise systems to resilient cloud infrastructure.",
    author: "Infrastructure Team",
    date: "2023-09-12",
    readTime: "15 min read",
    image: "/images/blog/cloudmigrationblog.png",
    intro:
      "Most migrations stall for the same reason: the team treats it as an infrastructure project when it is really a dependency-mapping project. This guide covers the sequence we use to move legacy on-premise estates without freezing feature delivery for six months.",
    sections: [
      {
        heading: "Start with a dependency map, not a server inventory",
        paragraphs: [
          "A list of servers tells you what you are running. It does not tell you what breaks when you move something. Before any workload moves, build a map of which services call which, where shared state lives, and which batch jobs quietly assume everything sits on one network.",
          "The uncomfortable finds usually surface here: a reporting script nobody owns, a file drop that a finance process depends on, a hardcoded internal IP in a config file written years ago. Each of these is cheap to fix in the planning phase and expensive to discover during cutover.",
        ],
        bullets: [
          "Capture inbound and outbound dependencies for every service, including scheduled jobs",
          "Identify shared databases — these decide your migration boundaries more than anything else",
          "Flag every hardcoded hostname, IP address, and file path",
          "Record data residency and compliance constraints per dataset, not per server",
        ],
      },
      {
        heading: "Choose a migration pattern per workload",
        paragraphs: [
          "There is no single right answer for an entire estate. Applying one pattern everywhere is what turns a nine-month plan into a two-year one. Assess each workload independently and accept that a mixed approach is the normal outcome.",
        ],
        bullets: [
          "Rehost — move as-is. Fastest path, no cloud-native benefit. Right for stable systems nearing end of life.",
          "Replatform — move with targeted changes, such as swapping a self-managed database for a managed one. Best effort-to-benefit ratio for most workloads.",
          "Refactor — restructure the application for the cloud. Reserve this for systems where scaling or delivery speed is an active business constraint.",
          "Replace — retire the system in favour of a SaaS product. Often the cheapest option, and the one teams consider last.",
        ],
      },
      {
        heading: "Move data before you move compute",
        paragraphs: [
          "Compute is disposable; data is not. Establish replication to the target environment early and let it run while the rest of the migration proceeds. This turns cutover from a bulk transfer with a long outage into a short catch-up window.",
          "Validate continuously rather than at the end. Row counts, checksums, and business-level reconciliation queries should run on a schedule against both sides so that drift is caught while it is still small.",
        ],
      },
      {
        heading: "Plan the rollback before the cutover",
        paragraphs: [
          "Every cutover plan needs a documented, rehearsed way back. Not a theoretical one — an actual runbook with named owners, a decision deadline, and a tested procedure. Teams that skip this end up making the rollback decision under pressure at 3am, which is when it goes badly.",
          "Set an explicit go/no-go checkpoint with measurable criteria before traffic shifts. If the criteria are not met, the rollback executes automatically rather than being debated.",
        ],
      },
      {
        heading: "Budget for the post-migration month",
        paragraphs: [
          "Costs are almost always higher immediately after migration than they were on-premise, because lift-and-shift preserves oversized instances and nobody has tuned anything yet. This is expected, not a failure — but it should be planned for rather than discovered on the first invoice.",
          "Schedule a right-sizing pass four to six weeks after cutover, once real usage patterns are visible. Tag every resource with an owner from day one so that this exercise is possible at all.",
        ],
      },
    ],
  },
  {
    id: "ai-automation-checklist",
    title: "AI Automation Checklist",
    category: "Checklist",
    excerpt:
      "Ensure your organization is ready for enterprise AI deployment with this 20-point readiness checklist.",
    author: "AI/ML Practice",
    date: "2023-08-05",
    readTime: "5 min read",
    image: "/images/blog/aichecklistblog.png",
    intro:
      "Most enterprise AI pilots fail on operational readiness rather than model quality. Work through these checks before committing budget to a production deployment.",
    sections: [
      {
        heading: "Problem definition",
        paragraphs: [
          "If the success criterion cannot be written as a number with a current baseline next to it, the project is not ready to start.",
        ],
        bullets: [
          "The decision or task being automated is written down in plain language",
          "A measurable success metric exists, with today's baseline recorded",
          "The cost of a wrong answer is understood and acceptable",
          "A human review path exists for low-confidence outputs",
          "Someone owns the outcome, not just the delivery",
        ],
      },
      {
        heading: "Data readiness",
        paragraphs: [
          "This is where most timelines are actually spent. Assess honestly — optimism here is expensive later.",
        ],
        bullets: [
          "Required data exists and is accessible without a manual export step",
          "Historical depth is sufficient to cover normal seasonal variation",
          "Labelling, where required, is either available or budgeted for",
          "Data quality issues are quantified rather than assumed to be minor",
          "Personal and sensitive data is identified and handling rules are agreed",
        ],
      },
      {
        heading: "Integration and operations",
        paragraphs: [
          "A model that produces good output into a spreadsheet nobody reads has delivered nothing.",
        ],
        bullets: [
          "The consuming system can accept automated output without manual re-entry",
          "Latency requirements are defined and achievable",
          "Failure behaviour is specified — what happens when the model is unavailable",
          "Monitoring covers input drift, not just uptime",
          "A retraining trigger and cadence are agreed",
        ],
      },
      {
        heading: "Governance",
        paragraphs: [
          "Governance questions asked at the end of a project become blockers. Asked at the start, they are just requirements.",
        ],
        bullets: [
          "Decisions the system makes can be explained to an affected person",
          "An audit trail records inputs, outputs, and model version",
          "Bias and fairness testing is defined for the relevant population",
          "Regulatory obligations for the sector have been reviewed",
          "A documented process exists for switching the system off",
        ],
      },
    ],
  },
  {
    id: "security-readiness-guide",
    title: "Security Readiness Guide",
    category: "Guide",
    excerpt:
      "Building a Zero Trust architecture for modern digital platforms and APIs.",
    author: "Security Operations",
    date: "2023-07-22",
    readTime: "12 min read",
    image: "/images/blog/cybersecurityblog.png",
    intro:
      "Zero Trust is often sold as a product. It is an architectural position: no request is trusted because of where it came from. Here is what that actually requires in a platform built on APIs.",
    sections: [
      {
        heading: "Identity is the new perimeter",
        paragraphs: [
          "In a network-perimeter model, being inside the network implied authorisation. That assumption fails the moment you have remote staff, third-party integrations, or more than one cloud environment — which is to say, immediately.",
          "Every request should carry a verifiable identity, whether it originates from a person, a service, or a scheduled job. Service-to-service calls that authenticate with a shared static secret are the most common gap we find in otherwise well-built platforms.",
        ],
      },
      {
        heading: "Authorise per request, at the resource",
        paragraphs: [
          "Checking permissions at the API gateway is necessary but not sufficient. Authorisation decisions belong close to the data, where the full context of the request is available — who is asking, for which record, under what conditions.",
          "Coarse role checks tend to drift into over-permissioning as an organisation grows. Attribute-based rules evaluated per request age better, because they encode the actual policy rather than a snapshot of the org chart.",
        ],
      },
      {
        heading: "Assume credentials will leak",
        paragraphs: [
          "Design so that a leaked credential has limited blast radius and a short useful life. Short-lived tokens, scoped narrowly to a single purpose, are worth considerably more than a longer password policy.",
        ],
        bullets: [
          "Issue short-lived, narrowly scoped tokens rather than long-lived API keys",
          "Rotate automatically; if rotation requires a human, it will not happen",
          "Never let secrets reach source control — enforce this with automated scanning",
          "Separate credentials per environment so a staging leak cannot touch production",
        ],
      },
      {
        heading: "Log what an investigator would need",
        paragraphs: [
          "The value of an audit log is decided during an incident, when it is far too late to add fields to it. Log the identity, the resource, the action, the outcome, and the source — for successes as well as failures.",
          "Store logs somewhere the application itself cannot modify. An attacker with application access should not be able to erase the record of what they did.",
        ],
      },
      {
        heading: "Rehearse the response",
        paragraphs: [
          "An incident response plan that has never been executed is a document, not a capability. Run the exercise: revoke a credential, isolate a service, restore from backup. Time each step and fix whatever turned out to be slower or more manual than expected.",
        ],
      },
    ],
  },
  {
    id: "web-3-0-iot-integrations",
    title: "What exactly is Web3.0 & IoT integrations?",
    category: "Technology",
    excerpt:
      "Unpacking the decentralized, blockchain-powered internet of tomorrow and how it impacts robotics and telemetry.",
    author: "Akechi Engineering",
    date: "2023-07-01",
    readTime: "8 min read",
    image: "/images/blog/iotblog.png",
    intro:
      "The overlap between distributed ledgers and connected devices attracts more marketing than engineering. This is a practical read on where the combination genuinely helps telemetry systems, and where a conventional database remains the better answer.",
    sections: [
      {
        heading: "The problem worth solving",
        paragraphs: [
          "Industrial telemetry has a trust problem that is organisational rather than technical. When a sensor reading determines a payment, a compliance report, or a warranty claim, the party holding the database also holds the ability to alter history. Usually that is fine. Occasionally it is the entire dispute.",
          "This is the narrow case where an append-only, independently verifiable ledger earns its complexity: multiple organisations that need to agree on a shared record, none of whom is the natural owner of the database.",
        ],
      },
      {
        heading: "What to put on-chain, and what not to",
        paragraphs: [
          "Writing raw sensor data to a distributed ledger is slow, expensive, and usually pointless. A device producing readings every second will overwhelm any general-purpose chain and produce a record nobody can query efficiently.",
          "The workable pattern is to keep the telemetry itself in a conventional time-series store and anchor periodic cryptographic digests of that data on-chain. You get tamper-evidence for the full dataset at a tiny fraction of the cost, and normal query performance for everyday use.",
        ],
        bullets: [
          "On-chain: batch hashes, device registration and identity, state transitions that trigger obligations",
          "Off-chain: raw readings, high-frequency telemetry, anything containing personal data",
        ],
      },
      {
        heading: "Device identity is the hard part",
        paragraphs: [
          "A ledger can prove that a record has not been altered since it was written. It cannot prove that the reading was accurate when the device produced it. If a device can be spoofed or its firmware tampered with, the ledger faithfully preserves bad data.",
          "That places the real engineering burden on hardware-rooted identity: keys held in a secure element, attested firmware, and a revocation path for compromised devices. Without that foundation, the ledger is decoration.",
        ],
      },
      {
        heading: "When a database is the right answer",
        paragraphs: [
          "If one organisation owns the data, controls the devices, and no external party needs to independently verify history, a well-run database with proper audit logging solves the problem at a fraction of the operational cost.",
          "We recommend the distributed approach when the trust boundary crosses organisations, and the conventional approach otherwise. The technology choice should follow the trust model, not the other way round.",
        ],
      },
    ],
  },
  {
    id: "headless-commerce",
    title: "Headless Commerce: ERP and CRM Integration",
    category: "Case Study",
    excerpt:
      "How integrating Salesforce and SAP systems with modern e-commerce stores yields higher performance and sync.",
    author: "Akechi Engineering",
    date: "2023-06-19",
    readTime: "6 min read",
    image: "/images/blog/headlesscrmanderpblog.png",
    intro:
      "Headless commerce separates the storefront from the systems that hold inventory, pricing, and customer records. That separation is the point — and also where the integration work lives.",
    sections: [
      {
        heading: "Why the storefront should not own the truth",
        paragraphs: [
          "In a coupled platform, the store is the system of record for products, stock, and customers. Once an ERP is in place, that is no longer true — and keeping two systems in agreement through periodic exports is where most commerce integrations break down.",
          "The headless model resolves this by making the storefront a rendering layer over data it does not own. Stock levels come from the ERP, customer history from the CRM, and the storefront's job is presentation and conversion.",
        ],
      },
      {
        heading: "Sync patterns that hold up",
        paragraphs: [
          "The naive approach — a scheduled export every fifteen minutes — produces oversells during promotions and stale pricing during changes. Event-driven sync is more work upfront and considerably less work thereafter.",
        ],
        bullets: [
          "Publish inventory and price changes as events from the ERP rather than polling for them",
          "Make consumers idempotent — events will be delivered more than once",
          "Reserve stock at cart level with a timeout, rather than checking availability at checkout",
          "Keep a reconciliation job as a safety net, but do not let it become the primary mechanism",
        ],
      },
      {
        heading: "Handling the systems being down",
        paragraphs: [
          "An ERP maintenance window should not take the storefront offline. Cache aggressively for read paths — catalogue, pricing, content — so that browsing continues even when upstream systems are unavailable.",
          "Write paths need a different treatment. Queue orders locally and confirm to the customer immediately, then reconcile with the ERP asynchronously. The customer experience should not be coupled to backend availability.",
        ],
      },
      {
        heading: "What to measure after launch",
        paragraphs: [
          "Integration quality shows up in operational metrics rather than page speed scores: oversell rate, order-to-ERP latency, reconciliation exceptions per day, and the proportion of orders requiring manual intervention. These are the numbers that tell you whether the integration is actually working.",
        ],
      },
    ],
  },
  {
    id: "chat-gpt-education",
    title: "Chat GPT & Large Language Models in Education",
    category: "Thought Leadership",
    excerpt:
      "How customized GPT agents are redefining modern curricula, student tutoring, and STEM lab education frameworks.",
    author: "Akechi Engineering",
    date: "2023-03-13",
    readTime: "5 min read",
    image: "/images/blog/llmineducationblog.png",
    intro:
      "Language models are genuinely useful in a classroom setting, and genuinely risky in ways that a procurement checklist rarely captures. Drawn from our work building STEM and tinkering lab programmes, here is where the line sits.",
    sections: [
      {
        heading: "Where the technology helps",
        paragraphs: [
          "The strongest use is patient, unlimited explanation. A student working through a robotics problem at ten at night can ask the same question five different ways without embarrassment, which is something no timetable can provide.",
          "It is also effective at the teacher's side of the work: generating practice variations, drafting differentiated versions of a worksheet, and producing first-pass feedback that a teacher then edits. That reclaims preparation hours without putting the model between the teacher and the student.",
        ],
      },
      {
        heading: "Where it does not",
        paragraphs: [
          "Assessment is the clearest boundary. A model's confident tone does not correlate with correctness, and a student cannot reliably distinguish the two. Anything that determines a grade needs a human decision.",
          "It is also weak at knowing what a specific student already understands. Without that context it will explain at the wrong level — too advanced for the struggling student, too slow for the one who is ahead. The teacher supplies what the model cannot.",
        ],
      },
      {
        heading: "Designing for a school environment",
        paragraphs: [
          "School deployments have constraints that consumer products do not. Student data protection is a legal obligation, not a preference, and the network in a lab is frequently slower than anything the vendor tested against.",
        ],
        bullets: [
          "Restrict the assistant to the curriculum scope rather than exposing a general-purpose chat interface",
          "Keep student identifiers out of prompts entirely",
          "Give teachers visibility of how the tool is being used in their class",
          "Ensure the lesson still works when connectivity fails, because it will",
        ],
      },
      {
        heading: "Teach the tool, not around it",
        paragraphs: [
          "Students will use these systems regardless of policy. The more valuable curriculum response is to teach verification as a skill: how to check a claim, how to spot a confident error, and when the answer needs a source. That is a durable competency, and it happens to be the exact skill that makes the technology safe to use.",
        ],
      },
    ],
  },
];

export const RESOURCE_CATEGORIES = [
  "All",
  "Guide",
  "Checklist",
  "Technology",
  "Case Study",
  "Thought Leadership",
];

export function getResource(id: string): Resource | undefined {
  return RESOURCES.find((resource) => resource.id === id);
}
