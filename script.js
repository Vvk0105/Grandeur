// Initialize GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Initialize Lenis smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
});

// Add scroll event listener for GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

// Add to requestAnimationFrame
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Update GSAP ScrollTrigger
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);
document.addEventListener('DOMContentLoaded', function() {
    const introLoader = document.getElementById('introLoader');
    const progressBar = document.getElementById('progressBar');
    const mainContent = document.getElementById('mainContent');
    const loaderLogo = document.querySelector('.loader-logo');
    const loaderText = document.querySelector('.loader-text');
    const loaderQuote = document.querySelector('.loader-quote');
    const makeupBrushes = document.querySelectorAll('.makeup-brush');
    
    document.body.style.overflow = 'hidden';

    // Simulate loading progress
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            // Complete loading and reveal main content
            setTimeout(() => {
                introLoader.classList.add('hidden');
                mainContent.classList.add('visible');
                document.body.style.overflow = 'auto';
            }, 800);
        }
        progressBar.style.width = progress + '%';
    }, 200);
    
    // Animate loader elements with delays
    setTimeout(() => {
        loaderLogo.style.opacity = 1;
        loaderLogo.style.transform = 'translateY(0)';
        loaderLogo.style.transition = 'opacity 1s ease, transform 1s ease';
    }, 300);
    
    setTimeout(() => {
        loaderText.style.opacity = 1;
        loaderText.style.transform = 'translateY(0)';
        loaderText.style.transition = 'opacity 1s ease, transform 1s ease';
    }, 800);
    
    // Animate makeup brushes
    makeupBrushes.forEach((brush, index) => {
        setTimeout(() => {
            brush.style.opacity = 1;
            brush.style.transition = 'opacity 0.8s ease';
            
            // Animate brush movement
            const angle = index % 2 === 0 ? 10 : -10;
            brush.style.transform = `rotate(${angle}deg)`;
            brush.style.transition = 'transform 1.2s ease, opacity 0.8s ease';
            
            // Create continuous subtle animation
            setInterval(() => {
                const currentAngle = index % 2 === 0 ? 10 : -10;
                const newAngle = index % 2 === 0 ? -10 : 10;
                brush.style.transform = `rotate(${newAngle}deg)`;
                
                setTimeout(() => {
                    brush.style.transform = `rotate(${currentAngle}deg)`;
                }, 1200);
            }, 2400);
        }, 1200 + (index * 400));
    });
    
    setTimeout(() => {
        loaderQuote.style.opacity = 1;
        loaderQuote.style.transition = 'opacity 1.2s ease';
    }, 1600);
});
// Initialize GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll behavior
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            if (target === '#home') {
                gsap.to(window, {duration: 1, scrollTo: 0, ease: 'power2.inOut'});
            } else if (target !== 'portfolio.html') {
                gsap.to(window, {duration: 1, scrollTo: target, ease: 'power2.inOut'});
            } else {
                window.location.href = target;
            }
        });
    });
    
    // Nav scroll effect
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Hero animations
    const heroTl = gsap.timeline();
    heroTl
        .to('.hero-subtitle', {duration: 1, opacity: 1, y: 0, ease: 'power2.out', delay: 5})
        .to('.hero-title', {duration: 1.2, opacity: 1, y: 0, ease: 'power2.out'}, '-=0.5')
        .to('.hero-text', {duration: 1, opacity: 1, y: 0, ease: 'power2.out'}, '-=0.5')
        .to('.hero-btn', {duration: 1, opacity: 1, y: 0, ease: 'power2.out'}, '-=0.5');
    
    // Floating elements animation
    gsap.to('.floating-element', {
        y: 30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.2
    });
    
    // About section animation
    gsap.to('.about-content h3', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
    });
    
    gsap.to('.about-content p', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        duration: 1.5,
        delay: 0.3,
        ease: 'power2.out'
    });
    
    // Services section animation
    gsap.to('.section-title', {
        scrollTrigger: {
            trigger: '.services-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    });
    
    gsap.to('.service-card', {
        scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
    });
    
    // Academy section animation
    gsap.to('.academy-content', {
        scrollTrigger: {
            trigger: '.academy-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power2.out'
    });
    
    gsap.to('.academy-image', {
        scrollTrigger: {
            trigger: '.academy-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.3,
        ease: 'power2.out'
    });
    
    // Expect section animation
    gsap.to('.expect-header', {
        scrollTrigger: {
            trigger: '.expect-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    });
    
    gsap.to('.expect-card', {
        scrollTrigger: {
            trigger: '.expect-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
    });
    
    // Gorgeous section animation
    gsap.to('.gorgeous-content', {
        scrollTrigger: {
            trigger: '.gorgeous-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out'
    });
    
    // Gallery section animation
    gsap.to('.gallery-header', {
        scrollTrigger: {
            trigger: '.gallery-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    });
    
    gsap.to('.gallery-item', {
        scrollTrigger: {
            trigger: '.gallery-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out'
    });
    
    // Testimonials animation
    gsap.to('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonials-slider',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
    });
    
    // Footer animation
    gsap.to('.footer-col', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
    });
    
    // Initialize Swiper for testimonials
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });

    // Initialize variables
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    let currentImageIndex = 0;
    let images = [];
    
    // Prepare images array for lightbox
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('.gallery-img');
        const title = item.querySelector('.gallery-title').textContent;
        const category = item.querySelector('.gallery-category').textContent;
        
        images.push({
            src: img.getAttribute('src'),
            title: title,
            category: category
        });
        
        // Add click event to open lightbox
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });
    
    // Open lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImg.setAttribute('src', images[index].src);
        lightboxCaption.textContent = `${images[index].title} - ${images[index].category}`;
        lightbox.classList.add('open');
        
        // Animate lightbox content
        gsap.fromTo('.lightbox-content', 
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5 }
        );
        
        // Disable body scroll
        document.body.style.overflow = 'hidden';
    }
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('open');
        // Enable body scroll
        document.body.style.overflow = 'auto';
    }
    
    // Navigate to next image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateLightboxImage();
    }
    
    // Navigate to previous image
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    }
    
    // Update lightbox image with animation
    function updateLightboxImage() {
        // Animate out
        gsap.to(lightboxImg, { opacity: 0, scale: 0.9, duration: 0.3, onComplete: () => {
            // Change image
            lightboxImg.setAttribute('src', images[currentImageIndex].src);
            lightboxCaption.textContent = `${images[currentImageIndex].title} - ${images[currentImageIndex].category}`;
            
            // Animate in
            gsap.to(lightboxImg, { opacity: 1, scale: 1, duration: 0.3 });
        }});
    }
    
    // Event listeners for lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', nextImage);
    lightboxPrev.addEventListener('click', prevImage);
    
    // Close lightbox when clicking on backdrop
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('open')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        }
    });
    
    // Swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextImage();
        }
        if (touchEndX > touchStartX + 50) {
            prevImage();
        }
    }
});