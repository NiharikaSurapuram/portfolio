import { personalInfo } from "@/lib/data";

export function PersonStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: "Cloud Analyst",
    worksFor: {
      "@type": "Organization",
      name: "Oracle",
      url: "https://oracle.com",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "PES University",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "India",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "India",
    },
    email: personalInfo.email,
    url: "https://niharika.vercel.app",
    sameAs: [personalInfo.linkedin, personalInfo.github],
    knowsAbout: [
      "Oracle Cloud Infrastructure",
      "React.js",
      "Next.js",
      "TypeScript",
      "Full-Stack Development",
      "Cloud Computing",
      "Software Engineering",
    ],
    description: personalInfo.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${personalInfo.name} - Portfolio`,
    description: "Professional portfolio and blog of a Cloud Analyst at Oracle",
    url: "https://niharika.vercel.app",
    author: {
      "@type": "Person",
      name: personalInfo.name,
    },
    inLanguage: "en-US",
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      "@type": "Person",
      name: personalInfo.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
