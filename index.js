// When the user scrolls the page, execute myFunction 
window.onscroll = function() {
    console.log(navbar.offsetTop, window.pageYOffset)

    
    myFunction()
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {

  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky_nav")
  } else {
    navbar.classList.remove("sticky_nav");
  }
  
}


function openLink(link){
  window.open(link, "_blank")
}
