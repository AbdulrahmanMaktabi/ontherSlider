let container = document.querySelector(".slider-container");
let images = container.querySelectorAll(".image-holder img");
let imagesHolder = document.querySelector(".image-holder");
let currentSlide = 1;
let imagesCount = images.length;
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let picWidth = images[currentSlide].clientWidth;

imagesHolder.style.transform = "translateX("+currentSlide * -picWidth+"px)";

next.addEventListener("click" , ()=>{
    if(currentSlide >= imagesCount-1) return;
    currentSlide++;
    imagesHolder.style.transform = "translateX("+currentSlide * -picWidth+"px)";
    imagesHolder.style.transition = "all .5s";
})

prev.addEventListener("click" , ()=>{
    if(currentSlide <= 0) return;
    currentSlide--;
    imagesHolder.style.transform = "translateX("+currentSlide * -picWidth+"px)";
    imagesHolder.style.transition = "all .5s";
})

imagesHolder.addEventListener("transitionend" , ()=>{
    if (images[currentSlide].id == "first"){
        currentSlide = imagesCount - currentSlide;
        imagesHolder.style.transform = "translateX("+currentSlide * -picWidth+"px)";
        imagesHolder.style.transition = "none";
    }
    if (images[currentSlide].id == "last"){
        currentSlide = imagesCount - 2;
        imagesHolder.style.transform = "translateX("+currentSlide * -picWidth+"px)";
        imagesHolder.style.transition = "none";
    }
})
