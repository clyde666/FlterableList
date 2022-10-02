let filterInput = document.getElementById('filterInput');
let ul = document.getElementById('names');
let li = ul.querySelectorAll('li.colection-item');

filterInput.addEventListener('keyup', filterNames);

// Filter Names
function filterNames () {
	let filterValue = document.getElementById('filterInput').value.toUpperCase()
	
	// Loop througt collection items
	for (var i = 0; i < li.length; i++) {
		let a = li[i].getElementsByTagName('a')[0]

		if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
			li[i].style.display = ''
		}else {
			li[i].style.display = 'none';
		}
	};
}
