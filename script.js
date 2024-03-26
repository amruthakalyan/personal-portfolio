document.body.style.backgroundColor = 'black',
document.body.style.color = 'white';
let light = document.getElementById('light');
let dark= document.getElementById('dark');
light.addEventListener('click',()=>{
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
})
dark.addEventListener('click',()=>{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
})

// text typing Animation effect

   var i =0;
  var txt = "I'm Kalyan_amrutha, Designer and developer from Hyderabad Telangana. I enjoy turning complex problems into simple, beautiful and intuitive designs.";
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
  
  // Call showSlides() again after 2 seconds
  // setTimeout(showSlides, 5000);
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
