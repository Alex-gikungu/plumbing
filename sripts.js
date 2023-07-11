let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 5000); // Adjust the slide duration (in milliseconds) as needed

let heading = document.querySelector("#list");

heading.addEventListener("mouseover",()=>{
    heading.style.backgroundColor="green";
})







