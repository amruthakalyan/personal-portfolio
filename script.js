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
   var txt = "I'm Kalyan_amrutha, Designer and developerfrom Hyderabad,Telangana. I enjoy turning complex problems into simple, beautiful and intuitive designs. My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.";
   function typeWriter(){
    if(i < txt.length){
        document.getElementById('typed-text').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter,50)
    }
   }
    typeWriter();
