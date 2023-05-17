const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
	hamburger_icon.innerText = hamburger_icon.innerText === 'menu' 
		? 'close'
		: 'menu';
	
	mobile_menu.classList.toggle('is-open');
})

const heartDOM = document.querySelector('.js-heart');

let liked = false;

heartDOM.onclick = (event) => { 
	liked = !liked; 
	
	const target = event.currentTarget;
	
	if (liked) {
		target.classList.remove('far');
		target.classList.add('fas', 'pulse');
	} else {
		target.classList.remove('fas');
		target.classList.add('far');
	}
}

heartDOM.addEventListener('animationend', (event) => {
	event.currentTarget.classList.remove('pulse');
})
