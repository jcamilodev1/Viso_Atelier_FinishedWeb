'use client';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLElement>(null);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleLoadedMetadata = () => {
            video.pause();
            setDuration(video.duration);
        };

        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        if (video.readyState >= 1) {
            video.pause();
            setDuration(video.duration);
        }

        return () => video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    }, []);

    useEffect(() => {
        if (duration === 0) return;

        const video = videoRef.current;
        const container = containerRef.current;
        if (!video || !container) return;

        let targetTime = 0;
        let rafId: number;

        const doSeek = () => {
            if (Math.abs(video.currentTime - targetTime) > 0.001) {
                video.currentTime = targetTime;
            }
        };

        // After each seek completes, seek again if the scroll target has moved further
        const handleSeeked = () => doSeek();

        const handleScroll = () => {
            const heroTop = container.offsetTop;
            const scrolled = window.scrollY - heroTop;
            const maxScroll = container.offsetHeight - window.innerHeight;
            targetTime = duration * Math.max(0, Math.min(1, scrolled / maxScroll));

            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(doSeek);
        };

        video.addEventListener('seeked', handleSeeked);
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            video.removeEventListener('seeked', handleSeeked);
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(rafId);
        };
    }, [duration]);

    return (
        <section
            id="hero"
            ref={containerRef}
            style={{ height: '250vh', width: '100%', position: 'relative', background: '#000', overflow: 'visible' }}
        >
            <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden' }}>
                <div
                    className="hero-overlay"
                    style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)', zIndex: 1 }}
                />
                <video
                    ref={videoRef}
                    src="/assets/videos/Sketch_to_3D_scrub.mp4"
                    muted
                    playsInline
                    preload="auto"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                />
            </div>
        </section>
    );
}
