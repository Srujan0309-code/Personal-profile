import {
  Terminal, Layout, Server, Database, Sparkles, Wrench,
  Activity, HeartPulse, Flame, FileText, Camera,
  Rocket, HeartHandshake, ScanEye, Layers, Lightbulb, Award,
  Mail, Trophy, BookOpen
} from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

/* ─── Personal Info ─── */
export const personalInfo = {
  name: 'Srujan Poojari',
  title: 'AI/ML Enthusiast | MERN Stack Developer | Computer Vision Explorer',
  tagline: 'AI Engineer · MERN Stack · Computer Vision',
  college: 'St. John College of Engineering & Management',
  degree: 'Computer Engineering',
  objective:
    'To leverage my skills in Artificial Intelligence, Machine Learning, Computer Vision, and Full-Stack Development to build innovative, scalable, and impactful technology solutions. I aspire to grow into a skilled AI Engineer and Software Developer, contributing to cutting-edge projects that solve real-world challenges and create meaningful impact through technology.',
  currentLearning: [
    'Generative AI',
    'Advanced LLM Integrations',
    'AI Agent Development',
    'System Design',
    'Full-Stack AI Applications',
  ],
};

/* ─── Skills Data ─── */
export const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: Terminal,
    skills: ['JavaScript', 'Python', 'Java', 'C++'],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Layout,
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'Express.js'],
  },
  {
    id: 'database',
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'Firebase', 'SQL'],
  },
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    icon: Sparkles,
    skills: [
      'Gemini API',
      'Groq API',
      'LLM Integration',
      'Prompt Engineering',
      'Computer Vision',
      'YOLO Object Detection',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Render'],
  },
];

/* ─── Projects Data ─── */
export const projects = [
  {
    id: 'care-connect',
    title: 'Care Connect',
    description:
      'NGO-focused healthcare support web application with an AI-powered chatbot integrated using the Gemini API. Built with a modern responsive UI using MERN technologies to improve community healthcare accessibility.',
    icon: HeartPulse,
    image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3o3dGtzanJyZmlwamUxbkcmZXA9IdkxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKSjRrfIPjei1nG/giphy.gif',
    tech: ['MERN Stack', 'Gemini API', 'AI Chatbot', 'MongoDB'],
    github: 'https://github.com/Srujan0309-code',
    live: '#',
  },
  {
    id: 'ai-symptom',
    title: 'AI Symptom Analysis',
    description:
      'AI-powered symptom analysis platform developed using Next.js and Firebase Authentication. Provides intelligent health assistance through LLM capabilities, helping users understand potential health conditions.',
    icon: Activity,
    image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDM3OGMwNHhiVUZBOHA5a0kmZXA9IdkxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/l378c04xbUFA9p9kI/giphy.gif',
    tech: ['Next.js', 'Firebase', 'Gemini AI', 'LLM'],
    github: 'https://github.com/Srujan0309-code',
    live: '#',
  },
  {
    id: 'ats-resume',
    title: 'ATS Resume Generator',
    description:
      'AI-powered resume builder that generates ATS-friendly resumes. Utilizes Gemini and Groq APIs for resume optimization and intelligent content generation tailored to job descriptions.',
    icon: FileText,
    image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM380VTk0MjFPT1dkVk1UODQmZXA9IdkxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o84U6421OOWdVMT84/giphy.gif',
    tech: ['Gemini API', 'Groq API', 'Next.js', 'AI'],
    github: 'https://github.com/Srujan0309-code',
    live: '#',
  },
  {
    id: 'stove-flame',
    title: 'Stove Flame Detection',
    description:
      'Computer Vision project using YOLO for real-time stove flame detection in kitchen environments. Focused on kitchen safety monitoring, hazard prevention, and automation through AI-based object detection.',
    icon: Camera,
    image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM383MkY4dDlURGkyeFZueE9FJmVwPUg1eF9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o72F8t9TDi2xVnxOE/giphy.gif',
    tech: ['YOLO', 'Computer Vision', 'Python', 'Object Detection'],
    github: 'https://github.com/Srujan0309-code',
    live: '#',
  },
];

