// ------- Education (timeline) -------
export const education = [
  {
    school: 'Addis Ababa University',
    detail: 'Top 10 in Africa',
    degree: 'B.Sc. Computer Science',
    period: '2024 – 2028',
    brief: 'Studying core CS — ML, databases, operating systems, distributed systems, and algorithms.',
  },
  {
    school: 'A2SV — Africa to Silicon Valley',
    detail: 'Google-backed',
    degree: 'Data Structures & Algorithms',
    period: 'Jan 2026 – present',
    brief: 'Solved 250+ problems on LeetCode & Codeforces, focused on graphs and dynamic programming.',
  },
  {
    school: 'Quantum Computing Summer School',
    detail: 'Great Distinction',
    degree: 'Year-long Program',
    period: 'Completed',
    brief: 'Mastered quantum mechanics, protocols, and algorithms across a comprehensive program.',
  },
];

// ------- Experience -------
export const experience = [
  {
    role: 'AI Researcher — ML Intern',
    tag: 'TWELVE Football-backed',
    org: 'AAU · Football Video Analytics Pipeline',
    period: 'Nov 2025 – Jun 2026',
    location: 'Remote · Sweden & Ethiopia',
    points: [
      'Contributed to an end-to-end football video-analytics platform using Python, OpenCV, YOLOv8, ByteTrack, and Streamlit to detect, track, and analyze players and the ball from match footage.',
      'Implemented multi-object tracking, team classification (HSV + KMeans), homography-based pitch mapping, optical-flow camera motion compensation, and Kalman-filter ball tracking.',
      'Built a stateful event-detection pipeline for passes, crosses, skill moves, possession, speed, and heatmaps — exporting structured CSV/JSON analytics and annotated video.',
    ],
  },
  {
    role: 'ML Engineer Intern',
    org: 'Information Network Security Administration',
    period: 'Aug 2025 – Sep 2025',
    location: 'Addis Ababa, Ethiopia',
    points: [
      'Automated collection and preprocessing of network log data in Python to improve analysis efficiency.',
      'Analyzed network logs with Pandas and SQL to extract insights supporting security investigations.',
      'Created data visualizations and summary reports highlighting network activity, anomalies, and usage trends.',
    ],
  },
  {
    role: 'Technical Assistant',
    org: 'OHIO Global One Health',
    period: 'Aug 2025 – Sep 2025',
    location: 'Addis Ababa, Ethiopia',
    points: [
      'Digitized and organized documentation using office productivity tools, improving document retrieval and data-management efficiency.',
    ],
  },
];

// ------- Projects -------
// `accent` drives the card cover gradient; `icon` is a key resolved in Projects.jsx
export const projects = [
  {
    title: 'CP-Focus — Distraction Blocker',
    icon: 'focus',
    image: '/cpfocus.jpg',
    accent: ['#33415c', '#9db2d9'],
    blurb: 'A Chrome extension that blocks AI chatbots on competitive-programming sites.',
    tools: ['JavaScript', 'Chrome Extension API'],
    link: 'https://github.com/BytePhilosopher/CP-FOCUS',
    store: 'https://chromewebstore.google.com/detail/cf-focus-%E2%80%94-ai-blocker-for/obkgjknggnkpboahhaeieemknmpngmpl',
  },
  {
    title: 'Amharic Sentiment Analysis',
    icon: 'nlp',
    accent: ['#7a4b2b', '#d9b48f'],
    blurb: 'Classifies Amharic text sentiment — NLP for a low-resource language.',
    tools: ['Python', 'Scikit-learn', 'NLP', 'TensorFlow'],
    link: '#',
  },
  {
    title: 'Football Video Analytics',
    icon: 'football',
    accent: ['#2f5d3a', '#8bb894'],
    blurb: 'Detects, tracks, and analyzes players and the ball from real match footage.',
    tools: ['Python', 'OpenCV', 'YOLOv8', 'ByteTrack', 'Streamlit'],
    link: 'https://github.com/ML-interns-aau/footballtracking',
  },
  {
    title: 'FuelQ',
    icon: 'analytics',
    image: '/fuelq.jpg',
    accent: ['#5b3a5b', '#cfa9cf'],
    blurb: 'A digital queue-management system for fuel stations in Ethiopia — eliminating hours of physical waiting through smart scheduling and integrated Chapa payments.',
    tools: ['React', 'Node.js', 'Chapa API'],
    link: 'https://github.com/BytePhilosopher/GDG-Hacktom/tree/main/smart-gas-queue',
  },
];

// ------- Skills (marquee) -------
// `icon` maps to react-icons in Skills.jsx; unknown icons fall back to a monogram.
export const skills = [
  { name: 'Python', icon: 'python' },
  { name: 'Java', icon: 'java' },
  { name: 'C++', icon: 'cplusplus' },
  { name: 'C#', icon: 'csharp' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Node.js', icon: 'node' },
  { name: 'Express', icon: 'express' },
  { name: 'NestJS', icon: 'nest' },
  { name: 'Next.js', icon: 'next' },
  { name: 'PostgreSQL', icon: 'postgres' },
  { name: 'MongoDB', icon: 'mongo' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'Redis', icon: 'redis' },
  { name: 'TensorFlow', icon: 'tensorflow' },
  { name: 'NumPy', icon: 'numpy' },
  { name: 'Scikit-learn', icon: 'sklearn' },
  { name: 'OpenCV', icon: 'opencv' },
  { name: 'HuggingFace', icon: 'huggingface' },
  { name: 'Streamlit', icon: 'streamlit' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Linux', icon: 'linux' },
  { name: 'Git', icon: 'git' },
];

export const contact = {
  email: 'aberayostina@gmail.com',
  phone: '+251 925 623 317',
  phoneHref: '+251925623317',
  linkedin: '#',
  github: '#',
  githubUser: 'Bytephilosopher', // used for the contribution chart — change to your GitHub username
  cv: '/yostina_cv.pdf',
};
