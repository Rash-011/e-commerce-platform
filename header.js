document.addEventListener('DOMContentLoaded', () => {
    // --- Glassmorphism Navbar: Scroll Effect ---
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    // Change navbar style when user scrolls down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            if (navLinks.classList.contains('active')) {
                mobileToggle.classList.remove('fa-bars');
                mobileToggle.classList.add('fa-times');
            } else {
                mobileToggle.classList.remove('fa-times');
                mobileToggle.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when a link is clicked
    const glassLinks = document.querySelectorAll('.glass-nav-links a');
    glassLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('fa-times');
                mobileToggle.classList.add('fa-bars');
            }
        });
    });
});