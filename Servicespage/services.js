import './normalize.css';
import './services.css';

const $ = (el) => document.querySelector(el);
const btnMenuOpen = $('.open-menu');
const btnMenuClose = $('.close-menu');

const openMenu = () => {
	const body = $('body');
	body.classList.add('menu-expanded');
	btnMenuClose.classList.add('relative');
};

const closeMenu = () => {
	const body = $('body');
	body.classList.remove('menu-expanded');
	btnMenuClose.classList.remove('relative');
};

const changeHeaderColor = () => {
	const nav = $('.header');
	if (scrollY > 0) nav.classList.add('scroll');
	else nav.classList.remove('scroll');
};

const showTopButton = () => {
	const topBtn = $('#back-top-button');
	if (scrollY > 400) topBtn.classList.add('show');
	else topBtn.classList.remove('show');
};

const highlightMenu = () => {
	const menus = document.querySelectorAll('.menu-links li a');
	if (scrollY > 0 && scrollY < 700) menus[0].classList.add('active');
	else menus[0].classList.remove('active');

	if (scrollY >= 700 && scrollY < 1690) menus[1].classList.add('active');
	else menus[1].classList.remove('active');

	if (scrollY >= 1690 && scrollY < 2415) menus[2].classList.add('active');
	else menus[2].classList.remove('active');
};

const onScroll = () => {
	changeHeaderColor();
	showTopButton();
	highlightMenu();
};

btnMenuOpen.addEventListener('click', openMenu);
btnMenuClose.addEventListener('click', closeMenu);
document.addEventListener('scroll', onScroll);

console.log("Hola")

//JAVASCRIPT DEL TOOGLE LIST DEL ASIDE DE ESCRITORIO

const arrowone = document.getElementById('arrowone');
const title1 = document.querySelector('.textClickTitle1');
const listTitle1 = document.querySelector('.listTitle1');

title1.addEventListener('click', function() {
	listTitle1.classList.toggle('show');
	arrowone.classList.toggle('rotate-down');
});


const arrowtwo = document.getElementById('arrowtwo');
const title2 = document.querySelector('.textClickTitle2');
const listTitle2 = document.querySelector('.listTitle2');
title2.addEventListener('click', function() {
	listTitle2.classList.toggle('show');
	arrowtwo.classList.toggle('rotate-down');
});

const arrowthree = document.getElementById('arrowthree');
const title3 = document.querySelector('.textClickTitle3');
const listTitle3 = document.querySelector('.listTitle3');
title3.addEventListener('click', function() {
	listTitle3.classList.toggle('show');
	arrowthree.classList.toggle('rotate-down');
});

const arrowfour = document.getElementById('arrowfour');
const title4 = document.querySelector('.textClickTitle4');
const listTitle4 = document.querySelector('.listTitle4');
title4.addEventListener('click', function() {
	listTitle4.classList.toggle('show');
	arrowfour.classList.toggle('rotate-down');
});


//Funciones para mostrar divs de galería

// Obtén una referencia al botón y al div 1
var boton1 = document.getElementById("buttonaction1");
var galery1 = document.getElementById("galery1div");

// Obtén una referencia al botón y al div 2
var boton2 = document.getElementById("buttonaction2");
var galery2 = document.getElementById("galery2div");



// Agrega un evento al botón 1
boton1.addEventListener("click", function() {
  // Agrega la clase al div 1
  galery1.classList.add("mostraar");
  galery2.classList.remove("mostraar");
  galery1.classList.remove("ocultaar");
});

// Agrega un evento al botón 2
boton2.addEventListener("click", function() {
  // Agrega la clase al div 2
  galery1.classList.remove("mostraar");
  galery2.classList.add("mostraar");
  galery1.classList.add("ocultaar")
});

