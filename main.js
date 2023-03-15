import './normalize.css';
import './style.css';

const $ = (el) => document.querySelector(el);
const btnMenuOpen = $('.open-menu');
const btnMenuClose = $('.close-menu');

const openMenu = () => {
	const body = document.querySelector('body');
	body.classList.add('menu-expanded');
	btnMenuClose.classList.add('relative');
	// element.classList.toggle("mystyle");
};

const closeMenu = () => {
	const body = document.querySelector('body');
	body.classList.remove('menu-expanded');
	btnMenuClose.classList.remove('relative');
};

btnMenuOpen.addEventListener('click', openMenu);
btnMenuClose.addEventListener('click', closeMenu);
