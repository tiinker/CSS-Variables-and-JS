var blur = document.getElementById("blur");
var img = document.getElementById("image");

this.addEventListener("change", function(){
    img.style = `filter: 
    brightness(${brightness.value}%) 
    blur(${blur.value}px) 
    grayscale(${grayscale.value}%) 
    contrast(${contrast.value}%) 
    saturate(${saturate.value});
    border-radius:${borderRad.value}%`; 
});





