var menuKnop = document.querySelector("nav > ul > li > img");
var verborgenLijst = document.querySelector("nav > ul:nth-of-type(2)");

menuKnop.addEventListener("click", function () {
    'use strict';
    if (verborgenLijst.classList.contains("menuOpen")) {
        //hier wordt het icoontje een hamburger//
        verborgenLijst.classList.remove("menuOpen");
        // menuPlaatje.src = "images/ic-hamburger.svg";
    } else {
        verborgenLijst.classList.add("menuOpen");
        // menuPlaatje.src = "images/ic-close.svg";
        //hier wordt het icoontje een kruisje//
    }
});
