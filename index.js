const lastIndexOf = function(numArray, val) { 
  if (numArray.length > 0){
    for (let i = numArray.length - 1; i >= 0; i--){
      if (numArray[i] === val){
        return i;
      } else if ( i === 0) {
        return -1;
      }
    }
  } else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ ], 3));