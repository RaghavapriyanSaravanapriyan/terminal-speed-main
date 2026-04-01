# Terminal Speed - Developer Portfolio

## Mission: Built for Speed
Terminal Speed is a high-performance, minimal developer portfolio designed for the modern engineer. In a world of bloated, over-engineered personal sites, this project focuses on what truly matters: **raw speed**, **clean code**, and **distraction-free content**.

## Purpose
The purpose of this portfolio is to:
- **Demonstrate Technical Depth**: Showcasing real-world projects, certifications, and academic achievements without unnecessary fluff.
- **Optimize for Performance**: Leveraging Vite, React, and Tailwind CSS to ensure near-instant load times and a developer-first UX.
- **Build in Public**: Serving as a living laboratory for testing new patterns in agentic coding, automation, and AI-driven development.

## Tech Stack
- **Core**: Vite, React, TypeScript
- **Styling**: Tailwind CSS (for liquid glass aesthetics and custom micro-animations)
- **Content**: Markdown-driven blog system with **automated metadata generation** (Node.js).
- **Integrations**: 
  - **GitHub Contributions API**: Automated daily sync via GitHub Actions.
  - **LinkedIn Data**: Automated sync for certifications and recent posts using Python scripts.

## Future Plans
- [x] **Automated CI/CD Blog Pipeline**: Direct markdown-to-meta sync via `predev`/`prebuild` hooks and GitHub Actions.
- [ ] **Interactive Terminal Mode**: A full CLI-style UI toggle for the ultimate developer experience.
- [ ] **Dynamic Skill Visualization**: Automatically map skill proficiency based on repository analysis and certification logs.
- [ ] **AI Persona Integration**: Allowing visitors to interact with a RAG-powered version of my resume/projects.

---

## Development

All build and dev steps automatically trigger the blog metadata generation to ensure content stays synced.

```sh
# Install dependencies
npm install

# Start development server (includes meta-sync)
npm run dev

# Build for production (includes meta-sync)
npm run build
```

