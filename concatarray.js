const concat = function(array1, array2){
  for (i = 0; i < array2.length; i++){
    array1.push(array2[i]);
  }
  return array1;
}

console.log(concat([ ], [ 4, 5, 6 ]));
console.log(concat([ 5, 10 ], []));