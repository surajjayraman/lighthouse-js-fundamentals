const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] ;

const finalPosition = function (moves) {
  // Your code in here ...
  let x = 0;
  let y = 0;
  let position = [x,y];

  for(let i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      y++;
    } else if (moves[i] === "south"){
      y--;
    } else if (moves[i] === "east"){
      x++;
    } else if (moves[i] === "west"){
      x--;
    }
  }
  position[0] = x;
  position[1] = y;

  return position;
}


console.log(finalPosition(moves));

