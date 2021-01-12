window.onscroll = function() {toggleNav()};
    
const sticky = navbar.offsetTop;

const toggleNav = () => {
  let navbar = document.getElementById("navbar");
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");  
  }
}

let picture = document.getElementsByClassName("pictureExample");

const viewLargeImage = () => {
  let largeImageLocation = document.getElementById("main-photo");
}
