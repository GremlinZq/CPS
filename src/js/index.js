import '../scss/style.scss';
import './scroll.js';
import modal from './modal.js';

modal('.btn', '.burger', '.container');
modal('.btn__modal', '.modal', '.container');
modal('.btn__call', '.modal__call', '.container');

const swiper = new Swiper('.swiper-container', {
	spaceBetween: 16,
	pagination: {
		el: '.swiper-pagination',
	},
});