'use strict';
// получить элемент
var myElement = document.querySelector('header');
// создать новый экземпляр Headroom
var headroom  = new Headroom(myElement, {
    offset: 0,
    tolerance: {
      up: 5,
      down: 5,
    },
    classes: {
        initial: 'header',
        pinned: 'header--pinned',
        unpinned: 'header--unpinned',
        top: 'header--top',
        notTop: 'header--not-top',
        bottom: 'header--bottom',
        notBottom: 'header--not-bottom',
      },     
});
// инициализация
headroom.init();