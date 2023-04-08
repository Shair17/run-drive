import './normalize.css';
import './style.css';

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

// Medir tamaño del form de inicio

const bookcontainer = document.getElementById('bookcont');
const heigthbookcont = bookcontainer.offsetHeight;

const blankspace = document.getElementById('blankzone');
blankspace.style = `height: ${heigthbookcont / 1.3}px`;

// Añadir top a book containter

const homeelement = document.getElementById('homesec');
const heighthome = homeelement.offsetHeight;

const calculartop = (x = 0) => {
	return x / 2.4;
};

console.log('La altura del div es ' + heighthome);
console.log('La altura dividida es ' + calculartop(heighthome));

bookcontainer.style = `top: ${calculartop(heighthome)}px `;
