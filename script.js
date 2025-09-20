// ==================== GLOBAL VARIABLES AND INITIALIZATION ====================
// News articles data
const newsData = {
    1: {
        title: "Welcome to District Studio",
        date: "Dec 20, 2024",
        content: `
            <p>Welcome to the official launch of District Studio! We're a small but passionate team of developers who have come together with a shared vision of creating engaging games on Roblox.</p>
            
            <h3>Our Story</h3>
            <p>District Studio was founded in late 2023 by a group of friends who met through the Roblox development community. What started as casual conversations about game ideas has evolved into a dedicated development studio.</p>
            
            <h3>Our Team</h3>
            <p>Currently, our team consists of five core members:</p>
            <ul>
                <li>Lead Developer - Focused on game mechanics and scripting</li>
                <li>3D Artist - Creating models and environments</li>
                <li>UI/UX Designer - Crafting intuitive user interfaces</li>
                <li>Sound Designer - Adding atmosphere through audio</li>
                <li>Community Manager - Building relationships with players</li>
            </ul>
            
            <h3>What We're Building</h3>
            <p>Our first project is currently in early development. While we can't share too many details yet, we can say it will focus on:</p>
            <ul>
                <li>Creative building and collaboration</li>
                <li>Strategic gameplay elements</li>
                <li>Community-driven content</li>
                <li>Cross-platform compatibility</li>
            </ul>
            
            <blockquote>
                "We're taking our time to get things right. Quality over quantity is our approach." - Lead Developer
            </blockquote>
            
            <p>Thank you for joining us on this journey. We're excited to share more updates as development progresses!</p>
        `
    },
    2: {
        title: "Development Progress Update",
        date: "Dec 15, 2024",
        content: `
            <p>We wanted to share a quick update on how development has been progressing over the past few weeks. Our small team has been working hard to lay the foundation for our first game.</p>
            
            <h3>Technical Milestones</h3>
            <p>This month we've made significant progress in several key areas:</p>
            <ul>
                <li>Core game framework established</li>
                <li>Basic player systems implemented</li>
                <li>Initial UI layouts designed and tested</li>
                <li>Multiplayer networking foundation completed</li>
            </ul>
            
            <h3>Design Decisions</h3>
            <p>We've spent considerable time refining our game concept. After multiple brainstorming sessions and prototype testing, we've decided to focus on a gameplay experience that emphasizes:</p>
            <ul>
                <li>Player creativity and expression</li>
                <li>Collaborative problem-solving</li>
                <li>Progressive skill development</li>
                <li>Social interaction and community building</li>
            </ul>
            
            <blockquote>
                "It's challenging but exciting to be building something from scratch. Every small milestone feels like a huge victory." - Lead Developer
            </blockquote>
            
            <h3>Learning and Growing</h3>
            <p>As a new development team, we're constantly learning. Some key insights from this phase:</p>
            <ul>
                <li>Importance of clear communication within the team</li>
                <li>Value of playtesting early and often</li>
                <li>Benefits of keeping scope manageable for our first project</li>
            </ul>
            
            <p>We're excited to share more concrete gameplay details in our next update!</p>
        `
    },
    3: {
        title: "Setting Up Our Workspace",
        date: "Dec 10, 2024",
        content: `
            <p>Behind every successful game development project is a well-organized workspace and development pipeline. This week, we focused on establishing the tools and processes that will support our development journey.</p>
            
            <h3>Development Tools</h3>
            <p>We've set up our development environment with industry-standard tools:</p>
            <ul>
                <li>Version control system for code management</li>
                <li>Project management tools for task tracking</li>
                <li>Communication platforms for team coordination</li>
                <li>Asset pipeline for 3D models and textures</li>
                <li>Testing framework for quality assurance</li>
            </ul>
            
            <h3>Team Workflow</h3>
            <p>Establishing clear workflows has been crucial for our small team. We've implemented:</p>
            <ul>
                <li>Daily check-ins to stay synchronized</li>
                <li>Weekly milestone reviews</li>
                <li>Code review processes to maintain quality</li>
                <li>Asset approval pipelines</li>
                <li>Bug tracking and resolution procedures</li>
            </ul>
            
            <h3>Learning Resources</h3>
            <p>As a new team, continuous learning is essential. We've invested time in:</p>
            <ul>
                <li>Roblox development best practices</li>
                <li>Advanced scripting techniques</li>
                <li>3D modeling and animation skills</li>
                <li>UI/UX design principles</li>
                <li>Community management strategies</li>
            </ul>
            
            <blockquote>
                "Having proper tools and processes in place from the beginning is saving us so much time and preventing mistakes." - Project Manager
            </blockquote>
            
            <p>These foundational elements might not be glamorous, but they're essential for building quality games efficiently. Next week, we'll be diving deeper into actual gameplay mechanics!</p>
        `
    },
    4: {
        title: "Community Building Begins",
        date: "Dec 5, 2024",
        content: `
            <p>While our game is still in early development, we believe building a community should start from day one. This week, we launched our Discord server and began connecting with potential players and fellow developers.</p>
            
            <h3>Discord Server Launch</h3>
            <p>Our Discord server is now live and growing steadily:</p>
            <ul>
                <li>Friendly community guidelines established</li>
                <li>Channels organized for different types of discussion</li>
                <li>Welcome system for new members</li>
                <li>Regular development updates scheduled</li>
            </ul>
            
            <h3>Early Community Feedback</h3>
            <p>We've started sharing concept art and design ideas with our early community members. Their feedback has been valuable:</p>
            <ul>
                <li>Art style resonates well with target audience</li>
                <li>Interest in collaborative gameplay features</li>
                <li>Suggestions for accessibility options</li>
                <li>Ideas for community events</li>
            </ul>
            
            <h3>Developer Connections</h3>
            <p>We've also been networking with other Roblox developers:</p>
            <ul>
                <li>Joined developer communities and forums</li>
                <li>Participated in development discussions</li>
                <li>Shared knowledge about common challenges</li>
                <li>Learned from experienced creators</li>
            </ul>
            
            <blockquote>
                "The Roblox developer community is incredibly welcoming. We've learned more in a few weeks than we expected." - Community Manager
            </blockquote>
            
            <h3>Looking Forward</h3>
            <p>Community building is a marathon, not a sprint. Our goals for the coming weeks include:</p>
            <ul>
                <li>Growing our Discord membership organically</li>
                <li>Regular development blog posts</li>
                <li>Behind-the-scenes content creation</li>
                <li>Feedback collection on game concepts</li>
            </ul>
            
            <p>Join our Discord to be part of our development journey from the very beginning!</p>
        `
    },
    5: {
        title: "First Concept Art Revealed",
        date: "Nov 30, 2024",
        content: `
            <p>Today marks an exciting milestone - we're sharing our first official concept art! After weeks of brainstorming and sketching, our art team has created some beautiful visuals that capture the essence of what we're building.</p>
            
            <h3>Art Direction</h3>
            <p>Our visual style is focused on creating an atmosphere that feels both familiar and fresh:</p>
            <ul>
                <li>Clean, modern aesthetic with attention to detail</li>
                <li>Vibrant colors that pop without being overwhelming</li>
                <li>Environments that encourage exploration</li>
                <li>Character designs that are expressive and relatable</li>
            </ul>
            
            <h3>Technical Considerations</h3>
            <p>While creating beautiful art, we also need to consider Roblox's technical constraints:</p>
            <ul>
                <li>Optimized polygon counts for smooth performance</li>
                <li>Texture sizes that work across all devices</li>
                <li>Lighting setups that enhance the mood</li>
                <li>Modular design for efficient development</li>
            </ul>
            
            <h3>Community Feedback</h3>
            <p>We shared early concepts with our Discord community and received valuable input:</p>
            <ul>
                <li>Positive response to overall art direction</li>
                <li>Suggestions for additional environmental details</li>
                <li>Ideas for seasonal variations</li>
                <li>Accessibility considerations for colorblind players</li>
            </ul>
            
            <blockquote>
                "Seeing our ideas come to life visually is incredibly motivating. It makes the game feel real for the first time." - Lead Artist
            </blockquote>
            
            <h3>What's Next</h3>
            <p>With our art direction established, we're moving forward with:</p>
            <ul>
                <li>3D modeling of key environment pieces</li>
                <li>Character model development</li>
                <li>UI element design</li>
                <li>Animation planning and testing</li>
            </ul>
            
            <p>Stay tuned for more visual updates as we bring these concepts into the game world!</p>
        `
    },
    6: {
        title: "Learning from Other Developers",
        date: "Nov 25, 2024",
        content: `
            <p>One of the best aspects of joining the Roblox development community has been connecting with other creators. This week, we had the opportunity to learn from several experienced developers who shared their insights and advice.</p>
            
            <h3>Developer Meetups</h3>
            <p>We participated in online developer meetups where we discussed:</p>
            <ul>
                <li>Common challenges faced by new development teams</li>
                <li>Best practices for project management</li>
                <li>Strategies for community building</li>
                <li>Technical solutions for performance optimization</li>
            </ul>
            
            <h3>Key Lessons Learned</h3>
            <p>Several insights stood out from these conversations:</p>
            <ul>
                <li>Start with a minimum viable product and iterate</li>
                <li>Player feedback is invaluable, even in early stages</li>
                <li>Building a community takes time and consistency</li>
                <li>Technical skills are important, but design thinking is crucial</li>
            </ul>
            
            <h3>Mentorship Opportunities</h3>
            <p>We've been fortunate to connect with developers who have offered guidance:</p>
            <ul>
                <li>Code reviews and programming best practices</li>
                <li>Art pipeline optimization suggestions</li>
                <li>Community management strategies</li>
                <li>Marketing and promotion advice</li>
            </ul>
            
            <blockquote>
                "The generosity of experienced developers in sharing their knowledge has been overwhelming. It's inspiring to be part of such a supportive community." - Team Lead
            </blockquote>
            
            <h3>Giving Back</h3>
            <p>While we're still learning, we're also looking for ways to contribute:</p>
            <ul>
                <li>Documenting our development process for other newcomers</li>
                <li>Sharing resources and tools we discover</li>
                <li>Participating in community discussions and forums</li>
                <li>Offering fresh perspectives on common challenges</li>
            </ul>
            
            <h3>Building Connections</h3>
            <p>These relationships have become an invaluable part of our development journey. We're committed to maintaining these connections and building new ones as we grow.</p>
            
            <p>If you're a fellow developer interested in connecting, feel free to reach out through our Discord server!</p>
        `
    }
};

