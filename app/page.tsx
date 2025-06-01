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
  Award,
  Building2,
  Calendar,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Users,
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
          <div className="grid md:grid-cols-3 gap-12">
            {/* Bio Column */}
            <div className="md:col-span-2 space-y-6">
              {aboutDescription.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
              <div className="pt-6 space-y-4">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                  <MapPin className="w-4 h-4 mr-3 text-gray-400 dark:text-gray-500" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                  <Building2 className="w-4 h-4 mr-3 text-gray-400 dark:text-gray-500" />
                  <span>{personalInfo.connections}</span>
                </div>
              </div>
            </div>

            {/* Technologies Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-8">
                Tech Stack
              </h3>
              <div className="space-y-6">
                {Object.entries(techSkills).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wider">
                      {category}
                    </h4>
                    <div className="space-y-2">
                      {skills.slice(0, 4).map((skill) => (
                        <div
                          key={skill}
                          className="text-xs text-gray-600 dark:text-gray-400 py-1"
                        >
                          {skill}
                        </div>
                      ))}
                      {skills.length > 4 && (
                        <div className="text-xs text-gray-500 dark:text-gray-500 italic">
                          +{skills.length - 4} more
                        </div>
                      )}
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
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={
                  index !== experiences.length - 1
                    ? "border-b border-gray-100 dark:border-gray-800 pb-16"
                    : ""
                }
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-start space-x-4">
                    {exp.logo ? (
                      <Avatar className="w-12 h-12 rounded-lg">
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
                      <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-medium">
                          {exp.logoFallback}
                        </span>
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-2">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.startDate} - {exp.endDate}
                        </span>
                        <span>•</span>
                        <span>{exp.type}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  {exp.team && (
                    <div className="text-right">
                      <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {exp.team}
                      </p>
                    </div>
                  )}
                </div>

                {/* Description */}
                {exp.description && (
                  <div className="mb-8">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
                      {exp.description}
                    </p>
                  </div>
                )}

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Responsibilities & Achievements */}
                  <div className="space-y-6">
                    {/* Key Responsibilities */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wider">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities
                          .slice(0, 3)
                          .map((responsibility, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex items-start"
                            >
                              <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {responsibility}
                            </li>
                          ))}
                        {exp.responsibilities.length > 3 && (
                          <li className="text-sm text-gray-500 dark:text-gray-500 italic">
                            +{exp.responsibilities.length - 3} more
                            responsibilities
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wider flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex items-start"
                            >
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Right Column - Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
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
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group border border-gray-100 dark:border-gray-800 rounded-lg p-6 hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
              >
                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  {project.duration && (
                    <span className="text-xs text-gray-500 dark:text-gray-500 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded">
                      {project.duration}
                    </span>
                  )}
                </div>

                {/* Project Meta */}
                {(project.role || project.teamSize) && (
                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 dark:text-gray-500">
                    {project.role && (
                      <span className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {project.role}
                      </span>
                    )}
                    {project.teamSize && (
                      <span className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {project.teamSize}
                      </span>
                    )}
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-4">
                  {project.description}
                </p>

                {/* Key Features - Show only first 2 */}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-2 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.keyFeatures.slice(0, 2).map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex items-start"
                        >
                          <span className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                      {project.keyFeatures.length > 2 && (
                        <li className="text-xs text-gray-500 dark:text-gray-500 italic">
                          +{project.keyFeatures.length - 2} more features
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-gray-500 dark:text-gray-500 text-xs">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Links */}
                {(project.link || project.github) && (
                  <div className="flex gap-4 pt-2 border-t border-gray-100 dark:border-gray-800">
                    {project.link && (
                      <a
                        href={project.link}
                        className="inline-flex items-center text-xs text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Project
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        GitHub
                      </a>
                    )}
                  </div>
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
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div
                key={edu.institution}
                className="border border-gray-100 dark:border-gray-800 rounded-lg p-6 hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {edu.degree}
                  </p>
                  {edu.field && (
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                      {edu.field}
                    </p>
                  )}
                  <div className="space-y-2">
                    <div className="text-xs text-gray-500 dark:text-gray-500 flex items-center justify-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {edu.endYear
                        ? `${edu.startYear} - ${edu.endYear}`
                        : edu.startYear}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 flex items-center justify-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {edu.location}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full">
                      Grade: {edu.grade}
                    </span>
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
