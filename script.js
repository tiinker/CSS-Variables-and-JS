var blur = document.getElementById("blur");
var img = document.getElementById("image");
var slider = document.querySelectorAll("input[type=range]");

this.addEventListener("change", function(){
    img.style = `filter: 
    brightness(${brightness.value}%) 
    blur(${blur.value}px) 
    grayscale(${grayscale.value}%) 
    contrast(${contrast.value}%) 
    saturate(${saturate.value});
    border-radius:${borderRad.value}%`; 
});





