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


var canvasElement = document.getElementById("aktivitetChart");


var config	= {
	type: "bar",
	data: {
	labels: ["08:00 - 10:00", "10:00 - 12:00", "12:00 - 14:00", "14:00 - 16:00", "16:00 - 18:00"],
	 datasets: [{label:"Antal kunder i salongen",
	data:[2,4,5,3,2],
	backgroundColor:[
		"rgba(75, 192, 192, 0.2)",//green
		"rgba(225, 159, 64, 0.2)", //orange
		"rgba(255, 99, 132, 0.2)",//red
		"rgba(225, 159, 64, 0.2)", //orange
		"rgba(75, 192, 192, 0.2)",//green
	],
	borderColor:[
		"rgba(75, 192, 192, 1)",//green
		"rgba(225, 159, 64, 1)", //orange
		"rgba(255, 99, 132, 1)",//red
		"rgba(225, 159, 64, 1)", //orange
		"rgba(75, 192, 192, 1)",//green
	],
	borderWidth:1,
}],
	},
};

var aktivitetChart = new Chart(canvasElement, config)