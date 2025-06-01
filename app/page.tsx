import { Header } from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  aboutDescription,
  contactInfo,
  education,
  experiences,
  personalInfo,
  projects,
  socialLinks,
  techSkills,
} from "@/lib/data";
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
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-gray-100 mb-6 tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
              <div className="space-y-4 mb-12">
                <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
                  {personalInfo.title}
                </p>
                <p className="text-base text-gray-500 dark:text-gray-500 leading-relaxed max-w-lg">
                  {personalInfo.description}
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
                <a
                  href="/resume"
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
                  alt={personalInfo.name}
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
              {aboutDescription.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
              <div className="pt-4 space-y-3">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                  <Building2 className="w-4 h-4 mr-3" />
                  <span>{personalInfo.connections}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-8">
                Technologies
              </h3>
              <div className="space-y-8">
                {Object.entries(techSkills).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-3 uppercase tracking-wider">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
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
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={
                  index !== experiences.length - 1
                    ? "border-b border-gray-100 dark:border-gray-800 pb-12"
                    : ""
                }
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-start space-x-4">
                    {exp.logo ? (
                      <Avatar className="w-10 h-10 rounded-lg">
                        <AvatarImage
                          src={exp.logo}
                          alt={`${exp.company} Logo`}
                          className="rounded-lg"
                        />
                        <AvatarFallback className="bg-red-600 text-white font-medium text-sm rounded-lg">
                          {exp.logoFallback}
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {exp.logoFallback}
                        </span>
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        {exp.role}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {exp.type} • {exp.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 dark:text-gray-500 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                </div>
                <div className="ml-14">
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm leading-relaxed">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>• {responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
            {projects.map((project, index) => (
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
            {education.map((edu, index) => (
              <div
                key={edu.institution}
                className={
                  index !== education.length - 1
                    ? "border-b border-gray-100 dark:border-gray-800 pb-8"
                    : ""
                }
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {edu.degree}
                      {edu.field && `, ${edu.field}`}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">
                      {edu.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 dark:text-gray-500">
                      {edu.endYear
                        ? `${edu.startYear} - ${edu.endYear}`
                        : edu.startYear}
                    </span>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Grade: {edu.grade}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-16 tracking-tight">
            {contactInfo.title}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {contactInfo.description}
          </p>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link) => {
              const IconComponent =
                link.icon === "mail"
                  ? Mail
                  : link.icon === "linkedin"
                  ? Linkedin
                  : Github;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.icon !== "mail" ? "_blank" : undefined}
                  rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights
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
