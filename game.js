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
		this.jumping = true;
		while (this.jumps <= 100) {
			this.y -= this.dy;
			this.jumps++;
		}
		this.e.style.top = this.y + "px";

		this.jumps = 0;
		this.jumping = false;
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
			let top = obj.y + 3;
			obj.y = top;
			if (obj.y >= 484) {
				obj.y = 484;
			}
			obj.gravity();
		}
	},
	10,
	character
);

document.addEventListener("click", () => {
	character.jump();
});
