const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length; 
var btns = document.querySelectorAll('.slide-icon');
let currentSlide = 1;
var slideNumber = 1;
//next button
nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });
    slideNumber++;
    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  });
  //previous button
  prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });
      slideNumber--;
    if(slideNumber < 0){
      slideNumber = numberOfSlides - 1;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  });
  
  //image slider autoplay
  var playSlider;
  var repeater = () => {
    playSlider = setInterval(function(){
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });
  
      slideNumber++;
  
      if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
      }
  
      slides[slideNumber].classList.add("active");
      slideIcons[slideNumber].classList.add("active");
    },7000);
  }
  repeater();
  //stop the image slider autoplay on mouseover
  slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
  });
  
  //start the image slider autoplay again on mouseout
  slider.addEventListener("mouseout", () => {
    repeater();
  });
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
    
  });
});
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
if(MenuItems.style.maxHeight == "0px")
MenuItems.style.maxHeight = "200px"
else {
    MenuItems.style.maxHeight = "0px";
}
}




