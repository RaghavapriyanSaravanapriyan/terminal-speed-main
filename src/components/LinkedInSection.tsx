import React from 'react';
import syncData from '../content/sync-data.json';

export const LinkedInSection = () => {
    const posts = syncData.linkedin_posts;

    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 border-t border-border/50">
            <div className="flex items-baseline justify-between mb-10">
                <p className="text-white text-lg sm:text-xl font-bold tracking-widest uppercase opacity-100">// LATEST UPDATES</p>
                <a
                    href="https://www.linkedin.com/in/raghavapriyan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity"
                >
                    View Profile →
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
                {posts.map((post, index) => (
                    <a
                        key={index}
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                    >
                        <div className="flex flex-col h-full bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                            <span className="text-muted-foreground text-xs font-mono opacity-60 mb-3">{post.date}</span>
                            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors mb-3">
                                {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                {post.excerpt}
                            </p>
                            <div className="mt-auto pt-6 flex items-center gap-2 text-primary font-bold text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                <span>View on LinkedIn</span>
                                <span className="animate-pulse">→</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};
