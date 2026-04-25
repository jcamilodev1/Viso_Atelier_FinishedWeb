import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="footer-brand">Nova Axis</div>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', maxWidth: '300px', lineHeight: 1.7 }}>
                            Architecture · Design · Strategy.<br />
                            Avenue de la Renaissance 12, Geneva.
                        </p>
                    </div>
                    <div className="footer-links">
                        <h4>Presencia Digital</h4>
                        <ul>
                            <li><Link href="#">Instagram</Link></li>
                            <li><Link href="#">LinkedIn</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Navegación</h4>
                        <ul>
                            <li><Link href="/#proyecto">Proyecto</Link></li>
                            <li><Link href="/#estudio">Estudio</Link></li>
                            <li><Link href="/#whitelist">Whitelist</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '12px', color: 'rgba(255,255,255,0.3)', display: 'flex', justifyContent: 'space-between' }}>
                    <span>© 2025 Nova Axis. Architectural Exclusivity. Reserved for Distinction.</span>
                    <span>archive@nova-axis.com</span>
                </div>
            </div>
        </footer>
    );
}
