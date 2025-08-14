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
            markers: true,
            once: true
        }
      });
      return split;
    }
  });