'use strict';

var menuBurger = document.querySelector('.header__menu-burger');
var headerMenu = document.querySelector('.header__menu');


menuBurger.addEventListener('click', function () {
  headerMenu.classList.contains('header__menu--opened') ?

    (headerMenu.classList.remove('header__menu--opened'),
      menuBurger.classList.remove('header__menu-burger--opened')) :

    (headerMenu.classList.add('header__menu--opened'),
      menuBurger.classList.add('header__menu-burger--opened'))
});

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
var observerTarget = document.querySelector('header');
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (observerTarget.classList.contains('header--unpinned')) {
      headerMenu.classList.remove('header__menu--opened'),
        menuBurger.classList.remove('header__menu-burger--opened')
    }
  });
});
var config = {
  attributes: true,
  childList: true,
  characterData: true
}
observer.observe(observerTarget, config);