document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // Initialize all components
    initializeLoadingScreen();
    initializeNavigation();
    initializeCountdown();
    initializeScrollAnimations();
    initializeIntersectionObserver();
    initializeSmoothScrolling();
    initializeParallaxEffects();
    initializeNewsModal();
    
    // Set target date for countdown (4 months from now)
    setCountdownTarget();
}

// ==================== LOADING SCREEN ====================
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    const loadingPercentage = document.querySelector('.loading-percentage');
    
    let progress = 0;
    
    // Simulate loading progress
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15 + 5; // Random increment between 5-20
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            // Complete loading after a short delay
            setTimeout(() => {
                hideLoadingScreen();
            }, 500);
        }
        
        updateLoadingProgress(progress);
    }, 200);
    
    // Minimum loading time of 3 seconds
    setTimeout(() => {
        if (progress < 100) {
            const remainingTime = 1000;
            const remainingProgress = 100 - progress;
            const finalInterval = setInterval(() => {
                progress += remainingProgress / 10;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(finalInterval);
                    setTimeout(() => {
                        hideLoadingScreen();
                    }, 300);
                }
                updateLoadingProgress(progress);
            }, remainingTime / 10);
        }
    }, 2500);
}

function updateLoadingProgress(progress) {
    const loadingProgress = document.querySelector('.loading-progress');
    const loadingPercentage = document.querySelector('.loading-percentage');
    
    if (loadingProgress && loadingPercentage) {
        loadingProgress.style.width = `${progress}%`;
        loadingPercentage.textContent = `${Math.round(progress)}%`;
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500);
    }
}

