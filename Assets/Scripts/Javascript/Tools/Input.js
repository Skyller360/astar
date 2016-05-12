var Input = {
	KeysDown: [],
	MousePosition: new Vector(),
	KeyDown: function(e) {
		// e.preventDefault();
		// e.stopPropagation();
		Input.KeysDown[e.keyCode] = true;
	},
	KeyUp: function(e) {
		delete Input.KeysDown[e.keyCode];
	},
	MouseDown: function(e) {
<<<<<<< HEAD
		var rect = canvas.getBoundingClientRect();
		Input.MouseClick = true;
		Input.MouseLongClick = true;
		Input.MouseReload = 1;		
		Input.MousePosition.x = (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width | 0;
		Input.MousePosition.y = (e.clientY - canvas.offsetTop) / (rect.bottom - rect.top) * canvas.height | 0;
	},
	MouseMove: function(e) {
		// var rect = canvas.getBoundingClientRect();
		// Input.MousePosition.x = (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width | 0;
		// Input.MousePosition.y = (e.clientY - canvas.offsetTop) / (rect.bottom - rect.top) * canvas.height | 0;
=======
		Input.MouseClick = true;
		Input.MouseLongClick = true;
		Input.MouseReload = 1;		
	},
	MouseMove: function(e) {
		var rect = canvas.getBoundingClientRect();
		Input.MousePosition.x = (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width | 0;
		Input.MousePosition.y = (e.clientY - canvas.offsetTop) / (rect.bottom - rect.top) * canvas.height | 0;
>>>>>>> 3ba4f156a33e21e761b0da14951ef55313512130
	},
	MouseUp: function(e) {
		Input.MouseClick = false;
		Input.MouseLongClick = false;
		Input.MouseReload = 0;
		Input.MouseDraging = false;
		Input.MouseDraggedElement = null;
	}
<<<<<<< HEAD

}

=======
}
>>>>>>> 3ba4f156a33e21e761b0da14951ef55313512130
