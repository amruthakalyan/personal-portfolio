document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("themeToggleBtn");
    const icon = document.getElementById("themeIcon");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        icon.classList.replace("fa-sun", "fa-moon");
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");

        icon.classList.toggle("fa-sun", !isDark);
        icon.classList.toggle("fa-moon", isDark);

        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
});



// Typing effect
const text = "I'm Kalyan_amrutha, a Tech Enthusiast from Hyderabad, Telangana. I thrive on simplifying complex problems into user-friendly experiences, both visually and functionally!!";
let index = 0;
function typeText() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}
typeText();

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    if(dots[slideIndex-1]) dots[slideIndex-1].className += " active";
}

// Dark/Light Theme Toggle
document.getElementById("dark").addEventListener("click", () => {
    document.body.classList.add("dark-mode");
});

document.getElementById("light").addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
});

// Modal for contact info
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const contactLink = document.getElementById("contactModalTrigger");
  const closeBtn = document.querySelector(".close");

  contactLink.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
