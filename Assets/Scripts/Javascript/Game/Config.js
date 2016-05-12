var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var Scenes = {};
var gravity = new Vector();
gravity.y = -9.81;

var Application = {
	LoadedScene: null,
	GamePaused: false,
	debugMode: false
};

var ImagesLoaded = 0;
var WalkableTiles = [];

var ImagesPath = [
	{ name:"boy",path: "PlanetCute/boris.png"},
	{ name:"maskRound",path: "Masks/round.gif"},
	{ name:"maskRectangle",path: "Masks/rectangle.png"},
	{ name:"Boy",path: "PlanetCute/Character Boy.png"},
	{ name:"spike",path: "PlanetCute/spike.png"},
	{ name:"herve",path: "PlanetCute/herve.png"},
	{ name:"vincianne",path: "PlanetCute/vincianne.png"},
	{ name:"boris",path: "PlanetCute/boris.png"},
	{ name:"cherif",path: "PlanetCute/cherif.png"},
	{ name:"teddy",path: "PlanetCute/teddy.png"},
	{ name:"christian",path: "PlanetCute/christian.png"},
	{ name:"frederic",path: "PlanetCute/frederic.png"},
];
var Images = {};
