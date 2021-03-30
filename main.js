// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/
var monster = document.getElementById("panacek"); //var monster = document.querySelector('#panacek');
var x = 0;
var y = 0;

changeXMonsterCoord(0);
changeYMonsterCoord(0);

function changeXMonsterCoord(val) {    
	monster.style.left = val + "px";
}

function changeYMonsterCoord(val) {    
	monster.style.top = val + "px";
}

function moveMonsterLeft() {
	console.log("left");
	x -= 10;
	changeXMonsterCoord(x);
}

function moveMonsterRight() {
	console.log("right");
	x += 10;
	changeXMonsterCoord(x);
}

function moveMonsterUp() {
	console.log("up");
	y -= 10;
	changeYMonsterCoord(y);
}

function moveMonsterDown() {
	console.log("down");
	y += 10;
	changeYMonsterCoord(y);
}

// sem začni psát svůj program
window.addEventListener('keydown', function (evt) {
	switch(evt.keyCode) {
		case 37: //left arrow
			moveMonsterLeft();
			break;
		case 38: //up arrow
			moveMonsterUp();
			break;
		case 39: //right arrow
			moveMonsterRight();
			break;
		case 40: //down arrow
			moveMonsterDown();
			break;
		default:
			console.log("other key")
	  };
});