// ==================== NAVIGATION ====================
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Active link highlighting
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ==================== COUNTDOWN TIMER ====================
let countdownTarget;

function setCountdownTarget() {
    // Set target date to exactly 4 months from now
    const now = new Date();
    const target = new Date();
    
    // Add 4 months properly
    target.setMonth(target.getMonth() + 4);
    
    // If we went past the end of the month (e.g., Jan 31 + 4 months = May 31, but April only has 30 days)
    // JavaScript automatically adjusts, but we should handle edge cases
    
    countdownTarget = target;
    
    // Force initial update
    updateCountdown();
}

function initializeCountdown() {
    updateCountdown();
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    if (!countdownTarget) {
        return;
    }
    
    const now = new Date().getTime();
    const targetTime = countdownTarget.getTime();
    const difference = targetTime - now;
    
    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Update display directly - no fancy animations for now
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
        
    } else {
        // Countdown finished
        document.querySelectorAll('.time-value').forEach(el => {
            el.textContent = '00';
        });
        
        // Show celebration message
        showCountdownComplete();
    }
}

function updateCountdownValue(unit, value) {
    const element = document.getElementById(unit);
    if (element) {
        const formattedValue = value.toString().padStart(2, '0');
        
        // Only update if value changed to prevent unnecessary animations
        if (element.textContent !== formattedValue) {
            // Add animation class
            element.style.transform = 'scale(1.1)';
            element.style.color = '#32ff32';
            
            setTimeout(() => {
                element.textContent = formattedValue;
                element.style.transform = 'scale(1)';
                element.style.color = '#00ff00';
            }, 150);
        }
    }
}

