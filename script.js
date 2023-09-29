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
