var PIXI = require("/bower_components/pixi.js/bin/pixi.js");
var jQuery = require("/bower_components/jquery/dist/jquery.js");

function move( object, stage ) {
	object.position.x += object.speed.x;

	object.position.y += object.speed.y;

	if (object.position.x > stage.width) { object.speed.x = object.speed.x * -1 }
}

jQuery(function(){

	// create an new instance of a pixi stage
	var stageOptions = {
		bg: 0xdddddd,
		interactive: true
	}

	var stage = new PIXI.Stage(stageOptions.bg, stageOptions.interactive);

	// create a renderer instance.
	var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
	var target = new PIXI.Point();

	// add the renderer view element to the DOM
	document.body.appendChild(renderer.view);

	requestAnimFrame( animate );

	var texture = PIXI.Texture.fromImage("/assets/images/ball.png");
	var ball = new PIXI.Sprite(texture);
	ball.interactive = true;
	
	ball.speed = {
		x: 1,
		y: 1
	};

	ball.mousedown = function(mouseData) {
		console.log("Mouse Down!");
	};

	ball.anchor.x = 0.5;
	ball.anchor.y = 0.5;

	ball.position.x = 200;
	ball.position.y = 200;

	stage.addChild(ball);

	function animate() {
		requestAnimFrame( animate );
		ball.rotation += 0.1;
		
		move( ball, stage);

		renderer.render(stage);
	}
});