/* ─── Achievements Data ─── */
export const achievements = [
  {
    id: 'iaf-internship',
    icon: Trophy,
    title: 'IAF Foundation Internship',
    description:
      'Successfully secured and completed an internship with the IAF Foundation, gaining practical industry experience and contributing to real-world AI and Web Development projects.',
  },
  {
    id: 'ai-web-internship',
    icon: Rocket,
    title: 'AI & Web Development Internship',
    description:
      'Currently pursuing an AI & Web Development Internship, enhancing expertise in full-stack development, AI integration, and modern software engineering practices.',
  },
  {
    id: 'yolo-internship',
    icon: ScanEye,
    title: 'Vision Technology Internship',
    description:
      'Completed the Vision Technology Internship — Deploying YOLOvX for Real-World AI Projects, gaining hands-on experience in Computer Vision and AI application development.',
  },
  {
    id: 'ai-projects',
    icon: Layers,
    title: 'Multiple AI Projects Deployed',
    description:
      'Built and deployed multiple AI-powered and full-stack projects including Care Connect, AI Symptom Analysis, ATS Resume Generator, and Stove Flame Detection.',
  },
  {
    id: 'certifications',
    icon: Award,
    title: 'Professional Certifications',
    description:
      'Earned certifications in Google AI Essentials, AI Skills Passport (EY & Microsoft), Introduction to MERN Stack, and Deloitte Data Analytics Job Simulation.',
  },
  {
    id: 'expertise',
    icon: Lightbulb,
    title: 'Full-Stack AI Expertise',
    description:
      'Developed practical expertise in MERN Stack Development, Next.js, Firebase Authentication, Gemini API Integration, Large Language Models (LLMs), and YOLO-based Object Detection.',
  },
  {
    id: 'ar-vr-achievement',
    icon: Lightbulb,
    title: 'AR-VR Industry Training Completed',
    description:
      'Successfully completed the AR-VR training as part of the Industry Certification Credit Course with a grade of O, conducted by St. John College of Engineering and Management in collaboration with IOFT (November 2025).',
  },
  {
    id: 'sql-dotnet-achievement',
    icon: Layers,
    title: 'SQL + Dotnet Training Completed',
    description:
      'Completed the SQL + Dotnet (Kantascrypt) training as part of the Industry Certification Credit Course with a grade of O, conducted by St. John College of Engineering and Management in collaboration with Kantascrypt (November 2025).',
  },
];

/* ─── Certifications ─── */
export const certifications = [
  {
    id: 'mern',
    title: 'Introduction to MERN Stack',
    issuer: 'Simplilearn',
    year: '2026',
    icon: BookOpen,
    image: '/certificates/mern.jpg',
  },
  {
    id: 'inamigos',
    title: 'AI Web Development Internship Selection',
    issuer: 'InAmigos Foundation (Internshala)',
    year: '2026',
    icon: Rocket,
    image: '/certificates/inamigos.jpg',
  },
  {
    id: 'yolo',
    title: 'Vision Technology Internship — Deploying YOLOvX',
    issuer: 'WISERLI Pvt. Ltd.',
    year: '2026',
    icon: Camera,
    image: '/certificates/yolovx.jpg',
  },
  {
    id: 'ai-passport',
    title: 'AI Skills Passport',
    issuer: 'EY & Microsoft',
    year: '2025',
    icon: Award,
    image: '/certificates/ai_passport.jpg',
  },
  {
    id: 'prompt-eng',
    title: 'Python for Prompt Engineering',
    issuer: 'edQuest',
    year: '2025',
    icon: Sparkles,
    image: '/certificates/prompt_engineering.jpg',
  },
  {
    id: 'google-ai',
    title: 'Google AI Essentials',
    issuer: 'Google (Coursera)',
    year: '2025',
    icon: Sparkles,
    image: '/certificates/google_ai.jpg',
  },
  {
    id: 'oop-python',
    title: 'OOP in Python Bootcamp',
    issuer: 'SkillEcted',
    year: '2025',
    icon: BookOpen,
    image: '/certificates/skillected_oop.png',
  },
  {
    id: 'deloitte',
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte — Forage',
    year: '2025',
    icon: Trophy,
    image: '/certificates/deloitte.jpg',
  },
  {
    id: 'ar-vr-training',
    title: 'AR-VR Industry Training Course',
    issuer: 'St. John College (IOFT)',
    year: '2025',
    icon: BookOpen,
    image: '/certificates/ar_vr.jpg',
  },
  {
    id: 'sql-dotnet-training',
    title: 'SQL + Dotnet Industry Course',
    issuer: 'St. John College (Kantascrypt)',
    year: '2025',
    icon: BookOpen,
    image: '/certificates/sql_dotnet.jpg',
  },
  {
    id: 'java-oop',
    title: 'Object Oriented Programming Using Java',
    issuer: 'Coding Genius Lab & SJCEM',
    year: '2025',
    icon: Terminal,
    image: '/certificates/java_oop.png',
  },
  {
    id: 'c-cpp-solving',
    title: 'Problem Solving Skills using C and C++',
    issuer: 'Coding Genius Lab & SJCEM',
    year: '2024',
    icon: Terminal,
    image: '/certificates/c_cpp_solving.png',
  },
];

/* ─── Contact Links ─── */
export const contactLinks = [
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    value: 'srujanpoojari2@gmail.com',
    href: 'mailto:srujanpoojari2@gmail.com',
  },
  {
    id: 'github',
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Srujan0309-code',
    href: 'https://github.com/Srujan0309-code',
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/srujan-poojari-705779327',
    href: 'https://www.linkedin.com/in/srujan-poojari-705779327/',
  },
];

/* ─── Nav Links ─── */
export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

/* ─── Stats for About Section ─── */
export const stats = [
  { label: 'Projects Built', count: 4 },
  { label: 'Technologies', count: 15 },
  { label: 'Certifications', count: 5 },
];
