Array.prototype.parse2D= function() {
    const rows=[]
    for(let i=0; i<this.length; i+=16){
        rows.push(this.slice(i, i+16))
    }
    return rows
}
    
Array.prototype.createObjectsFrom2D = function(){
    const objects = []
    this.forEach((row,  y)=>{
        row.forEach((symbol, x) => {
          if (symbol === 292 || symbol === 250){
              //push a new collision into  collisionblocks array
              objects.push(new CollisionBlock({
                  position:{
                      x:x*64,
                      y:y*64,
                  },
              }))
          }
        })
      })
      return objects
}

function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


