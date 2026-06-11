document.addEventListener('DOMContentLoaded', () => {

    // Hero Slider Functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // Change image every 5 seconds (5000ms)

    function nextSlide() {
        if (slides.length === 0) return;

        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');

        // Increment index, loop back to 0 if at the end
        currentSlide = (currentSlide + 1) % slides.length;

        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    }

    // Initialize the slider interval
    if (slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }

    // Optional: Interactive Heart Toggles for Product Grid
    const heartIcons = document.querySelectorAll('.heart-icon');

    heartIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            // Prevent triggering any link clicks if wrapped in an anchor
            e.preventDefault();

            // Toggle classes between regular heart and solid active red heart
            if (icon.classList.contains('active')) {
                icon.classList.remove('active', 'fas');
                icon.classList.add('far');
            } else {
                icon.classList.remove('far');
                icon.classList.add('active', 'fas');
            }
        });
    });


    // --- 3D Parallax Tilt Effect for Premium Cards ---
    const premiumCards = document.querySelectorAll('.premium-card[data-tilt]');

    premiumCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;

            const xAxis = (e.clientX - cardCenterX) / 15;
            const yAxis = (cardCenterY - e.clientY) / 15;

            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            card.style.transition = `none`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = `all 0.5s ease`;
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    });

});