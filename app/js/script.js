'use strict';

var menuBurger = document.querySelector('.header__menu-burger');
var headerMenu = document.querySelector('.header__menu');

menuBurger.addEventListener('click', function () {
  headerMenu.classList.contains('header__menu--opened') ? 

    (headerMenu.classList.remove('header__menu--opened'),
    menuBurger.classList.remove('header__menu-burger--opened')) :

    (headerMenu.classList.add('header__menu--opened'),
    menuBurger.classList.add('header__menu-burger--opened')); 
});