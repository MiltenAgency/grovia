/** Home page copy and assets, verbatim from the export. */

export const hero = {
  headingLines: ["Strategy and growth for", "modern teams"],
  sub: "Grovia partners with startups to streamline operations, elevate team performance, and build a foundation for lasting success.",
  primary: { label: "Get started", href: "/#pricing" },
  secondary: { label: "Contact us", href: "/#contact" },
};

/** The customer list rendered inside the hero's floating product mock. */
export const heroCustomers = {
  title: "Customers",
  sort: "Sort by Newest",
  rows: [
    { name: "Maggie Johnson", org: "Oasis Organic Inc.", avatar: "/assets/img/d544947ed2fe94e2.webp" },
    { name: "Chris Friedkly", org: "Supermarket Villanova", avatar: "/assets/img/fc9024a23910d9b4.webp" },
    { name: "Gael Harry", org: "New York Finest Fruits", avatar: "/assets/img/5bba0761e5487a70.webp" },
  ],
  all: "All customers",
};

export const heroChart = {
  label: "Daily Average",
  value: "2h 20m",
  delta: "+30m",
  period: "this week",
  days: ["M", "T", "W", "T", "F", "S", "S"],
  /* Segment heights read off the original's bars, in px, top-down:
     [cyan, pink, yellow]. */
  bars: [
    [13, 13, 16],
    [25, 13, 40],
    [13, 35, 18],
    [39, 13, 21],
    [13, 13, 30],
    [13, 24, 10],
    [13, 13, 16],
  ],
};

export const showcaseImage = {
  src: "/assets/img/195d228f12c3fc2c.webp",
  alt: "The Grovia workspace: a project board with task cards, members and filters",
};

export const steps = [
  {
    num: "01",
    title: "Easy setup",
    body: "Create your workspace and invite your team. Get everything ready in minutes.",
    art: "/assets/img/23d716c66ea3718d.webp",
    backdrop: "/assets/img/bb186adb149f1e08.webp",
  },
  {
    num: "02",
    title: "Collaborate",
    body: "Assign tasks and keep communication clear. Everyone stays aligned.",
    // Only the first card's art ships in the static export; cards 2 and 3 are
    // fetched at runtime, so these two were downloaded from the running site.
    art: "/assets/img/lpUXQzvzgT4sfG94CeE4ukM15U.png",
    backdrop: "/assets/img/bb186adb149f1e08.webp",
  },
  {
    num: "03",
    title: "Track growth",
    body: "Use dashboards to monitor progress, trends, and what matters most.",
    art: "/assets/img/XoXQ8sesm7JX8MLXDCX4E5uw.png",
    backdrop: "/assets/img/bb186adb149f1e08.webp",
  },
];

export const featuresIntro = {
  heading: "Built for high performance",
  sub: "Grovia gives your team everything it needs to stay aligned, track performance, and scale with confidence — all in one place.",
};

/**
 * Four tabs. Only the first ships in the static HTML — the copy, the art and
 * every offset for the other three were read off the running original by
 * driving the tab strip with Playwright. `x` / `y` are offsets inside the
 * 522×389 art frame, which clips whatever overflows it.
 */
export const featureTabs = [
  {
    id: "client-portal",
    tab: "Client portal",
    icon: "tabMonitor" as const,
    eyebrow: "Client portal",
    heading: "Centralized access for teams and clients",
    body: "Securely share progress, files, feedback, and timelines with stakeholders. Keep everyone on the same page without switching platforms.",
    art: [{ src: "/assets/img/290633668b5d8b28.webp", w: 522, h: 389, x: 32, y: 32, r: 16 }],
  },
  {
    id: "kpi-tracking",
    tab: "KPI tracking",
    icon: "tabChart" as const,
    eyebrow: "KPI tracking",
    heading: "Measure what matters most",
    body: "Monitor your team's goals and key business metrics in real time. Custom dashboards make insights easy to access and act on.",
    art: [
      { src: "/assets/img/A1gzdWReJANo54cCWI3zX4uFwOQ.png", w: 458, h: 311, x: 32, y: 47, r: 16 },
    ],
  },
  {
    id: "workflow-automation",
    tab: "Workflow automation",
    icon: "tabLayers" as const,
    eyebrow: "Workflow automation",
    heading: "Automate repetitive tasks",
    body: "Save time with built-in automations that handle reminders, approvals, and task assignments — so your team can focus on high-impact work.",
    art: [
      { src: "/assets/img/YAV2ruGFxCKxoKpmyegpIo6Dc9o.png", w: 312, h: 307, x: 121, y: 37, r: 16 },
    ],
  },
  {
    id: "team-management",
    tab: "Team management",
    icon: "tabPeople" as const,
    eyebrow: "Team management",
    heading: "Built for growing teams",
    body: "Easily onboard new members, assign roles, and manage access. Keep your organization structured and scalable from day one.",
    art: [
      { src: "/assets/img/fI8c4AtzWSeOT2A8acLupLXlM.png", w: 279, h: 63, x: 121, y: 24, r: 0 },
      { src: "/assets/img/k9JvsWmwaFu5EjRUms2dFdTEhAs.png", w: 458, h: 365, x: 32, y: 44, r: 16 },
    ],
  },
];

export const featurePanelBackdrop = "/assets/img/805eae61739bea7c.webp";

