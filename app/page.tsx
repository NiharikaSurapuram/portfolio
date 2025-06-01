import { ExternalLink, Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              Niharika Surapuram
            </h1>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Niharika Surapuram
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Software Engineer & Developer
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
              Passionate about creating elegant solutions to complex problems
              through clean, efficient code.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:niharika@example.com"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            About
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I'm a software engineer with a passion for building scalable
                applications and solving complex technical challenges. I enjoy
                working with modern technologies and frameworks to create
                efficient, user-friendly solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or sharing knowledge with
                the developer community.
              </p>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Location</span>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Node.js",
                    "Python",
                    "SQL",
                    "Git",
                    "AWS",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700 border border-gray-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="border-l-2 border-gray-200 pl-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Software Engineer
                    </h3>
                    <p className="text-gray-600">Company Name</p>
                  </div>
                  <span className="text-sm text-gray-500">2023 - Present</span>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    • Developed and maintained web applications using modern
                    frameworks
                  </li>
                  <li>
                    • Collaborated with cross-functional teams to deliver
                    high-quality software
                  </li>
                  <li>
                    • Implemented best practices for code quality and
                    performance optimization
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-2 border-gray-200 pl-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Junior Developer
                    </h3>
                    <p className="text-gray-600">Previous Company</p>
                  </div>
                  <span className="text-sm text-gray-500">2022 - 2023</span>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    • Built responsive web interfaces using React and TypeScript
                  </li>
                  <li>
                    • Participated in code reviews and agile development
                    processes
                  </li>
                  <li>
                    • Contributed to improving development workflows and
                    documentation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
                tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
                github: "#",
                demo: "#",
              },
              {
                title: "Task Management App",
                description:
                  "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
                tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
                github: "#",
                demo: "#",
              },
              {
                title: "Weather Dashboard",
                description:
                  "A responsive weather dashboard that displays current conditions and forecasts using external APIs with beautiful data visualizations.",
                tech: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
                github: "#",
                demo: "#",
              },
              {
                title: "Portfolio Website",
                description:
                  "A clean, minimal portfolio website built with Next.js and Tailwind CSS, featuring responsive design and smooth animations.",
                tech: ["Next.js", "Tailwind CSS", "TypeScript"],
                github: "#",
                demo: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel
            free to reach out if you'd like to work together or just say hello!
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:niharika@example.com"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail className="w-6 h-6 mr-2" />
              Email
            </a>
            <a
              href="https://linkedin.com/in/niharikasurapuram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="w-6 h-6 mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/niharikasurapuram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="w-6 h-6 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500">
            © 2024 Niharika Surapuram. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
