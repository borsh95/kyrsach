let counters = document.querySelectorAll('.disciplines__item-counter circle');

counters.forEach((item, index, arr) => {
	item.style.strokeDashoffset = `calc(176 - (176 * (${++index / arr.length * 100}) / 100))`;
	console.log(176 * (index / arr.length * 100) / 100)
})


