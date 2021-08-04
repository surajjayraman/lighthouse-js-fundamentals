const repeatNumbers = (data) => {
  let concatData = [];  
  for (let i = 0; i < data.length; i++){
    let concatStr = '';
    for (let j = 0; j < data[i][1]; j++){
      concatStr = concatStr + data[i][0];
    }
    concatData.push(concatStr);
  }
  return concatData.toString();
}

console.log(repeatNumbers([[2,4]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));