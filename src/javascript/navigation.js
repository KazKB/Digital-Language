let menuButton = document.querySelector("header p");
let links = document.querySelectorAll("nav a");
let nav = document.querySelector("nav");

// Drop Down Menu for phone view
if(screen.width < 700) {
    menuButton.addEventListener("click", function() {
        menuButton.classList.toggle("clicked");
        for(let e = 0; e < links.length; e++) {
            links[e].classList.toggle("visible");
        }
        nav.classList.toggle("border");
    });
}

// Return To Top Button
let returnToTop = document.createElement("p");
returnToTop.innerHTML = "&#8682;";
returnToTop.className = "hidden";
document.body.appendChild(returnToTop);
returnToTop.addEventListener("click", function() {
    window.scrollTo(0,0);
});

window.onscroll = function(){
    if(window.scrollY > 100) {
        returnToTop.className = "scroll";  
    }
    else {
        returnToTop.className = "hidden";
    }
};