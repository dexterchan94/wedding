$(document).ready(() => {
	$('.topnav .icon').on('click', () => {
		let navElement = document.getElementById('nav');
		if (navElement.className === 'topnav') {
			navElement.className += ' responsive';
			$('.nav-right').slideDown();
		} else {
			$('.nav-right').slideUp(() => {
				console.log('nav closed');

				navElement.className = 'topnav';
			});
		}
	});

	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function(e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
});
