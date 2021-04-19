import '../scss/style.scss';
import modal from './modal.js';
import './scroll.js';
import './readMore.js';
import readMore from './readMore.js';

modal('.btn', '.burger', '.container');
modal('.btn__modal', '.modal', '.container');
modal('.btn__call', '.modal__call', '.container');
readMore('.services__container','.readMoreBtn', 'services__container_go');
readMore('.clients__container','.readMoreCard', 'services__container_go');

const swiper = new Swiper('.swiper-container', {
	spaceBetween: 16,
	pagination: {
		el: '.swiper-pagination',
	},
});

