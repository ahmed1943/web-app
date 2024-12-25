// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const button = document.querySelector('.btn');
    
    // Add click event listener to the button
    button.addEventListener('click', function() {
        alert('Welcome to 3LR Class!');
    });

    // Get all navigation links
    const navLinks = document.querySelectorAll('.navbar a');
    
    // Add hover effect to nav links
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add sidebar toggle functionality for mobile
    const sidebarToggle = document.createElement('button');
    sidebarToggle.classList.add('btn', 'btn-purple', 'sidebar-toggle', 'd-lg-none');
    sidebarToggle.innerHTML = '☰';
    document.querySelector('.navbar').appendChild(sidebarToggle);

    sidebarToggle.addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
    });

    // Initialize slideshow
    showSlides(slideIndex);
});

// Make these functions global
let slideIndex = 1;

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    
    // Show current slide and activate corresponding dot
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active-dot";
}

// Auto advance slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);