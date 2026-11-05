// ─── Navigation ───────────────────────────────────────────────
export const NAV_ITEMS = ["Home", "About", "Skills", "Services", "Projects", "Contact"];

// ─── Files in /public ─────────────────────────────────────────
export const PROFILE_IMAGE = "/prabha.jpeg";
export const RESUME_URL    = "/Prabhaa.pdf";
export const RESUME_DOWNLOAD_NAME = "Thillai-Prabakar-Resume.pdf";

// ─── Social Links ──────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: "GH", href: "https://github.com/Prxbx-offl" },
  { label: "LI", href: "https://www.linkedin.com/in/thillai-prabakar-054290331/" },
  { label: "IN", href: "https://www.instagram.com/prabhas_offl/" },
];

// ─── About Meta ────────────────────────────────────────────────
export const ABOUT_META = [
  { label: "Name",      value: "Thillai Prabakar"          },
  { label: "Role",      value: "Software Developer"   },
  { label: "Location",  value: "Chennai, Tamil Nadu"     },
  { label: "Available", value: "For Work"         },
];

// ─── Skills ────────────────────────────────────────────────────
export const SKILLS = [
  { name: "C", level: 92 },
  { name: "C++", level: 90 },
  { name: "Python",     level: 90 },
  { name: "ML Frameworks",     level: 85 },
  { name: "React",      level: 85 },
  { name: "Next.js",    level: 80 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js",    level: 85 },
  { name: "MongoDB",    level: 75 },
  { name: "PostgreSQL", level: 90 },
  { name: "SQL",        level: 85 },
  { name: "Git",        level: 85 },
  { name: "Apache Airflow",        level: 90 },
];

export const EXTRA_SKILLS = [
  "HTML", "Redis", "JavaScript","Tableau", "Tailwind CSS",
  "Figma", "Canva", "CSS", "Linux", "REST APIs", "Agile",
];

// ─── Services ──────────────────────────────────────────────────
export const SERVICES = [
  {
    icon: "◈",
    title: "AI & Machine Learning Solutions",
    desc: "Build intelligent models, predictive systems, computer vision and NLP-based applications.",
    example: [
      "Deep Learning models",
      "Computer Vision projects",
      "NLP applications",
      "Model deployment",
    ],
  },
  {
    icon: "◫",
    title: "Full Stack Web Development",
    desc: "Create responsive and scalable web applications using modern frontend and backend technologies.",
    example: [
      "MERN Stack Applications",
      "REST APIs",
      "Authentication Systems",
      "Dynamic Dashboards",
    ],
  },
  {
    icon: "◉",
    title: "Data Engineering & ETL Pipelines",
    desc: "Design and support data pipelines, workflows, and database-driven solutions.",
    example: [
      "ETL Pipelines",
      "Data Warehousing",
      "Workflow Orchestration",
      "Process Automation",
    ],
  },
  {
    icon: "◐",
    title: "Data Analytics & Visualization",
    desc: "Transform raw data into insights. Expertise in data analysis, visualization, and dashboard creation.",
    example: [
      "SQL analytics",
      "Dashboards with Tableau",
      "Reporting solutions",
      "Business insights",
    ],
  },
];

// ─── Projects ──────────────────────────────────────────────────
export const PROJECTS = [
  {
  image: "/projects/duallexicaps.svg",
  title: "Explainable DualLexiCaps: A Hybrid Approach for Hate Speech Detection with Mistral Summarization",
  tech: ["Python", "TensorFlow", "NLP", "Streamlit"],
  desc: "Explainable AI system for hate speech detection using deep learning and Mistral-based summarization.",
  demo: "#",
  github: "#",
},

{
  image: "/projects/resume-ranker.svg",
  title: "LLM Based Resume Ranker",
  tech: ["Python", "vectorDB","openai", "Streamlit"],
  desc: "Machine learning application that ranks resumes against job descriptions using embeddings and similarity scoring.",
  demo: "#",
  github: "#",
},

{
  image: "/projects/emotion-detection.svg",
  title: "Face Emotion Detection",
  tech: ["Python", "OpenCV", "CNN"],
  desc: "Real-time facial emotion detection system using Machine Learning and deep learning.",
  demo: "#",
  github: "#",
},

{
  image: "/projects/face-access.svg",
  title: "Smart Face Access Control",
  tech: ["Python", "OpenCV", "Deep Learning"],
  desc: "Intelligent access control and attendance system powered by facial recognition using computer vision.",
  demo: "#",
  github: "#",
},

{
  image: "/projects/netflix-clone.svg",
  title: "Netflix Clone",
  tech: ["React", "Node.js", "MongoDB", "Firebase"],
  desc: "Full-stack streaming platform with authentication, search, and dynamic content integration.",
  demo: "#",
  github: "#",
},

{
  image: "/projects/monuments-analytics.svg",
  title: "Monuments Data Analytics",
  tech: ["React", "Node.js", "MongoDB"],
  desc: "Analytics platform for exploring and visualizing insights on Indian monuments data.",
  demo: "#",
  github: "#",
},
];

// ─── Contact Info ──────────────────────────────────────────────
export const CONTACT_INFO = [
  { icon: "📍", label: "Location", value: "Chennai, Tamil Nadu, India" },
  { icon: "✉️", label: "Email",    value: "prabathillai10@gmail.com"           },
  { icon: "📞", label: "Phone",    value: "+91 97900 49851"              },
];
