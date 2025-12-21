import { Header } from "@/components/header";
import {
  PersonStructuredData,
  WebsiteStructuredData,
} from "@/components/structured-data";
import {
  aboutDescription,
  books,
  education,
  experiences,
  personalInfo,
  projects,
  socialLinks,
  techSkills,
  values,
} from "@/lib/data";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background transition-colors selection:bg-stone-200 dark:selection:bg-stone-800">
      <PersonStructuredData />
      <WebsiteStructuredData />

      <Header currentPage="portfolio" />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 space-y-32">
        {/* Hero Section */}
        <section className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs font-medium text-stone-600 dark:text-stone-400">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              Building @ Oracle
            </div>
            <h1 className="text-5xl sm:text-7xl font-serif text-foreground tracking-tight leading-[1.1]">
              {personalInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed">
              Cloud Analyst & Full-Stack Developer.
              <br />
              <span className="text-foreground/80">
                Crafting clean, resilient software with quiet confidence.
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/90 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-medium rounded-full hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </div>
        </section>

        {/* Values / Philosophy */}
        <section className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-border">
          {values.map((value, index) => (
            <div key={index} className="space-y-3">
              <h3 className="font-serif text-lg text-foreground">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </section>

        {/* About & The Person */}
        <section id="about" className="scroll-mt-24">
          <div className="grid md:grid-cols-[2fr,1fr] gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-foreground">
                The Person Behind the Code
              </h2>
              <div className="prose dark:prose-invert prose-stone">
                {aboutDescription.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed text-lg font-light"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground pt-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 opacity-70" />
                  {personalInfo.location}
                </div>
                <div className="flex items-center">
                  <Building2 className="w-4 h-4 mr-2 opacity-70" />
                  Oracle
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative aspect-square w-full max-w-[280px] mx-auto md:ml-auto">
                <Image
                  src="/niharika_surapuram.jpeg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="bg-stone-50 dark:bg-stone-900/50 p-6 rounded-2xl space-y-4 border border-border/50">
                <h3 className="font-serif text-foreground flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  On My Shelf
                </h3>
                <div className="space-y-4">
                  {books.map((book, i) => (
                    <div key={i} className="space-y-1">
                      <p className="text-sm font-medium text-foreground">
                        {book.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        by {book.author}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills - Clean Grid */}
        <section className="space-y-12">
          <h2 className="text-3xl font-serif text-foreground">
            Technical Toolkit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techSkills).map(([category, skills]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider border-b border-border pb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-foreground bg-stone-100 dark:bg-stone-900 px-3 py-1.5 rounded-md border border-stone-200 dark:border-stone-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="space-y-12 scroll-mt-24">
          <div className="flex items-baseline justify-between">
            <h2 className="text-3xl font-serif text-foreground">Experience</h2>
            <a
              href="/resume.pdf"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
            >
              Download Resume{" "}
              <Download className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group grid md:grid-cols-[1fr,3fr] gap-8"
              >
                <div className="text-sm text-muted-foreground pt-1">
                  {exp.startDate} — {exp.endDate}
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-muted-foreground">
                      {exp.company} • {exp.location}
                    </div>
                  </div>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 mt-2 w-1.5 h-1.5 bg-stone-300 dark:bg-stone-700 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-12 scroll-mt-24">
          <h2 className="text-3xl font-serif text-foreground">Selected Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-stone-50 dark:bg-stone-900/30 border border-stone-100 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 transition-colors space-y-4 flex flex-col"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-lg text-foreground group-hover:underline decoration-1 underline-offset-4">
                    {project.title}
                  </h3>
                  {project.status === "Completed" && (
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] uppercase tracking-wider font-medium rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Done
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-muted-foreground bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      View Project{" "}
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education - Compact */}
        <section className="space-y-8">
          <h2 className="text-3xl font-serif text-foreground">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pb-6 border-b border-border last:border-0 last:pb-0"
              >
                <div>
                  <h3 className="font-medium text-foreground">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.degree}
                    {edu.field ? `, ${edu.field}` : ""}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-foreground">
                    {edu.startYear} - {edu.endYear || "Present"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Grade: {edu.grade}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Niharika Surapuram.
            <span className="hidden sm:inline"> Crafted with curiosity.</span>
          </div>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                {link.name === "Email" && <Mail className="w-4 h-4" />}
                {link.name === "LinkedIn" && <Linkedin className="w-4 h-4" />}
                {link.name === "GitHub" && <Github className="w-4 h-4" />}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
