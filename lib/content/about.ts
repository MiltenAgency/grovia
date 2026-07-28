/** About page copy and assets, verbatim from the export. */

export const aboutHero = {
  /* Rendered word by word in the original so each word can rise on its own. */
  headingWords: ["We", "empower", "startups", "to", "scale", "smarter", "and", "faster"],
  sub: "We are a team of strategists and engineers driven by one goal — helping ambitious startups to grow with confidence.",
  video: "/assets/video/s829pGpNZhuOHQj6ne0akFvMTs.mp4",
  videoPoster: "/assets/img/2c510c55d3446554.webp",
  stack: [
    { src: "/assets/img/2c510c55d3446554.webp", alt: "Two colleagues at a desk in a yellow office" },
    { src: "/assets/img/1c749728b0b989ac.webp", alt: "Three colleagues around a laptop" },
  ],
};

export const mission = {
  heading: "Our mission",
  lead: "Empower startups and growing businesses with the tools, insights, and support they need to ",
  leadEmphasis: "scale smarter, move faster, and build lasting success",
  leadTail: ".",
  background: "/assets/img/6add15eaf6935ff1.webp",
  inset: "/assets/img/a4ade7fc7f21e6fb.webp",
  /* The static export ships every counter parked at its placeholder (100+, 10%,
     10%, 10+); these are the hydrated values read off the running original. */
  stats: [
    {
      value: "250+",
      label: "Projects Supported",
      body: "Helping teams move from idea to execution faster.",
      tint: 0.4,
    },
    {
      value: "85%",
      label: "Client Retention Rate",
      body: "Long-term partnerships built on real results.",
      tint: 0.8,
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      body: "Consistently high ratings from clients across industries.",
      tint: 0.8,
    },
    {
      value: "30+",
      label: "Integrations Supported",
      body: "Seamlessly connects with your favorite tools and platforms.",
      tint: 0.4,
    },
  ],
  partnersLabel: "Trusted by 50+ partners",
};

export const team = {
  heading: "Meet the team",
  sub: "Our team combines deep industry knowledge with hands-on experience to help startups grow smarter and faster.",
  members: [
    {
      name: "Sophia Reynolds",
      role: "Founder & CEO",
      photo: "/assets/img/7af89af2059792e8.webp",
    },
    { name: "Lucas Rivera", role: "CFO", photo: "/assets/img/bec5b2e754935aa5.webp" },
    { name: "Emily Johnson", role: "Lead Designer", photo: "/assets/img/1bd3b6cab430afe6.webp" },
    { name: "Ethan Moore", role: "Project Manager", photo: "/assets/img/1ecb353911add75f.webp" },
  ],
};
