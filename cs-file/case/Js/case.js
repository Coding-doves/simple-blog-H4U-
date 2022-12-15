//for menu, onscroll, change nav background
window.addEventListener('scroll', function () {
	let header = document.querySelector('nav');
	let windowPosition = window.scrollY > 0;
	header.classList.toggle('scrolling-active', windowPosition);
});

//for menu, onscroll, change dropdown color
window.addEventListener('scroll', function () {
	let drop = document.querySelector('.dropdown-item');
	let windowPosition = window.scrollY > 0;
	drop.classList.toggle('scroll-active', windowPosition);
});
