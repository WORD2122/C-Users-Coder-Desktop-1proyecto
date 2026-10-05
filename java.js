// BOTÓN DEL MENÚ

const boton = document.querySelector(".button-toggle");

const menu = document.querySelector(".menu");


boton.addEventListener("click", function () {

    menu.classList.toggle("open");

});


// BOTÓN PARA CAMBIAR EL COLOR

const botonColor = document.querySelector("#cambia-color");


botonColor.addEventListener("click", function () {

    document.body.classList.toggle("oscuro");

});