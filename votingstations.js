//Your function will receive an array of stations, 
//where each station itself is an array with a name, a capacity, and a venue type.
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
let goodStations = [];

const chooseStations = function (stations) {
  // Your code in here ...
  for(const station of stations) {
    const capacity = station[1];
    const type = station[2];
    if ((capacity >= 20) && (type === 'school' || type === 'community centre')) {
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}
console.log(chooseStations(stations));



