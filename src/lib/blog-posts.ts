export type BlogContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  gradient: string;
  featured: boolean;
  content: BlogContentBlock[];
}

export const posts: BlogPost[] = [
  {
    slug: "nextjs-app-router-best-practices",
    title: "Next.js App Router: Best Practices for Production",
    description:
      "A deep dive into structuring large-scale Next.js applications with the App Router — layouts, server components, caching, and performance optimization.",
    category: "Next.js",
    author: "Jawad A.",
    readTime: "8 min read",
    date: "Apr 28, 2025",
    gradient: "from-blue-500 to-cyan-400",
    featured: true,
    content: [
      {
        type: "p",
        text: "The App Router changed how we think about building Next.js applications. Server Components, nested layouts, and built-in caching give us a lot of power — but also a lot of new decisions to make. Here's what we've learned shipping production apps with it.",
      },
      { type: "h2", text: "1. Default to Server Components" },
      {
        type: "p",
        text: "Every component is a Server Component unless you add \"use client\". Keep it that way as long as possible. Push client components to the leaves of your tree — a button, a form, an interactive widget — rather than wrapping entire pages in \"use client\". This keeps your JavaScript bundle small and your initial page load fast.",
      },
      { type: "h2", text: "2. Co-locate data fetching with the component that needs it" },
      {
        type: "p",
        text: "With the App Router, you can fetch data directly inside Server Components using async/await. Next.js automatically deduplicates identical fetch requests across a render tree, so don't be afraid to fetch the same resource in multiple components — it's cheaper than prop-drilling.",
      },
      { type: "h2", text: "3. Use layouts for shared UI, not shared state" },
      {
        type: "p",
        text: "Layouts are great for navigation, footers, and shells that persist across route changes. But layouts don't re-render on navigation between sibling routes, so don't rely on them for state that needs to reset. Use route groups to organize related routes without affecting the URL structure.",
      },
      { type: "h2", text: "4. Get caching right early" },
      {
        type: "ul",
        items: [
          "Static data: let Next.js cache fetches by default for content that rarely changes.",
          "Dynamic data: opt out with { cache: 'no-store' } or revalidate frequently with { next: { revalidate: 60 } }.",
          "Use generateStaticParams for dynamic routes you can pre-render at build time.",
          "Lean on the Next.js cache debugging headers in development to see what's actually being cached.",
        ],
      },
      { type: "h2", text: "5. Handle loading and error states with conventions, not props" },
      {
        type: "p",
        text: "loading.tsx and error.tsx files give you automatic Suspense boundaries and error boundaries per route segment — no extra wiring required. Use them generously; users perceive an app with good skeleton states as significantly faster, even when total load time is identical.",
      },
      {
        type: "p",
        text: "The App Router has a learning curve, but the mental model — server-first, client where needed, caching as a first-class concern — pays off enormously at scale. Start small, measure your bundle size, and let the framework do the heavy lifting.",
      },
    ],
  },
  {
    slug: "fastapi-vs-express-comparison",
    title: "FastAPI vs Express.js: Which Should You Choose?",
    description:
      "A practical comparison for full-stack developers. Performance benchmarks, DX differences, and when to use each for your next project.",
    category: "Backend",
    author: "Bilal R.",
    readTime: "6 min read",
    date: "Apr 15, 2025",
    gradient: "from-green-500 to-teal-400",
    featured: true,
    content: [
      {
        type: "p",
        text: "Express.js has been the default choice for Node.js APIs for over a decade. FastAPI has emerged as its Python counterpart, combining the simplicity of Flask with modern type hints and automatic documentation. We've shipped production APIs in both — here's how they actually compare.",
      },
      { type: "h2", text: "Developer experience" },
      {
        type: "p",
        text: "FastAPI's biggest advantage is built-in validation via Pydantic and automatic OpenAPI/Swagger docs — you get a working API explorer for free. Express requires libraries like Zod and swagger-jsdoc to get similar guarantees, but the ecosystem is mature and every pattern has been solved many times over.",
      },
      { type: "h2", text: "Performance" },
      {
        type: "p",
        text: "In our benchmarks for typical CRUD endpoints with database calls, both frameworks comfortably handle thousands of requests per second on modest hardware — the bottleneck is almost always the database or external API, not the framework. FastAPI with async/await and Express with async middleware perform similarly in I/O-bound workloads.",
      },
      { type: "h2", text: "Ecosystem and team fit" },
      {
        type: "ul",
        items: [
          "Choose Express if your team is primarily JavaScript/TypeScript and you want a single language across frontend and backend.",
          "Choose FastAPI if you're building ML/AI-adjacent services, need to integrate with Python data science libraries, or your team already writes Python.",
          "Both integrate cleanly with Docker, PostgreSQL, and the major cloud providers.",
        ],
      },
      { type: "h2", text: "Our recommendation" },
      {
        type: "p",
        text: "For most full-stack JavaScript/TypeScript teams, Express (or its modern successors like Fastify and Hono) keeps your stack simple. For AI-powered features, data pipelines, or teams with Python expertise, FastAPI's typing and docs generation save real time. We've used both in the same organization — pick based on the team building the service, not dogma.",
      },
    ],
  },
  {
    slug: "react-native-performance-tips",
    title: "10 React Native Performance Tips for 2025",
    description:
      "From FlashList to Reanimated, here are the techniques we use to ship buttery-smooth React Native apps that feel truly native.",
    category: "Mobile",
    author: "Jawad A.",
    readTime: "7 min read",
    date: "Apr 5, 2025",
    gradient: "from-purple-500 to-pink-400",
    featured: false,
    content: [
      {
        type: "p",
        text: "A janky list or a laggy animation is the fastest way to make a React Native app feel cheap. After shipping several apps to thousands of users, here are the techniques that consistently make the biggest difference.",
      },
      {
        type: "ul",
        items: [
          "Use FlashList instead of FlatList for any list with more than a handful of items — it recycles views far more efficiently.",
          "Animate with Reanimated and run gestures on the UI thread via react-native-gesture-handler, never the JS thread.",
          "Memoize list item components with React.memo and stable callback references to avoid unnecessary re-renders.",
          "Use InteractionManager or requestAnimationFrame to defer expensive work until after animations complete.",
          "Optimize images: use the right resolution, prefer WebP, and use a caching image component like expo-image.",
          "Avoid inline styles and anonymous functions inside render — they create new objects on every render.",
          "Enable Hermes (on by default in modern Expo/React Native) for faster startup and lower memory usage.",
          "Profile with Flipper or the React Native DevTools before optimizing — measure, don't guess.",
          "Batch state updates and avoid storing large objects in frequently-updated state.",
          "Lazy-load screens and heavy dependencies with React.lazy and dynamic imports where supported.",
        ],
      },
      {
        type: "p",
        text: "None of these are exotic — they're disciplined application of fundamentals. The apps that feel 'native' are usually the ones where the team treated performance as a feature from day one, not a cleanup pass at the end.",
      },
    ],
  },
  {
    slug: "building-saas-with-nextjs-stripe",
    title: "Building a SaaS from Scratch with Next.js + Stripe",
    description:
      "Step-by-step guide to building a multi-tenant SaaS with authentication, subscription billing, and a customer portal.",
    category: "SaaS",
    author: "Jawad A.",
    readTime: "12 min read",
    date: "Mar 22, 2025",
    gradient: "from-orange-500 to-yellow-400",
    featured: false,
    content: [
      {
        type: "p",
        text: "Every SaaS needs the same foundation: authentication, multi-tenancy, subscription billing, and a way for customers to manage their own plan. Here's the architecture we reach for when starting a new SaaS with Next.js and Stripe.",
      },
      { type: "h2", text: "1. Multi-tenancy model" },
      {
        type: "p",
        text: "For most early-stage SaaS products, a shared database with a tenant_id (or organization_id) column on every table is simpler to build and operate than separate databases per customer. Enforce tenant isolation at the query layer — ideally with row-level security in PostgreSQL — so a bug in application code can't leak data across tenants.",
      },
      { type: "h2", text: "2. Authentication and organizations" },
      {
        type: "p",
        text: "Model users and organizations as separate entities from day one, even if you launch with one user per org. This avoids a painful migration later when customers inevitably ask for team seats. A users table, an organizations table, and a memberships join table with a role column covers almost every case.",
      },
      { type: "h2", text: "3. Stripe billing" },
      {
        type: "ul",
        items: [
          "Create a Stripe Customer for each organization, not each user.",
          "Use Stripe Checkout for the initial subscription — it handles tax, payment methods, and 3D Secure for you.",
          "Use the Customer Portal for plan changes, payment method updates, and cancellations instead of building your own.",
          "Sync subscription status via webhooks (checkout.session.completed, customer.subscription.updated/deleted) into your database — never trust client-side state for entitlements.",
        ],
      },
      { type: "h2", text: "4. Feature gating" },
      {
        type: "p",
        text: "Store the current plan and its limits in your database, updated by the webhook handler. Gate features by reading from your database, not by calling Stripe on every request — that adds latency and a hard dependency on Stripe's uptime for your core app.",
      },
      {
        type: "p",
        text: "Get these four pieces right and everything else — onboarding flows, usage dashboards, team management — builds naturally on top. Most SaaS rewrites we've seen happen because multi-tenancy or billing was bolted on after the fact rather than designed in from the start.",
      },
    ],
  },
  {
    slug: "github-actions-cicd-guide",
    title: "GitHub Actions CI/CD: A Complete Guide for Node.js",
    description:
      "Automate testing, building, and deploying your Node.js app to AWS or Vercel using GitHub Actions workflows.",
    category: "DevOps",
    author: "Bilal R.",
    readTime: "9 min read",
    date: "Mar 10, 2025",
    gradient: "from-teal-500 to-green-400",
    featured: false,
    content: [
      {
        type: "p",
        text: "A solid CI/CD pipeline catches bugs before they reach production and turns deployment from a stressful event into a non-event. Here's the GitHub Actions setup we use across our Node.js projects.",
      },
      { type: "h2", text: "Continuous Integration" },
      {
        type: "p",
        text: "Every pull request should automatically run linting, type checking, and tests. Use a matrix strategy to test against the Node.js versions you actually support in production, and cache your node_modules (or pnpm/yarn store) between runs to keep CI fast — a slow CI pipeline is one teams quickly start ignoring.",
      },
      { type: "h2", text: "Continuous Deployment" },
      {
        type: "ul",
        items: [
          "Vercel: connect your GitHub repo directly — every push gets a preview deployment, and merges to main deploy to production automatically. No custom workflow needed for most apps.",
          "AWS (ECS/EC2/Lambda): build a Docker image in CI, push to ECR, and trigger a deployment via the AWS CLI or a tool like AWS CDK/Terraform in a deploy job.",
          "Always run your test suite as a required check before any deploy job — gate deployments on green CI, not on hope.",
        ],
      },
      { type: "h2", text: "Secrets and environments" },
      {
        type: "p",
        text: "Use GitHub Environments to separate staging and production secrets, and require manual approval for production deploys on sensitive projects. Never echo secrets in workflow logs, and rotate any credential that's ever been exposed, even briefly.",
      },
      {
        type: "p",
        text: "A good pipeline is invisible when things go right and informative when they go wrong — clear failure messages, fast feedback, and a single source of truth for what's deployed where.",
      },
    ],
  },
  {
    slug: "ai-features-saas-openai",
    title: "How to Add AI Features to Your SaaS with OpenAI",
    description:
      "Practical guide to integrating GPT-4 into a production SaaS — rate limiting, cost management, streaming responses, and UX patterns.",
    category: "AI",
    author: "Jawad A.",
    readTime: "10 min read",
    date: "Feb 28, 2025",
    gradient: "from-pink-500 to-rose-400",
    featured: false,
    content: [
      {
        type: "p",
        text: "Adding 'AI features' to a SaaS product is easy to prototype and surprisingly easy to get wrong in production — runaway costs, slow responses, and inconsistent output quality are the most common pitfalls. Here's what we've learned integrating OpenAI's models into real products.",
      },
      { type: "h2", text: "Start with a narrow, well-defined task" },
      {
        type: "p",
        text: "The most successful AI features solve one specific problem well — summarizing a document, drafting an email reply, classifying support tickets — rather than an open-ended 'chat with your data' box. Narrow tasks are easier to evaluate, cheaper to run, and produce more consistent results.",
      },
      { type: "h2", text: "Stream responses" },
      {
        type: "p",
        text: "Use the streaming API and render tokens as they arrive. Even if total generation time is the same, streaming dramatically improves perceived performance — users start reading immediately instead of staring at a spinner.",
      },
      { type: "h2", text: "Manage cost and rate limits" },
      {
        type: "ul",
        items: [
          "Cache identical or near-identical requests where possible — many user queries repeat.",
          "Set per-user and per-organization rate limits and usage quotas tied to their subscription plan.",
          "Use smaller/cheaper models for simple tasks (classification, short completions) and reserve larger models for complex generation.",
          "Track token usage per request in your database so you can attribute cost and build usage-based pricing if needed.",
        ],
      },
      { type: "h2", text: "Design for failure" },
      {
        type: "p",
        text: "AI providers have outages and rate limits. Build retries with exponential backoff, set sensible timeouts, and always have a graceful fallback — a clear error message is far better than a hung UI. Never block a core workflow entirely on an AI call if you can avoid it.",
      },
      {
        type: "p",
        text: "Done well, AI features feel like a natural extension of your product. Done poorly, they feel like a slow, expensive gimmick. The difference is almost always in the engineering details, not the model choice.",
      },
    ],
  },
];

export const featuredPosts = posts.filter((p) => p.featured);
export const regularPosts = posts.filter((p) => !p.featured);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
