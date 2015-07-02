function setup() {
	createCanvas(1720, 400);
	noStroke();
	c = color(0, 126, 255, 10);
	

	var rectSize = 3;
	var xStart = 10;
	var yStart = 60;

	for (var n = 0; n < 10; n++) {
		for (var i = 0; i < 172; i++) {
			c = color(0, 126, 255, random(10));
			fill(c);
			rect(xStart+i*rectSize, yStart+random(-rectSize*n/100, rectSize*n/100), rectSize, rectSize);
		}
	}


}

function draw() {
	
	



}