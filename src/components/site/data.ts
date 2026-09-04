export type Job = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  company: string;
  location: string;
  salary: string;
};

export const jobs: Job[] = [
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    date: "Feb 1, 2026",
    tags: ["UI Design", "Figma", "Design System", "Web Design"],
    company: "Mehong.co Group",
    location: "Dhaka, Bangladesh",
    salary: "$800 – $1,200",
  },
  {
    slug: "senior-designer",
    title: "Senior Designer",
    date: "Jan 28, 2026",
    tags: ["Graphic Design", "Adobe Illustrator", "Brand Identity", "Print Design"],
    company: "Creative Minds Agency",
    location: "San Francisco, USA",
    salary: "$1,200 – $1,800",
  },
  {
    slug: "lead-designer",
    title: "Lead Designer",
    date: "Jan 28, 2026",
    tags: ["Product Design", "Sketch", "Mobile App Design", "Leadership"],
    company: "Innovate Tech",
    location: "Berlin, Germany",
    salary: "$1,500 – $2,200",
  },
  {
    slug: "frontend-dev",
    title: "Frontend Dev",
    date: "Jan 28, 2026",
    tags: ["React", "API Integration", "Tailwind", "Javascript"],
    company: "Pillow Tech",
    location: "Jambi, Indonesia",
    salary: "$1,500 – $2,200",
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    date: "Jan 29, 2026",
    tags: ["Graphic Design", "Adobe XD", "Brand Identity", "Mobile App Design"],
    company: "Mehong.co Group",
    location: "Dhaka, Bangladesh",
    salary: "$1,500 – $2,000",
  },
  {
    slug: "kol-specialist",
    title: "KOL Specialist",
    date: "Jan 29, 2026",
    tags: ["Product Design", "Sketch", "Prototyping", "E-commerce"],
    company: "Innovative Solutions",
    location: "London, UK",
    salary: "$900 – $1,800",
  },
];

export const testimonials = [
  {
    quote:
      "Before using CVeeBee, I barely got any callbacks. After optimizing my keywords and rewriting my resume with the AI, I started receiving interview invitations within a week. The process was fast, simple, and surprisingly accurate.",
    name: "Nantaraya",
    role: "Marketing Specialist",
  },
  {
    quote:
      "I was skeptical at first, but CVeeBee transformed my job search. The AI recommendations helped me highlight my strengths, and I secured a job offer just days after applying!",
    name: "Jamal",
    role: "Software Engineer",
  },
  {
    quote:
      "The real-time feedback feature in CVeeBee helped me spot weak sentences and improve them instantly. I rewrote my resume in under 20 minutes, and it looked way more professional and structured than before.",
    name: "Daniel",
    role: "UI Designer",
  },
  {
    quote:
      "I only shared my GitHub and project links, and CVeeBee turned them into clean, well-written resume sections. It saved me hours of writing and helped me explain my work much better.",
    name: "Kenji",
    role: "UI Designer",
  },
  {
    quote:
      "As a fresh graduate, I had no idea how to write a strong resume. CVeeBee guided me step by step and helped me highlight my skills even with limited experience.",
    name: "Aaliyah",
    role: "Marketing",
  },
];

export const faqs = [
  {
    q: "What is CVeeBee?",
    a: "CVeeBee is an AI-powered resume builder that helps you create, optimize, and personalize your resume in minutes using smart automation and job-specific keywords.",
  },
  {
    q: "Will my resume be ATS-friendly?",
    a: "Yes. All resumes are built using ATS-optimized layouts and keyword structures, ensuring your resume passes applicant tracking systems and reaches human recruiters successfully.",
  },
  {
    q: "Is CVeeBee free to use?",
    a: "CVeeBee offers a free plan to get started, with optional premium features for advanced templates, deeper AI optimization, and unlimited resume downloads.",
  },
  {
    q: "Can I upload my existing CV?",
    a: "Absolutely. You can upload your current resume, and our AI will analyze, improve, and restructure it while keeping your original experience and information intact.",
  },
  {
    q: "How does keyword optimization work?",
    a: "Our AI analyzes job descriptions and your resume content to suggest relevant keywords, improving visibility, ATS compatibility, and alignment with recruiter expectations.",
  },
  {
    q: "Can CVeeBee help fresh graduates?",
    a: "Yes. CVeeBee is ideal for students and fresh graduates, offering guided resume creation, entry-level templates, and AI suggestions even with limited work experience.",
  },
  {
    q: "What formats can I download my resume in?",
    a: "You can download your resume in multiple formats, including PDF and DOCX, ensuring compatibility with job portals, email applications, and recruiter systems.",
  },
  {
    q: "Is my data safe on CVeeBee?",
    a: "Yes. Your data is securely stored using industry-standard encryption and is never shared or sold. You remain in full control of your information at all times.",
  },
];

export const benefits = [
  {
    title: "ATS-Friendly by Default",
    body: "Built to pass ATS filters so your resume reaches real recruiters.",
    icon: "scan",
  },
  {
    title: "Customizable Templates",
    body: "Choose from a variety of templates to match your personal style.",
    icon: "layout",
  },
  {
    title: "Real-Time Feedback",
    body: "Receive instant suggestions to improve your resume as you write.",
    icon: "feedback",
  },
  {
    title: "Keyword Optimization",
    body: "Incorporate industry-specific keywords to enhance visibility.",
    icon: "search",
  },
  {
    title: "Fast & No Learning Curve",
    body: "Type, generate, download—no learning needed.",
    icon: "rocket",
  },
  {
    title: "Portfolio Auto Summary",
    body: "Turn your portfolio links into resume-ready summaries.",
    icon: "portfolio",
  },
] as const;
