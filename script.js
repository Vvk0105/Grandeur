const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

document.querySelector('.hero-content').classList.add('visible');

window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

gsap.registerPlugin(ScrollTrigger);

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
            // scroller: ".main",
            start: "top 45%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            // markers: true,
            once: true
        }
      });
      return split;
    }
  });

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

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
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

    window.addEventListener('scroll', () => {
        const nav = document.getElementById('mainNav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    const portfolioSwiper = new Swiper('.portfolio-section .swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });

    const testimonialSwiper = new Swiper('.testimonials-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            }
        }
    });

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