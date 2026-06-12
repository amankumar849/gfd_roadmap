import { TopicNode } from '../types';

export const fullStackData: TopicNode[] = [
  // Frontend
  {
    id: 'fs-html',
    title: 'HTML (HyperText Markup Language)',
    description: 'Learn the skeleton of the web. Focus on semantic elements, document structures, forms, validation, and accessibility (ARIA standards).',
    durationEstimate: '3 days',
    category: 'Frontend',
    resources: [
      { id: 'html-r1', name: 'MDN Web Docs - HTML Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML', type: 'docs' },
      { id: 'html-r2', name: 'W3Schools HTML Tutorial', url: 'https://www.w3schools.com/html/', type: 'docs' }
    ],
    practiceQuestions: [
      { id: 'html-q1', text: 'Build a standard accessible registration form listing proper labels, fieldsets, legends, and input types (email, password, date).', difficulty: 'Easy' },
      { id: 'html-q2', text: 'Why is using semantic tags like <main>, <article>, and <aside> preferred over generic <divs>?', difficulty: 'Easy', solutionHint: 'Semantic tags boost SEO, structure content neatly, and are essential for browser screen-readers assisting visually impaired users.' }
    ]
  },
  {
    id: 'fs-css',
    title: 'CSS (Cascading Style Sheets)',
    description: 'Master styling websites. Target CSS box-model, layouts (Flexbox and Grid), media queries for responsive configurations, variables, and transitions.',
    durationEstimate: '1 week',
    category: 'Frontend',
    resources: [
      { id: 'css-r1', name: 'MDN CSS Complete Learning Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS', type: 'docs' },
      { id: 'css-r2', name: 'A Complete Guide to Flexbox - CSS Tricks', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', type: 'article' },
      { id: 'css-r3', name: 'A Complete Guide to Grid - CSS Tricks', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/', type: 'article' }
    ],
    practiceQuestions: [
      { id: 'css-q1', text: 'Design a responsive 3-column pricing section layout using CSS Grid that falls back to a 1-column layout on mobile screen widths (< 640px).', difficulty: 'Medium' },
      { id: 'css-q2', text: 'Explain the difference between absolute, relative, fixed, and sticky positioning with clear examples.', difficulty: 'Easy', solutionHint: 'Relative stays in default flow but can be offset; absolute places relative to nearest positioned parent; fixed stays absolute on screen viewport; sticky toggles relative-fixed dynamically during scroll.' }
    ]
  },
  {
    id: 'fs-js',
    title: 'JavaScript (ES6+)',
    description: 'The programming language of the browser. Understand core logic, closures, scopes, the event loop, DOM operations, and asynchronous protocols (Promises, async/await, fetch API).',
    durationEstimate: '2 weeks',
    category: 'Frontend',
    resources: [
      { id: 'js-r1', name: 'javascript.info - The Modern JavaScript Tutorial', url: 'https://javascript.info', type: 'docs' },
      { id: 'js-r2', name: 'Eloquent JavaScript - Free Online Book', url: 'https://eloquentjavascript.net', type: 'book' },
      { id: 'js-r3', name: 'Namaste JavaScript YouTube Playlist by Akshay Saini', url: 'https://www.youtube.com', type: 'video' }
    ],
    practiceQuestions: [
      { id: 'js-q1', text: 'Implement a debounce function in JavaScript to optimize a high-frequency search input listener.', difficulty: 'Hard', solutionHint: 'Debouncing delays execution until a certain window of silence has occurred. Return a returned closure saving a timeout reference.' },
      { id: 'js-q2', text: 'Write a utility function using Fetch and async/await that queries an external REST server with retry fallback on 500 error responses.', difficulty: 'Medium' }
    ]
  },
  {
    id: 'fs-ts',
    title: 'TypeScript',
    description: 'A structural static-typed superset of JavaScript. Adds types, interfaces, generics, type assertion guards, and compilation checks to guarantee enterprise safety.',
    durationEstimate: '4 days',
    category: 'Frontend',
    resources: [
      { id: 'ts-r1', name: 'TypeScript Handbook - Official Docs', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', type: 'docs' },
      { id: 'ts-r2', name: 'Total TypeScript free course by Matt Pocock', url: 'https://www.totaltypescript.com', type: 'course' }
    ],
    practiceQuestions: [
      { id: 'ts-q1', text: 'Declare a reusable generic function "fetchData<T>(url: string): Promise<T>" and interface standard responses with custom types.', difficulty: 'Medium' },
      { id: 'ts-q2', text: 'What is the utility differences between a Type and an Interface in modern TypeScript?', difficulty: 'Easy', solutionHint: 'Interfaces can be extended/merged via duplicates, whereas Types can create unions, intersection unions, and handle primitive mappings.' }
    ]
  },
  {
    id: 'fs-tailwind',
    title: 'Tailwind CSS',
    description: 'A utility-first CSS framework enabling devs to compose highly refined styled layouts directly inside markup via lightweight utility classes.',
    durationEstimate: '3 days',
    category: 'Frontend',
    resources: [
      { id: 'tw-r1', name: 'Official Tailwind CSS Documentation', url: 'https://tailwindcss.com/docs', type: 'docs' },
      { id: 'tw-r2', name: 'Tailwind CSS Playgrounds & Sandbox', url: 'https://play.tailwindcss.com', type: 'docs' }
    ],
    practiceQuestions: [
      { id: 'tw-q1', text: 'Code an beautiful alert modal with rounded borders, smooth active scale bounce, responsive widths, and ambient backing blurred backdrop filters.', difficulty: 'Easy' }
    ]
  },
  {
    id: 'fs-react',
    title: 'React.js',
    description: 'Industry-standard declarative component hierarchy. Study React 18/19 components, custom Hooks (useState, useEffect, useMemo, useCallback), context providers, and clean state operations.',
    durationEstimate: '2 weeks',
    category: 'Frontend',
    resources: [
      { id: 'react-r1', name: 'React.dev - Elegant New Documentation', url: 'https://react.dev', type: 'docs' },
      { id: 'react-r2', name: 'Epic React by Kent C. Dodds', url: 'https://epicreact.dev', type: 'course' }
    ],
    practiceQuestions: [
      { id: 'react-q1', text: 'Design a lightweight custom Hook "useLocalStorageState(key, initialValue)" which synchronizes states securely across browser storage cycles.', difficulty: 'Medium' },
      { id: 'react-q2', text: 'Explain React render cycles, Virtual DOM comparison, and why mounting arrays require unique stable key attributes.', difficulty: 'Medium', solutionHint: 'Keys help React track exact items across mutations, avoiding unnecessary re-renders or state pollution in component states.' }
    ]
  },
  {
    id: 'fs-next',
    title: 'Next.js',
    description: 'React Framework for production. Core features like server-side rendering (SSR), static site generation (SSG), app router layouts, API endpoints, and smart SEO optimization.',
    durationEstimate: '1 week',
    category: 'Frontend',
    resources: [
      { id: 'next-r1', name: 'Next.js Learning Path & Official Tutorial', url: 'https://nextjs.org/learn', type: 'course' },
      { id: 'next-r2', name: 'Next.js Documentation', url: 'https://nextjs.org/docs', type: 'docs' }
    ],
    practiceQuestions: [
      { id: 'next-q1', text: 'Explain the dynamic execution of Route Handlers and Server Actions in Next.js App Router folders.', difficulty: 'Medium' }
    ]
  },

  // Backend
  {
    id: 'fs-node',
    title: 'Node.js',
    description: 'The JavaScript runtime built on Chrome\'s V8 engine that runs servers. Study File IO, event emitters, paths, and package managers (npm/pnpm).',
    durationEstimate: '5 days',
    category: 'Backend',
    resources: [
      { id: 'node-r1', name: 'Node.js Official Documentation & Guides', url: 'https://nodejs.org/en/docs/', type: 'docs' },
      { id: 'node-r2', name: 'Node.js Complete Guide on freeCodeCamp', url: 'https://www.freecodecamp.org/news/introduction-to-nodejs/', type: 'article' }
    ],
    practiceQuestions: [
      { id: 'node-q1', text: 'Create a standalone Node.js file script that recursively reads files in a target directory and computes their raw SHA-256 signatures.', difficulty: 'Medium' }
    ]
  },
  {
    id: 'fs-express',
    title: 'Express.js',
    description: 'Minimalistic routing framework for Node.js. Structure HTTP request routing, static file servers, request bodies parser, custom middlewares, and CORS safety.',
    durationEstimate: '5 days',
    category: 'Backend',
    resources: [
      { id: 'exp-r1', name: 'Express.js Documentation', url: 'https://expressjs.com', type: 'docs' },
      { id: 'exp-r2', name: 'Full-stack Express backend tutorial', url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs', type: 'docs' }
    ],
    practiceQuestions: [
      { id: 'exp-q1', text: 'Write a rate-limiter middleware for Express that intercepts client IPs and limits them to 100 requests per 15 minutes of session.', difficulty: 'Medium' }
    ]
  },
  {
    id: 'fs-apis',
    title: 'REST APIs & Integration',
    description: 'Construct predictable API design parameters, study HTTP methods (GET, POST, PUT, DELETE), error status returns, payload definitions, and postman debugging.',
    durationEstimate: '3 days',
    category: 'Backend',
    resources: [
      { id: 'api-r1', name: 'RESTFUL API Design Best Practices Guide', url: 'https://hackernoon.com', type: 'article' }
    ],
    practiceQuestions: [
      { id: 'api-q1', text: 'Design elegant HTTP endpoints representing an online school class listing, enrolling, grading, and graduating states.', difficulty: 'Medium' }
    ]
  },
  {
    id: 'fs-auth',
    title: 'Authentication & Session Security',
    description: 'How to register, log, and secure client endpoints. Learn password salting (bcrypt), JWT (JSON Web Tokens) access validations, cookies, and OAuth integration flows.',
    durationEstimate: '1 week',
    category: 'Backend',
    resources: [
      { id: 'auth-r1', name: 'Securing Web Applications Guidelines - OWASP Cheat Sheet', url: 'https://cheatsheetseries.owasp.org', type: 'article' },
      { id: 'auth-r2', name: 'JWT.io Tokens Debugger & Specs', url: 'https://jwt.io', type: 'docs' }
    ],
    practiceQuestions: [
      { id: 'auth-q1', text: 'Why are Refresh Tokens stored in httponly Secure cookies while Access Tokens reside in client states?', difficulty: 'Medium', solutionHint: 'httponly cookies shield refresh keys from malicious XSS script extraction. Short-lived memory tokens bounds exposure bounds.' }
    ]
  },

  // Database
  {
    id: 'fs-mongodb',
    title: 'MongoDB (NoSQL)',
    description: 'Learn document-oriented JSON-like schemas. Manage flexible fields, document nesting, indexing, aggregation pipelines, and mongoose wrappers.',
    durationEstimate: '5 days',
    category: 'Database',
    resources: [
      { id: 'db-m1', name: 'MongoDB University Free Video Training', url: 'https://university.mongodb.com', type: 'course' },
      { id: 'db-m2', name: 'Mongoose ODM Reference Docs', url: 'https://mongoosejs.com', type: 'docs' }
    ],
    practiceQuestions: [
      { id: 'db-mq1', text: 'Write a MongoDB aggregation query that groups users by country, averages purchase counts, and orders descending.', difficulty: 'Medium' }
    ]
  },
  {
    id: 'fs-sql-dbs',
    title: 'MySQL & PostgreSQL (Relational)',
    description: 'Relational databases. Master tabular structures, relational mapping, SQL queries, join conditions (INNER, LEFT, OUTER), indexing optimization, and ACID attributes.',
    durationEstimate: '1 week',
    category: 'Database',
    resources: [
      { id: 'sql-r1', name: 'PostgreSQL Official Guides', url: 'https://www.postgresql.org/docs/', type: 'docs' }
    ],
    practiceQuestions: [
      { id: 'sql-q1', text: 'How does an Index (e.g. B-Tree) speed up reading but slow down writing operations in PostgreSQL partitions?', difficulty: 'Medium', solutionHint: 'Indexes query fast using O(log N) searches, but updates require reorganizing index records on storage disks.' }
    ]
  },

  // DevOps
  {
    id: 'fs-git',
    title: 'Git & GitHub',
    description: 'Version control base. Coordinate repo initialization, branching strategies, commits, remote origins, merge branches, rebasing, pull-requests, and merge hazard resolution.',
    durationEstimate: '3 days',
    category: 'DevOps',
    resources: [
      { id: 'git-r1', name: 'Pro Git Book (Completely Free Version)', url: 'https://git-scm.com/book/en/v2', type: 'book' },
      { id: 'git-r2', name: 'Learn Git Branching Sandbox Game', url: 'https://learngitbranching.js.org', type: 'course' }
    ],
    practiceQuestions: [
      { id: 'git-q1', text: 'Explain the internal structural storage differences between git merge and git rebase commands.', difficulty: 'Easy' }
    ]
  },
  {
    id: 'fs-docker',
    title: 'Docker Containers',
    description: 'Wrap microservices neatly with images and containers. Compose Dockerfiles, copy files, configure layers, bind ports, and spin up databases with docker-compose.',
    durationEstimate: '4 days',
    category: 'DevOps',
    resources: [
      { id: 'dock-r1', name: 'Docker Curriculum - Absolute Beginner Guide', url: 'https://docker-curriculum.com', type: 'course' }
    ],
    practiceQuestions: [
      { id: 'dock-q1', text: 'Write a multi-stage Dockerfile that compiles a React Vite site inside Node and serves static files via an Nginx container.', difficulty: 'Medium' }
    ]
  },
  {
    id: 'fs-aws',
    title: 'Cloud Deployment (AWS / GCP / Cloud Run)',
    description: 'Deploy real projects! Configure virtual private clouds, storage buckets, container registries, load balancers, and deploy apps into Cloud Run / ECS instances.',
    durationEstimate: '1 week',
    category: 'DevOps',
    resources: [
      { id: 'aws-r1', name: 'AWS Cloud Practitioner Academy Material', url: 'https://aws.amazon.com', type: 'course' }
    ],
    practiceQuestions: [
      { id: 'aws-q1', text: 'Detail the process of hosting a dynamic app utilizing Docker, Google Artifact Registry, and Google Cloud Run.', difficulty: 'Medium' }
    ]
  },

  // Projects (as Topics in Full Stack roadmap)
  {
    id: 'fsp-portfolio',
    title: 'Project 1: Personal Portfolio',
    description: 'Develop a highly polished, responsive, clean resume or project portfolio showcasing custom layouts, smooth scrolling, email contact sheets, and elegant dark mode styling.',
    durationEstimate: '4 days',
    category: 'Projects',
    resources: [
      { id: 'proj1-r1', name: 'Portfolio Guide - HTML/CSS/React', url: 'https://react.dev', type: 'article' }
    ],
    practiceQuestions: [
      { id: 'p1-q1', text: 'Integrate dynamic local tracking stats of current user scroll positions, and trigger entry-level slide fades as components reach viewports.', difficulty: 'Medium' }
    ]
  },
  {
    id: 'fsp-blog',
    title: 'Project 2: Responsive Headless Blog',
    description: 'Create a fully functioning blogging server using Express API backends or Next.js layout structures, allowing users to write posts in Markdown, comment, filter by tags, and search articles.',
    durationEstimate: '1 week',
    category: 'Projects',
    resources: [
      { id: 'proj2-r1', name: 'Next.js Static Markdown Blogging Tutorial', url: 'https://nextjs.org', type: 'article' }
    ],
    practiceQuestions: [
      { id: 'p2-q1', text: 'Implement a structured markdown compiler that parses codes, images, headers, and displays clean typographic styles.', difficulty: 'Medium' }
    ]
  },
  {
    id: 'fsp-ecommerce',
    title: 'Project 3: E-commerce Storefront',
    description: 'Integrate a multi-role web shop! Users can browse catalogues, add selections to local cart structures, checkout with secure Stripe mocks, and view invoice tracking files.',
    durationEstimate: '2 weeks',
    category: 'Projects',
    resources: [
      { id: 'proj3-r1', name: 'Stripe JS Checkout Integration Manual', url: 'https://stripe.com/docs', type: 'docs' }
    ],
    practiceQuestions: [
      { id: 'p3-q1', text: 'Write robust client hooks matching cart quantities with server inventory balances during sessions to prevent order discrepancies.', difficulty: 'Hard' }
    ]
  }
];
