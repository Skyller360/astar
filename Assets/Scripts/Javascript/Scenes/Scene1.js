/**	**** Create a new Scene **** 
*
*	@step 1							Copy the content of this file in a new .js document.
*   ----------------------------------------------------------------------------------------------------------------------------
*	@step 2							Save the new file in Assets/Javascript/Scenes/NameOfYourScene.js .
*   ----------------------------------------------------------------------------------------------------------------------------
*	@step 3                      	In the index.html add below this comment <!-- Scene --> the line: 
*                    "<script type="text/javascript" src="Assets/Scripts/Javascript/Scenes/NameOfYourGameObject.js"></script>"
*	----------------------------------------------------------------------------------------------------------------------------
*	@step 4						    For create a new scene, use this instruction: "new Scene()".
*/

/*	**** How to make the setup of a Scene ****
*	
*	@property name 																											{string} 			 
*	The name of the scene.
*	--------------------------------------------------------------------------------------------------------------------------------
*	@property GameObjects 																				   {array[GameObject1, ...]} 			 
*	All the GameObject of the scene	
*
*/

/*	**** Scene's Methods ****
*
*	@method Awake()									
*	Called at the instruction new Scene().
*	--------------------------------------------------------------------------------------------------------------------------------
*	@method Start()									
*	Called at the first use of scene in game.
*	--------------------------------------------------------------------------------------------------------------------------------
*	@method Update()								
*	Called each frame,code game is here.
*	--------------------------------------------------------------------------------------------------------------------------------
*	@method GUI()
*	Called each frame, code all the GUI here.
*/

/* **** For launch Scene ****
*
*	To load your scene, use this instruction: "Application.LoadLevel(LevelName)".
*/
function Scene1() {
	this.name = "Scene1";
	this.GameObjects =[];
	var rocks = [];
	var imageName = ['herve','vincianne', 'boris', 'cherif', 'teddy', 'christian', 'frederic'];
	var count = 0;
	var spikes = [];

	this.started = false;

	this.Awake = function() {
		// console.clear();
		console.log('%c System:Scene ' + this.name + " Created !", 'background:#222; color:#bada55');

	}
	this.Start = function() {
		if (!this.started) {

			Time.SetTimeWhenGameBegin();
			Time.SetTimeWhenSceneBegin();

			var boy = new GameObject1();

			this.GameObjects[0] = boy;


			
			// operation start
			this.started = true;
			console.log('%c System:Scene ' + this.name + " Started !", 'background:#222; color:#bada55');
			Time.SetTimeWhenSceneLoaded();
		}
		this.Update();
	}
	this.Update = function() {
		if (!Application.GamePaused) {
			
			// this.createSpike();

			if (count % 13 == 0) {
				this.createRock(false);
			}
			if (count % 45 == 0) {
				this.createRock(true);
			}

			for (var i = 0; i < this.GameObjects.length; i++) {
				this.GameObjects[i].Start();
				// Debug.debugObject(this.GameObjects[i]);
			}

			for (var i = 0; i < rocks.length; i++) {

				if (rocks[i].dead) {
					rocks.splice(i,1);
				}




				if (this.GameObjects[0]) {
					if(Physics.CheckCollision(rocks[i].Physics.Collider, this.GameObjects[0].Physics.Collider)){
						this.GameObjects.splice(0,1);
						Scenes['Scene1'] = new Scene1();
						Application.LoadedScene = Scenes["Scene1"];
					}
				}
			}


			for (var i = 0; i < spikes.length; i++) {
				if(Physics.CheckCollision(spikes[i].Physics.Collider, this.GameObjects[0].Physics.Collider)){
						this.GameObjects.splice(0,1);
						Scenes['Scene1'] = new Scene1();
						Application.LoadedScene = Scenes["Scene1"];
					}
			}

			count++;
			
		}
		this.GUI();
	}
	this.GUI = function() {
		if (!Application.GamePaused) {
			this.showScore();
		} else {
			// Show pause menu
		}
	}

	this.createRock = function(speed){

		var rndPos1 = Math.Random.RangeInt(0,290,true);
		var rndPos2 = Math.Random.RangeInt(291,600,true);

		var rndPos = Math.Random.RangeInt(rndPos1,rndPos2,true);
		var rndImage = Math.Random.RangeInt(0,imageName.length - 1,true);

		if (speed) {
			var rndVel = Math.Random.RangeInt(10,18,true);
			var rock = new Rock(rndPos, imageName[rndImage], rndVel);	
		} else{
			var rock = new Rock(rndPos, imageName[rndImage]);	
		}
		
		rocks.push(rock);
		this.GameObjects.push(rock);
	}

	this.createSpike = function(){
		var spike = new Spike();	
		spikes.push(spike);
		this.GameObjects.push(spike);
	}

	this.showScore = function(){
		ctx.font = '25px Arial';
		ctx.fillStyle = 'black';
		var timeScene = Time.GetTimeSinceSceneBegin()/100 |0;
		ctx.fillText('Score : '+timeScene, 0, 20);
		
	}

	this.Awake()
}