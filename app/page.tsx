import { Header } from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Building2,
  Calendar,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      {/* Navigation */}
      <Header currentPage="portfolio" />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-gray-100 mb-6 tracking-tight">
                Niharika Surapuram
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 font-light">
                Cloud Analyst @ Oracle
              </p>
              <p className="text-base text-gray-500 dark:text-gray-500 mb-12 leading-relaxed max-w-lg">
                Computer Science graduate focused on cloud infrastructure and
                modern web development. Currently building enterprise solutions
                at Oracle.
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:niharikasurapuram@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/niharika_surapuram.jpeg"
                  alt="Niharika Surapuram"
                  width={280}
                  height={280}
                  className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-16 text-center tracking-tight">
            About
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Computer Science specialist focused on cloud infrastructure and
                modern web development. Currently working as a Cloud Analyst at
                Oracle, building enterprise-grade solutions.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Experience spans from startup environments to enterprise
                systems, with expertise in React, Next.js, Oracle Cloud
                Infrastructure, and database optimization.
              </p>
              <div className="pt-4 space-y-3">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                  <Building2 className="w-4 h-4 mr-3" />
                  <span>500+ connections on LinkedIn</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-8">
                Technologies
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-3 uppercase tracking-wider">
                    Oracle Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Oracle Cloud Infrastructure",
                      "Oracle Integration Cloud",
                      "Oracle Database",
                      "PL/SQL",
                      "Oracle BIP",
                      "Oracle WebLogic",
                      "Oracle Red Wood",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-3 uppercase tracking-wider">
                    Web Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React.js",
                      "Next.js",
                      "TypeScript",
                      "Node.js",
                      "REST APIs",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-3 uppercase tracking-wider">
                    Cloud & Infrastructure
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "Docker", "Terraform", "PostgreSQL", "Git"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-16 text-center tracking-tight">
            Experience
          </h2>
          <div className="space-y-12">
            <div className="border-b border-gray-100 dark:border-gray-800 pb-12">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-10 h-10 rounded-lg">
                    <AvatarImage
                      src="https://cdn.brandfetch.io/idnq7H7qT0/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"
                      alt="Oracle Logo"
                      className="rounded-lg"
                    />
                    <AvatarFallback className="bg-red-600 text-white font-medium text-sm rounded-lg">
                      O
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      Cloud Analyst
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      Oracle
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      Full-time • Bengaluru, Karnataka, India
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500 dark:text-gray-500 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    Aug 2024 - Present
                  </span>
                </div>
              </div>
              <div className="ml-14">
                <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm leading-relaxed">
                  <li>
                    • Architecting Oracle Cloud Infrastructure solutions for
                    enterprise clients
                  </li>
                  <li>
                    • Building integration solutions using Oracle Integration
                    Cloud (OIC)
                  </li>
                  <li>
                    • Developing Oracle APEX applications for rapid development
                  </li>
                  <li>
                    • Writing optimized PL/SQL procedures and Oracle SQL queries
                  </li>
                  <li>
                    • Configuring Oracle Enterprise Manager for performance
                    monitoring
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-medium text-sm">S</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      SDE Intern
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      Stealth Startup
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      Internship • Bengaluru, Karnataka, India
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500 dark:text-gray-500 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    Feb 2024 - Jul 2024
                  </span>
                </div>
              </div>
              <div className="ml-14">
                <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm leading-relaxed">
                  <li>
                    • Developed full-stack applications using Next.js and
                    React.js
                  </li>
                  <li>
                    • Built scalable backend services with Node.js and
                    Express.js
                  </li>
                  <li>
                    • Implemented infrastructure as code using Terraform for AWS
                  </li>
                  <li>
                    • Worked with containerization using Docker and AWS services
                  </li>
                  <li>• Designed PostgreSQL databases with Prisma ORM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-16 text-center tracking-tight">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
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
                link: undefined,
              },
              {
                title: "Art Gallery Database Management System",
                description:
                  "Streamlined gallery operations with a comprehensive user-friendly interface for managing artists, artworks, exhibitions, and sales. Designed to replace manual systems with efficient digital solutions.",
                tech: ["Database Design", "SQL", "System Architecture"],
                link: undefined,
              },
              {
                title: "Beauty Product Recommendation System",
                description:
                  "Leveraged machine learning algorithms for personalized product recommendations based on user preferences, reviews, and product descriptions.",
                tech: ["Python", "Machine Learning", "Data Analysis"],
                link: undefined,
              },
              {
                title: "ASAP - Online Grocery Store",
                description:
                  "Led the development of a comprehensive e-commerce platform with robust user authentication, dynamic product catalog, and secure payment processing.",
                tech: [
                  "Full-Stack Development",
                  "Authentication",
                  "E-commerce",
                ],
                link: undefined,
              },
              {
                title: "Food Ordering Dashboard",
                description:
                  "Built a modern, responsive food ordering platform with real-time order tracking and seamless user experience using cutting-edge React technologies.",
                tech: ["Next.js", "React.js", "Material-UI"],
                link: undefined,
              },
              {
                title: "Raft Consensus Algorithm Implementation",
                description:
                  "Implemented the Raft consensus algorithm in GoLang to achieve fault-tolerant distributed coordination among nodes in distributed systems.",
                tech: ["GoLang", "Distributed Systems", "System Design"],
                link: undefined,
              },
            ].map((project, index) => (
              <div key={index} className="group">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex items-center text-xs text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-16 text-center tracking-tight">
            Education
          </h2>
          <div className="space-y-8">
            <div className="border-b border-gray-100 dark:border-gray-800 pb-8">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    PES University
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Bachelor of Technology, Computer Science and Engineering
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-xs">
                    Bangalore, Karnataka
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    2020 - 2024
                  </span>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Grade: 8.5
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-100 dark:border-gray-800 pb-8">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Narayana Junior College
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Grade 11-12, Physics | Chemistry | Math
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-xs">
                    Hyderabad, Telangana
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    2018 - 2020
                  </span>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Grade: 94.4%
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Sri Chaitanya Techno School
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Grade 10, High School
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-xs">
                    Raichur, Karnataka
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    2018
                  </span>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Grade: 96.96%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-16 tracking-tight">
            Contact
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Please contact me directly at niharikasurapuram@gmail.com or through
            any of the social links below. I&apos;m always interested in new
            opportunities and collaborations.
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:niharikasurapuram@gmail.com"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </a>
            <a
              href="https://linkedin.com/in/niharikasurapuram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/niharikasurapuram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Niharika Surapuram. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-600 mt-2">
            Built with React & Next.js, TypeScript, Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
