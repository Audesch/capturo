"use strict";

// DARK MODE + LOCAL STORAGE
var buttonMobile = document.querySelector(".menu__darkbtn");
buttonMobile.addEventListener("click", dark);
var attribute = localStorage.getItem("data-theme");

if (attribute == "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
} else {
    document.documentElement.setAttribute("data-theme", "light");
}

function dark() {
    var update = document.documentElement.getAttribute("data-theme");

    if (update == "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("data-theme", "light");
        buttonMobile.innerHTML = "Dark mode";
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("data-theme", "dark");
        buttonMobile.innerHTML = "Light mode";
    }
}


// Burger menu 

let navButton = document.querySelector(".menu__burger");
navButton.addEventListener("click", toggleNavigation);

function toggleNavigation() {
    if (document.body.hasAttribute("data-menu")) {
        document.body.removeAttribute("data-menu");
    } else {
        document.body.setAttribute("data-menu", true);
    }
}



// DATE 
var year = new Date().getFullYear();
document.querySelector(".copyright").innerHTML = "Aude Schaff © " + year;