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
   var txt = "I'm Kalyan_amrutha, Designer and developer from Hyderabad,Telangana. I enjoy turning complex problems into simple, beautiful and intuitive designs.";
   function typeWriter(){
    if(i < txt.length){
        document.getElementById('typed-text').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter,50)
    }
   }
    typeWriter();
