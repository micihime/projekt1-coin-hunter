// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/
var monster = document.getElementById("panacek"); //var monster = document.querySelector('#panacek');
var coin = document.getElementById("mince");
var x, y, stepSize; //monster variables
var coinX, coinY; //coin variables
var minX, minY, maxX, maxY, score; //game plan variables
initialize(100,0);

function initialize(monsterX, monsterY) {
	minX = 0;
	minY = 0;
	maxX = 500;//window.innerWidth;
	maxY = 500;//window.innerHeight;
	stepSize = 10; //pixels
	score = 0;
	x = monsterX;
	y = monsterY;
	setMonsterX(monsterX);
	setMonsterY(monsterY);
	placeCoin();
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
	monster.src = "obrazky/panacek-vlevo.png";
	if ((x - stepSize) >= minX) { 
		modifyMonsterX(-stepSize);
	}
}

function moveMonsterRight() {
	monster.src = "obrazky/panacek-vpravo.png";
	if ((x + stepSize) <= maxX) { 
		modifyMonsterX(stepSize);
	}
}

function moveMonsterUp() {
	monster.src = "obrazky/panacek-nahoru.png";
	if ((y - stepSize) >= minY) {
		modifyMonsterY(-stepSize);
	}
}

function moveMonsterDown() {
	monster.src = "obrazky/panacek.png";
	if ((y + stepSize) <= maxY) {
		modifyMonsterY(stepSize);
	}
}

function placeCoin() {
	coinX = Math.floor(Math.random() * (maxX - coin.width));
	coinY = Math.floor(Math.random() * (maxY - coin.height));
	coin.style.left = coinX + "px";
	coin.style.top= coinY + "px";
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