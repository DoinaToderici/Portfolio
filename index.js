window.onscroll = function() {
  console.log(navbar.offsetTop, window.pageYOffset);

  myFunction();
};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky_nav");
  } else {
    navbar.classList.remove("sticky_nav");
  }
}

function openLink(link) {
  window.open(link, "_blank");
}

function openNav() {
  document.getElementById("myMenumob").style.width = "100%";
  document.getElementById("main").style.marginRight = "";
}

function closeNav() {
  document.getElementById("myMenumob").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}
