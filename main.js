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


