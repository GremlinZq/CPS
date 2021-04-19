const readMore = (textMenuSelector,btnSelector, animationClass) => {
	const readMoreBtn = document.querySelectorAll(btnSelector),
		  textMenu = document.querySelectorAll(textMenuSelector)


	readMoreBtn.forEach(element => {
		element.addEventListener('click', (e)=> {
			if (e.target) {
				e.preventDefault();

				textMenu.forEach(el => {
					el.classList.toggle(animationClass)
				})
			}
		})
	});
};

export default readMore;
