var Dialogue = {

	font : 'Arial',
	text : 'Test 1,2,3',
	fontSize : '2px',
	color : 'black',
	destination : new Vector(),
	interval : 'short',
	skip : false,
	nbWords : 0,
	size : 0,
	actualSize : 0,

	initText : function(font, text, fontSize, color, destination, interval, skip){
		ctx.font = font;
		this.text = text;
		this.fontSize = fontSize;
		this.color = color;
		this.destination = destination;
		this.interval = interval;
		this.skip = skip;
		
		this.Begin();		
	},

	Begin : function(){
		this.text = this.text.split(' ');
		ctx.fillStyle = 'rgba(167, 163, 126, .4)';
		ctx.fillRect(this.destination.x, this.destination.y, this.destination.w, this.destination.h);
		// this.Continue();
	},

	Continue : function(){
		
		for (var i = 0; i < this.text.length; i++) {
			this.nextWord = this.text[i];
			this.size += ctx.measureText(this.nextWord).width;
			this.actualSize += this.size;

			if (this.size < this.destination.w + this.actualSize) {
				for (var j = 0; j < this.nextWord.length; j++) {
					
					ctx.fillText(this.nextWord[j], this.destination.x + this.size, this.destination.y + 20);
					
				}	
			}

			
		}
	},

}