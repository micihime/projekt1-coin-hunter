// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/

// sem začni psát svůj program
window.addEventListener('keydown', function (evt) {
	console.log(evt.keyCode);
	switch(evt.keyCode) {
		case 37: //left arrow
			console.log("left");
			break;
		case 38: //up arrow
			console.log("up");
			break;
		case 39: //right arrow
			console.log("right");
			break;
		case 40: //down arrow
			console.log("down");
			break;
		default:
			console.log("other key")
	  };
});