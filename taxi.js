const blocksAway = (directions) => {
let x = 0;
let y = 0;
for (let i = 0; i < directions.length; i+=2){
  if (directions[i] === "right" && i === 0){
    x += directions[i+1];
  } else if (directions[i] === "left" && i > 0 && directions[i-2] === "right") {
    y += directions[i+1];
  } else if (directions[i] === "left" && i > 0 && directions[i-2] === "left"){
    x -= directions[i+1];
  } else if (directions[i] === "left" && i === 0){
    y += directions[i+1];
  } else if (directions[i] === "right" && i > 0 && y > 0 && directions[i-2] === "right"){
    y -= directions[i+1];
  } else if (directions[i] === "right" && i > 0 && directions[i-2] === "left"){
    x += directions[i+1];
  } else if (directions[i] === "right" && i > 0 && y === 0 && directions[i-2] === "right"){
    x-= directions[i+1];
  }
}
return { east: x, north: y };
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));