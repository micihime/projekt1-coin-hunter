// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/
var monster = document.getElementById("panacek"); //var monster = document.querySelector('#panacek');
var x = 0;
var y = 0;

changeLeftMonsterCoord(0);
changeTopMonsterCoord(0);

function changeXMonsterCoord(val) {    
	monster.style.left = val + "px";
}

function changeYMonsterCoord(val) {    
	monster.style.top = val + "px";
}

function moveMonsterLeft() {
	console.log("left");

}

function moveMonsterRight() {
	console.log("right");

}

function moveMonsterUp() {
	console.log("up");

}

function moveMonsterDown() {
	console.log("down");

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