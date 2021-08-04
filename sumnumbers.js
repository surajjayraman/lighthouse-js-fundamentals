
const sumLargestNumbers = (data) => {
  //sort the array
  let done = false;
  let sortedData = [];

  while(!done){
    done = true;
    for (let i = 1; i < data.length; i++){
      if(data[i-1] > data[i]){
        done = false;
        let temp = data[i];
        data[i] = data[i-1];
        data[i-1] = temp;
      }
    }
  }
  
  //sorted Array
  sortedData = data;
  
  //Add the largest numbers and print
  let sumLargestNumbers = sortedData[sortedData.length - 1] + sortedData[sortedData.length - 2];
  return sumLargestNumbers;
}

console.log(sumLargestNumbers([1, 10])); //11
console.log(sumLargestNumbers([1, 2, 3])); //5
console.log(sumLargestNumbers([10, 144, 34, 6, 92, 2])); //126