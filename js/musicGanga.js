// scrolling script start
var navbar = document.querySelector(".nav-scroll");

document.addEventListener('scroll', function(){
  var scroll_position = window.scrollY;
  if (scroll_position > 200) {
    navbar.style.position = 'fixed';
    navbar.style.width = '100vw';
  } else {
    navbar.style.position = 'initial';
  }
});
//   ends

// Aos
AOS.init();