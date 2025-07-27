let gameBox = document.getElementById("gameBox");
let playerElement = document.createElement("div");
playerElement.setAttribute("class", "playerElemenet");

class Player {
	constructor(e) {
		this.e = e;
		this.x = 100;
		this.y = 100;
		this.dy = 0;
	}
	jump() {
		this.y += 100;
	}
}

function runGame() {}
