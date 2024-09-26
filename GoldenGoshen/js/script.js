// for toggle mode
const toggleButton = document.getElementById('toggleButton');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    toggleButton.textContent = body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// // Set initial mode
// if (!body.classList.contains('dark-mode')) {
//     body.classList.add('light-mode');
// }

// let currentIndex = 0;
//     const slides = document.querySelectorAll('.slideshow');
//     const totalSlides = slides.length;

//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             slide.style.display = (i === index) ? 'flex' : 'none';
//         });
//     }

//     function nextSlide() {
//         currentIndex = (currentIndex + 1) % totalSlides;
//         showSlide(currentIndex);
//     }

//     setInterval(nextSlide, 3000);
//     showSlide(currentIndex);

  // script.js

