// ------- Profile -------
export const profile = {
  name: 'Yostina Abera',
  fullName: 'Yostina Abera Gobie',
  role: 'Software Engineer',
  focus: 'Backend · ML · Data',
  location: 'Ethiopia',
  current: { org: 'iCog Labs', what: 'ML systems in JAX' },
};

// ------- Stats -------
export const stats = [
  { value: '50M+', label: 'citizens served by the national ID platform I worked on' },
  { value: '400+', label: 'algorithm problems solved across competitive platforms' },
  { value: '1,000+', label: 'engineers in the developer community I founded' },
];

// ------- Experience -------
export const experience = [
  {
    org: 'iCog Labs',
    role: 'Software Engineer Intern',
    period: 'Jul 2026 – Oct 2026',
    line: 'Built a residual-learning layer that adapts a frozen GPT-2 without modifying its weights.',
    tools: ['JAX', 'XLA', 'GPT-2'],
  },
  {
    org: 'Football Analytics',
    role: 'Software / ML Engineering Intern',
    period: 'Nov 2025 – Jun 2026',
    line: 'Turned broadcast footage into player tracking data and cut post-match processing from O(n·k) to O(n).',
    tools: ['Python', 'YOLOv8', 'ByteTrack', 'DBSCAN'],
  },
  {
    org: 'INSA',
    role: 'Software Engineer Intern',
    period: 'Aug 2025 – Sep 2025',
    line: 'Improved backend scalability for a national digital ID system and automated its data pipelines.',
    tools: ['REST', 'Python', 'SQL'],
  },
];

// ------- Projects -------
export const projects = [
  {
    title: 'FuelQ',
    kind: 'Web platform · Hackathon',
    metric: '3–6 hr',
    metricLabel: 'fuel lines turned into virtual queues',
    blurb: 'Live queue positions and advance deposits via Chapa, built at the GDG Hackathon.',
    tools: ['Next.js', 'TypeScript', 'Supabase', 'WebSockets'],
    link: 'https://github.com/BytePhilosopher/GDG-Hacktom/tree/main/smart-gas-queue',
  },
  {
    title: 'CP-Focus',
    kind: 'Chrome extension',
    metric: '20+',
    metricLabel: 'active users in the first week',
    blurb: 'Keeps AI chatbots out of competitive-programming practice across 6 major platforms.',
    tools: ['JavaScript', 'Chrome Extension API'],
    link: 'https://github.com/BytePhilosopher/CP-FOCUS',
    store: 'https://chromewebstore.google.com/detail/cf-focus-%E2%80%94-ai-blocker-for/obkgjknggnkpboahhaeieemknmpngmpl',
  },
  {
    title: 'Inventory Management',
    kind: 'Desktop application',
    metric: 'ACID',
    metricLabel: 'guarantees on every stock movement',
    blurb: 'Multi-location stock control with role-based access, designed so negative stock is impossible.',
    tools: ['Java', 'JDBC', 'SQL Server', 'Swing'],
    link: 'https://github.com/BytePhilosopher/Inventory-managment-system',
  },
  {
    title: 'Fintech Review Analytics',
    kind: 'Data pipeline · NLP',
    metric: '1,200',
    metricLabel: 'reviews analysed across 3 banks',
    blurb: "Scraping, cleaning, sentiment analysis and PostgreSQL storage that surfaces each bank's top complaint.",
    tools: ['Python', 'PostgreSQL', 'DistilBERT', 'GitHub Actions'],
    link: 'https://github.com/BytePhilosopher/fintech-review-analytics',
  },
];

// ------- Skills -------
// `icon` maps to react-icons in Skills.jsx; items without one show `mono`.
export const skills = [
  {
    group: 'Languages',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'java' },
      { name: 'C++', icon: 'cplusplus' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'SQL', mono: 'SQL' },
    ],
  },
  {
    group: 'Backend & Data',
    items: [
      { name: 'Node.js', icon: 'node' },
      { name: 'Express', icon: 'express' },
      { name: 'Next.js', icon: 'next' },
      { name: 'PostgreSQL', icon: 'postgres' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'SQL Server', mono: 'MS' },
      { name: 'Redis', icon: 'redis' },
      { name: 'WebSockets', mono: 'WS' },
    ],
  },
  {
    group: 'Machine Learning',
    items: [
      { name: 'JAX', mono: 'JAX' },
      { name: 'NumPy', icon: 'numpy' },
      { name: 'Pandas', icon: 'pandas' },
      { name: 'Scikit-learn', icon: 'sklearn' },
      { name: 'OpenCV', icon: 'opencv' },
      { name: 'YOLOv8', mono: 'YO' },
      { name: 'HuggingFace', icon: 'huggingface' },
    ],
  },
  {
    group: 'Tooling',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Docker', icon: 'docker' },
      { name: 'GitHub Actions', icon: 'actions' },
      { name: 'pytest', icon: 'pytest' },
      { name: 'JUnit', mono: 'JU' },
    ],
  },
];

export const contact = {
  email: 'aberayostina@gmail.com',
  phone: '+251 925 623 317',
  phoneHref: '+251925623317',
  linkedin: 'https://www.linkedin.com/in/yostina-abera-70b7a2261/',
  github: 'https://github.com/BytePhilosopher',
  githubUser: 'Bytephilosopher', // used for the contribution chart — change to your GitHub username
  cv: '/yostina_cv.pdf',

  // ---- Contact form ----
  // Web3Forms is called directly from the browser (it's fronted by Cloudflare,
  // which blocks server-side/datacenter calls — so the serverless route won't
  // work for it). The access key is public by design; keep it out of the repo
  // with a build-time env var, and lock "Allowed Domains" in the Web3Forms
  // dashboard. On Vercel: Settings → Environment Variables → set
  //   WEB3FORMS_ACCESS_KEY (or VITE_WEB3FORMS_KEY) = <your key>   then redeploy.
  // The key is injected at build time via vite.config.js (__WEB3FORMS_KEY__).
  formEndpoint: 'https://api.web3forms.com/submit',
  formAccessKey: (typeof __WEB3FORMS_KEY__ !== 'undefined' && __WEB3FORMS_KEY__) || '',
};
