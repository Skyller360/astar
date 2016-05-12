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
function GridScene() {
	this.name = "GridScene";
	this.GameObjects =[];
    this.rows = 100;
    this.columns = 100;
    this.tiles = [];
	this.started = false;
    
    
    this.Tile = function(x,y,block){
        this.x = x;
        this.y = y;
        this.sizeTile = 10;
        
        
        this.draw = function(){
            ctx.strokeStyle = 'black';
            if(block){
                ctx.fillStyle = 'black';    
            }
            else{
                ctx.fillStyle = 'white';
            }
            
            ctx.beginPath();
            ctx.rect(this.x * this.sizeTile, this.y * this.sizeTile, this.sizeTile, this.sizeTile)
            ctx.fill();
            ctx.stroke();    
        }
    }

	this.Awake = function() {
		console.clear();
		console.log('%c System:Scene ' + this.name + " Created !", 'background:#222; color:#bada55');

	}
	this.Start = function() {
		if (!this.started) {
			Time.SetTimeWhenSceneBegin();          
            Grid.init();
            console.log('ici');
			// this.GameObjects.push();
			this.started = true;
			console.log('%c System:Scene ' + this.name + " Started !", 'background:#222; color:#bada55');
			Time.SetTimeWhenSceneLoaded();
		}
		this.Update();
	}
	this.Update = function() {
		if (!Application.GamePaused) {
            
			for (var i = 0; i < this.GameObjects.length; i++) {
				this.GameObjects[i].Start();
			}
            
           Grid.draw();
           
           if(Input.MouseClick){
            Grid.getCell();    
           }
		   
		   var path = new PathFinding(Grid.cells);
		   var a = { x: 1, y : 1 };
		   var b = { x: 2, y : 2};
		   path.findPath(a, b, Grid.cells);
           
            
		}
		this.GUI();
	}
	this.GUI = function() {
		if (!Application.GamePaused) {
			//Show UI
		} else {
			// Show pause menu
		}
	}

	this.Awake()
}