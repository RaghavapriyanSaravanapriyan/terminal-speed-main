import React, { useEffect, useState } from "react";
import { useTypewriter } from "../hooks/useTypewriter";
import { SmoothScroll } from "../components/SmoothScroll";
import { BlogSection } from "../components/BlogSection";
import syncData from "../content/sync-data.json";

const Index = () => {
  const [contributionCount, setContributionCount] = useState<number | null>(syncData.github.lastYear || null);
  const terminalText = "I build epic stuff.";
  const typedTerminalText = useTypewriter(terminalText, 50, 2000);
  const [aboutMe, setAboutMe] = useState<string>("");

  useEffect(() => {
    fetch("https://github-contributions-api.deno.dev/RaghavapriyanSaravanapriyan.json")
      .then(res => res.json())
      .then(data => {
        if (data && data.total && data.total.lastYear) {
          setContributionCount(data.total.lastYear);
        }
      })
      .catch(err => console.error("Failed to fetch GitHub contributions:", err));

    fetch("/about-me.txt")
      .then(res => res.text())
      .then(text => setAboutMe(text))
      .catch(err => console.error("Failed to fetch about-me.txt:", err));
  }, []);

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
        {/* Dynamic Hero Section based on Reference Image */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden">
          <div className="relative z-10 w-full flex flex-col items-center">
            <p className="text-white text-lg sm:text-xl font-bold tracking-[0.6em] mb-10 uppercase opacity-100 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
              // IDENTITY
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6 leading-[0.85] text-white animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 fill-mode-both">
              Raghavapriyan<br />
              Saravanapriyan
            </h1>

            <div className="flex flex-col items-center gap-12 mt-4">
              <p className="text-white text-[8px] sm:text-[10px] font-bold tracking-[0.4em] uppercase opacity-100 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-both">
                CS UNDERGRAD <span className="mx-2 opacity-30">|</span> VIT VELLORE <span className="mx-2 opacity-30">|</span> AI/ML
              </p>

              <div className="mt-12 space-y-4">
                <p className="text-[#fef9c3] text-[8px] sm:text-[10px] font-mono font-bold tracking-[0.6em] uppercase opacity-100 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-both">
                  FOR THE LOVE OF THE GAME
                </p>
                <p className="text-lg sm:text-xl font-mono tracking-tight text-[#fef9c3] opacity-90">
                  {typedTerminalText}<span className="cursor-blink ml-1 text-primary">█</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Identity & Links Section - Side by Side */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-24 border-t border-border/50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Links Vertical */}
            <div className="flex flex-col items-start gap-6 order-2 md:order-1">
              <p className="text-white text-lg sm:text-xl font-bold tracking-widest mb-10 uppercase opacity-100">// CONNECT</p>
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
                  href="https://www.linkedin.com/in/raghavapriyan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground hover:translate-x-4 transition-all duration-500"
                >
                  LINKEDIN ↗
                </a>
                <a
                  href="mailto:s.raghavapriyan@gmail.com"
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

        {/* About Me Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-24 border-t border-border/50">
          <div className="max-w-4xl">
            <p className="text-white text-lg sm:text-xl font-bold tracking-widest mb-10 uppercase opacity-100">// ABOUT_ME</p>
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#fef9c3] leading-tight">
                {aboutMe || "Loading description..."}
              </p>
            </div>
          </div>
        </section>

        {/* GitHub Contributions */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 border-t border-border/50">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-6">
            <p className="text-white text-lg sm:text-xl font-bold tracking-widest uppercase opacity-100">// CONTRIBUTIONS</p>
            {contributionCount !== null && (
              <p className="text-lg font-bold tracking-tight text-white/90">
                {contributionCount.toLocaleString()} <span className="text-muted-foreground font-normal text-xs uppercase tracking-widest ml-2">Contributions in the last year</span>
              </p>
            )}
          </div>
          <div className="overflow-x-auto flex justify-center transition-all duration-1000 hover:scale-[1.02] transform transition-transform p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <img
              src="https://github-contributions-api.deno.dev/RaghavapriyanSaravanapriyan.svg?no-legend=true&no-total=true"
              alt="GitHub Contributions"
              className="max-w-full h-auto filter drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              loading="lazy"
            />
          </div>
        </section>

        {/* Blog Posts Sync */}
        <BlogSection />

        {/* Projects */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 border-t border-border/50">
          <p className="text-white text-lg sm:text-xl font-bold tracking-widest mb-10 uppercase opacity-100">// PROJECTS</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
            {[
              { title: "Smart Doorcam MDP", desc: "Smart authenticated doorcam system with real-time protocol and interactive dashboard.", tech: "Python, OpenCV, HTML", url: "https://github.com/RaghavapriyanSaravanapriyan/Smart-doorcam-MDP" },
              { title: "CLI Management", desc: "Efficient student management system via terminal interface.", tech: "Python", url: "https://github.com/RaghavapriyanSaravanapriyan/CLI_Student_management_system" },
              { title: "iPhone ML", desc: "Linear regression model for mobile device price forecasting.", tech: "Python, Scikit-learn", url: "https://github.com/RaghavapriyanSaravanapriyan/Predicting-future-iPhone-Pro-Max-prices-using-ML" },
              { title: "AutoWifi-VIT", desc: "Automated authentication script for campus WiFi networks.", tech: "Python", url: "https://github.com/RaghavapriyanSaravanapriyan/AutoWifi-VIT" }
            ].map((project, idx) => (
              <div key={idx} className="group border border-white/10 glass-card p-8 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-white group-hover:text-primary transition-colors inline-block mb-3"
                >
                  {project.title}
                </a>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{project.desc}</p>
                <p className="text-xs font-mono tracking-widest uppercase opacity-40">{project.tech}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Updated Certifications Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 border-t border-border/50">
          <p className="text-white text-lg sm:text-xl font-bold tracking-widest mb-10 uppercase opacity-100">// CERTIFICATIONS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
            {(syncData.certifications || []).map((cert, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xl font-bold tracking-tight text-white">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.issuer} — <span className="font-mono">{cert.date}</span></p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 bg-white/5 backdrop-blur-sm text-xs font-mono rounded-full border border-white/10">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Test Scores Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 border-t border-border/50">
          <p className="text-white text-lg sm:text-xl font-bold tracking-widest mb-10 uppercase opacity-100">// TEST_SCORES</p>
          <div className="space-y-10 font-mono">
            <div>
              <p className="text-lg text-white mb-2">CBSE_12TH: <span className="text-primary">478/500 (95.6%)</span> — Rank 2 Biology Stream</p>
              <p className="text-white/70 text-xs">&gt; Physics, Chemistry, Biology, Mathematics</p>
            </div>
            <div>
              <p className="text-lg text-white mb-2">CBSE_10TH: <span className="text-primary">486/500 (97.2%)</span> — Perfect in Social Science</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 border-t border-border/50">
          <p className="text-white text-lg sm:text-xl font-bold tracking-widest mb-10 uppercase opacity-100">// SKILLS</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-14">
            <div>
              <p className="text-xl font-bold mb-5 text-white text-opacity-90">Languages</p>
              <p className="text-muted-foreground text-base font-mono leading-loose">Python, C, C++, MATLAB</p>
            </div>
            <div>
              <p className="text-xl font-bold mb-5 text-white text-opacity-90">Domains</p>
              <p className="text-muted-foreground text-base font-mono leading-loose">AI/ML, Data Science, Prompt Engineering</p>
            </div>
            <div>
              <p className="text-xl font-bold mb-5 text-white text-opacity-90">Tools</p>
              <p className="text-muted-foreground text-base font-mono leading-loose">Scikit-learn, Git, Linux, Copilot</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 border-t border-border/50">
          <p className="text-white text-lg sm:text-xl font-bold tracking-widest mb-10 uppercase opacity-100">// EDUCATION</p>
          <div className="space-y-12">
            <div>
              <p className="text-2xl sm:text-3xl font-bold mb-2 tracking-tighter text-white">B.TECH COMPUTER SCIENCE CORE</p>
              <p className="text-lg text-muted-foreground uppercase tracking-widest opacity-60">Vellore Institute of Technology</p>
              <p className="text-base text-primary font-mono mt-3">2025 — 2029 | CGPA: 9.1</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold mb-2 tracking-tighter text-white">HIGH SCHOOL</p>
              <p className="text-lg text-muted-foreground uppercase tracking-widest opacity-60">The PSBB Millennium School, OMR</p>
              <p className="text-base font-mono mt-3 opacity-70">2021 — 2025 | Biology Stream, 12th Grade CBSE</p>
              <p className="text-white/60 text-[10px] mt-2 italic text-left-corner">
                &gt; sat in last bench left corner.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 sm:px-8 md:px-16 lg:px-32 py-32 border-t border-border/50 text-center">
          <p className="text-white/70 text-sm font-mono tracking-widest uppercase">
            Raghavapriyan Saravanapriyan &copy; 2026 / Built for speed
          </p>
        </footer>
      </main>
    </SmoothScroll>
  );
};

export default Index;



