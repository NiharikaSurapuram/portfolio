import { ThemeToggle } from "@/components/theme-toggle";
import {
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
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              Niharika Surapuram
            </h1>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6">
                <a
                  href="#about"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#education"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Education
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-lg text-gray-600 dark:text-gray-400">
                  👋 Hello, I'm
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Niharika Surapuram
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
                Full-Stack Developer
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I enjoy building sites & apps. My focus is React (Next.js).
                Computer Science graduate who's passionate about cracking
                problems and crafting innovative software solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:niharikasurapuram@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact me
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/niharika_surapuram.jpeg"
                  alt="Niharika Surapuram"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            About me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Hey there! 👋 I'm a Computer Science graduate from PES
                University who's all about cracking problems and crafting cool
                software solutions. I love diving into innovative projects and
                bringing them to life.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I've got strong frontend skills and enjoy adding that extra
                touch of style to my coding adventures! My focus is on React and
                Next.js, building modern web applications that solve real-world
                problems.
              </p>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Bangalore, Karnataka</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                  "Java",
                  "C++",
                  "HTML",
                  "CSS",
                  "Tailwind",
                  "MySQL",
                  "Git",
                  "AWS",
                  "Express",
                  "Spring Boot",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white dark:bg-gray-700 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Review Driven Beauty Product Recommendation System",
                description:
                  "Developed a review-driven beauty product recommendation system by utilizing user reviews, product descriptions, and personal preferences to provide personalized recommendations.",
                tech: ["Python", "Machine Learning", "NLP", "Data Analysis"],
                link: "#",
              },
              {
                title: "Assignment Submission Portal",
                description:
                  "Built a comprehensive system with database for storing information on assignments, submissions, and grading. Designed to override the problems of existing manual systems.",
                tech: ["Spring Boot", "Java", "MySQL", "REST API"],
                link: "#",
              },
              {
                title: "Implementing Raft Logic in GoLang",
                description:
                  "Implemented Raft Consensus algorithm in Go to achieve fault tolerant and distributed coordination among nodes in distributed systems.",
                tech: ["GoLang", "Distributed Systems", "Consensus Algorithm"],
                link: "#",
              },
              {
                title: "Food Ordering Dashboard",
                description:
                  "The Food Ordering Dashboard simplifies the dining experience with a user-friendly interface for menu browsing, order placement, and delivery tracking.",
                tech: ["Next.js", "React.js", "Material-UI", "Jotai"],
                link: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-16 px-6 bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Education
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    PES University
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bachelor of Technology, Computer Science and Engineering
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Bangalore, Karnataka
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    2020 - 2024
                  </span>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Grade: 8.5
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Narayana Junior College
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Grade 11-12, Physics | Chemistry | Math
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Hyderabad, Telangana
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    2018 - 2020
                  </span>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Grade: 94.4%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Sri Chaitanya Techno School
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Grade 10, High School
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Raichur, Karnataka
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    2018
                  </span>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Grade: 96.96%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Contact me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Please contact me directly at niharikasurapuram@gmail.com or through
            any of the social links below. I'm always interested in new
            opportunities and collaborations!
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:niharikasurapuram@gmail.com"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6 mr-2" />
              Email
            </a>
            <a
              href="https://linkedin.com/in/niharikasurapuram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6 mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/niharikasurapuram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-6 h-6 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © 2024 Niharika Surapuram. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
            Built with React & Next.js, TypeScript, Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
