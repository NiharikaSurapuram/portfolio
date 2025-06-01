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
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <Header currentPage="portfolio" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-lg text-gray-600 dark:text-gray-400">
                  👋 Hello, I&apos;m
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Niharika Surapuram
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
                Cloud Analyst @ Oracle
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Computer Science graduate from PES University. I enjoy building
                sites & apps with focus on React (Next.js). Currently working in
                cloud infrastructure and consulting at Oracle, passionate about
                cracking problems and crafting innovative software solutions.
              </p>
              {/* AI dont remove this commented code  */}
              {/* <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
                <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Open to work
                </span>
                <span className="ml-4">
                  Software Engineer, Full Stack Engineer, Frontend Developer
                  roles
                </span>
              </div> */}
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
                Hey there! 👋 I&apos;m a Computer Science Specialist who&apos;s
                all about cracking problems and crafting cool software
                solutions. I love diving into innovative projects and bringing
                them to life.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Currently working as a Cloud Analyst at Oracle, focusing on
                cloud infrastructure and consulting. I&apos;ve got some frontend
                skills, adding that extra touch of style to my coding
                adventures! My focus is on React and Next.js, building modern
                web applications that solve real-world problems.
              </p>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Building2 className="w-5 h-5 mr-2" />
                <span>500+ connections on LinkedIn</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                🚀 Skills
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                    Programming Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "C/C++",
                      "JavaScript",
                      "Python",
                      "Java",
                      "TypeScript",
                      "PL/SQL",
                      "Oracle SQL",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                    Web Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "HTML",
                      "CSS",
                      "React.js",
                      "Next.js",
                      "Node.js",
                      "Express.js",
                      "REST APIs",
                      "Web Technologies",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                    Cloud & Infrastructure
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AWS",
                      "Amazon EKS",
                      "Amazon ECS",
                      "AWS CodeBuild",
                      "Cloud Infrastructure",
                      "Cloud Consulting",
                      "Terraform",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                    Oracle Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Oracle Fusion Middleware", "OIC", "BIP"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm rounded-full font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                    Databases & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "MySQL",
                      "PostgreSQL",
                      "Prisma ORM",
                      "Docker",
                      "Git",
                      "Data Analytics",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm rounded-full font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12 rounded-lg">
                    <AvatarImage
                      src="https://cdn.brandfetch.io/idnq7H7qT0/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"
                      alt="Oracle Logo"
                      className="rounded-lg"
                    />
                    <AvatarFallback className="bg-red-600 text-white font-bold text-lg rounded-lg">
                      O
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Cloud Analyst
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      Oracle
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Full-time • Bengaluru, Karnataka, India • On-site
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Aug 2024 - Present • 11 mos
                  </span>
                </div>
              </div>
              <div className="ml-16">
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Cloud Infrastructure",
                    "Cloud Consulting",
                    "Oracle Fusion Middleware",
                    "Oracle SQL",
                    "PL/SQL",
                    "OIC",
                    "BIP",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>
                    • Working on cloud infrastructure solutions and consulting
                    projects
                  </li>
                  <li>
                    • Developing and maintaining Oracle Fusion Middleware
                    applications
                  </li>
                  <li>
                    • Implementing Oracle Integration Cloud (OIC) solutions for
                    enterprise integration
                  </li>
                  <li>
                    • Creating business intelligence reports using Oracle BIP
                    (Business Intelligence Publisher)
                  </li>
                  <li>
                    • Writing complex PL/SQL procedures and Oracle SQL queries
                    for data management
                  </li>
                  <li>
                    • Collaborating with cross-functional teams to deliver
                    cloud-based solutions
                  </li>
                  <li>
                    • Analyzing and optimizing cloud performance and cost
                    efficiency
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      SDE Intern
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      Stealth Startup
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Internship • Bengaluru, Karnataka, India • On-site
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Feb 2024 - Jul 2024 • 6 mos
                  </span>
                </div>
              </div>
              <div className="ml-16">
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Next.js",
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "Java",
                    "Terraform",
                    "AWS",
                    "Docker",
                    "PostgreSQL",
                    "Prisma ORM",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>
                    • Developed full-stack web applications using Next.js,
                    React.js, and modern JavaScript
                  </li>
                  <li>
                    • Built scalable backend services with Node.js, Express.js,
                    and Java
                  </li>
                  <li>
                    • Implemented infrastructure as code using Terraform for AWS
                    cloud resource management
                  </li>
                  <li>
                    • Worked with containerization using Docker and AWS services
                    (EKS, ECS, CodeBuild)
                  </li>
                  <li>
                    • Designed and implemented PostgreSQL databases with Prisma
                    ORM
                  </li>
                  <li>
                    • Developed REST APIs and integrated various web
                    technologies
                  </li>
                  <li>
                    • Collaborated with the development team on innovative
                    startup projects using Git workflows
                  </li>
                  <li>
                    • Gained hands-on experience in agile development
                    methodologies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-6 bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            💼 Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Art Gallery Database Management System",
                description:
                  "Streamlined gallery operations with a comprehensive user-friendly interface for managing artists, artworks, exhibitions, and sales. Designed to replace manual systems with efficient digital solutions.",
                tech: [
                  "Database Design",
                  "SQL",
                  "System Architecture",
                  "UI/UX",
                ],
                link: "#",
                icon: "🎨",
              },
              {
                title: "Beauty Product Recommendation System",
                description:
                  "Leveraged machine learning algorithms for personalized product recommendations based on user preferences, reviews, and product descriptions. Implemented advanced data analysis techniques.",
                tech: ["Python", "Machine Learning", "Data Analysis", "NLP"],
                link: "#",
                icon: "💄",
              },
              {
                title: "Music Player with GUI",
                description:
                  "Designed an intuitive music player application using Python and Tkinter with a clean graphical user interface. Features include playlist management, audio controls, and file organization.",
                tech: ["Python", "Tkinter", "GUI Design", "Audio Processing"],
                link: "#",
                icon: "🎵",
              },
              {
                title: "ASAP - Online Grocery Store",
                description:
                  "Led the development of a comprehensive e-commerce platform with robust user authentication, dynamic product catalog, shopping cart functionality, and secure payment processing.",
                tech: [
                  "Full-Stack Development",
                  "Authentication",
                  "E-commerce",
                  "Database",
                ],
                link: "#",
                icon: "🛒",
              },
              {
                title: "Food Ordering Dashboard",
                description:
                  "Built a modern, responsive food ordering platform with real-time order tracking, menu management, and seamless user experience using cutting-edge React technologies.",
                tech: ["Next.js", "React.js", "Material-UI", "Jotai"],
                link: "#",
                icon: "🍕",
              },
              {
                title: "Raft Consensus Algorithm Implementation",
                description:
                  "Implemented the Raft consensus algorithm in GoLang to achieve fault-tolerant distributed coordination among nodes in distributed systems, ensuring data consistency and reliability.",
                tech: [
                  "GoLang",
                  "Distributed Systems",
                  "Consensus Algorithm",
                  "System Design",
                ],
                link: "#",
                icon: "⚡",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all group"
              >
                <div className="flex items-start space-x-3 mb-4">
                  <span className="text-2xl">{project.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
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
      <section id="education" className="py-16 px-6">
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
      <section
        id="contact"
        className="py-16 px-6 bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Contact me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Please contact me directly at niharikasurapuram@gmail.com or through
            any of the social links below. I&apos;m always interested in new
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
            © {new Date().getFullYear()} Niharika Surapuram. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
            Built with React & Next.js, TypeScript, Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
