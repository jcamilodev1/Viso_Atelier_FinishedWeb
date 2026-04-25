document.addEventListener('DOMContentLoaded', () => {
    // Nav Scroll Effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Hero Scroll-Driven Effect
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            const heroHeight = window.innerHeight;
            if (scrollPos <= heroHeight) {
                // Mimic "advancing" by scaling and slightly moving
                const scale = 1 + (scrollPos / heroHeight) * 0.2;
                const opacity = 1 - (scrollPos / heroHeight) * 0.5;
                heroVisual.style.transform = `scale(${scale})`;
                heroVisual.style.opacity = opacity;
            }
        });
    }

    // Portfolio Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
