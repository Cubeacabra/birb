let gameBox = document.getElementById("gameBox");
let playerElement = document.getElementById("playerElement");
let hole = document.getElementById("hole");

class Player {
	constructor(e) {
		this.e = e;
		this.y = parseInt(getComputedStyle(e).top);
		this.dy = 1;
		this.d2y = 1;
		this.jumps = 0;
		this.jumping = false;
	}
	jump() {
		// this.jumping = true;
		// while (this.jumps <= 100) {
		// 	this.y -= this.dy;
		// 	this.jumps++;
		// }
		this.e.style.top = this.y + "px";

		if (this.jumps <= 15) {
			this.jumps += 1;
		} else {
			this.jumping = false;
			this.jumps = 0;
		}
	}
	gravity() {
		this.y += this.dy;
		this.e.style.top = this.y + "px";
	}
}

hole.addEventListener("animationiteration", () => {
	hole.style.top = -(Math.random() * 73 + 27) + "%";
});

let character = new Player(playerElement);

setInterval(
	(obj) => {
		if (!obj.jumping && obj.y < 484) {
			let top = obj.y + 2;
			obj.y = top;
			if (obj.y >= 484) {
				obj.y = 484;
			}
			obj.gravity();
		} else if (obj.jumping) {
			let top = obj.y - 3;
			obj.y = top;
			if (obj.y <= 0) {
				obj.y = 0;
			}
		}
		obj.jump();
	},
	10,
	character
);

document.addEventListener("click", () => {
	character.jumping = true;
	character.jumps = 0;
});
