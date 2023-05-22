'use strict'
//burger
const burgerButton = document.querySelector('.burger_container');
const burgerLine = document.querySelector('.burger_line');
const burgerMenu = document.querySelector('.burger_menu_container');


burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('_active');
    burgerMenu.classList.toggle('hidden');
})
