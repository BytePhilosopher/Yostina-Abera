// ------- Stats -------
export const stats = [
  { value: '50M+', label: 'users on the national ID platform I worked on', icon: 'crowd' },
  { value: '400+', label: 'algorithm problems solved', icon: 'glyphs' },
  { value: '1,000+', label: 'engineers in the community I founded', icon: 'spider' },
];

// ------- Experience -------
// `icon` is a key resolved in Experience.jsx
export const experience = [
  {
    org: 'iCog Labs',
    role: 'Software Engineer Intern',
    period: '07/26 – 10/26',
    icon: 'knot',
    line: 'Residual-learning layer that adapts a frozen GPT-2 without touching its weights.',
    tools: ['JAX', 'XLA', 'GPT-2'],
  },
  {
    org: 'Football Analytics',
    role: 'Software / ML Engineering Intern',
    period: '11/25 – 06/26',
    icon: 'ball',
    line: 'Broadcast footage to player tracking. Post-match processing cut from O(n·k) to O(n).',
    tools: ['Python', 'YOLOv8', 'ByteTrack', 'DBSCAN'],
  },
  {
    org: 'INSA',
    role: 'Software Engineer Intern',
    period: '08/25 – 09/25',
    icon: 'print',
    line: "Backend scalability for a national digital ID, plus automated data pipelines.",
    tools: ['REST', 'Python', 'SQL'],
  },
];

// ------- Projects -------
// `icon` is a key resolved in Projects.jsx
export const projects = [
  {
    title: 'FuelQ',
    icon: 'pump',
    metric: '3–6 hr',
    metricLabel: 'fuel lines, now virtual queues',
    blurb: 'Live queue positions and Chapa deposits. GDG Hackathon.',
    tools: ['Next.js', 'TypeScript', 'Supabase', 'WebSockets'],
    link: 'https://github.com/BytePhilosopher/GDG-Hacktom/tree/main/smart-gas-queue',
  },
  {
    title: 'CP-Focus',
    icon: 'eyeball',
    metric: '20+',
    metricLabel: 'users in week one',
    blurb: 'Chrome extension that keeps AI chatbots out of your practice on 6 CP sites.',
    tools: ['JavaScript', 'Chrome Extension API'],
    link: 'https://github.com/BytePhilosopher/CP-FOCUS',
    store: 'https://chromewebstore.google.com/detail/cf-focus-%E2%80%94-ai-blocker-for/obkgjknggnkpboahhaeieemknmpngmpl',
  },
  {
    title: 'Inventory Management',
    icon: 'cauldron',
    metric: 'ACID',
    metricLabel: 'every stock movement',
    blurb: 'Multi-location stock with role-based access. Negative stock is impossible.',
    tools: ['Java', 'JDBC', 'SQL Server', 'Swing'],
    link: 'https://github.com/BytePhilosopher/Inventory-managment-system',
  },
  {
    title: 'Fintech Review Analytics',
    icon: 'coin',
    metric: '1,200',
    metricLabel: 'reviews across 3 banks',
    blurb: "Scrape, clean, sentiment, PostgreSQL. Finds each bank's top complaint.",
    tools: ['Python', 'PostgreSQL', 'DistilBERT', 'GitHub Actions'],
    link: 'https://github.com/BytePhilosopher/fintech-review-analytics',
  },
];

// ------- Skills -------
// `icon` maps to react-icons in Skills.jsx; items without one show `mono`.
export const skills = [
  {
    group: 'Languages',
    icon: 'bat',
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
    icon: 'cauldron',
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
    group: 'ML',
    icon: 'eyeball',
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
    group: 'Tools',
    icon: 'spider',
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
