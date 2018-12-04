'use strict';

var menuburger = document.querySelector(".header__menu-burger");
var header__menu = document.querySelector(".header__menu");

menuburger.addEventListener("click", function () {
  header__menu.classList.contains("header__menu--opened") ? 

    (header__menu.classList.remove("header__menu--opened"),
    menuburger.classList.remove("header__menu-burger--opened")) :

    (header__menu.classList.add("header__menu--opened"),
    menuburger.classList.add("header__menu-burger--opened"))
});