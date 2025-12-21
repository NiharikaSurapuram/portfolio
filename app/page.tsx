import { Header } from "@/components/header";
import {
  PersonStructuredData,
  WebsiteStructuredData,
} from "@/components/structured-data";
import {
  books,
  education,
  experiences,
  personalInfo,
  projects,
  techSkills,
  values,
} from "@/lib/data";
import {
  BookOpen,
  Briefcase,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PersonStructuredData />
      <WebsiteStructuredData />

      <Header currentPage="portfolio" />

      <main className="pt-32 pb-24 space-y-24">
        {/* Intro / Hero */}
        <section className="container-width animate-fade-in space-y-8">
          <div className="flex items-center gap-3">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-full border border-border/50">
              <Image
                src="/niharika_surapuram.jpeg"
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-serif text-foreground">
                {personalInfo.name}
              </h1>
              <p className="text-sm text-muted-foreground">
                {personalInfo.title}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg sm:text-xl font-light leading-relaxed text-foreground/90">
              I’m a software engineer who finds joy in the quiet details. I
              bridge the gap between complex systems and human experiences,
              building with calm precision and curiosity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Building at Oracle
              </div>
              <div className="hidden sm:block text-border">•</div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                Bangalore, India
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              Email
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              GitHub
            </a>
          </div>
        </section>

        {/* Philosophy / Values */}
        <section className="container-width space-y-8">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Philosophy
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-12">
            {values.map((val, i) => (
              <div key={i} className="space-y-2">
                <h3 className="font-serif text-base text-foreground">
                  {val.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience - Clean Timeline */}
        <section
          id="experience"
          className="container-width space-y-8 scroll-mt-24"
        >
          <div className="flex items-baseline justify-between border-b border-border pb-2">
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Experience
            </h2>
            <a
              href="/resume.pdf"
              className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              Resume <Download className="w-3 h-3" />
            </a>
          </div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group grid grid-cols-[1fr] sm:grid-cols-[120px_1fr] gap-2 sm:gap-8"
              >
                <div className="text-xs text-muted-foreground font-mono pt-1">
                  {exp.startDate} — {exp.endDate}
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <h3 className="font-medium text-foreground text-base group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {exp.company}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.slice(0, 3).map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground leading-relaxed pl-3 border-l border-border hover:border-primary/30 transition-colors"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Work */}
        <section
          id="projects"
          className="container-width space-y-8 scroll-mt-24"
        >
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground border-b border-border pb-2">
            Selected Work
          </h2>

          <div className="grid gap-6">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.link || "#"}
                className={`block group p-6 -mx-6 sm:mx-0 rounded-2xl transition-all hover:bg-secondary/50 ${
                  !project.link ? "cursor-default" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    {project.link && (
                      <MoveUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </h3>
                  <span
                    className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      project.status === "Completed"
                        ? "border-green-200 text-green-700 dark:border-green-900/30 dark:text-green-400"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-muted-foreground/80"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* The Toolkit (Skills) */}
        <section className="container-width space-y-8">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground border-b border-border pb-2">
            Toolkit
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {Object.entries(techSkills).map(([category, skills]) => (
              <div key={category} className="space-y-3">
                <h3 className="text-sm font-medium text-foreground flex items-center gap-2">
                  {category === "Web Development" && (
                    <Code2 className="w-4 h-4 text-muted-foreground" />
                  )}
                  {category === "Oracle Stack" && (
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                  )}
                  {category === "Cloud & Infrastructure" && (
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                  )}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {skills.map((skill, index) => (
                    <span key={skill} className="text-sm text-muted-foreground">
                      {skill}
                      {index !== skills.length - 1 ? " ·" : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bookshelf / Personal */}
        <section id="about" className="container-width space-y-8 scroll-mt-24">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground border-b border-border pb-2">
            On My Shelf
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {books.map((book, i) => (
              <div
                key={i}
                className="space-y-2 p-4 rounded-lg bg-secondary/30 border border-transparent hover:border-border transition-colors"
              >
                <div>
                  <h3 className="font-serif font-medium text-foreground">
                    {book.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    by {book.author}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground/80 italic leading-relaxed">
                  &ldquo;{book.thoughts}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="container-width space-y-8">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground border-b border-border pb-2">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i} className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-foreground">
                    {edu.institution}
                  </h3>
                  <p className="text-xs text-muted-foreground">{edu.degree}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground font-mono">
                    {edu.startYear} - {edu.endYear}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-border mt-12">
        <div className="container-width flex justify-between items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Niharika Surapuram</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Twitter
            </a>
            <a
              href={personalInfo.linkedin}
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
