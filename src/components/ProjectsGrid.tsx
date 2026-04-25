'use client';
import { useState } from 'react';
import Link from 'next/link';

const projectsData = [
    {
        id: 1,
        category: 'architecture',
        title: 'The Monolith Pavilion',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU_mLFt1y92ZDegzTjsjVLlFqyGTjOgzmaU1ERjBhntiMh66sgvVgkpc03jLYUWp4sXcDtUSoMTO2nQJoDF06UzJ-Oxv0u1-M6de_nD-kpzga1JJ42c9yUnyCUyUxDNRQvAu-VME3vGltmKDtkLSN6mKqF8t9DzuNJrw2gYAvL4F2vnZ8iRmCROfB312-Zf625ljvcTz-mU5XIj-gOFvXaZkNC1vpllCAp5xvGOwEC6ldn8rJC4B0fpA1B8-D0uunexqU9cglZAtqr',
        slug: '/project-detail'
    },
    {
        id: 2,
        category: 'interiors',
        title: 'Obsidian Residence',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwct38qlQN3LRuFGh65SHabjBsfqQDUr9bhhg2ZZaCf8ZpZhEAcDFfUYWFVvswA3cK5vQOgXpZ9ioX4PoIGt8xqJIYbY1e7gxqaViedTSizG4TsYCzc9bBX_edGYX98xDhzL8NoyoESbU0JhfDGczfuot7ureAId9jhVD_8cwqFN0YlAfTFIZOfqbe8tAETJUYY7T_E6OMYhzhnzpQvUsnzYNl6WAvxcmli9zP_7FNFCaq1LhKrGrwfUzE_Zf654AUxBydtxKvpC98',
        slug: '/project-detail'
    },
    {
        id: 3,
        category: 'architecture',
        title: 'Axis One',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD34N2RqJBfgtKfKFmooU-DL0vLDLvVkZYqECpqEZOpv4QgbQZn_Xb_ZGEeLu0xtYYT9F9bQx9CXGfsNUbI9uS-uftwoAVfCJDrqjmHAO50-q3CgqGce9RKJkhY-1-Tlv0gf9FWILUq-TrKPwPKLbAJMUd7meXMUNJLg97XgWmGorHSwqWGzEoyW9vXTnSjpuqa7Ln8_gWSBac5ptPzn_qJfQXbLUAlelk_bmRYqxVvyWrjB4uJSqBMj-R2q6AtOdAhd-3O45v_12fo',
        slug: '/project-detail'
    },
    {
        id: 4,
        category: 'product',
        title: 'Structural Chair',
        image: null,
        slug: '/project-detail'
    }
];

export default function ProjectsGrid() {
    const [filter, setFilter] = useState('all');

    const filteredProjects = projectsData.filter(project => filter === 'all' || project.category === filter);

    return (
        <>
            <div className="filters">
                <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                <button className={`filter-btn ${filter === 'architecture' ? 'active' : ''}`} onClick={() => setFilter('architecture')}>Architecture</button>
                <button className={`filter-btn ${filter === 'interiors' ? 'active' : ''}`} onClick={() => setFilter('interiors')}>Interiors</button>
                <button className={`filter-btn ${filter === 'product' ? 'active' : ''}`} onClick={() => setFilter('product')}>Product</button>
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <div key={project.id} className="project-card">
                        <Link href={project.slug}>
                            {project.image ? (
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                            ) : (
                                <div className="project-image" style={{ background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span className="label-caps" style={{ color: '#9ca3af' }}>{project.title}</span>
                                </div>
                            )}
                            <span className="label-caps" style={{ textTransform: 'capitalize' }}>{project.category} / 0{index + 1}</span>
                            <h3 style={{ fontSize: '24px', marginTop: '16px' }}>{project.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
