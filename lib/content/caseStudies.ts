/**
 * The six case studies. Copy, covers, logos, authors and the per-page related
 * pairs are all lifted from the export; `related` reproduces the original's own
 * pairing, including BoxMedia listing itself (see PRODUCT.md).
 */

export type Block = {
  heading: string;
  body: string;
  bullets?: string[];
  /** Trailing sentence the template nests inside the last bullet. */
  bulletTail?: string;
  images: string[]; // 1 image = full width, 2 = side by side
};

export type CaseStudy = {
  slug: string;
  name: string;
  year: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  logo: string;
  author: { name: string; role: string; avatar: string };
  blocks: Block[];
  related: [string, string];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "pluto",
    name: "Pluto",
    year: "2025",
    excerpt:
      "Helped Pluto scale their product team and streamline onboarding as they expanded into new markets.",
    cover: "/assets/img/ec4732f3e7b3b95b.webp",
    coverAlt: "Minimalist Note Card Composition",
    logo: "/assets/img/76d004437777d747.webp",
    author: {
      name: "Talia Nguyen",
      role: "Head of Product",
      avatar: "/assets/img/5bba0761e5487a70.webp",
    },
    blocks: [
      {
        heading: "Enhancing workflow efficiency",
        body: "Grovia partnered with Pluto to streamline their internal operations. By mapping out their entire payment processing and compliance workflows, we identified inefficiencies and implemented automation to reduce manual tasks. The result was a 25% increase in operational speed without compromising compliance accuracy.",
        images: ["/assets/img/91004ec33709a9fc.webp"],
      },
      {
        heading: "Scaling securely with integrated solutions",
        body: "Grovia introduced a custom integration plan, connecting Pluto’s internal systems with third-party compliance tools and real-time reporting dashboards. This gave leadership immediate visibility into transactions while ensuring that data remained secure and up-to-date.",
        images: ["/assets/img/20aaeaa67a5cdd7e.webp", "/assets/img/d1718b04b6c6887d.webp"],
      },
      {
        heading: "Building a specialized team to support product innovation",
        body: "We helped Pluto recruit talent in critical areas such as fraud prevention, financial compliance, and AI-driven analytics. These hires enabled Pluto to:",
        bullets: [
          "Enhance fraud detection algorithms",
          "Improve payment reconciliation speed",
          "Maintain high regulatory standards",
        ],
        bulletTail:
          "This combination of skills positioned Pluto to expand confidently into new markets.",
        images: ["/assets/img/4bf7f415d2d62b37.webp"],
      },
    ],
    related: ["boxmedia", "naviai"],
  },
  {
    slug: "vitahealth",
    name: "VitaHealth",
    year: "2024",
    excerpt: "Partnered with VitaHealth to set up their first operations team from the ground up.",
    cover: "/assets/img/e5aaf9a895c0f275.webp",
    coverAlt: "Green Plant",
    logo: "/assets/img/5e6f363cd4ff6f3f.webp",
    author: {
      name: "Sophia Reynolds",
      role: "Founder & CEO",
      avatar: "/assets/img/c515fb1f0e44c483.webp",
    },
    blocks: [
      {
        heading: "Improving patient engagement",
        body: "VitaHealth approached Grovia to consolidate its fragmented patient engagement tools into a single, cohesive system. Our team analyzed their existing patient communication workflows and built a central platform that unified appointment scheduling, follow-ups, and wellness reminders. This improved patient satisfaction scores by 18% within the first quarter.",
        images: ["/assets/img/92cdcc16dfc2ed87.webp", "/assets/img/91004ec33709a9fc.webp"],
      },
      {
        heading: "Recruiting healthcare technology specialists",
        body: "We assembled a team of UX designers, healthcare compliance experts, and data engineers to redesign VitaHealth’s digital platform. The combined expertise allowed VitaHealth to:",
        bullets: [
          "Launch an updated patient portal in just 90 days",
          "Integrate secure telemedicine features",
          "Meet HIPAA compliance requirements without delays",
        ],
        images: ["/assets/img/d1718b04b6c6887d.webp"],
      },
    ],
    related: ["novatech", "lumora"],
  },
  {
    slug: "boxmedia",
    name: "BoxMedia",
    year: "2025",
    excerpt:
      "Supported BoxMedia, a creative agency, in building their client success team and internal delivery process.",
    cover: "/assets/img/3966f5caca770a0c.webp",
    coverAlt: "Pink Radio",
    logo: "/assets/img/cdfe39454d286a98.webp",
    author: {
      name: "Lucas Rivera",
      role: "CFO",
      avatar: "/assets/img/306438f6ee17d2d3.webp",
    },
    blocks: [
      {
        heading: "Streamlining content production",
        body: "BoxMedia partnered with Grovia to simplify its content creation and distribution workflows across multiple platforms. We created a centralized project management environment that connected creative teams, editors, and distribution partners. This eliminated redundancy and reduced content turnaround time by 35%.",
        images: ["/assets/img/8e83e799311ae31c.webp"],
      },
      {
        heading: "Building the right team for creative excellence",
        body: "Our recruitment process brought in specialists in video editing, digital marketing, and metadata optimization. With these experts, BoxMedia was able to:",
        bullets: [
          "Produce higher-quality content faster",
          "Improve discoverability on streaming platforms",
          "Expand its multilingual offerings to new markets",
        ],
        images: ["/assets/img/91004ec33709a9fc.webp", "/assets/img/0f06b396e06bb539.webp"],
      },
    ],
    // The original's own pairing: BoxMedia's "More insights" lists BoxMedia.
    related: ["boxmedia", "novatech"],
  },
  {
    slug: "novatech",
    name: "NovaTech",
    year: "2023",
    excerpt:
      "Helped NovaTech optimize cross-functional collaboration between marketing, product, and sales teams.",
    cover: "/assets/img/2fc347463d5ac01a.webp",
    coverAlt: "Laptop and Plant",
    logo: "/assets/img/215deec62f6c013a.webp",
    author: {
      name: "Lucas Rivera",
      role: "CFO",
      avatar: "/assets/img/306438f6ee17d2d3.webp",
    },
    blocks: [
      {
        heading: "Accelerating product development cycles",
        body: "NovaTech needed a scalable solution to manage product roadmaps and cross-department collaboration. Grovia implemented a unified project management tool that allowed engineering, design, and marketing teams to work in sync. This reduced feature release cycles from 8 weeks to 5 weeks.",
        images: ["/assets/img/20aaeaa67a5cdd7e.webp", "/assets/img/5f39d6b8e450ecc4.webp"],
      },
      {
        heading: "Recruiting top-tier engineering and product talent",
        body: "Grovia sourced and onboarded specialists in software architecture, cloud infrastructure, and UI/UX design. This new talent pool enabled NovaTech to:",
        bullets: [
          "Launch more stable product updates",
          "Improve user experience with design-focused refinements",
          "Expand into emerging tech segments",
        ],
        images: ["/assets/img/33cf31c4414086a3.webp"],
      },
      {
        heading: "Integrating performance tracking",
        body: "We deployed an analytics suite within NovaTech’s internal systems to track engineering velocity, defect rates, and user feedback in real time. These metrics provided leadership with actionable insights, enabling faster pivots and more strategic product decisions.",
        images: ["/assets/img/91004ec33709a9fc.webp", "/assets/img/9e860748e3248a44.webp"],
      },
    ],
    related: ["boxmedia", "pluto"],
  },
  {
    slug: "naviai",
    name: "NaviAI",
    year: "2025",
    excerpt:
      "NaviAI, an emerging leader in AI-driven navigation systems, partnered with Grovia to scale their technical team.",
    cover: "/assets/img/917b968711888bd6.webp",
    coverAlt: "3D Objects",
    logo: "/assets/img/09078776a32bae0e.webp",
    author: {
      name: "Emily Johnson",
      role: "Lead Designer",
      avatar: "/assets/img/d17f9d727ad1202b.webp",
    },
    blocks: [
      {
        heading: "Identifying gaps and strategic needs",
        body: "Before building the team, Grovia worked closely with NaviAI to understand their growth roadmap and pinpoint specific talent gaps. This included identifying critical roles in AI model training, data engineering, and UX design. By aligning team-building with product goals, we ensured every new hire contributed directly to the company’s long-term vision.",
        images: ["/assets/img/20aaeaa67a5cdd7e.webp"],
      },
      {
        heading: "Building a specialized team",
        body: "Grovia’s recruitment and project management platform enabled NaviAI to quickly source, vet, and onboard top-tier professionals. Leveraging our extensive network, we assembled a balanced team of engineers, data scientists, and product managers who could collaborate seamlessly from day one. The new team integrated smoothly with NaviAI’s existing workflows, ensuring minimal disruption.",
        images: ["/assets/img/3f5c93cf7e6f1453.webp", "/assets/img/8e83e799311ae31c.webp"],
      },
      {
        heading: "Accelerating product development",
        body: "With the right team in place, NaviAI was able to cut development timelines by nearly 40 percent. The improved efficiency allowed for faster feature rollouts, enhanced navigation accuracy, and a stronger ability to respond to customer feedback. This rapid iteration not only strengthened the product but also gave NaviAI a significant competitive edge.",
        images: [],
      },
    ],
    related: ["lumora", "vitahealth"],
  },
  {
    slug: "lumora",
    name: "Lumora",
    year: "2025",
    excerpt:
      "Lumora Health partnered with Grovia to streamline their product launch process and cross-team coordination.",
    cover: "/assets/img/ce104c98bfe00a8a.webp",
    coverAlt: "Health Device",
    logo: "/assets/img/7dba81e817c24568.webp",
    author: {
      name: "Talia Nguyen",
      role: "Head of Product",
      avatar: "/assets/img/5bba0761e5487a70.webp",
    },
    blocks: [
      {
        heading: "Building a scalable operations framework",
        body: "Grovia partnered with Lumora Health to create a robust operational foundation that could support their rapid expansion in the digital healthcare sector. Our team evaluated their existing workflows, identified bottlenecks in patient onboarding and data handling, and designed a framework to ensure compliance and scalability.",
        images: ["/assets/img/92cdcc16dfc2ed87.webp"],
      },
      {
        heading: "Strengthening cross-functional collaboration",
        body: "Through Grovia’s recruitment platform, we assembled a team of healthcare operations specialists, data security experts, and product managers. This blend of talent ensured that Lumora Health could meet both regulatory requirements and innovation goals while maintaining exceptional patient care standards.",
        images: ["/assets/img/d1718b04b6c6887d.webp"],
      },
      {
        heading: "Accelerating product development",
        body: "With improved processes and a stronger team in place, Lumora Health reduced their product release cycle time by 30 percent. They were able to introduce new telehealth features, improve patient engagement tools, and deliver updates more quickly, helping them remain competitive in the fast-paced HealthTech market.",
        images: ["/assets/img/3f5c93cf7e6f1453.webp", "/assets/img/d4c328e4eaf6dd2d.webp"],
      },
    ],
    related: ["boxmedia", "novatech"],
  },
];

export const bySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);

export const caseStudiesIndex = {
  headingWords: ["Success", "stories", "from", "fast-growing", "startups"],
  sub: "Explore how Grovia has helped startups and growing businesses overcome challenges, scale faster, and build high-performing teams.",
};

export const relatedIntro = {
  heading: "More insights to explore",
  sub: "Discover additional case studies, tips, and strategies to help your business grow and innovate faster.",
};

export const backLink = { label: "All case studies", href: "/case-studies" };
