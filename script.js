// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    htmlElement.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark-mode');
    
    // Save theme preference
    const theme = htmlElement.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar shadow on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 8px var(--shadow-sm)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Scroll-triggered animations with IntersectionObserver
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger animation slightly for multiple cards
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 80);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated cards
document.querySelectorAll('.feature-card, .social-card, .contact-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(card);
});

// News cards with separate observer (no initial transform since they're clickable)
document.querySelectorAll('.news-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(card);
});

// Expandable news cards
const newsCards = document.querySelectorAll('.news-card');
newsCards.forEach(card => {
    card.addEventListener('click', function(e) {
        // Don't expand if clicking a link
        if (e.target.tagName === 'A') return;
        
        // Close other expanded cards
        newsCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
            }
        });
        
        // Toggle current card
        card.classList.toggle('expanded');
    });
});

// Parallax effect on hero background
const heroBackground = document.querySelector('.hero-background');
if (heroBackground) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        if (scrolled < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// Automatically style "District Studios" mentions
function styleBrandMentions() {
    const elementsToSearch = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');
    
    elementsToSearch.forEach(element => {
        // Skip if already processed or is part of brand-text
        if (element.classList.contains('brand-processed') || 
            element.querySelector('.brand-text') ||
            element.closest('.brand-text')) {
            return;
        }
        
        // Replace text nodes containing "District Studios"
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null
        );
        
        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            if (node.textContent.includes('District Studios')) {
                textNodes.push(node);
            }
        }
        
        textNodes.forEach(textNode => {
            const span = document.createElement('span');
            span.innerHTML = textNode.textContent.replace(
                /District Studios/g,
                '<span class="brand-text">District Studios</span>'
            );
            textNode.parentNode.replaceChild(span, textNode);
        });
        
        element.classList.add('brand-processed');
    });
}

// Run on page load
styleBrandMentions();
