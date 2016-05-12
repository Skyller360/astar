window.RequestAnimationFrame = (function(){
    return  window.requestAnimationFrame         || 
            window.webkitRequestAnimationFrame   || 
            window.mozRequestAnimationFrame      || 
            window.oRequestAnimationFrame        || 
            window.msRequestAnimationFrame       || 
    function(callback, element){
        window.setTimeout(callback, 1000 / 60);
    };
})();



/********************
		Event
*********************/
window.addEventListener("keydown",Input.KeyDown);
window.addEventListener("keyup",Input.KeyUp);
window.addEventListener("mouseup",Input.MouseUp);
window.addEventListener("mousedown",Input.MouseDown);
window.addEventListener("mousemove",Input.MouseMove);


/********************
		Start
*********************/

<<<<<<< HEAD
Time.SetTimeWhenGameBegin();
Scenes["Scene"] = new Loader();
Application.LoadedScene = Scenes["Scene"];
=======

Scenes["Scene1"] = new Scene1();
Application.LoadedScene = Scenes["Scene1"];
>>>>>>> 3ba4f156a33e21e761b0da14951ef55313512130

// Image Loader
function LoadImages() {
	//Images[name].src = "Assets/Graphics" + ImagesPath[name].path;
	var count = 0;
	for (var i = 0; i < ImagesPath.length; i++) {
		var name = ImagesPath[i].name;
		Images[name] = new Image();
		Images[name].src = "Assets/Graphics/" + ImagesPath[i].path;
		Images[name].onload = function() {
<<<<<<< HEAD
			count ++;
			Scenes.Scene.imageLoaded = count;
			// Scene.loader.imageLoaded = count
=======
			// ImagesLoaded ++;
			count++;
			// Scenes.loader.imageLoaded = imageLoaded;
			Scenes.Scene1.imageLoaded = count;
>>>>>>> 3ba4f156a33e21e761b0da14951ef55313512130
			if (count == ImagesPath.length) {
				// All Image are Loaded
				ImageLoaded(count);
			}
		}
	}
}
function ImageLoaded(imageLoaded) {
	console.log('%c System: ' + imageLoaded + " Loaded !", 'background:#222; color:#10ADED');
<<<<<<< HEAD
	/*			Here? for wait the download of loader*/
	Scenes["GridScene"] = new GridScene();
	Application.LoadedScene = Scenes["GridScene"];
	
}

// canvas.width = window.innerWidth;
// canvas.heigth = window.innerHeight;

=======
}

>>>>>>> 3ba4f156a33e21e761b0da14951ef55313512130
LoadImages();
Run();