const gridContainer = document.getElementById('myGrid');
const gridSize = {
	width: gridContainer.clientWidth,
	height: gridContainer.clientHeight
}
const boxCount = function() {
	return (gridSize.width/25)*(gridSize.height/25);
}

for (i = 0; i < boxCount(); i++) {
	var newDiv = document.createElement('div');
	newDiv.id = 'box'+(i+1);
	newDiv.className = 'box';
	gridContainer.append(newDiv);
}
const boxes = document.getElementsByClassName('box');
const boxHover = function(i) {
	boxes[i].addEventListener('mouseenter', function() {
		this.className += ' primary';
		boxes[i+1].className += ' adjacent';
		boxes[i-1].className += ' adjacent';
		boxes[i+24].className += ' corner';
		boxes[i-24].className += ' corner';
		boxes[i+25].className += ' adjacent';
		boxes[i-25].className += ' adjacent';
		boxes[i+26].className += ' corner';
		boxes[i-26].className += ' corner';
	}, false);
	boxes[i].addEventListener('mouseout', function() {
			boxes[i].classList.remove('primary');
			boxes[i+1].classList.remove('adjacent');
			boxes[i-1].classList.remove('adjacent');
			boxes[i+24].classList.remove('corner');
			boxes[i-24].classList.remove('corner');
			boxes[i+25].classList.remove('adjacent');
			boxes[i-25].classList.remove('adjacent');
			boxes[i+26].classList.remove('corner');
			boxes[i-26].classList.remove('corner');
	}, false);

}
for (i = 0; i < boxes.length; i++) {
	boxHover(i);
	// add class on hover
	//boxes[i].addEventListener('mouseenter', function(event){
		//this.className += ' primary';
		//console.log(this);
		//console.log(i);
		//console.log(boxes);
	//})
	// remove class on mouse out
	//boxes[i].addEventListener('mouseout', function(event){
		//this.classList.remove('primary');
	//})
};
const box = gridContainer.querySelector('.box');
