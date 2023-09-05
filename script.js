// Toggle navigation links on hamburger click
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
  });
  



  let slideIndex = 0;
  showSlides();  // Call the function initially
  
  function showSlides() {
    let i;
    const slides = document.getElementsByClassName("testimonial-container");
    const dots = document.getElementsByClassName("dot");

    // First, we'll fade out the current slide.
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('show');
    }

    // Use setTimeout to delay the showing of the next slide.
    setTimeout(() => {
        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex-1].classList.add('show');
        dots[slideIndex-1].className += " active";

    }, 2000);  // This delay should match the CSS transition duration (2s in this case).

    setTimeout(showSlides, 7000);  // 5s + 2s transition = 7s
}

  
// JavaScript
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-container');
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    updateTestimonial(index);
  });
});

function updateTestimonial(index) {
  testimonials[currentIndex].style.visibility = 'hidden';
  testimonials[currentIndex].style.opacity = '0';
  dots[currentIndex].classList.remove('active');

  testimonials[index].style.visibility = 'visible';
  testimonials[index].style.opacity = '1';
  dots[index].classList.add('active');

  currentIndex = index;
}


