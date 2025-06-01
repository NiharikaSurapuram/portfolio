import {
  aboutDescription,
  education,
  experiences,
  personalInfo,
  projects,
  techSkills,
} from "./data";

// Function to escape LaTeX special characters
function escapeLatex(text: string): string {
  return text
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/\{/g, "\\{")
    .replace(/\}/g, "\\}")
    .replace(/\$/g, "\\$")
    .replace(/&/g, "\\&")
    .replace(/%/g, "\\%")
    .replace(/#/g, "\\#")
    .replace(/\^/g, "\\textasciicircum{}")
    .replace(/_/g, "\\_")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/"/g, "''")
    .replace(/'/g, "'");
}

// LaTeX template for the resume
export function generateLatexResume(): string {
  const latex = `
\\documentclass[11pt,a4paper,sans]{moderncv}

% Modern CV theme
\\moderncvstyle{classic}
\\moderncvcolor{blue}

% Character encoding
\\usepackage[utf8]{inputenc}

% Adjust page margins
\\usepackage[scale=0.75]{geometry}

% Personal data
\\name{${escapeLatex(personalInfo.name.split(" ")[0])}}{${escapeLatex(
    personalInfo.name.split(" ").slice(1).join(" ")
  )}}
\\title{${escapeLatex(personalInfo.title)}}
\\address{${escapeLatex(personalInfo.location)}}{}{}
\\email{${escapeLatex(personalInfo.email)}}
\\social[linkedin]{${personalInfo.linkedin.replace(
    "https://linkedin.com/in/",
    ""
  )}}
\\social[github]{${personalInfo.github.replace("https://github.com/", "")}}

\\begin{document}

\\makecvtitle

% About Section
\\section{About}
${aboutDescription.map((desc) => `\\cvitem{}{${escapeLatex(desc)}}`).join("\n")}

% Experience Section
\\section{Experience}
${experiences
  .map(
    (exp) => `
\\cventry{${escapeLatex(exp.startDate)} -- ${escapeLatex(
      exp.endDate
    )}}{${escapeLatex(exp.role)}}{${escapeLatex(exp.company)}}{${escapeLatex(
      exp.location
    )}}{${escapeLatex(exp.type)}}{
\\begin{itemize}
${exp.responsibilities
  .map((resp) => `\\item ${escapeLatex(resp.replace(/•\s*/, ""))}`)
  .join("\n")}
\\end{itemize}
}
`
  )
  .join("\n")}

% Education Section
\\section{Education}
${education
  .map(
    (edu) => `
\\cventry{${
      edu.endYear ? `${edu.startYear} -- ${edu.endYear}` : edu.startYear
    }}{${escapeLatex(edu.degree)}${
      edu.field ? `, ${escapeLatex(edu.field)}` : ""
    }}{${escapeLatex(edu.institution)}}{${escapeLatex(
      edu.location
    )}}{Grade: ${escapeLatex(edu.grade)}}{}
`
  )
  .join("\n")}

% Projects Section
\\section{Projects}
${projects
  .map(
    (project) => `
\\cvitem{${escapeLatex(project.title)}}{${escapeLatex(project.description)}}
\\cvitem{Technologies}{${project.tech.map(escapeLatex).join(", ")}}
\\vspace{0.2cm}
`
  )
  .join("\n")}

% Skills Section
\\section{Technical Skills}
${Object.entries(techSkills)
  .map(
    ([category, skills]) => `
\\cvitem{${escapeLatex(category)}}{${skills.map(escapeLatex).join(", ")}}
`
  )
  .join("\n")}

\\end{document}
`;

  return latex.trim();
}

// Alternative modern template
export function generateModernLatexResume(): string {
  const latex = `
\\documentclass[11pt,a4paper]{article}

% Packages
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{lmodern}
\\usepackage[margin=0.75in]{geometry}
\\usepackage{titlesec}
\\usepackage{enumitem}
\\usepackage{hyperref}
\\usepackage{xcolor}

% Colors
\\definecolor{primary}{RGB}{0, 102, 204}
\\definecolor{secondary}{RGB}{102, 102, 102}

% Custom commands
\\newcommand{\\name}[1]{\\centerline{\\Huge\\textbf{#1}}}
\\newcommand{\\contact}[1]{\\centerline{\\large\\textcolor{secondary}{#1}}}
\\newcommand{\\sectiontitle}[1]{\\section*{\\textcolor{primary}{\\uppercase{#1}}}}

% Remove page numbers
\\pagestyle{empty}

% Adjust section spacing
\\titlespacing*{\\section}{0pt}{12pt}{6pt}

\\begin{document}

% Header
\\name{${escapeLatex(personalInfo.name)}}
\\vspace{0.2cm}
\\contact{${escapeLatex(personalInfo.title)}}
\\vspace{0.1cm}
\\contact{${escapeLatex(personalInfo.email)} | ${escapeLatex(
    personalInfo.location
  )}}
\\contact{LinkedIn: ${personalInfo.linkedin.replace(
    "https://",
    ""
  )} | GitHub: ${personalInfo.github.replace("https://", "")}}

\\vspace{0.5cm}

% About
\\sectiontitle{About}
${aboutDescription.map((desc) => `${escapeLatex(desc)}\\\\[0.2cm]`).join("\n")}

% Experience
\\sectiontitle{Experience}
${experiences
  .map(
    (exp) => `
\\textbf{${escapeLatex(exp.role)}} | \\textit{${escapeLatex(
      exp.company
    )}} \\hfill \\textcolor{secondary}{${escapeLatex(
      exp.startDate
    )} -- ${escapeLatex(exp.endDate)}}\\\\
\\textcolor{secondary}{${escapeLatex(exp.type)} | ${escapeLatex(
      exp.location
    )}}\\\\[0.1cm]
\\begin{itemize}[leftmargin=*,noitemsep,topsep=0pt]
${exp.responsibilities
  .map((resp) => `\\item ${escapeLatex(resp.replace(/•\s*/, ""))}`)
  .join("\n")}
\\end{itemize}
\\vspace{0.3cm}
`
  )
  .join("\n")}

% Education
\\sectiontitle{Education}
${education
  .map(
    (edu) => `
\\textbf{${escapeLatex(edu.institution)}} \\hfill \\textcolor{secondary}{${
      edu.endYear ? `${edu.startYear} -- ${edu.endYear}` : edu.startYear
    }}\\\\
${escapeLatex(edu.degree)}${
      edu.field ? `, ${escapeLatex(edu.field)}` : ""
    } | Grade: ${escapeLatex(edu.grade)}\\\\
\\textcolor{secondary}{${escapeLatex(edu.location)}}\\\\[0.2cm]
`
  )
  .join("\n")}

% Projects
\\sectiontitle{Projects}
${projects
  .map(
    (project) => `
\\textbf{${escapeLatex(project.title)}}\\\\
${escapeLatex(project.description)}\\\\
\\textit{Technologies:} ${project.tech.map(escapeLatex).join(", ")}\\\\[0.2cm]
`
  )
  .join("\n")}

% Technical Skills
\\sectiontitle{Technical Skills}
${Object.entries(techSkills)
  .map(
    ([category, skills]) => `
\\textbf{${escapeLatex(category)}:} ${skills
      .map(escapeLatex)
      .join(", ")}\\\\[0.1cm]
`
  )
  .join("\n")}

\\end{document}
`;

  return latex.trim();
}

// Simple clean template
export function generateCleanLatexResume(): string {
  const latex = `
\\documentclass[11pt,letterpaper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[margin=0.8in]{geometry}
\\usepackage{enumitem}
\\usepackage{hyperref}

% Remove page numbers
\\pagestyle{empty}

% Custom spacing
\\setlength{\\parindent}{0pt}
\\setlength{\\parskip}{0.1cm}

\\begin{document}

% Header
\\begin{center}
{\\Large \\textbf{${escapeLatex(personalInfo.name)}}}\\\\
${escapeLatex(personalInfo.title)}\\\\
${escapeLatex(personalInfo.email)} | ${escapeLatex(personalInfo.location)}\\\\
${personalInfo.linkedin.replace(
  "https://",
  ""
)} | ${personalInfo.github.replace("https://", "")}
\\end{center}

\\vspace{0.3cm}

% About
\\textbf{ABOUT}\\\\
\\rule{\\textwidth}{0.5pt}\\\\
${escapeLatex(aboutDescription.join(" "))}

\\vspace{0.3cm}

% Experience
\\textbf{EXPERIENCE}\\\\
\\rule{\\textwidth}{0.5pt}\\\\
${experiences
  .map(
    (exp) => `
\\textbf{${escapeLatex(exp.role)}} | ${escapeLatex(
      exp.company
    )} \\hfill ${escapeLatex(exp.startDate)} -- ${escapeLatex(exp.endDate)}\\\\
${escapeLatex(exp.type)} | ${escapeLatex(exp.location)}\\\\
\\begin{itemize}[leftmargin=*,noitemsep]
${exp.responsibilities
  .map((resp) => `\\item ${escapeLatex(resp.replace(/•\s*/, ""))}`)
  .join("\n")}
\\end{itemize}
`
  )
  .join("\n")}

% Education
\\textbf{EDUCATION}\\\\
\\rule{\\textwidth}{0.5pt}\\\\
${education
  .map(
    (edu) => `
\\textbf{${escapeLatex(edu.institution)}} \\hfill ${
      edu.endYear ? `${edu.startYear} -- ${edu.endYear}` : edu.startYear
    }\\\\
${escapeLatex(edu.degree)}${
      edu.field ? `, ${escapeLatex(edu.field)}` : ""
    } | Grade: ${escapeLatex(edu.grade)}\\\\
${escapeLatex(edu.location)}\\\\
`
  )
  .join("\n")}

% Projects
\\textbf{PROJECTS}\\\\
\\rule{\\textwidth}{0.5pt}\\\\
${projects
  .map(
    (project) => `
\\textbf{${escapeLatex(project.title)}}\\\\
${escapeLatex(project.description)}\\\\
Technologies: ${project.tech.map(escapeLatex).join(", ")}\\\\
`
  )
  .join("\n")}

% Technical Skills
\\textbf{TECHNICAL SKILLS}\\\\
\\rule{\\textwidth}{0.5pt}\\\\
${Object.entries(techSkills)
  .map(
    ([category, skills]) => `
\\textbf{${escapeLatex(category)}:} ${skills.map(escapeLatex).join(", ")}\\\\
`
  )
  .join("\n")}

\\end{document}
`;

  return latex.trim();
}
