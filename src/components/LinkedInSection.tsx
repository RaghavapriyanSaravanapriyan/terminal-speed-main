import React from 'react';
import syncData from '../content/sync-data.json';

export const LinkedInSection = () => {
    const posts = syncData.linkedin_posts;

    return (
        <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-24 border-t border-border/50">
            <div className="flex items-baseline justify-between mb-12">
                <p className="text-muted-foreground text-xs font-bold tracking-widest uppercase opacity-50">// LINKEDIN POSTS</p>
                <a
                    href="https://www.linkedin.com/in/raghavapriyan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity"
                >
                    View Profile →
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
                {posts.map((post, index) => (
                    <a
                        key={index}
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                    >
                        <div className="flex flex-col h-full bg-muted/30 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:translate-y-[-4px]">
                            <span className="text-muted-foreground text-sm font-mono opacity-60 mb-4">{post.date}</span>
                            <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors mb-4">
                                {post.title}
                            </h3>
                            <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">
                                {post.excerpt}
                            </p>
                            <div className="mt-auto pt-8 flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
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
