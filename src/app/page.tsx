'use client';
import { useState } from 'react';
import Hero from '@/components/Hero';

export default function Home() {
    const [activeRange, setActiveRange] = useState('');

    return (
        <main>
            <Hero />

            {/* Manifesto */}
            <section id="manifesto" className="section-padding">
                <div className="container">
                    <div className="manifesto">
                        <span className="label-caps" style={{ color: 'var(--color-accent)', marginBottom: '24px', display: 'block' }}>Un solo proyecto</span>
                        <h2>
                            Una visión indivisible.<br />
                            Arquitectura concebida<br />
                            como un activo de valor atemporal.
                        </h2>
                        <div className="axis-divider"></div>
                    </div>
                </div>
            </section>

            {/* El Proyecto */}
            <section id="proyecto" className="section-padding" style={{ background: 'var(--color-surface-container-low)' }}>
                <div className="container">
                    <div style={{ marginBottom: '80px' }}>
                        <span className="label-caps" style={{ color: 'var(--color-accent)', display: 'block', marginBottom: '16px' }}>The Project</span>
                        <h1 style={{ fontSize: 'clamp(56px, 10vw, 120px)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>Axis One</h1>
                        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px, 2vw, 26px)', fontStyle: 'italic', color: 'var(--color-on-surface-variant)', marginTop: '28px' }}>
                            El equilibrio entre la forma y el silencio.
                        </p>
                    </div>

                    <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', marginBottom: '80px' }}>
                        <img
                            src="/assets/images/tower_dawn.png"
                            alt="Axis One — Vista general"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    <div className="project-desc-grid">
                        <p style={{ fontSize: '18px', color: 'var(--color-on-surface-variant)', lineHeight: 1.8 }}>
                            Axis One es una obra concebida en la intersección entre arquitectura biofílica y materialidad estructural. Dos torres de hormigón acanalado emergen entre jardines verticales, piscinas serpentinas y un canopy de árboles en cubierta.
                        </p>
                        <p style={{ fontSize: '18px', color: 'var(--color-on-surface-variant)', lineHeight: 1.8 }}>
                            Un activo de naturaleza singular, diseñado para perdurar más allá de las tendencias del mercado. Cada línea estructural responde a un propósito: la creación de un refugio de permanencia en un paisaje urbano en constante mutación.
                        </p>
                    </div>
                </div>
            </section>

            {/* El Activo — dark */}
            <section id="activo" style={{ background: 'var(--color-primary)', color: 'white', padding: 'var(--section-gap) 0' }}>
                <div className="container">
                    <div style={{ marginBottom: '64px' }}>
                        <span className="label-caps" style={{ color: 'var(--color-accent)', display: 'block', marginBottom: '24px' }}>The Asset</span>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 72px)', fontStyle: 'italic' }}>
                            Stone. Concrete. Wood.
                        </h2>
                    </div>

                    <div className="asset-image-grid">
                        <div style={{ overflow: 'hidden' }}>
                            <img src="/assets/images/tower_aerial.png" alt="Axis One aerial" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        </div>
                        <div style={{ display: 'grid', gap: '16px' }}>
                            <div style={{ overflow: 'hidden' }}>
                                <img src="/assets/images/tower_facade.png" alt="Axis One facade" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                            </div>
                            <div style={{ overflow: 'hidden' }}>
                                <img src="/assets/images/tower_night.png" alt="Axis One at night" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                            </div>
                        </div>
                    </div>

                    <div className="features-grid">
                        {[
                            { n: '01', title: 'Sky-Garden Rooftop', desc: 'Cubierta ajardinada con árbol canopy extenso, captación solar y recolección de agua de lluvia integrados.' },
                            { n: '02', title: 'Serpentine Pools', desc: 'Piscinas superiores e inferiores con cascadas, jardines de bromelias y zonas de lounge al aire libre.' },
                            { n: '03', title: 'Grotto Spa', desc: 'Spa subterráneo con piscina bioluminiscente y acceso privado directo a unidades residenciales.' },
                            { n: '04', title: 'Bioclimatic Podium', desc: 'Podio bioclimático con ventilación natural y fachada de hormigón acanalado para control solar pasivo.' },
                            { n: '05', title: 'Botanical Gardens', desc: 'Jardines verticales integrados en todos los niveles con bromelias nativas y cascadas naturales.' },
                            { n: '06', title: 'Solar Integration', desc: 'Captación solar en cubiertas superiores con sistema pasivo de ventilación natural entre torres.' },
                        ].map(f => (
                            <div key={f.n} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
                                <span className="label-caps" style={{ color: 'var(--color-accent)', display: 'block', marginBottom: '16px' }}>{f.n}</span>
                                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', marginBottom: '12px', fontWeight: 400 }}>{f.title}</h4>
                                <p style={{ fontSize: '14px', opacity: 0.5, lineHeight: 1.7 }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Documento Arquitectónico */}
            <section className="section-padding">
                <div className="container">
                    <div className="sketch-grid">
                        <div>
                            <span className="label-caps" style={{ color: 'var(--color-accent)', display: 'block', marginBottom: '24px' }}>Architectural Document</span>
                            <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.1, marginBottom: '32px' }}>
                                Social Areas.<br />Lower Grotto & Spa.
                            </h2>
                            <p style={{ fontSize: '16px', color: 'var(--color-on-surface-variant)', lineHeight: 1.8 }}>
                                El nivel inferior de Axis One integra el acceso principal al grotto, las piscinas serpentinas, zonas de comedor al fresco y el spa de tratamientos. Un ecosistema completo diseñado para la vida en comunidad privada.
                            </p>
                        </div>
                        <div style={{ background: '#f5f3ee', overflow: 'hidden' }}>
                            <img
                                src="/assets/images/floor_plan.png"
                                alt="Floor plan — Social Areas"
                                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '32px', display: 'block' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* El Estudio */}
            <section id="estudio" className="section-padding" style={{ background: 'var(--color-surface-container-low)' }}>
                <div className="container">
                    <span className="label-caps" style={{ color: 'var(--color-accent)', display: 'block', marginBottom: '32px' }}>The Studio</span>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 56px)', maxWidth: '750px', marginBottom: '80px', lineHeight: 1.15 }}>
                        Somos un equipo multidisciplinar dedicado a la creación de espacios que perduran.
                    </h2>

                    <div className="studio-split-grid">
                        <div>
                            <p style={{ fontSize: '18px', color: 'var(--color-on-surface-variant)', lineHeight: 1.8, marginBottom: '32px' }}>
                                Nova Axis opera en la intersección entre arquitectura de autor, diseño estratégico y estructuración de activos de largo plazo. Entendemos la arquitectura no solo como un refugio, sino como un legado tangible.
                            </p>
                            <p style={{ fontSize: '18px', color: 'var(--color-on-surface-variant)', lineHeight: 1.8 }}>
                                Cada proyecto nace de la misma premisa: crear estructuras que trasciendan el ciclo de vida ordinario de la construcción y se conviertan en referencias permanentes del paisaje urbano.
                            </p>
                        </div>
                        <div style={{ display: 'grid', gap: '40px' }}>
                            {[
                                { n: '01.', label: 'Design Atemporal', desc: 'Cada decisión estética tiene una razón estructural. No hay ornamento sin función intrínseca.' },
                                { n: '02.', label: 'Activos Reales', desc: 'La arquitectura como forma tangible de propiedad. Construimos con vocación de permanencia en el ecosistema biofísico.' },
                                { n: '03.', label: 'Curaduría', desc: 'Seleccionamos rigurosamente colaboradores, materiales y socios estratégicos. La excelencia no se negocia.' },
                            ].map(v => (
                                <div key={v.n}>
                                    <span className="label-caps" style={{ color: 'var(--color-accent)', display: 'block', marginBottom: '12px' }}>{v.n} {v.label}</span>
                                    <p style={{ fontSize: '14px', color: 'var(--color-on-surface-variant)', lineHeight: 1.7 }}>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Whitelist */}
            <section id="whitelist" className="section-padding" style={{ background: 'var(--color-surface-container-lowest)' }}>
                <div className="container">
                    <div className="whitelist-grid">
                        {/* Left — info */}
                        <div>
                            <span className="label-caps" style={{ color: 'var(--color-accent)', display: 'block', marginBottom: '24px' }}>Status: Exclusive Access</span>
                            <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05, marginBottom: '32px' }}>
                                Acceso restringido.<br />Disponibilidad limitada.
                            </h1>
                            <p style={{ fontSize: '16px', color: 'var(--color-on-surface-variant)', lineHeight: 1.8, marginBottom: '56px' }}>
                                La Nova Axis Whitelist está diseñada para preservar la integridad estructural del proyecto y garantizar que nuestros socios más comprometidos reciban prioridad en el acceso a la documentación técnica privada y a las fases iniciales del activo.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                {['Early Access', 'Priority Allocation', 'Private Technical Dossier'].map(b => (
                                    <div key={b} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0,0,0,0.08)', padding: '20px 0' }}>
                                        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}>{b}</span>
                                        <span style={{ color: 'var(--color-accent)', fontSize: '22px', lineHeight: 1 }}>+</span>
                                    </div>
                                ))}
                            </div>

                            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '14px', color: 'var(--color-outline)', marginTop: '48px' }}>
                                Refinement through selection.
                            </p>
                        </div>

                        {/* Right — form */}
                        <div>
                            <form action="#">
                                <div className="form-group">
                                    <label htmlFor="wl-name">Name</label>
                                    <input type="text" id="wl-name" placeholder="John Doe" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="wl-email">Email</label>
                                    <input type="email" id="wl-email" placeholder="email@address.com" />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                    <div className="form-group">
                                        <label htmlFor="wl-country">Country</label>
                                        <input type="text" id="wl-country" placeholder="Switzerland" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="wl-interest">Interest</label>
                                        <input type="text" id="wl-interest" placeholder="Architectural Partnership" />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '32px' }}>
                                    <label className="label-caps" style={{ fontSize: '10px', color: 'var(--color-outline)', display: 'block', marginBottom: '16px' }}>
                                        Investment Range (Optional)
                                    </label>
                                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                        {['1k – 5k', '5k – 10k', '10k – 50k', '50k+'].map(r => (
                                            <button
                                                type="button"
                                                key={r}
                                                onClick={() => setActiveRange(r === activeRange ? '' : r)}
                                                style={{
                                                    padding: '8px 16px',
                                                    border: `1px solid ${r === activeRange ? 'var(--color-primary)' : 'rgba(0,0,0,0.15)'}`,
                                                    background: r === activeRange ? 'var(--color-primary)' : 'none',
                                                    color: r === activeRange ? 'white' : 'inherit',
                                                    fontSize: '11px',
                                                    fontFamily: 'var(--font-sans)',
                                                    letterSpacing: '0.05em',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s ease',
                                                }}
                                            >
                                                {r}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="wl-message">Message</label>
                                    <textarea id="wl-message" rows={4} placeholder="Describe brevemente tus objetivos..." />
                                </div>

                                <p style={{ fontSize: '10px', color: 'var(--color-outline)', marginBottom: '24px', lineHeight: 1.6 }}>
                                    ⊕ Data transmitted via end-to-end encrypted protocol for institutional privacy.
                                </p>

                                <button
                                    type="submit"
                                    className="nav-cta"
                                    style={{ width: '100%', padding: '20px', fontSize: '12px', cursor: 'pointer', background: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                                >
                                    SUBMIT →
                                </button>
                            </form>

                            <div style={{ marginTop: '48px', display: 'grid', gap: '28px' }}>
                                <div>
                                    <span className="label-caps">Direct Channel</span>
                                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontStyle: 'italic', marginTop: '8px', color: 'var(--color-accent)' }}>archive@nova-axis.com</p>
                                </div>
                                <div>
                                    <span className="label-caps">Main Studio</span>
                                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontStyle: 'italic', marginTop: '8px' }}>Avenue de la Renaissance 12, Geneva</p>
                                </div>
                                <div>
                                    <span className="label-caps">Validation Period</span>
                                    <p style={{ fontSize: '14px', color: 'var(--color-on-surface-variant)', marginTop: '8px' }}>Standard review: 48 – 72 Business Hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                /* Form inputs */
                .form-group input, .form-group textarea {
                    width: 100%;
                    background: none;
                    border: none;
                    border-bottom: 1px solid rgba(0,0,0,0.1);
                    padding: 14px 0;
                    font-family: var(--font-sans);
                    font-size: 16px;
                    margin-bottom: 32px;
                    outline: none;
                    transition: border-color 0.3s ease;
                    border-radius: 0;
                }
                .form-group input:focus, .form-group textarea:focus {
                    border-bottom-color: var(--color-primary);
                }
                .form-group label {
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: var(--color-outline);
                    display: block;
                }

                /* Layout grids */
                .project-desc-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                }
                .asset-image-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 16px;
                    margin-bottom: 80px;
                    min-height: 500px;
                }
                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 48px;
                    padding-top: 64px;
                }
                .sketch-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 128px;
                    align-items: center;
                }
                .studio-split-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 128px;
                }
                .whitelist-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 128px;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .project-desc-grid,
                    .asset-image-grid,
                    .sketch-grid,
                    .studio-split-grid,
                    .whitelist-grid {
                        grid-template-columns: 1fr;
                        gap: 48px !important;
                    }
                    .features-grid {
                        grid-template-columns: 1fr;
                    }
                    .asset-image-grid > div:last-child {
                        display: none;
                    }
                }
            `}</style>
        </main>
    );
}
