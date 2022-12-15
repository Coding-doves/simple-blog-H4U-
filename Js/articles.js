
//for menu, onscroll, change nav background
window.addEventListener('scroll', function () {
	let header = document.querySelector('nav');
	let windowPosition = window.scrollY > 0;
	header.classList.toggle('scrolling-active', windowPosition);
});


const Top = document.querySelector(".top");

window.addEventListener( "scroll", () => {
	if(window.pageYOffset > 100) {
		Top.classList.add("activee");
	}else{
		Top.classList.remove("activee");
	}
});