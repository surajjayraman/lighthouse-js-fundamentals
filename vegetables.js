const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const judgeVegetable = (veggies, metric) => {
  let highest = 0;
  let index;
  for (let i = 0; i < veggies.length; i++){
    if(veggies[i][metric] > highest){
      highest = veggies[i][metric];
      index = i;
    }
  }
  return vegetables[index]["submitter"];

}

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric));