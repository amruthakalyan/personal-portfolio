const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  // Save preference to localStorage
  if(document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Load saved theme on page load
window.addEventListener('load', () => {
  if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
});


// document.body.style.backgroundColor = 'black',
// document.body.style.color = 'white';
// let light = document.getElementById('light');
// let dark= document.getElementById('dark');
// light.addEventListener('click',()=>{
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
// })
// dark.addEventListener('click',()=>{
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
// })

// const toggleBtn = document.getElementById('theme-toggle');

// toggleBtn.addEventListener('click', () => {
//   document.body.classList.toggle('dark-theme');

//   // Change button icon
//   toggleBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';

//   // Save preference
//   localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
// });

// // Load saved theme on page load
// window.addEventListener('DOMContentLoaded', () => {
//   if (localStorage.getItem('theme') === 'dark') {
//     document.body.classList.add('dark-theme');
//     toggleBtn.textContent = '☀️';
//   }
// });


// text typing Animation effect

   var i =0;
  var txt = " I'm Kalyan_amrutha, a Tech Enthusiast from Hyderabad, Telangana. I thrive on simplifying complex problems into user-friendly experiences, both visually and functionally.";
   function typeWriter(){
    if(i < txt.length){
        document.getElementById('typed-text').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter,50)
    }
   }
    typeWriter();

//Slideshow  imgs
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++; // Increment slideIndex
  
  // If slideIndex is greater than the number of slides, reset it to 1
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Display the current slide
  slides[slideIndex - 1].style.display = "block";

  // Update the dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
  
  // Call showSlides() again after 5 seconds
  setTimeout(showSlides, 5000);
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var contactBtn = document.getElementById("contactBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
contactBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




