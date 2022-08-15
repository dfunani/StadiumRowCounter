let count = document.getElementById("count");
let saved = document.getElementById('saved-report');
count.innerHTML = 0;
saved.innerHTML = 'Rows Counted: ';
peoplePerRow = 1000;
let total = document.getElementById('total-report');
function increment() {
	count.innerHTML++;
}

function save() {
	if (saved.innerHTML === 'Rows Counted: ') {
		saved.innerHTML += count.innerHTML.toString();
		total.innerHTML = 0
	}
	else {
		saved.innerHTML += ' - ' + count.innerHTML.toString();
	}
	total.innerHTML = parseInt(total.innerHTML) + parseInt(count.innerHTML * peoplePerRow);
	count.innerHTML = 0;
}