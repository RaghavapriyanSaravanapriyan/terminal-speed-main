import React, { useEffect, useState } from "react";
import { useTypewriter } from "../hooks/useTypewriter";
import { SmoothScroll } from "../components/SmoothScroll";
import { LinkedInSection } from "../components/LinkedInSection";
import syncData from "../content/sync-data.json";

const Index = () => {
  const [contributionCount, setContributionCount] = useState<number | null>(syncData.github.lastYear || null);
  const terminalText = "I build epic stuff.";
  const typedTerminalText = useTypewriter(terminalText, 50, 2000);

  useEffect(() => {
    fetch("https://github-contributions-api.deno.dev/RaghavapriyanSaravanapriyan.json")
      .then(res => res.json())
      .then(data => {
        if (data && data.total && data.total.lastYear) {
          setContributionCount(data.total.lastYear);
        }
      })
      .catch(err => console.error("Failed to fetch GitHub contributions:", err));
  }, []);

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
        {/* Dynamic Hero Section based on Reference Image */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <p className="text-muted-foreground text-[10px] sm:text-xs font-bold tracking-[0.3em] mb-12 uppercase opacity-40 animate-in fade-in duration-1000">
            // IDENTITY
          </p>

          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.8] animate-in fade-in slide-in-from-bottom-12 duration-1000">
            Raghavapriyan<br />
            Saravanapriyan
          </h1>

          <div className="flex flex-col items-center gap-12 mt-4 animate-in fade-in duration-1000 delay-300">
            <p className="text-muted-foreground text-[10px] sm:text-sm font-bold tracking-[0.4em] uppercase opacity-70">
              CS UNDERGRAD <span className="mx-2 opacity-30">|</span> VIT VELLORE <span className="mx-2 opacity-30">|</span> AI/ML
            </p>

            <div className="mt-8 space-y-4">
              <p className="text-muted-foreground text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase opacity-30">
                FOR THE LOVE OF THE GAME
              </p>
              <p className="text-lg sm:text-xl font-mono tracking-tight text-foreground/90">
                {typedTerminalText}<span className="cursor-blink ml-1 text-primary">█</span>
              </p>
            </div>
          </div>
        </section>

        {/* Identity & Links Section - Side by Side */}
        <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-32 border-t border-border/50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
            {/* Links Vertical */}
            <div className="flex flex-col items-start gap-8 order-2 md:order-1">
              <p className="text-muted-foreground text-xs font-bold tracking-widest mb-4 uppercase opacity-50">// CONNECT</p>
              <div className="flex flex-col gap-6 text-2xl sm:text-4xl font-bold tracking-tighter transition-all">
                <a
                  href="https://github.com/RaghavapriyanSaravanapriyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground hover:translate-x-4 transition-all duration-500"
                >
                  GITHUB ↗
                </a>
                <a
                  href="https://linkedin.com/in/raghavapriyan-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground hover:translate-x-4 transition-all duration-500"
                >
                  LINKEDIN ↗
                </a>
                <a
                  href="mailto:raghavapriyan@example.com"
                  className="text-muted-foreground hover:text-foreground hover:translate-x-4 transition-all duration-500"
                >
                  EMAIL ↗
                </a>
              </div>
            </div>

            {/* Profile Image Beside Links */}
            <div className="relative group animate-in zoom-in duration-1000 order-1 md:order-2">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src="/profile.jpeg"
                alt="Raghavapriyan Saravanapriyan"
                className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border border-border/50 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl scale-95 group-hover:scale-100"
              />
            </div>
          </div>
        </section>

        {/* GitHub Contributions */}
        <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-24 border-t border-border/50">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-8">
            <p className="text-muted-foreground text-xs font-bold tracking-widest uppercase opacity-50">// CONTRIBUTIONS</p>
            {contributionCount !== null && (
              <p className="text-xl font-bold tracking-tight">
                {contributionCount.toLocaleString()} <span className="text-muted-foreground font-normal text-sm uppercase tracking-widest ml-2">Contributions in the last year</span>
              </p>
            )}
          </div>
          <div className="overflow-x-auto flex justify-center grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-[1.02] transform transition-transform">
            <img
              src="https://github-contributions-api.deno.dev/RaghavapriyanSaravanapriyan.svg?no-legend=true&no-total=true"
              alt="GitHub Contributions"
              className="max-w-full h-auto filter drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              loading="lazy"
            />
          </div>
        </section>

        {/* LinkedIn Posts Sync */}
        <LinkedInSection />

        {/* Projects */}
        <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-24 border-t border-border/50">
          <p className="text-muted-foreground text-xs font-bold tracking-widest mb-12 uppercase opacity-50">// PROJECTS</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="group border border-border/50 p-8 rounded-2xl hover:bg-muted/30 transition-all duration-500">
              <a
                href="https://github.com/RaghavapriyanSaravanapriyan/CLI_Student_management_system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold hover:text-primary transition-colors inline-block mb-3"
              >
                CLI Management
              </a>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">Efficient student management system via terminal interface.</p>
              <p className="text-xs font-mono tracking-widest uppercase opacity-40">Python</p>
            </div>
            <div className="group border border-border/50 p-8 rounded-2xl hover:bg-muted/30 transition-all duration-500">
              <a
                href="https://github.com/RaghavapriyanSaravanapriyan/Predicting-future-iPhone-Pro-Max-prices-using-ML"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold hover:text-primary transition-colors inline-block mb-3"
              >
                iPhone ML
              </a>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">Linear regression model for mobile device price forecasting.</p>
              <p className="text-xs font-mono tracking-widest uppercase opacity-40">Python, Scikit-learn</p>
            </div>
            <div className="group border border-border/50 p-8 rounded-2xl hover:bg-muted/30 transition-all duration-500">
              <a
                href="https://github.com/RaghavapriyanSaravanapriyan/AutoWifi-VIT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold hover:text-primary transition-colors inline-block mb-3"
              >
                AutoWifi-VIT
              </a>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">Automated authentication script for campus WiFi networks.</p>
              <p className="text-xs font-mono tracking-widest uppercase opacity-40">Python</p>
            </div>
          </div>
        </section>

        {/* Updated Certifications Section */}
        <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-24 border-t border-border/50">
          <p className="text-muted-foreground text-xs font-bold tracking-widest mb-12 uppercase opacity-50">// CERTIFICATIONS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight">Generative AI: Introduction and Applications</h3>
              <p className="text-muted-foreground text-sm">IBM — <span className="font-mono">Feb 2026</span></p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-muted text-xs font-mono rounded-full">Artificial Intelligence</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight">Introduction to Artificial Intelligence (AI)</h3>
              <p className="text-muted-foreground text-sm">IBM — <span className="font-mono">Feb 2026</span></p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-muted text-xs font-mono rounded-full">Artificial Intelligence</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight">C for Everyone: Programming Fundamentals</h3>
              <p className="text-muted-foreground text-sm">University of California Santa Cruz — <span className="font-mono">Oct 2025</span></p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-muted text-xs font-mono rounded-full">C Programming</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight">Programming with Generative AI</h3>
              <p className="text-muted-foreground text-sm">IIT Guwahati — <span className="font-mono">Sep 2025</span></p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-muted text-xs font-mono rounded-full">Prompt Engineering</span>
                <span className="px-3 py-1 bg-muted text-xs font-mono rounded-full">GitHub Copilot</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight">The Complete Python Bootcamp From Zero to Hero</h3>
              <p className="text-muted-foreground text-sm">Pierian Training — <span className="font-mono">Sep 2025</span></p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-muted text-xs font-mono rounded-full">Python</span>
              </div>
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
              <p className="text-muted-foreground text-lg font-mono leading-loose">AI/ML, Data Science, Prompt Engineering</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-6">Tools</p>
              <p className="text-muted-foreground text-lg font-mono leading-loose">Scikit-learn, Git, Linux, Copilot</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-24 border-t border-border/50">
          <p className="text-muted-foreground text-xs font-bold tracking-widest mb-12 uppercase opacity-50">// EDUCATION</p>
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div>
                <p className="text-3xl sm:text-4xl font-bold mb-2 tracking-tighter">B.TECH COMPUTER SCIENCE</p>
                <p className="text-xl text-muted-foreground uppercase tracking-widest opacity-60">Vellore Institute of Technology</p>
              </div>
              <div className="text-right md:text-right">
                <p className="text-xl font-bold">2025 — 2029</p>
                <p className="text-lg text-muted-foreground font-mono opacity-50">GPA: 9.1</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 sm:px-8 md:px-16 lg:px-32 py-32 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm font-mono tracking-widest uppercase opacity-40">
            Raghavapriyan Saravanapriyan &copy; 2026 / Built for speed
          </p>
        </footer>
      </main>
    </SmoothScroll>
  );
};

export default Index;



