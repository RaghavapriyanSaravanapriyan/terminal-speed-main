import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

interface PostMeta {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    file: string;
}

export const BlogSection = () => {
    const [posts, setPosts] = useState<PostMeta[]>([]);
    const [selectedPost, setSelectedPost] = useState<string | null>(null);
    const [postContent, setPostContent] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/posts-meta.json')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch posts meta:', err);
                setLoading(false);
            });
    }, []);

    const fetchPostContent = async (file: string) => {
        try {
            const res = await fetch(file);
            const text = await res.text();
            const html = await marked.parse(text);
            setPostContent(html);
        } catch (err) {
            console.error('Failed to fetch post content:', err);
            setPostContent('<p>Error loading post content.</p>');
        }
    };

    const handlePostClick = (post: PostMeta) => {
        setSelectedPost(post.id);
        fetchPostContent(post.file);
    };

    if (loading) {
        return (
            <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 border-t border-border/50">
                <p className="text-white text-lg font-bold tracking-widest uppercase opacity-50 animate-pulse">// LOADING POSTS...</p>
            </section>
        );
    }

    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 border-t border-border/50">
            <div className="flex items-baseline justify-between mb-10">
                <p className="text-white text-lg sm:text-xl font-bold tracking-widest uppercase opacity-100">// LOG_POSTS</p>
                {selectedPost && (
                    <button
                        onClick={() => setSelectedPost(null)}
                        className="text-[10px] font-bold tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity"
                    >
                        ← Back to Feed
                    </button>
                )}
            </div>

            {!selectedPost ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            onClick={() => handlePostClick(post)}
                            className="group cursor-pointer block"
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
                                    <span>Read More</span>
                                    <span className="animate-pulse">→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div
                        className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none 
              prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary hover:prose-a:opacity-80
              prose-strong:text-white prose-code:text-primary prose-code:bg-white/5 prose-code:px-1 prose-code:rounded"
                        dangerouslySetInnerHTML={{ __html: postContent }}
                    />
                </div>
            )}
        </section>
    );
};
