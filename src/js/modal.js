const modal = (modalTrigger, modalSelector, animationSelector) => {
	const trigger = document.querySelectorAll(modalTrigger),
		modal = document.querySelectorAll(modalSelector),
		animationModal = document.querySelectorAll(animationSelector),
		services = document.querySelector('.services');


	function showAnimationModal(animationClass) {
		animationModal.forEach((item, i) => {
			modal.forEach(el => {
				if (el.classList.contains('active') & i >= 1) {
					item.classList.add(animationClass);
				} else {
					item.classList.remove(animationClass);
				}

			})
		});
	}

	trigger.forEach(item => {
		item.addEventListener('click', (e) => {
			if (e.target) {
				e.preventDefault();

				item.classList.toggle('active');

			modal.forEach(el => {
				el.classList.toggle('active');

			})


			if (item.classList.contains('btn')) {
				showAnimationModal('pl');
			}

			if (item.classList.contains('btn__modal')) {
				showAnimationModal('pr');
			}

			if (item.classList.contains('btn__call')) {
				showAnimationModal('pr');
			}
			}

		})
	});

	services.addEventListener('click', (event) => {
		if (event.target !== services) {
			trigger.forEach(el => {
				el.classList.remove('active')
			})

			animationModal.forEach(item => {
				item.classList.remove('pl');
				item.classList.remove('pr');
			})

			modal.forEach((el) => {
				el.classList.remove('active');
			})
		}
	});
}

export default modal;
