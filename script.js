const blur = document.getElementById("blur");
const img = document.getElementById("image");

this.addEventListener("change", function(){
    img.style = `filter: 
    brightness(${brightness.value}%) 
    blur(${blur.value}px) 
    grayscale(${grayscale.value}%) 
    contrast(${contrast.value}%) 
    saturate(${saturate.value});
    border-radius:${borderRad.value}%`; 
});

img.addEventListener("mouseenter", function(){
    img.style = `filter: 
    brightness(100%) 
    blur(0px) 
    grayscale(0%) 
    contrast(100%) 
    saturate(1);
    border-radius:0%`;
});

img.addEventListener("mouseleave", function(){
    img.style = `filter: 
    brightness(${brightness.value}%) 
    blur(${blur.value}px) 
    grayscale(${grayscale.value}%) 
    contrast(${contrast.value}%) 
    saturate(${saturate.value});
    border-radius:${borderRad.value}%`;
});



