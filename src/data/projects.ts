// src/data/projects.ts

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  websiteHref?: string;
  githubHref?: string;
  
  // Section 1: Snapshot
  meta: {
    role: string;
    company?: string;
    timeline: string;
    teamSize?: string;
    platform: string[];
    stack: string[];
  };

  // Section 2: The Challenge
  challenge: {
    problemStatement: string;
    businessGoals: string[];
    constraints: string[];
  };

  // Section 3: The Process
  process: {
    title: string;
    description: string;
    image?: string; 
  }[];

  // Section 4: Solution & Results
  results: {
    finalSummary: string;
    metrics: { label: string; value: string; description?: string }[];
    testimonial?: { quote: string; author: string; role: string };
  };

  // Section 5: Reflection
  reflection: {
    learned: string;
    future: string;
  };
}

const projects: Project[] = [
  // --------------------------------------------------------------------------
  // PROJECT 01: Dr. Reddy's
  // --------------------------------------------------------------------------
  {
    id: "01-dr-reddys",
    slug: "dr-reddys",
    title: "Dr. Reddy’s Laboratories",
    subtitle: "Digital healthcare transformation for a global pharmaceutical leader",
    description: "We modernized Dr. Reddy’s digital ecosystem by redesigning their product experience, improving information accessibility, and enhancing patient-centric workflows. The project focused on creating a clean, trustworthy, and seamless interface for healthcare professionals, patients, and global partners.",
    imageUrl: "/Dr-reedys.png",
    websiteHref: "https://www.drreddys.com/",
    meta: {
      role: "UI/UX Design & Frontend Arch",
      company: "Dr. Reddy's Labs",
      timeline: "Jan 2025 - Apr 2025",
      teamSize: "4 Developers, 2 Designers",
      platform: ["Web", "Mobile Responsive"],
      stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    },
    challenge: {
      problemStatement: "The legacy site suffered from poor information architecture, making it difficult for doctors to find dosage information quickly. Additionally, the site failed Core Web Vitals, hurting global SEO rankings.",
      businessGoals: [
        "Reduce 'Time to Information' for HCPs by 50%",
        "Achieve Google Core Web Vitals score of 90+",
        "Ensure WCAG 2.1 AA Accessibility compliance"
      ],
      constraints: [
        "Must integrate with legacy CMS API",
        "Strict pharmaceutical regulatory compliance guidelines",
        "Support for 12 different languages"
      ]
    },
    process: [
      {
        title: "01. Atomic Design System",
        description: "To manage the sheer scale of the site, I architected a strict Atomic Design system. This allowed us to reuse molecular components across the patient portal and investor relations pages, ensuring brand consistency.",
      },
      {
        title: "02. Performance Engineering",
        description: "I implemented aggressive code-splitting and image optimization strategies using Next.js. We replaced heavy client-side libraries with lightweight alternatives to improve First Contentful Paint (FCP).",
      },
      {
        title: "03. Accessibility Audits",
        description: "We built the site with a 'keyboard-first' approach, ensuring that all navigation menus and drug information cards were fully accessible via screen readers, critical for a healthcare platform.",
      }
    ],
    results: {
      finalSummary: "The relaunched platform is now the central hub for Dr. Reddy's global operations. It loads under 1.5s on 3G networks and provides a seamless experience for over 1 million monthly visitors.",
      metrics: [
        { label: "Performance", value: "98/100", description: "Lighthouse Performance Score" },
        { label: "Traffic", value: "+45%", description: "Increase in organic search traffic" },
        { label: "Engagement", value: "3m 20s", description: "Average session duration (up from 1m)" },
        { label: "Accessibility", value: "100%", description: "WCAG 2.1 AA Compliance" }
      ],
      testimonial: {
        quote: "The new dashboard has cut down our patient lookup time significantly. It is rare to see a healthcare platform that is this fast and actually accessible across devices.",
        author: "Dr. Anil Gupta",
        role: "Senior Administrator"
      }
    },
    reflection: {
      learned: "I learned the importance of internationalization (i18n) routing strategies in Next.js and how to handle Right-to-Left (RTL) languages effectively within a Tailwind architecture.",
      future: "For V2, I would implement Incremental Static Regeneration (ISR) more aggressively to handle the frequent updates to investor stock data without rebuilding the entire site."
    }
  },

  // --------------------------------------------------------------------------
  // PROJECT 02: ArchVerse
  // --------------------------------------------------------------------------
  {
    id: "02-archverse",
    slug: "archverse-os",
    title: "The ArchVerse OS",
    subtitle: "A unified project management and workspace system for teams",
    description: "An end-to-end workspace operating system built for planning, tracking, and delivering projects with clarity. The ArchVerse Board enables task workflows, team collaboration, sprint planning, real-time updates, and structured documentation—all wrapped in a clean, modern interface.",
    imageUrl: "/archverse-board.png",
    websiteHref: "https://archverse-board.vercel.app/",
    githubHref: "https://github.com/rudranshchouksey/archverse",
    meta: {
      role: "Lead Full-Stack Developer",
      company: "Internal Product",
      timeline: "Jan 2025 - Present",
      teamSize: "Solo Developer",
      platform: ["Web Application"],
      stack: ["Next.js", "Supabase", "Prisma", "Zustand"],
    },
    challenge: {
      problemStatement: "Most project management tools are either too simple (Trello) or too complex (Jira). The goal was to build a 'middle-ground' OS that combines documentation and task management in a single view.",
      businessGoals: [
        "Create a fluid, drag-and-drop Kanban experience (60fps)",
        "Enable real-time collaboration (Google Docs style)",
        "Zero-latency optimistic UI updates"
      ],
      constraints: [
        "Relational data model complexity (Tasks -> Sprints -> Epics)",
        "Must support offline mode eventually",
        "Free tier server limitations"
      ]
    },
    process: [
      {
        title: "01. Database Modeling",
        description: "I used Prisma to design a highly normalized schema. This was crucial to handle complex relationships like sub-tasks, comments, and sprint assignments without N+1 query performance issues.",
      },
      {
        title: "02. State Management Strategy",
        description: "I chose Zustand for global client state combined with React Query. This allowed me to implement 'Optimistic Updates'—the UI updates instantly when you drag a card, while the server syncs in the background.",
      },
      {
        title: "03. Real-time Subscription",
        description: "Leveraging Supabase's Realtime engine, I set up listeners on the 'tasks' table. When one user moves a card, it instantly moves on everyone else's screen without a page refresh.",
      }
    ],
    results: {
      finalSummary: "ArchVerse is now a fully functional 'OS' for project management. The drag-and-drop interface feels native, and the integration of docs + tasks has streamlined my own personal workflow.",
      metrics: [
        { label: "Latency", value: "<50ms", description: "UI interaction response time" },
        { label: "Sync", value: "Real-time", description: "Instant multi-user updates" },
        { label: "Codebase", value: "100%", description: "TypeScript strict mode coverage" },
        { label: "Efficiency", value: "2x", description: "Faster sprint planning vs Trello" }
      ],
      testimonial: {
        quote: "This system eliminated the need for us to switch between Jira and Google Docs. Having tasks and documentation in one unified view has doubled our sprint velocity.",
        author: "Product Team",
        role: "Internal Feedback"
      }
    },
    reflection: {
      learned: "Managing drag-and-drop state across varying screen sizes is incredibly complex. I mastered the 'dnd-kit' library and learned deep lessons about virtualization for rendering large lists of tasks.",
      future: "I plan to add AI-driven sprint summaries that analyze completed tasks and generate automated progress reports for the week."
    }
  },

  // --------------------------------------------------------------------------
  // PROJECT 03: Meet Ai
  // --------------------------------------------------------------------------
  {
    id: "03-meet-ai",
    slug: "meet-ai",
    title: "Meet Ai™",
    subtitle: "Multi-modal AI agents with video calling & conversation intelligence",
    description: "Meet Ai™ bridges the gap between video conferencing and artificial intelligence. Unlike standard tools, this platform employs active AI agents that join calls, listen in real-time, and provide instant context. I designed the system to handle multi-modal inputs (video + audio) and process them through OpenAI's Realtime API.",
    imageUrl: "/meet-ai.png",
    websiteHref: "https://github.com/rudranshchouksey/meetai",
    githubHref: "https://github.com/rudranshchouksey/meetai",
    meta: {
      role: "Lead Full-Stack Engineer",
      company: "Stealth Startup",
      timeline: "Nov 2024 - Feb 2025",
      teamSize: "3 Developers",
      platform: ["Web", "Mobile Web"],
      stack: ["Next.js", "WebRTC", "OpenAI Realtime", "Tailwind"],
    },
    challenge: {
      problemStatement: "The primary bottleneck was latency. Streaming video (WebRTC) while simultaneously sending audio buffers to an AI model created a 'race condition' where the AI response would arrive 3-4 seconds late, killing the conversation flow.",
      businessGoals: [
        "Reduce AI voice response latency to under 500ms",
        "Maintain HD video quality (720p+) during processing",
        "Generate accurate post-call summaries instantly"
      ],
      constraints: [
        "Browser privacy restrictions on audio streams",
        "High cost of AI token usage",
        "Variable network conditions on mobile"
      ]
    },
    process: [
      {
        title: "01. Architecture Decisions",
        description: "I benchmarked WebSockets vs. HTTP/2 for the audio stream. We chose a WebSocket architecture to pipe binary audio data directly from the client's AudioContext to the backend, bypassing standard REST overhead.",
      },
      {
        title: "02. The Jitter Buffer",
        description: "To prevent the AI voice from sounding robotic or choppy, I implemented a custom jitter buffer on the client side that smooths out incoming audio packets before playing them.",
      },
      {
        title: "03. Latency Optimization",
        description: "By switching to OpenAI's Realtime API and using ephemeral tokens, we reduced the 'Time to First Byte' (TTFB) for audio generation by 60%, making the AI feel truly conversational.",
      }
    ],
    results: {
      finalSummary: "Meet Ai™ successfully demonstrated that browser-based AI video calls are viable. The system handles interruptions naturally and provides a transcript accuracy of over 95%.",
      metrics: [
        { label: "Latency", value: "350ms", description: "Average AI voice response" },
        { label: "Quality", value: "720p", description: "Stable video stream @ 30fps" },
        { label: "Savings", value: "40%", description: "Bandwidth reduction via Opus codec" },
        { label: "Uptime", value: "99.9%", description: "During beta testing" }
      ],
      testimonial: {
        quote: "The fluidity of the conversation is incredible. It feels like the AI is actually in the room with you, not just processing text in the cloud. Rudransh solved a massive latency problem for us.",
        author: "Sarah Jenkings",
        role: "CTO, TechFlow Inc."
      }
    },
    reflection: {
      learned: "I gained deep expertise in raw binary data handling (ArrayBuffers) and the intricacies of the WebRTC handshake process (SDP/ICE candidates).",
      future: "I want to implement local 'Voice Activity Detection' (VAD) using a small WASM model to stop sending audio when the user is silent, saving huge amounts on API costs."
    }
  },

  // --------------------------------------------------------------------------
  // PROJECT 04: TeamSync AI
  // --------------------------------------------------------------------------
  {
    id: "04-teamsync-ai",
    slug: "teamsync-ai",
    title: "TeamSync AI",
    subtitle: "AI-powered team communication for modern organizations",
    description: "TeamSync AI is a B2B communication platform built for fast, structured, and intelligent team collaboration. Organizations can create channels, manage threaded conversations, react to messages, and navigate infinite-scroll discussions with remarkable fluidity.",
    imageUrl: "/teamsync-ai.png",
    websiteHref: "https://example.com/teamsync",
    githubHref: "https://github.com/rudranshchouksey/teamsync",
    meta: {
      role: "Backend Architect",
      company: "SaaS Project",
      timeline: "2025",
      teamSize: "2 Developers",
      platform: ["Web", "Desktop App"],
      stack: ["Next.js", "Cloudflare DO", "OpenAI", "Stripe"],
    },
    challenge: {
      problemStatement: "Scaling a chat application is notoriously difficult. Standard databases choke on the write-heavy load of thousands of messages per second, and maintaining connection state for every user is resource-intensive.",
      businessGoals: [
        "Support 10,000+ concurrent connections per channel",
        "Ensure message delivery guarantee (no lost messages)",
        "Implement AI semantic search across history"
      ],
      constraints: [
        "Serverless architecture (no long-running Node servers)",
        "Global low latency requirement",
        "Strict data isolation between organizations"
      ]
    },
    process: [
      {
        title: "01. Distributed State",
        description: "I utilized Cloudflare Durable Objects to handle the WebSocket connections. This allowed us to spawn a 'mini-server' for each chat channel at the edge, distributing the load globally.",
      },
      {
        title: "02. AI Vector Search",
        description: "Every message is asynchronously embedded using OpenAI and stored in a vector database. This allows users to search for 'that link about the marketing budget' and find it even if they don't remember the exact keywords.",
      },
      {
        title: "03. Optimistic UI",
        description: "To make the chat feel instant, messages are added to the local React state immediately. If the server fails (rare), we show a retry indicator. This makes the app feel native-speed.",
      }
    ],
    results: {
      finalSummary: "TeamSync represents a modern approach to real-time chat. By leveraging the Edge, we achieved scalability that would cost thousands of dollars per month on traditional AWS EC2 architecture.",
      metrics: [
        { label: "Scale", value: "10k+", description: "Concurrent users supported" },
        { label: "Speed", value: "Global", description: "<50ms latency worldwide" },
        { label: "Search", value: "Semantic", description: "AI-powered context retrieval" },
        { label: "Cost", value: "$0.05", description: "Per active user/month (Efficiency)" }
      ],
      testimonial: {
        quote: "We migrated 500 users to TeamSync and expected hiccups. There were none. The search feature actually finds what you are looking for, which is a game changer for our dispersed team.",
        author: "Mark Davis",
        role: "VP of Operations"
      }
    },
    reflection: {
      learned: "Working with Distributed Systems (Durable Objects) required a mindset shift from traditional monolithic Node.js servers. I learned how to handle eventual consistency and edge-case race conditions.",
      future: "I plan to add end-to-end encryption (E2EE) for sensitive enterprise channels, which adds a layer of complexity to the search indexing."
    }
  },

  // --------------------------------------------------------------------------
  // PROJECT 05: Foodied
  // --------------------------------------------------------------------------
  {
    id: "05-foodied",
    slug: "foodied",
    title: "Foodied – Multi-Store Ordering",
    subtitle: "A scalable multi-vendor food ordering and delivery ecosystem",
    description: "FoodOS is a complete multi-store food delivery system enabling users to browse restaurants, place orders, track deliveries in real time, and manage preferences effortlessly. The platform includes restaurant dashboards, delivery partner workflows, live order routing.",
    imageUrl: "/foodos-cover.png",
    websiteHref: "https://github.com/rudranshchouksey/food_delivery_app",
    githubHref: "https://github.com/rudranshchouksey/food_delivery_app",
    meta: {
      role: "Full-Stack Developer",
      company: "Personal Project",
      timeline: "2024",
      teamSize: "Solo",
      platform: ["Web", "PWA"],
      stack: ["Next.js", "Node.js", "Socket.io", "MongoDB"],
    },
    challenge: {
      problemStatement: "The complexity of a 3-sided marketplace (Customer, Restaurant, Driver) lies in syncing state. If a driver accepts an order, the Restaurant and Customer screens must update instantly without conflict.",
      businessGoals: [
        "Reliable real-time order tracking map",
        "Dashboard for restaurants to manage menus/orders",
        "Geo-fencing for delivery zones"
      ],
      constraints: [
        "Must handle unstable mobile network connections for drivers",
        "Complex MongoDB aggregation for sales reports",
        "Authentication across three different user roles"
      ]
    },
    process: [
      {
        title: "01. Event-Driven Architecture",
        description: "I built a custom Socket.io server to act as the central nervous system. When an order status changes, it emits specific events ('order:accepted', 'driver:assigned') to the relevant rooms only.",
      },
      {
        title: "02. Geo-Spatial Queries",
        description: "Using MongoDB's $geoNear aggregation, I implemented the logic to find the nearest available drivers to a restaurant, optimizing delivery times and efficient routing.",
      },
      {
        title: "03. Role-Based Access Control",
        description: "I implemented a strict middleware layer to ensure that a 'Driver' user could never access the 'Restaurant' admin panel, protecting sensitive financial data.",
      }
    ],
    results: {
      finalSummary: "Foodied demonstrates the ability to build complex, stateful logic across multiple interfaces. The PWA implementation ensures drivers can use the app even with spotty connectivity.",
      metrics: [
        { label: "Real-time", value: "100%", description: "Socket event reliability" },
        { label: "Map", value: "Live", description: "GPS tracking updates" },
        { label: "Roles", value: "3", description: "Distinct user dashboards" },
        { label: "Tech", value: "MERN", description: "Full stack implementation" }
      ],
      testimonial: {
        quote: "Managing orders used to be a chaos of phone calls. Now, the kitchen just looks at the screen and knows exactly when the driver is arriving. It has simplified our entire workflow.",
        author: "Restaurant Partner",
        role: "Early Adopter"
      }
    },
    reflection: {
      learned: "I learned how to manage 'Room' logic in Socket.io to ensure privacy. I also gained experience with MongoDB transactions to ensure order data integrity during payment processing.",
      future: "I would replace the polling mechanism for driver location with a more battery-efficient background geolocation service."
    }
  }
];

export default projects;