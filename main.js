// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/
var monster = document.getElementById("panacek"); //var monster = document.querySelector('#panacek');
var x, y, minX, minY, maxX, maxY, stepSize;
initialize(0,0);

function initialize(monsterX, monsterY) {
	minX = 0;
	minY = 0;
	maxX = 100;//window.innerWidth;
	maxY = 100;//window.innerHeight;
	stepSize = 10; //pixels
	x = monsterX;
	y = monsterY;
	setMonsterX(monsterX);
	setMonsterY(monsterY);
}

function setMonsterX(val) {    
	monster.style.left = val + "px";
}

function setMonsterY(val) {    
	monster.style.top = val + "px";
}

function modifyMonsterX(val) {
	x += val;   
	setMonsterX(x);
}

function modifyMonsterY(val) {
	y += val;
	setMonsterY(y);
}

function moveMonsterLeft() {
	if ((x - stepSize) >= minX) { 
		modifyMonsterX(-stepSize);
	}
}

function moveMonsterRight() {
	if ((x + stepSize) <= maxX) { 
		modifyMonsterX(stepSize);
	}
}

function moveMonsterUp() {
	if ((y - stepSize) >= minY) {
		modifyMonsterY(-stepSize);
	}
}

function moveMonsterDown() {
	if ((y + stepSize) <= maxY) {
		modifyMonsterY(stepSize);
	}
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