document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle
    const toggleBtn = document.getElementById("themeToggleBtn");
    const icon = document.getElementById("themeIcon");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        icon.classList.replace("fa-sun", "fa-moon");
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");

            icon.classList.toggle("fa-sun", !isDark);
            icon.classList.toggle("fa-moon", isDark);

            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    }

    // Modal
    const modal = document.getElementById("myModal");
    const contactLink = document.getElementById("openContactModal");
    const closeBtn = document.querySelector(".modal .close");

    if (modal && contactLink && closeBtn) {
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
    } else {
        console.warn("Modal elements missing");
    }
});

// Typing Effect
const text = "I'm Kalyan_amrutha, a Tech Enthusiast from Hyderabad, Telangana. I thrive on simplifying complex problems into user-friendly experiences, both visually and functionally!!";
let index = 0;

function typeText() {
    const typedText = document.getElementById("typed-text");
    if (typedText && index < text.length) {
        typedText.innerHTML += text.charAt(index);
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
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (slides.length === 0) return;

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    Array.from(slides).forEach(slide => slide.style.display = "none");
    Array.from(dots).forEach(dot => dot.classList.remove("active"));

    slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add("active");
}

