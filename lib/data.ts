// Portfolio data with proper TypeScript types

export interface TechSkill {
  name: string;
  category: "oracle" | "web" | "cloud";
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  logo?: string;
  logoFallback: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  location: string;
  startYear: number;
  endYear?: number;
  grade: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  connections: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "mail" | "linkedin" | "github";
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Niharika Surapuram",
  title: "Cloud Analyst @ Oracle",
  description:
    "Computer Science graduate focused on cloud infrastructure and modern web development. Currently building enterprise solutions at Oracle.",
  email: "niharikasurapuram@gmail.com",
  location: "Bangalore, Karnataka, India",
  linkedin: "https://linkedin.com/in/niharikasurapuram",
  github: "https://github.com/niharikasurapuram",
  connections: "500+ connections on LinkedIn",
};

// About Section Data
export const aboutDescription = [
  "Computer Science specialist focused on cloud infrastructure and modern web development. Currently working as a Cloud Analyst at Oracle, building enterprise-grade solutions.",
  "Experience spans from startup environments to enterprise systems, with expertise in React, Next.js, Oracle Cloud Infrastructure, and database optimization.",
];

// Tech Skills organized by category
export const techSkills: Record<string, string[]> = {
  "Oracle Stack": [
    "Oracle Cloud Infrastructure",
    "Oracle Integration Cloud",
    "Oracle Database",
    "PL/SQL",
    "Oracle BIP",
    "Oracle WebLogic",
    "Oracle Red Wood",
  ],
  "Web Development": [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "REST APIs",
  ],
  "Cloud & Infrastructure": ["AWS", "Docker", "Terraform", "PostgreSQL", "Git"],
};

// Experience Data
export const experiences: Experience[] = [
  {
    company: "Oracle",
    role: "Cloud Analyst",
    type: "Full-time",
    location: "Bengaluru, Karnataka, India",
    startDate: "Aug 2024",
    endDate: "Present",
    current: true,
    logo: "https://cdn.brandfetch.io/idnq7H7qT0/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B",
    logoFallback: "O",
    responsibilities: [
      "Architecting Oracle Cloud Infrastructure solutions for enterprise clients",
      "Building integration solutions using Oracle Integration Cloud (OIC)",
      "Developing Oracle APEX applications for rapid development",
      "Writing optimized PL/SQL procedures and Oracle SQL queries",
      "Configuring Oracle Enterprise Manager for performance monitoring",
    ],
  },
  {
    company: "Stealth Startup",
    role: "SDE Intern",
    type: "Internship",
    location: "Bengaluru, Karnataka, India",
    startDate: "Feb 2024",
    endDate: "Jul 2024",
    current: false,
    logoFallback: "S",
    responsibilities: [
      "Developed full-stack applications using Next.js and React.js",
      "Built scalable backend services with Node.js and Express.js",
      "Implemented infrastructure as code using Terraform for AWS",
      "Worked with containerization using Docker and AWS services",
      "Designed PostgreSQL databases with Prisma ORM",
    ],
  },
];

// Projects Data
export const projects: Project[] = [
  {
    title: "Oracle Enterprise Integration Platform",
    description:
      "Designed and implemented a comprehensive enterprise integration solution using Oracle Integration Cloud (OIC) and Fusion Middleware. Built seamless data flows between multiple Oracle and third-party systems.",
    tech: [
      "Oracle Integration Cloud",
      "Oracle Fusion Middleware",
      "Oracle Database",
      "PL/SQL",
    ],
  },
  {
    title: "Art Gallery Database Management System",
    description:
      "Streamlined gallery operations with a comprehensive user-friendly interface for managing artists, artworks, exhibitions, and sales. Designed to replace manual systems with efficient digital solutions.",
    tech: ["Database Design", "SQL", "System Architecture"],
  },
  {
    title: "Beauty Product Recommendation System",
    description:
      "Leveraged machine learning algorithms for personalized product recommendations based on user preferences, reviews, and product descriptions.",
    tech: ["Python", "Machine Learning", "Data Analysis"],
  },
  {
    title: "ASAP - Online Grocery Store",
    description:
      "Led the development of a comprehensive e-commerce platform with robust user authentication, dynamic product catalog, and secure payment processing.",
    tech: ["Full-Stack Development", "Authentication", "E-commerce"],
  },
  {
    title: "Food Ordering Dashboard",
    description:
      "Built a modern, responsive food ordering platform with real-time order tracking and seamless user experience using cutting-edge React technologies.",
    tech: ["Next.js", "React.js", "Material-UI"],
  },
  {
    title: "Raft Consensus Algorithm Implementation",
    description:
      "Implemented the Raft consensus algorithm in GoLang to achieve fault-tolerant distributed coordination among nodes in distributed systems.",
    tech: ["GoLang", "Distributed Systems", "System Design"],
  },
];

// Education Data
export const education: Education[] = [
  {
    institution: "PES University",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    location: "Bangalore, Karnataka",
    startYear: 2020,
    endYear: 2024,
    grade: "8.5",
  },
  {
    institution: "Narayana Junior College",
    degree: "Grade 11-12",
    field: "Physics | Chemistry | Math",
    location: "Hyderabad, Telangana",
    startYear: 2018,
    endYear: 2020,
    grade: "94.4%",
  },
  {
    institution: "Sri Chaitanya Techno School",
    degree: "Grade 10",
    field: "High School",
    location: "Raichur, Karnataka",
    startYear: 2018,
    grade: "96.96%",
  },
];

// Social Links
export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: "mail",
  },
  {
    name: "LinkedIn",
    url: personalInfo.linkedin,
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: personalInfo.github,
    icon: "github",
  },
];

// Contact Section Data
export const contactInfo = {
  title: "Contact",
  description: `Please contact me directly at ${personalInfo.email} or through any of the social links below. I'm always interested in new opportunities and collaborations.`,
};
