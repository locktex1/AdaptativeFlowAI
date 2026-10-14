document.addEventListener('DOMContentLoaded', () => {
    // 1. Partículas flotantes de fondo
    const particlesContainer = document.getElementById('particles-container');
    const particleCount = window.innerWidth < 768 ? 20 : 50; // Menos partículas en móvil
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 15) + 's';
        particlesContainer.appendChild(particle);
    }

    // 2. Navbar Sticky Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Si es un contador, animar números
                if (entry.target.classList.contains('counter') && !entry.target.classList.contains('counted')) {
                    const target = parseFloat(entry.target.getAttribute('data-target'));
                    animateCounter(entry.target, target);
                    entry.target.classList.add('counted');
                }
            }
        });
    }, observerOptions);

    // Seleccionar elementos para animar
    const elementsToAnimate = document.querySelectorAll('.service-card-flip, .social-proof, .flex-preview, .counter');
    elementsToAnimate.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.1}s`;
        animateOnScroll.observe(el);
    });

    // 4. Contador animado para estadísticas
    function animateCounter(element, target, duration = 2000) {
        const isDecimal = target % 1 !== 0;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = isDecimal ? target.toFixed(1) : Math.round(target);
                clearInterval(timer);
            } else {
                element.textContent = isDecimal ? current.toFixed(1) : Math.round(current);
            }
        }, 16);
    }

    // 5. Flip cards mobile touch support
    const flipCards = document.querySelectorAll('.service-card-flip');
    flipCards.forEach(card => {
        card.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                this.classList.toggle('flipped');
            }
        });
    });
});