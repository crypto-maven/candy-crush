document.addEventListener("DOMContentLoaded", () => {
	const grid = document.querySelector(".grid");
	const width = 8;
	const squares = [];

	const candyColors = ["red", "yellow", "orange", "purple", "green", "blue"];
	// create board
	function createBoard() {
		for (let i = 0; i < width * width; i++) {
			const square = document.createElement("div");
			square.setAttribute("draggable", true);
			square.setAttribute("id", i);
			let randomColor = Math.floor(Math.random() * candyColors.length);
			square.style.backgroundColor = candyColors[randomColor];
			grid.appendChild(square);
			squares.push(square);
		}
	}
	createBoard();

	// drag the candies
	squares.forEach((square) => square.addEventListener("dragstart", dragStart));
	squares.forEach((square) => square.addEventListener("dragend", dragEnd));
	squares.forEach((square) => square.addEventListener("dragsover", dragOver));
	squares.forEach((square) => square.addEventListener("dragcenter", dragEnter));
	squares.forEach((square) => square.addEventListener("dragleave", dragLeave));
	squares.forEach((square) => square.addEventListener("drop", dragDrop));

	function dragStart() {
		console.log(this.id, "dragstart");
	}
	function dragOver() {
		console.log(this.id, "dragover");
	}
	function dragEnter() {
		s;
		console.log(this.id, "dragenter");
	}
	function dragLeave() {
		console.log(this.id, "dragleave");
	}
	function dragEnd() {
		console.log(this.id, "dragend");
	}
	function dragDrop() {
		console.log(this.id, "dragdrop");
	}
});