export const integrations = {
  heading: "Powerful integrations",
  sub: "Seamlessly integrate with your favorite tools to streamline workflows and keep everything in sync.",
  cta: { label: "Get started", href: "/#pricing" },
  steps: [
    { num: "01", label: "Explore 50+ supported integrations" },
    { num: "02", label: "Securely link your account" },
    { num: "03", label: "Sync and streamline your workflow" },
  ],
  columns: [
    [
      { src: "/assets/img/594cb98d06fe8f1c.webp", w: 44, h: 29 },
      { src: "/assets/img/7e8eda4062893225.webp", w: 44, h: 44 },
      { src: "/assets/img/44953c506be10925.webp", w: 44, h: 44 },
      { src: "/assets/img/be0767c0415f0869.webp", w: 44, h: 44 },
    ],
    [
      { src: "/assets/img/6622ec112ad97fbe.webp", w: 44, h: 34 },
      { src: "/assets/img/fba695401d7bc034.webp", w: 44, h: 44 },
      { src: "/assets/img/98058893f861167b.webp", w: 44, h: 34 },
      { src: "/assets/img/cecfc1d7f1cfd835.webp", w: 44, h: 43 },
    ],
  ],
};

/** The plan card's button leaves the site in the export. */
export const pricingCtaHref = "https://lunisdesign.com";

export const pricing = {
  heading: "Flexible pricing",
  /* The export only draws this line below 1200; the desktop variant drops it. */
  sub: "Simple, transparent pricing with no hidden fees.",
  background: "/assets/img/47a3d038bc6740ba.webp",
  /* Only the Starter column is in the static export; Growth and Scale were read
     off the running original by driving the plan selector. */
  plans: [
    {
      id: "starter",
      name: "Starter",
      tagline: "For early-stage teams",
      price: "$24",
      per: "/ mo",
      blurb: "Ideal for early-stage teams who need actionable insights to move forward.",
      cta: "Schedule a demo",
      features: [
        "Access to core features",
        "Basic performance reporting",
        "Email support",
        "Strategy onboarding guide",
        "Monthly check-in summary",
      ],
    },
    {
      id: "growth",
      name: "Growth",
      tagline: "Most popular",
      price: "$69",
      // The template drops the space on the two upper tiers. Kept verbatim.
      per: "/mo",
      blurb: "Designed for growing teams that need powerful tools and expert guidance.",
      cta: "Schedule a demo",
      features: [
        "Access to core features",
        "Advanced analytics dashboard",
        "Priority email support",
        "Quarterly strategy sessions",
        "Team access (up to 5 users)",
      ],
    },
    {
      id: "scale",
      name: "Scale",
      // The export's own typo — "starups". Kept.
      tagline: "For fast-scaling starups",
      price: "$129",
      per: "/mo",
      blurb: "Built for fast-scaling startups that require deep insights and partnership.",
      cta: "Schedule a demo",
      features: [
        "Access to all features",
        "Dedicated success manager",
        "Custom KPI tracking",
        "Monthly performance reviews",
        "Team access (unlimited users)",
      ],
    },
  ],
};

export const successStories = {
  heading: "Success stories",
  sub: "Grovia has partnered with growing businesses to build foundations for sustainable success. Explore real stories of transformation.",
  cta: { label: "Read more", href: "/case-studies" },
  /* The home grid shows four of the six case studies. */
  slugs: ["pluto", "vitahealth", "boxmedia", "novatech"],
};

export const testimonials = [
  {
    quote:
      "Grovia helped us streamline our operations and scale faster than we imagined. Their mix of strategy and execution is unmatched.",
    name: "Talia Smith",
    role: "Head of Product at Forma",
    avatar: "/assets/img/5bba0761e5487a70.webp",
  },
  {
    quote:
      "Working with Grovia felt like having an extension of our team. They understood our challenges and delivered real, measurable results.",
    name: "Jordan Johnson",
    role: "COO at Metricon",
    avatar: "/assets/img/1bd3b6cab430afe6.webp",
  },
  {
    quote:
      "From the first meeting, Grovia brought clarity and momentum to our hiring strategy. We’ve seen a major improvement in team performance.",
    name: "Samuel Torres",
    role: "Founder at Bloomtech",
    avatar: "/assets/img/306438f6ee17d2d3.webp",
  },
];

export const faq = {
  heading: "Your questions, answered",
  sub: "Get quick answers to the most common questions about our platform and services.",
  cta: { label: "Contact us", href: "/#contact" },
  items: [
    {
      q: "What types of companies do you work with?",
      a: "We partner with startups, small businesses, and growing teams across industries. Whether you're in tech, retail, or services, our solutions adapt to your needs.",
    },
    {
      q: "How long does it take to see results?",
      a: "Most clients begin noticing improvements within the first few weeks. For deeper operational changes, we typically see lasting impact within 2 to 3 months.",
    },
    {
      q: "Can Grovia integrate with our existing tools?",
      a: "Yes. Grovia is built to work with a wide range of platforms including Slack, Notion, Google Workspace, and more.",
    },
    {
      q: "Do you offer one-time consultations or ongoing support?",
      a: "Both. You can engage us for one-time strategy sessions or ongoing advisory support depending on your goals and team needs.",
    },
    {
      q: "What does onboarding look like?",
      a: "Our onboarding process is simple and collaborative. We start with a kickoff session, align on goals, and provide a tailored roadmap to guide the next steps.",
    },
  ],
};
