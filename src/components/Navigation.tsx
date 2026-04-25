'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        if (pathname !== '/') {
            setScrolled(true);
        } else {
            handleScroll();
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    return (
        <nav id="main-nav" className={scrolled || pathname !== '/' ? 'scrolled' : ''}>
            <div className="nav-brand">
                <Link href="/">Nova Axis</Link>
            </div>
            <div className="nav-links">
                <Link href="/#proyecto">Proyecto</Link>
                <Link href="/#estudio">Estudio</Link>
                <Link href="/#whitelist">Whitelist</Link>
            </div>
            <Link href="/#whitelist" className="nav-cta">Access</Link>
        </nav>
    );
}
