/** Moneta copy and static, illustrative finance artwork. */
export const hero = {
  headingLines: ["Your money,", "under control."],
  sub: "Take charge of your finances with smarter budgeting, effortless expense tracking, and meaningful insights — all in one beautiful place.",
  primary: { label: "Get Started", href: "/#pricing" },
  secondary: { label: "Explore Features", href: "/#feature" },
};
export const heroCustomers = {
  title: "Total Balance",
  sort: "Sample overview",
  rows: [
    { name: "$24,580.50", org: "A little clarity. A lot of possibility.", icon: "wallet", amount: "" },
    { name: "Monthly Income", org: "This month", icon: "income", amount: "$5,250" },
    { name: "Monthly Spending", org: "Everyday essentials & more", icon: "card", amount: "$2,180" },
  ],
  all: "Your money at a glance",
};
export const heroChart = {
  label: "Savings", value: "$12,450", delta: "+12.8%", period: "growth",
  days: ["M", "T", "W", "T", "F", "S", "S"],
  bars: [[13,13,16], [25,13,40], [13,35,18], [39,13,21], [13,13,30], [13,24,10], [13,13,16]],
};
export const showcaseImage = {
  src: "/assets/moneta/dashboard.svg",
  alt: "Illustrative Moneta dashboard: $24,580.50 total balance, $5,250 monthly income, $2,180 monthly spending, and $12,450 savings with 12.8% growth.",
};
export const steps = [
  { num: "01", title: "Track your spending", body: "See where your money goes, from daily essentials to little treats.", art: "/assets/moneta/step-tracking.svg", backdrop: "/assets/img/bb186adb149f1e08.webp" },
  { num: "02", title: "Plan your budget", body: "Give every dollar a purpose with a monthly plan that fits your life.", art: "/assets/moneta/step-budgets.svg", backdrop: "/assets/img/bb186adb149f1e08.webp" },
  { num: "03", title: "Grow your savings", body: "Make room for what matters and watch your goals take shape.", art: "/assets/moneta/step-savings.svg", backdrop: "/assets/img/bb186adb149f1e08.webp" },
];
export const featuresIntro = {
  heading: "Everything you need to master your money.",
  sub: "Powerful financial tools, designed to make managing money feel effortless.",
};
/** Preserve the four-tab layout; related concepts share a panel. */
export const featureTabs = [
  {
    id: "expense-tracking", tab: "Expense tracking", icon: "tabMonitor" as const,
    eyebrow: "Smart Expense Tracking", heading: "Little purchases. A clearer picture.",
    body: "See everyday expenses by category, with a Subscription Overview that brings recurring costs into focus. Every detail, beautifully organized.",
    art: [{ src: "/assets/moneta/feature-tracking.svg", w: 522, h: 389, x: 32, y: 32, r: 16 }],
  },
  {
    id: "spending-insights", tab: "Spending insights", icon: "tabChart" as const,
    eyebrow: "Beautiful Spending Insights", heading: "See the story behind your spending.",
    body: "Discover patterns in your everyday spending. Clear charts and Financial Progress Tracking help you see the bigger picture, month after month.",
    art: [{ src: "/assets/moneta/feature-insights.svg", w: 458, h: 311, x: 32, y: 47, r: 16 }],
  },
  {
    id: "monthly-budgets", tab: "Monthly budgets", icon: "tabLayers" as const,
    eyebrow: "Flexible Monthly Budgets", heading: "A plan that leaves room for living.",
    body: "Organize essentials, everyday joys, and everything in between. Explore flexible spending categories that make your monthly plan feel personal.",
    art: [{ src: "/assets/moneta/feature-budgets.svg", w: 312, h: 307, x: 121, y: 37, r: 16 }],
  },
  {
    id: "savings-goals", tab: "Savings goals", icon: "tabPeople" as const,
    eyebrow: "Personalized Savings Goals", heading: "Small steps toward something bigger.",
    body: "A rainy day fund. A faraway trip. A place of your own. Picture your goals, follow your progress, and celebrate each milestone along the way.",
    art: [
      { src: "/assets/moneta/goal-badge.svg", w: 279, h: 63, x: 121, y: 24, r: 0 },
      { src: "/assets/moneta/feature-savings.svg", w: 458, h: 365, x: 32, y: 44, r: 16 },
    ],
  },
];
export const featurePanelBackdrop = "/assets/img/805eae61739bea7c.webp";
export const integrations = {
  heading: "Everything in one beautiful place.",
  sub: "Imagine all your financial information, organized into one clear and simple view.",
  cta: { label: "Explore Features", href: "/#feature" },
  steps: [
    { num: "01", label: "Everyday spending, neatly organized" },
    { num: "02", label: "Budgets and subscriptions at a glance" },
    { num: "03", label: "Your savings goals, always in sight" },
  ],
  columns: [
    ["wallet", "card", "home", "coffee"].map(icon => ({ src: `/assets/moneta/icon-${icon}.svg`, w: 44, h: 44 })),
    ["savings", "chart", "income", "travel"].map(icon => ({ src: `/assets/moneta/icon-${icon}.svg`, w: 44, h: 44 })),
  ],
};
export const pricingCtaHref = "/#feature";
export const pricing = {
  heading: "Simple pricing. Powerful possibilities.",
  sub: "Illustrative plans for this portfolio concept. No subscriptions or payments.",
  background: "/assets/img/47a3d038bc6740ba.webp",
  plans: [
    { id: "free", name: "Free", tagline: "A little more clarity", price: "$0", per: "/mo", blurb: "A simple starting point for understanding your everyday finances.", cta: "Explore Free", features: ["Basic expense tracking", "Budget overview", "Savings goals"] },
    { id: "plus", name: "Plus", tagline: "Room to go further", price: "$9", per: "/mo", blurb: "More perspective and flexibility for the way you manage your money.", cta: "Explore Plus", features: ["Everything in Free", "Advanced spending insights", "Unlimited budgets", "Subscription overview"] },
    { id: "pro", name: "Pro", tagline: "See the bigger picture", price: "$19", per: "/mo", blurb: "A deeper view of your progress and the possibilities ahead.", cta: "Explore Pro", features: ["Everything in Plus", "Custom reports", "Advanced analytics", "Detailed goal planning"] },
  ],
};
export const successStories = {
  heading: "Take the stress out of managing money.",
  sub: "A few ways clearer finances could fit into everyday life. These stories and testimonials are fictional examples, not customer reviews.",
  cta: { label: "Explore example stories", href: "/case-studies" },
  slugs: ["pluto", "vitahealth", "boxmedia", "novatech"],
};
export const testimonials = [
  { quote: "Seeing my everyday spending in one place makes the month feel less overwhelming. Even the little purchases have a place in my plan.", name: "Talia Smith", role: "Fictional budgeting story", avatar: "/assets/img/5bba0761e5487a70.webp" },
  { quote: "My travel fund finally feels like a real goal. A simple progress view is the reminder I need to keep putting a little aside.", name: "Jordan Johnson", role: "Fictional savings story", avatar: "/assets/img/1bd3b6cab430afe6.webp" },
  { quote: "A clear view of recurring costs helps me think about what I actually use. Planning next month feels a little more intentional.", name: "Samuel Torres", role: "Fictional spending story", avatar: "/assets/img/306438f6ee17d2d3.webp" },
];
export const faq = {
  heading: "Everything you want to know.",
  sub: "A closer look at the Moneta concept and the ideas behind it.",
  cta: { label: "Explore Moneta", href: "/#feature" },
  items: [
    { q: "What is Moneta?", a: "Moneta is a personal finance design concept that brings spending, budgeting, and savings goals into one beautiful view. This site is a frontend portfolio project with static sample data." },
    { q: "How does expense tracking work?", a: "The concept groups everyday purchases into clear categories, showing where money goes over time. The previews use fictional transactions; this site does not collect expenses or connect to bank accounts." },
    { q: "Can I create multiple budgets?", a: "The design explores separate budgets for essentials, leisure, and other priorities. Multiple budgets are illustrated in the previews, but creating or saving a budget is not available on this portfolio site." },
    { q: "Can I track savings goals?", a: "The sample visuals show progress toward goals such as travel and an emergency fund. These are decorative examples, with no live balances, calculations, or stored financial information." },
    { q: "Is Moneta a real financial service?", a: "No. Moneta is a frontend-only portfolio concept, not a financial service. Pricing, testimonials, and stories are illustrative. There are no user accounts, bank integrations, payments, or financial advice." },
  ],
};