function showCountdownComplete() {
    const countdownSection = document.querySelector('.countdown-description');
    if (countdownSection) {
        countdownSection.innerHTML = `
            <h3 class="celebration-title">🎉 The Wait Is Over! 🎉</h3>
            <p>Our revolutionary new game is now available! Join thousands of players in the most ambitious Roblox experience ever created.</p>
            <div class="celebration-buttons">
                <a href="https://www.roblox.com/communities/35469479/Vortex-Innovators#!/about" target="_blank" class="btn btn-primary">Play Now!</a>
            </div>
        `;
    }
}

// ==================== SCROLL ANIMATIONS ====================
function initializeScrollAnimations() {
    // Parallax scrolling for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.matrix-rain');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.getElementById('about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Special animations for specific elements
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
                
                if (entry.target.classList.contains('news-card')) {
                    animateNewsCard(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll(`
        .about-content,
        .countdown-container,
        .news-card,
        .social-link,
        .stat,
        .about-card
    `);
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

function animateCounter(element) {
    const finalValue = element.textContent.replace(/[^0-9]/g, '');
    const duration = 2000;
    const increment = finalValue / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= finalValue) {
            current = finalValue;
            clearInterval(timer);
        }
        
        // Format the number with appropriate suffix
        const suffix = element.textContent.replace(/[0-9]/g, '');
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

function animateNewsCard(card) {
    const delay = Math.random() * 300;
    setTimeout(() => {
        card.style.transform = 'translateY(0)';
        card.style.opacity = '1';
    }, delay);
}

// ==================== SMOOTH SCROLLING ====================
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; // Account for floating navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== PARALLAX EFFECTS ====================
function initializeParallaxEffects() {
    let ticking = false;
    
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        
        // Hero section parallax
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            const heroContent = heroSection.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrollTop * 0.1}px)`;
            }
        }
        
        // Countdown section particles
        const countdownSection = document.querySelector('.countdown-section');
        if (countdownSection) {
            const rect = countdownSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const particles = countdownSection.querySelector('::before');
                // CSS animation handles this, but we could add dynamic effects here
            }
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// ==================== SOCIAL LINK INTERACTIONS ====================
function initializeSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const icon = link.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
            }
        });
        
        link.addEventListener('mouseleave', () => {
            const icon = link.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}

// ==================== NEWS CARD INTERACTIONS ====================
function initializeNewsCards() {
    const newsCards = document.querySelectorAll('.news-card');
    
    newsCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add subtle glow effect
            card.style.boxShadow = '0 15px 40px rgba(0, 255, 0, 0.2)';
            
            // Animate read more link
            const readMore = card.querySelector('.read-more');
            if (readMore) {
                readMore.style.transform = 'translateX(5px)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
            
            const readMore = card.querySelector('.read-more');
            if (readMore) {
                readMore.style.transform = 'translateX(0)';
            }
        });
    });
}

// ==================== UTILITY FUNCTIONS ====================
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// ==================== PERFORMANCE OPTIMIZATIONS ====================
// Optimize scroll events
const optimizedScrollHandler = throttle(() => {
    updateActiveNavLink();
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);

// Optimize resize events
const optimizedResizeHandler = debounce(() => {
    // Handle responsive adjustments if needed
    updateCountdownLayout();
}, 250);

window.addEventListener('resize', optimizedResizeHandler);

function updateCountdownLayout() {
    const countdownTimer = document.querySelector('.countdown-timer');
    if (countdownTimer && window.innerWidth <= 768) {
        // Adjust countdown layout for mobile if needed
        countdownTimer.classList.add('mobile-layout');
    } else if (countdownTimer) {
        countdownTimer.classList.remove('mobile-layout');
    }
}

// ==================== EASTER EGGS AND SPECIAL EFFECTS ====================
function initializeEasterEggs() {
    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up, Up, Down, Down, Left, Right, Left, Right, B, A
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateSpecialMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateSpecialMode() {
    // Matrix rain effect intensifies
    const matrixRain = document.querySelector('.matrix-rain');
    if (matrixRain) {
        matrixRain.style.opacity = '0.3';
        matrixRain.style.animation = 'matrixFall 5s linear infinite';
    }
    
    // Add special glow to all lime green elements
    const limeElements = document.querySelectorAll(`
        .hero-title,
        .nav-brand,
        .time-value,
        .social-link.roblox i
    `);
    
    limeElements.forEach(el => {
        el.style.filter = 'drop-shadow(0 0 30px #00ff00)';
        setTimeout(() => {
            el.style.filter = '';
        }, 5000);
    });
    
    // Show secret message
    const secretMessage = document.createElement('div');
    secretMessage.innerHTML = '🎮 KONAMI CODE ACTIVATED! Developer Mode Unlocked! 🎮';
    secretMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 255, 0, 0.9);
        color: #000;
        padding: 20px;
        border-radius: 10px;
        font-family: 'Orbitron', monospace;
        font-weight: 700;
        z-index: 10001;
        animation: pulse 1s ease-in-out infinite alternate;
    `;
    
    document.body.appendChild(secretMessage);
    
    setTimeout(() => {
        document.body.removeChild(secretMessage);
    }, 3000);
}

// ==================== INITIALIZATION COMPLETION ====================
// Initialize additional features when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeSocialLinks();
    initializeNewsCards();
    initializeEasterEggs();
    
    // Add fade-in animation to body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== ERROR HANDLING ====================
window.addEventListener('error', (e) => {
    console.error('District Studio Website Error:', e.error);
    
    // Graceful degradation - ensure basic functionality works
    if (!document.querySelector('.loading-screen').style.display === 'none') {
        hideLoadingScreen();
    }
});

// ==================== CUSTOM EVENTS ====================
// Create custom events for other scripts to listen to
const createCustomEvent = (eventName, detail) => {
    return new CustomEvent(eventName, { detail });
};

// Dispatch events at key moments
window.addEventListener('load', () => {
    window.dispatchEvent(createCustomEvent('districtStudioLoaded', {
        timestamp: Date.now(),
        countdownTarget: countdownTarget
    }));
});

// ==================== NEWS MODAL FUNCTIONALITY ====================
function initializeNewsModal() {
    const modal = document.getElementById('news-modal');
    
    // Close modal when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeNewsModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeNewsModal();
        }
    });
    
    // Make entire news cards clickable
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => {
        const newsId = card.getAttribute('data-news-id');
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking on the 'Read More' link
            if (!e.target.classList.contains('read-more')) {
                openNewsModal(e, parseInt(newsId));
            }
        });
    });
}

function openNewsModal(event, newsId) {
    event.preventDefault();
    
    const modal = document.getElementById('news-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalBody = document.getElementById('modal-body');
    
    const newsItem = newsData[newsId];
    
    if (newsItem) {
        modalTitle.textContent = newsItem.title;
        modalDate.textContent = newsItem.date;
        modalBody.innerHTML = newsItem.content;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add entrance animation delay
        setTimeout(() => {
            modal.querySelector('.news-modal-content').style.transform = 'scale(1) translateY(0)';
        }, 50);
    }
}

function closeNewsModal() {
    const modal = document.getElementById('news-modal');
    const modalContent = modal.querySelector('.news-modal-content');
    
    // Add exit animation
    modalContent.style.transform = 'scale(0.8) translateY(50px)';
    
    setTimeout(() => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }, 300);
}

// Make functions globally accessible
window.openNewsModal = openNewsModal;
window.closeNewsModal = closeNewsModal;

// Export functions for external use if needed
window.DistrictStudio = {
    updateCountdown,
    hideLoadingScreen,
    setCountdownTarget: (date) => {
        countdownTarget = new Date(date);
        updateCountdown();
    },
    openNewsModal,
    closeNewsModal
};
