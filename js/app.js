/**
 * querySelector me permite usar los selectores css en js
 * si no encuentra el selector retorna NULL
 */
const menu = document.querySelector('#menu');
const menuMobile = document.querySelector('#menu-mobile');

const showMenu = function () {
    //classList.toogle me permite agregar la clase si no existe y si existe eliminarla.
    menuMobile.classList.toggle('menu-mobile-show');
}


menu.addEventListener('click', showMenu)