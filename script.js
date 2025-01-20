// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

// Form submission (you'll need to implement the actual submission logic)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message. I will get back to you soon!');
    this.reset();
});

// Refined scroll reveal animation
function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    reveals.forEach(el => {
        var windowHeight = window.innerHeight;
        var elementTop = el.getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

// Add 'reveal' class to elements you want to animate on scroll
document.querySelectorAll('section > *:not(.hero *)').forEach(el => {
    el.classList.add('reveal');
});

window.addEventListener('scroll', reveal);

// Typewriter effect for hero subtitle
const heroSubtitle = document.querySelector('.hero-content p');
const text = heroSubtitle.textContent;
heroSubtitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        heroSubtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start the typewriter effect when the page loads
window.addEventListener('load', typeWriter);

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
});

// Add floating animation to profile photo
document.querySelector('.profile-photo').classList.add('float');

// Cursor glow effect
const cursorGlow = document.getElementById('cursor-glow');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX - 150;
    const y = e.clientY - 150;
    cursorGlow.style.transform = `translate(${x}px, ${y}px)`;
});

// Enhanced parallax effect
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-speed');
        const x = (window.innerWidth - mouseX * speed) / 100;
        const y = (window.innerHeight - mouseY * speed) / 100;
        el.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.05)`;
    });
});

// Enhanced tilt effect on project cards
const cards = document.querySelectorAll('.project-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const tiltX = (y - centerY) / 15;
        const tiltY = (centerX - x) / 15;

        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// Animate skill items
const skillItems = document.querySelectorAll('.skills-list li');
skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

function checkSkills() {
    const triggerBottom = window.innerHeight / 5 * 4;
    skillItems.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        if(skillTop < triggerBottom) {
            skill.classList.add('show');
        } else {
            skill.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', checkSkills);

// Animate social links
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach((link, index) => {
    link.style.animationDelay = `${index * 0.1}s`;
    link.classList.add('float');
});

// Form input animation
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focus');
    });
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.parentElement.classList.remove('focus');
        }
    });
});

// Smooth appearance for sections
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.5
};

const sectionObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('fade-in-left');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    sectionObserver.observe(section);
});

function revealExperience() {
    var timelineItems = document.querySelectorAll('.timeline-item');
    for (var i = 0; i < timelineItems.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = timelineItems[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            timelineItems[i].classList.add("active");
        } else {
            timelineItems[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealExperience);
