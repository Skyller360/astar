var Grid = {
	rows : 0,
	columns : 0,
	cells : [],
	cellSize : {
		height : 0,
		width : 0
	},
	isObstacle : false,

	init : function(rows, columns, width, height) {
		this.rows = rows || 20;
		this.columns = columns || 20;
		this.cellSize.width = width || canvas.width / this.columns;
		this.cellSize.height = height || canvas.height / this.rows;
		var isObstacle;
        
		for (var x = 0; x < this.columns; x++) {
			for (var y = 0; y < this.rows; y++) {
				isObstacle = false;
				if (Math.Random.RangeInt(0,4,true) == 0) {
					isObstacle = true;
				}
				this.cells.push(new Cell(x * this.cellSize.width, y * this.cellSize.height, "black", isObstacle))
			}
		}
	},

	draw : function() {
		this.cells.forEach(c => c.draw());
	},
    
    getCell : function() {
        if (Input.MousePosition.x != undefined) {
            var coord = new Vector();
            coord.x = (Input.MousePosition.x / this.cellSize.width | 0) + 1;
            coord.y = (Input.MousePosition.y / this.cellSize.height | 0) + 1
            console.log(coord);
        }
    }
}

function Cell(x,y, color = "black", isObstacle = false) {
	this.x = x;
	this.y = y;
	this.color = color;
	this.isObstacle = isObstacle;
	this.draw = function (size) {
		if (isObstacle) {
			ctx.fillStyle = color;
			ctx.fillRect(this.x, this.y, Grid.cellSize.width, Grid.cellSize.height);
		}
		ctx.strokeStyle = color;
		ctx.strokeRect(this.x, this.y, Grid.cellSize.width, Grid.cellSize.height);
	}
}