// Fade-in elements on scroll
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

document.querySelector('.hero-content')?.classList.add('visible');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Services section animation
gsap.utils.toArray(".service-item").forEach((service, index) => {
    const xPos = index % 2 === 0 ? -100 : 100;
    gsap.set(service, { x: xPos, opacity: 0 });

    ScrollTrigger.create({
        trigger: service,
        start: "top 70%",
        end: "bottom 30%",
        markers: false,
        onEnter: () => {
            gsap.to(service, {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            });
        },
        once: true
    });
});

// Split text animation
gsap.registerPlugin(SplitText);
split = SplitText.create(".about-grandeur", {
    type: "words,lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
    onSplit: (self) => {
        split = gsap.from(self.lines, {
            duration: 2,
            yPercent: 100,
            opacity: 0,
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 45%",
                end: "bottom 20%",
                toggleActions: "play none none none",
                once: true,
                // markers: true
            }
        });
        return split;
    }
});

// Academy animations
gsap.to(".academy-content", {
    scrollTrigger: {
        trigger: ".academy-section",
        start: "top 70%",
        toggleActions: "play none none none"
    },
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power2.out"
});

gsap.to(".academy-image", {
    scrollTrigger: {
        trigger: ".academy-section",
        start: "top 70%",
        toggleActions: "play none none none"
    },
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.2
});

// Expect section animation
gsap.to(".expect-header", {
    scrollTrigger: {
        trigger: ".expect-section",
        start: "top 70%",
        toggleActions: "play none none none"
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power2.out"
});

gsap.utils.toArray(".expect-card").forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        delay: i * 0.1
    });
});

// Gorgeous section animation
gsap.to(".gorgeous-content", {
    scrollTrigger: {
        trigger: ".gorgeous-section",
        start: "top 70%",
        toggleActions: "play none none none"
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power2.out"
});

// Gallery items animation
gsap.utils.toArray(".gallery-item").forEach((item, i) => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        delay: i * 0.1
    });
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        navLinksItems.forEach(link => link.classList.remove('active'));
        item.classList.add('active');
    });
});

// Swiper sliders
const portfolioSwiper = document.querySelector('.portfolio-section .swiper-container');
if (portfolioSwiper) {
    new Swiper(portfolioSwiper, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 }
        }
    });
}

const testimonialSwiper = document.querySelector('.testimonials-slider');
if (testimonialSwiper) {
    new Swiper(testimonialSwiper, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: { slidesPerView: 2 }
        }
    });
}

// Footer animations
gsap.utils.toArray(".footer-col").forEach((col, index) => {
    gsap.to(col, {
        scrollTrigger: {
            trigger: ".footer",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        delay: index * 0.1
    });
});

document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = this.closest('.dropdown');
            dropdown.classList.toggle('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Animate items on load
    gsap.utils.toArray('.portfolio-item').forEach((item, i) => {
        gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.05,
            ease: "power2.out"
        });
    });
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            // Animate out all items
            gsap.to('.portfolio-item', {
                opacity: 0,
                y: 30,
                duration: 0.5,
                onComplete: filterItems,
                onCompleteParams: [filter]
            });
        });
    });
    
    function filterItems(filter) {
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                // Animate in filtered items
                gsap.to(item, {
                    display: 'block',
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: Math.random() * 0.3,
                    ease: "power2.out"
                });
            } else {
                // Hide other items
                gsap.set(item, { display: 'none' });
            }
        });
    }
    
    // Hover animations
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item.querySelector('.portfolio-overlay'), {
                opacity: 1,
                duration: 0.3
            });
            gsap.to(item.querySelector('img'), {
                scale: 1.05,
                duration: 0.5
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item.querySelector('.portfolio-overlay'), {
                opacity: 0,
                duration: 0.3
            });
            gsap.to(item.querySelector('img'), {
                scale: 1,
                duration: 0.5
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.horizontal-gallery');
    const track = document.querySelector('.gallery-track');

    if (!gallery || !track) return;

    track.innerHTML += track.innerHTML;

    let scrollSpeed = 1.5;
    if (window.matchMedia("(max-width: 768px)").matches) {
        scrollSpeed = 1;
    }

    function autoScroll() {
        gallery.scrollLeft += scrollSpeed;

        if (gallery.scrollLeft >= track.scrollWidth / 2) {
            gallery.scrollLeft = 0;
        }

        requestAnimationFrame(autoScroll);
    }

    autoScroll();

    // Animate gallery-item images height from 0 to original on scroll into view
    const galleryItems = track.querySelectorAll('.gallery-item img');
    galleryItems.forEach(img => {
        // Store original height
        const originalHeight = img.offsetHeight;
        // Set initial height to 0 and hide overflow
        img.style.height = '0px';
        img.style.overflow = 'hidden';

        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 90%",
                toggleActions: "play none none none",
                once: true
            },
            height: originalHeight,
            duration: 0.8,
            ease: "power2.out"
        });
    });
});
