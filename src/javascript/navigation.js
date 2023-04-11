let menuButton = document.querySelector("header p");
let links = document.querySelectorAll("nav a");
let nav = document.querySelector("nav");

if(screen.width < 700) {
    menuButton.addEventListener("click", function() {
        menuButton.classList.toggle("clicked");
        for(let e = 0; e < links.length; e++) {
            links[e].classList.toggle("visible");
        }
        nav.classList.toggle("border");
    });
}