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

//modal
document.addEventListener('DOMContentLoaded', () => {
    const projectData = {
        swiftdeals: {
            title: "Swift Deals",
            description: "An Android e-commerce app with Firebase authentication and real-time database management. Features include add to cart, delete from cart, and secure user authentication.",
            images: [
                "images/swift1.png",
                "images/swift2.png",
                "images/swift3.png",
                "images/swift4.png"
            ],
            technologies: [
                "Android",
                "Java",
                "Firebase",
                "Authentication"
            ]
        },
        trackit: {
            title: "TrackIt",
            description: "A Trello-inspired project management application built with React.js, Node.js, MongoDB, and JavaScript. It features boards, lists, and cards for efficient task organization and seamless user experience.",
            images: [
                "images/hero-image1.jpg",
                "images/hero-image1.jpg",
                "images/hero-image1.jpg"
            ],
            technologies: [
                "React.js",
                "Node.js",
                "MongoDB",
                "Express"
            ]
        }
    };

    const modal = document.getElementById('projectModal');
    const modalContent = modal.querySelector('.modal-content');
    const modalTitle = document.getElementById('modalTitle');
    const slider = document.querySelector('.slider');
    const description = document.getElementById('projectDescription');
    const technologiesList = document.getElementById('projectTechnologies');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentProject = '';
    let currentSlide = 0;

    document.querySelectorAll('.view-project').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            currentProject = this.getAttribute('data-project');
            openModal(currentProject);
        });
    });

    function openModal(projectKey) {
        const project = projectData[projectKey];

        modalTitle.textContent = project.title;
        description.textContent = project.description;

        slider.innerHTML = '';
        project.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            slider.appendChild(img);
        });

        technologiesList.innerHTML = '';
        project.technologies.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            technologiesList.appendChild(li);
        });

        modal.style.display = 'block';
        modalContent.style.overflowY = 'auto'; // Enable vertical scrolling for modal
        modalContent.style.maxHeight = '80vh'; // Limit modal height to prevent overflow
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        currentSlide = 0;
        updateSlider();
    }

    function updateSlider() {
        const slides = slider.querySelectorAll('img');
        slides.forEach((slide, index) => {
            slide.style.display = index === currentSlide ? 'block' : 'none';
        });
    }

    function nextSlide() {
        const slides = slider.querySelectorAll('img');
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        const slides = slider.querySelectorAll('img');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Swipe detection for touch devices
    let startX;
    slider.addEventListener('touchstart', e => startX = e.touches[0].clientX);
    slider.addEventListener('touchend', e => {
        const diffX = startX - e.changedTouches[0].clientX;
        if (Math.abs(diffX) > 50) {
            diffX > 0 ? nextSlide() : prevSlide();
        }
    });

    document.querySelector('.close').addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Enable scrolling within the modal content

    modalContent.addEventListener('wheel', (e) => {

        e.stopPropagation();

    });
    
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
