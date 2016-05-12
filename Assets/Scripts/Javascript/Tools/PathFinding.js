print = function(msg) {console.log(msg)};
function PathFinding(map) {
    
    this.map = map;
    
    this.Node = function(pos, end){
        
        var node = {
            x : pos.x,
            y : pos.y,
            cost : 0,
            end : end,
            heuristic : 0
            
        }
        
        node.heuristic = Math.getDistanceManhattan(pos, node.end) + node.cost;
        // print( node.heuristic);
        //     console.log(node.heuristic);
        return node;
    };
    
    this.findPath = function(start, end, map) {
        this.openList = [];
        this.closedList = [];
        this.map = map;
        
        this.start = start;
        this.end = end;
        
        this.startPath = this.Node(this.start, this.end);
        this.endPath = this.Node(this.end, this.end);
        this.openList.push(this.startPath);
        
        for (var i = 0; i < this.openList.length; i++) {
            var elem = this.openList[i];
            if (elem.x == this.endPath.x && elem.y == this.endPath.y) {
                console.log('ici');
                return closePath(this.openList);
                
            } else{
                for (var i = 0; i < this.openList.length; i++) {
                    
                    var elem = this.openList[i];
                    
                    var neighbours = this.findNeighbours(elem, this.map);
                    
                    for (var j = 0; j < neighbours.length; j++) {
                        
                        // console.log(neighbours[j]);
                        var cost = this.compareNode(elem, neighbours[j]);
                        // console.log(cost);
                        if(cost == 1){
                            console.log('push ta mère');
                            neighbours[j].cost = elem.cost + 1;
                            this.openList.push(neighbours[j]);
                            this.closedList.push(elem);
                        }
                    }
                }
            } 
        }
    };
    
    this.findNeighbours = function(pos, map){
        
        this.x = pos.x;
        this.y = pos.y;
        this.map = map;
        this.col = (this.map.length / 10) / 2;
        this.neighbours = [];
        
        this.index = indexFromCoord;   
             
        var N = this.index(this.x, (this.y - 1), this.col);
        var S = this.index(this.x, (this.y + 1), this.col);
        var E = this.index((this.x + 1), this.y, this.col);
        var W = this.index((this.x - 1), this.y, this.col);
        console.log(W);
        
        if(!this.map[N].isObstacle){
            this.neighbours.push(this.map[N]);
        }
        if(!this.map[S].isObstacle){
            this.neighbours.push(this.map[S]);
        }
        if(!this.map[E].isObstacle){
            this.neighbours.push(this.map[E]);
        }
        if(!this.map[W].isObstacle){
            this.neighbours.push(this.map[W]);
        }
        
        return this.neighbours;
    }

    
    this.compareNode = function(node1, node2){
        if(node1.heuristic < node2.heuristic){
            return 1;
        } else if(node1.heuristic == node2.heuristic){
            return 0;
        } else{
            return -1;
        }
    };
    
    function closePath(elemList){
        this.elemList = elemList.reverse();
        return this.elemList;
    }
    
}