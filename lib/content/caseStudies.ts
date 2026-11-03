/** Fictional personal finance stories; original routes and image composition retained. */
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
    "slug": "pluto",
    "name": "Everyday clarity",
    "year": "Illustrative story",
    "excerpt": "A calmer month starts with knowing where your money goes.",
    "cover": "/assets/img/ec4732f3e7b3b95b.webp",
    "coverAlt": "Illustrative scene for everyday clarity",
    "logo": "/assets/moneta/wordmark.svg",
    "author": {
      "name": "Talia Smith",
      "role": "Fictional persona",
      "avatar": "/assets/img/5bba0761e5487a70.webp"
    },
    "blocks": [
      {
        "heading": "Spending with intention",
        "body": "Talia imagines seeing groceries, coffee, and recurring costs side by side. Clear categories turn a long list of purchases into a picture she can understand.",
        "images": [
          "/assets/img/91004ec33709a9fc.webp"
        ]
      },
      {
        "heading": "A budget with breathing room",
        "body": "Her sample plan makes space for essentials and small joys. The aim is a more intentional month, with less time spent wondering where it all went.",
        "images": [
          "/assets/img/20aaeaa67a5cdd7e.webp",
          "/assets/img/d1718b04b6c6887d.webp"
        ]
      },
      {
        "heading": "Noticing the little things",
        "body": "A monthly overview could make small spending patterns easier to spot. This is a fictional scenario illustrating the Moneta design, not a measured customer outcome.",
        "images": [
          "/assets/img/4bf7f415d2d62b37.webp"
        ]
      }
    ],
    "related": [
      "boxmedia",
      "naviai"
    ]
  },
  {
    "slug": "vitahealth",
    "name": "Room for the unexpected",
    "year": "Illustrative story",
    "excerpt": "Picture an emergency fund that grows a little at a time.",
    "cover": "/assets/img/e5aaf9a895c0f275.webp",
    "coverAlt": "Illustrative scene for room for the unexpected",
    "logo": "/assets/moneta/wordmark.svg",
    "author": {
      "name": "Jordan Johnson",
      "role": "Fictional persona",
      "avatar": "/assets/img/c515fb1f0e44c483.webp"
    },
    "blocks": [
      {
        "heading": "A goal with a purpose",
        "body": "Jordan imagines a savings goal for the unexpected. Naming the goal gives the sample balance a purpose beyond a number on a screen.",
        "images": [
          "/assets/img/92cdcc16dfc2ed87.webp",
          "/assets/img/91004ec33709a9fc.webp"
        ]
      },
      {
        "heading": "Making progress visible",
        "body": "A simple progress bar shows a fictional emergency fund at $10,000 toward a $12,000 goal. It is a visual example, not a live account or financial recommendation.",
        "images": [
          "/assets/img/d1718b04b6c6887d.webp"
        ]
      }
    ],
    "related": [
      "novatech",
      "lumora"
    ]
  },
  {
    "slug": "boxmedia",
    "name": "Somewhere new",
    "year": "Illustrative story",
    "excerpt": "Small steps toward a trip worth looking forward to.",
    "cover": "/assets/img/3966f5caca770a0c.webp",
    "coverAlt": "Illustrative scene for somewhere new",
    "logo": "/assets/moneta/wordmark.svg",
    "author": {
      "name": "Alex Morgan",
      "role": "Fictional persona",
      "avatar": "/assets/img/306438f6ee17d2d3.webp"
    },
    "blocks": [
      {
        "heading": "Something to look forward to",
        "body": "Alex pictures a travel fund for a long-awaited trip. The sample dashboard gives that goal its own place, alongside everyday priorities.",
        "images": [
          "/assets/img/8e83e799311ae31c.webp"
        ]
      },
      {
        "heading": "A little closer each month",
        "body": "The fictional preview shows $2,450 toward a $4,000 travel goal. A lavender progress indicator makes the milestone easy to see at a glance.",
        "images": [
          "/assets/img/91004ec33709a9fc.webp",
          "/assets/img/0f06b396e06bb539.webp"
        ]
      }
    ],
    "related": [
      "boxmedia",
      "novatech"
    ]
  },
  {
    "slug": "novatech",
    "name": "The little recurring things",
    "year": "Illustrative story",
    "excerpt": "A clearer view of the subscriptions in everyday life.",
    "cover": "/assets/img/2fc347463d5ac01a.webp",
    "coverAlt": "Illustrative scene for the little recurring things",
    "logo": "/assets/moneta/wordmark.svg",
    "author": {
      "name": "Samuel Torres",
      "role": "Fictional persona",
      "avatar": "/assets/img/306438f6ee17d2d3.webp"
    },
    "blocks": [
      {
        "heading": "A place for recurring costs",
        "body": "Samuel imagines reviewing streaming, music, and other recurring expenses together. The concept makes those small, regular costs easier to notice.",
        "images": [
          "/assets/img/20aaeaa67a5cdd7e.webp",
          "/assets/img/5f39d6b8e450ecc4.webp"
        ]
      },
      {
        "heading": "Seeing the full picture",
        "body": "Sample transaction categories distinguish subscriptions from one-off purchases. Everything shown is fictional and no subscription services are connected.",
        "images": [
          "/assets/img/33cf31c4414086a3.webp"
        ]
      },
      {
        "heading": "A more intentional month",
        "body": "With recurring costs in view, Samuel could reflect on what matters to him. Moneta does not cancel subscriptions or provide account management.",
        "images": [
          "/assets/img/91004ec33709a9fc.webp",
          "/assets/img/9e860748e3248a44.webp"
        ]
      }
    ],
    "related": [
      "boxmedia",
      "pluto"
    ]
  },
  {
    "slug": "naviai",
    "name": "A place of your own",
    "year": "Illustrative story",
    "excerpt": "Imagine a longer-term goal without losing sight of today.",
    "cover": "/assets/img/917b968711888bd6.webp",
    "coverAlt": "Illustrative scene for a place of your own",
    "logo": "/assets/moneta/wordmark.svg",
    "author": {
      "name": "Maya Chen",
      "role": "Fictional persona",
      "avatar": "/assets/img/d17f9d727ad1202b.webp"
    },
    "blocks": [
      {
        "heading": "Naming the next chapter",
        "body": "Maya imagines setting a personal goal for a future home. A dedicated goal card gives that intention a clear place in the concept dashboard.",
        "images": [
          "/assets/img/20aaeaa67a5cdd7e.webp"
        ]
      },
      {
        "heading": "Keeping today in view",
        "body": "Monthly budget categories sit alongside longer-term goals. The design explores how both perspectives can coexist without overwhelming the screen.",
        "images": [
          "/assets/img/3f5c93cf7e6f1453.webp",
          "/assets/img/8e83e799311ae31c.webp"
        ]
      },
      {
        "heading": "Progress at your own pace",
        "body": "The sample goal is a visual illustration only. This portfolio makes no promises about savings results and provides no financial advice.",
        "images": []
      }
    ],
    "related": [
      "lumora",
      "vitahealth"
    ]
  },
  {
    "slug": "lumora",
    "name": "A month that fits",
    "year": "Illustrative story",
    "excerpt": "A flexible sample budget for changing priorities.",
    "cover": "/assets/img/ce104c98bfe00a8a.webp",
    "coverAlt": "Illustrative scene for a month that fits",
    "logo": "/assets/moneta/wordmark.svg",
    "author": {
      "name": "Leo Rivera",
      "role": "Fictional persona",
      "avatar": "/assets/img/5bba0761e5487a70.webp"
    },
    "blocks": [
      {
        "heading": "Starting with everyday life",
        "body": "Leo imagines a monthly plan built around essentials, leisure, and a few little extras. The categories reflect the ways money shows up in daily life.",
        "images": [
          "/assets/img/92cdcc16dfc2ed87.webp"
        ]
      },
      {
        "heading": "Making space for change",
        "body": "The illustrative budget card pairs sample category amounts with simple progress bars. It explores clarity and visual hierarchy, without live calculations.",
        "images": [
          "/assets/img/d1718b04b6c6887d.webp"
        ]
      },
      {
        "heading": "A calmer overview",
        "body": "The story shows how a finance interface could feel approachable. Leo is a fictional persona, and the example does not describe a real customer experience.",
        "images": [
          "/assets/img/3f5c93cf7e6f1453.webp",
          "/assets/img/d4c328e4eaf6dd2d.webp"
        ]
      }
    ],
    "related": [
      "boxmedia",
      "novatech"
    ]
  }
];
export const bySlug = (slug: string) => caseStudies.find(c => c.slug === slug);
export const caseStudiesIndex = {
  headingWords: ["A", "little", "clarity", "for", "everyday", "life."],
  sub: "Fictional stories exploring how the Moneta concept could fit into everyday life. These are illustrative examples, not customer experiences or financial advice.",
};
export const relatedIntro = {
  heading: "More possibilities to explore",
  sub: "Discover more fictional stories about spending, budgeting, and saving.",
};
export const backLink = { label: "All example stories", href: "/case-studies" };
