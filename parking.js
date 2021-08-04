const spots = [
  // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
];

const vehicle = 'regular';

const whereCanIPark = (spots, vehicle) => {
  // regular car park in regular spots
  // small car park in regular, small
  // Motorcylces can park in regular, small or motorcycle parkings.
  for (let y = 0; y < spots.length; y++){
    for (let x = 0; x < spots[y].length; x++){
      const spot = spots[y][x];
      if (vehicle === 'regular'){
        if (spot === 'R'){
          return [x,y];
        }
      } else if (vehicle === 'small'){
        if (spot === 'S' || spot === 'R'){
          return [x,y];
        }
      } else if (vehicle === 'motorcycle'){
        if (spot === 'M' || spot === 'R' || spot === 'S'){
          return [x,y];
        }

      }
    }
  }
  return false;
}

const result = whereCanIPark(spots, vehicle);
console.log(result);