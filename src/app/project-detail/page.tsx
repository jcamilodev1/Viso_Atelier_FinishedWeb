import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Casa Bruma | Viso Atelier',
};

export default function ProjectDetail() {
    return (
        <main style={{ paddingTop: '150px' }}>
            <div className="container">
                {/* Project Hero */}
                <section style={{ marginBottom: '128px' }}>
                    <div style={{ position: 'relative', aspectRatio: '21/9', overflow: 'hidden' }}>
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD34N2RqJBfgtKfKFmooU-DL0vLDLvVkZYqECpqEZOpv4QgbQZn_Xb_ZGEeLu0xtYYT9F9bQx9CXGfsNUbI9uS-uftwoAVfCJDrqjmHAO50-q3CgqGce9RKJkhY-1-Tlv0gf9FWILUq-TrKPwPKLbAJMUd7meXMUNJLg97XgWmGorHSwqWGzEoyW9vXTnSjpuqa7Ln8_gWSBac5ptPzn_qJfQXbLUAlelk_bmRYqxVvyWrjB4uJSqBMj-R2q6AtOdAhd-3O45v_12fo" 
                            alt="Casa Bruma" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                        <div style={{ position: 'absolute', bottom: '48px', left: '48px', color: 'white' }}>
                            <h1 style={{ fontSize: 'clamp(48px, 8vw, 80px)', lineHeight: 1 }}>Casa Bruma</h1>
                            <span className="label-caps" style={{ opacity: 0.8 }}>Pure Architectural Silence</span>
                        </div>
                    </div>
                </section>

                {/* Technical & Concept */}
                <section className="technical-sheet" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 2fr', 
                    gap: '128px', 
                    marginTop: '128px' 
                }}>
                    <div>
                        <span className="label-caps" style={{ color: 'var(--color-accent)', marginBottom: '32px', display: 'block' }}>Technical Sheet</span>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                            <span style={{ color: 'var(--color-outline)', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.2em' }}>Location</span>
                            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>Valle de Bravo, MX</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                            <span style={{ color: 'var(--color-outline)', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.2em' }}>Year</span>
                            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>2025</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                            <span style={{ color: 'var(--color-outline)', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.2em' }}>Status</span>
                            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>Completed</span>
                        </div>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '48px', fontStyle: 'italic', marginBottom: '32px' }}>&quot;El equilibrio entre la forma y el silencio.&quot;</h2>
                        <p style={{ fontSize: '18px', color: 'var(--color-on-surface-variant)' }}>
                            Casa Bruma emerge como un monumento singular a la contención europea moderna. Tallada directamente en la topografía local, la estructura sirve como un diálogo entre la permanencia de la piedra y la naturaleza efímera de la luz.
                        </p>
                    </div>
                </section>

                {/* Image Grid */}
                <section className="section-padding">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Gh6YzuHd8H68Lwe_3npQAwEGBy7RcqrnjxZdO13FuVgk_XWufXqVanizklTdNuQaKMN9FY28-LA86Euhdb9JQp0k-3PWichFKWa7HBtcF5eLAmdg1R7beYxqeryKRO4WONqKSL0sZoluaVD3rbTSVsELld2g1yysqANMFaKPjuukgTWflOPrG4MBEckV-ng5tpH-UoQf2JfHeoaYLrUor-KraYGnNiAnQewHuMi8fC3jmB65lDNi_oTYr78dVXMmVXe4XYyAzM5s" 
                            alt="Detail 1" 
                            style={{ width: '100%', filter: 'grayscale(100%)' }} 
                        />
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkHlDBLz_gCGcmavfEt_qEG7CL8k0APgLVAKXJBKFqXNsjCVQNcYo3vEHvUTxEx0pDgGFLLWUi564onuQuhaA-49ta2txkdZRR7fuwT9Ovmukz8E9mpfr35rSy8tC1JBGv-wrVEeGHwoZyudAsffPCicfInYrMH3pAMwo7BUOVdRM-3rdPeOK-GQb99JvY0plhNn7ioNMCfG6bjCS6TktP_isPn47scLiMFbjiyZ_S2B-g0pBWqcA_rb07JdgtUZSMkf4q-RBIh9V1" 
                            alt="Detail 2" 
                            style={{ width: '100%', filter: 'grayscale(100%)' }} 
                        />
                    </div>
                </section>
            </div>
            
            <style>{`
                @media (max-width: 768px) {
                    .technical-sheet {
                        grid-template-columns: 1fr !important;
                        gap: 64px !important;
                    }
                }
            `}</style>
        </main>
    );
}
