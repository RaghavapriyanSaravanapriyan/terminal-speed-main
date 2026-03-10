import React from "react";
import { useTypewriter } from "../hooks/useTypewriter";
import { SmoothScroll } from "../components/SmoothScroll";

const Index = () => {
  const bio = "CS Undergrad | VIT Vellore | Competitive Programmer | AI/ML enthusiast. Building things that load fast and scale intellectually.";
  const typedBio = useTypewriter(bio, 30, 800);

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-none animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Raghavapriyan<br />
            Saravanapriyan
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl font-medium leading-relaxed min-h-[4rem]">
              {typedBio}<span className="cursor-blink ml-1 text-primary">█</span>
            </p>
          </div>
        </section>

        {/* Links */}
        <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-24 border-t border-border/50">
          <p className="text-muted-foreground text-xs font-bold tracking-widest mb-8 uppercase opacity-50">// LINKS</p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16 text-lg sm:text-xl font-bold">
            <a
              href="https://github.com/RaghavapriyanSaravanapriyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground underline underline-offset-8 transition-all hover:scale-105"
            >
              [GitHub]
            </a>
            <a
              href="https://linkedin.com/in/raghavapriyan-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground underline underline-offset-8 transition-all hover:scale-105"
            >
              [LinkedIn]
            </a>
            <a
              href="mailto:raghavapriyan@example.com"
              className="text-muted-foreground hover:text-foreground underline underline-offset-8 transition-all hover:scale-105"
            >
              [Email]
            </a>
          </div>
        </section>

        {/* GitHub Contributions */}
        <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-24 border-t border-border/50">
          <p className="text-muted-foreground text-xs font-bold tracking-widest mb-8 uppercase opacity-50">// CONTRIBUTIONS</p>
          <div className="overflow-x-auto flex justify-center grayscale hover:grayscale-0 transition-all duration-700">
            <img
              src="https://ghchart.rshah.org/ffffff/RaghavapriyanSaravanapriyan"
              alt="GitHub Contributions"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </section>

        {/* Projects */}
        <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-24 border-t border-border/50">
          <p className="text-muted-foreground text-xs font-bold tracking-widest mb-12 uppercase opacity-50">// PROJECTS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            <div className="group">
              <a
                href="https://github.com/RaghavapriyanSaravanapriyan/CLI_Student_management_system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl font-bold hover:text-muted-foreground transition-colors inline-block mb-3"
              >
                CLI Student Management System
              </a>
              <p className="text-muted-foreground text-base sm:text-lg mb-4">Command-line student management system built for efficiency.</p>
              <p className="text-muted-foreground text-sm font-mono tracking-widest uppercase opacity-70">&gt; Python</p>
            </div>
            <div className="group">
              <a
                href="https://github.com/RaghavapriyanSaravanapriyan/Predicting-future-iPhone-Pro-Max-prices-using-ML"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl font-bold hover:text-muted-foreground transition-colors inline-block mb-3"
              >
                iPhone Price Predictor
              </a>
              <p className="text-muted-foreground text-base sm:text-lg mb-4">ML model to predict iPhone prices using linear regression analytics.</p>
              <p className="text-muted-foreground text-sm font-mono tracking-widest uppercase opacity-70">&gt; Python, scikit-learn</p>
            </div>
            <div className="group">
              <a
                href="https://github.com/RaghavapriyanSaravanapriyan/AutoWifi-VIT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl font-bold hover:text-muted-foreground transition-colors inline-block mb-3"
              >
                AutoWifi-VIT
              </a>
              <p className="text-muted-foreground text-base sm:text-lg mb-4">Automated authentication script for institutional WiFi networks.</p>
              <p className="text-muted-foreground text-sm font-mono tracking-widest uppercase opacity-70">&gt; Python</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-24 border-t border-border/50">
          <p className="text-muted-foreground text-xs font-bold tracking-widest mb-12 uppercase opacity-50">// SKILLS</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16">
            <div>
              <p className="text-2xl font-bold mb-6">Languages</p>
              <p className="text-muted-foreground text-lg font-mono leading-loose">Python, C, C++, MATLAB</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-6">Domains</p>
              <p className="text-muted-foreground text-lg font-mono leading-loose">Competitive Programming, AI/ML, Prompt Engineering</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-6">Tools</p>
              <p className="text-muted-foreground text-lg font-mono leading-loose">scikit-learn, Git, Linux</p>
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-24 border-t border-border/50">
          <p className="text-muted-foreground text-xs font-bold tracking-widest mb-12 uppercase opacity-50">// EDUCATION</p>
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div>
                <p className="text-3xl sm:text-4xl font-bold mb-2">B.Tech Computer Science</p>
                <p className="text-xl text-muted-foreground">Vellore Institute of Technology, Vellore</p>
              </div>
              <div className="text-right md:text-right">
                <p className="text-xl font-bold">2025 — 2029</p>
                <p className="text-lg text-muted-foreground font-mono">CGPA: 9.1</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div>
                <p className="text-3xl sm:text-4xl font-bold mb-2">High School</p>
                <p className="text-xl text-muted-foreground">The PSBB Millennium School, OMR</p>
              </div>
              <div className="text-right md:text-right">
                <p className="text-xl font-bold">2021 — 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 sm:px-8 md:px-16 lg:px-32 py-32 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-lg sm:text-xl italic mb-8 opacity-60">
            "Building things that load fast and scale intellectually."
          </p>
          <div className="flex flex-col items-center gap-4">
            <p className="text-muted-foreground text-sm font-mono tracking-widest uppercase opacity-40">
              Raghavapriyan Saravanapriyan &copy; 2026
            </p>
            <p className="text-muted-foreground text-xs font-mono opacity-30">
              Last updated: March 2026
            </p>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
};

export default Index;

