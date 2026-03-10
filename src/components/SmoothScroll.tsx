import React, { useEffect, useRef } from 'react';

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const currentScroll = useRef(0);
    const targetScroll = useRef(0);
    const isScrolling = useRef(false);

    useEffect(() => {
        const content = scrollRef.current;
        if (!content) return;

        const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor;
        };

        const update = () => {
            targetScroll.current = window.scrollY;

            const diff = Math.abs(targetScroll.current - currentScroll.current);

            if (diff > 0.1) {
                currentScroll.current = lerp(currentScroll.current, targetScroll.current, 0.05);
                content.style.transform = `translate3d(0, -${currentScroll.current}px, 0)`;
                requestAnimationFrame(update);
            } else {
                isScrolling.current = false;
            }
        };

        const handleScroll = () => {
            if (!isScrolling.current) {
                isScrolling.current = true;
                requestAnimationFrame(update);
            }
        };

        // Set body height to match content height to allow native scrollbar to work correctly
        const resizeObserver = new ResizeObserver(() => {
            document.body.style.height = `${content.scrollHeight}px`;
        });
        resizeObserver.observe(content);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.height = '';
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <>
            <div
                ref={scrollRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    willChange: 'transform'
                }}
            >
                {children}
            </div>
        </>
    );
};
