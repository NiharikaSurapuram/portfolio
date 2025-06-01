# Niharika Surapuram - Portfolio Website

A minimal, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Clean, Minimal Design**: Professional layout with a focus on content
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Smooth Animations**: Subtle transitions and hover effects
- **Accessible**: Following web accessibility best practices

## Sections

- **Hero**: Introduction with name, title, and call-to-action buttons
- **About**: Personal description and technical skills
- **Experience**: Work history with timeline layout
- **Projects**: Showcase of key projects with tech stacks
- **Contact**: Social links and contact information

## Customization

To personalize this portfolio for your own use:

### 1. Update Personal Information

Edit `app/page.tsx` and replace the following:

- **Name**: Change "Niharika Surapuram" to your name
- **Title**: Update "Software Engineer & Developer" to your role
- **Description**: Modify the hero description and about section
- **Location**: Update the location in the about section
- **Email**: Replace "<niharika@example.com>" with your email
- **Social Links**: Update LinkedIn and GitHub URLs

### 2. Update Experience Section

In the Experience section, replace the placeholder jobs with your actual work experience:

- Company names
- Job titles
- Employment dates
- Job descriptions and achievements

### 3. Update Projects Section

Replace the example projects with your own:

- Project titles and descriptions
- Technology stacks used
- GitHub repository links
- Live demo links

### 4. Update Skills

Modify the technical skills array in the About section to reflect your expertise.

### 5. Update Metadata

In `app/layout.tsx`, update the metadata:

- Title
- Description
- Keywords
- Author information

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
pnpm build
pnpm start
```

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Deployment

This portfolio can be easily deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

For Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## Color Scheme

The portfolio uses a minimal color palette:

- **Primary**: Gray-900 (#111827)
- **Secondary**: Gray-600 (#4b5563)
- **Background**: White (#ffffff)
- **Accent**: Gray-50 (#f9fafb)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions about this portfolio template, feel free to reach out!
