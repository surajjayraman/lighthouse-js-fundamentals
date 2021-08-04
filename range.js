function range(start, end, step) {
  if (step === null) {
    step = 1;
  }
  var array = [];
  
  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      array.push(i);
    } 
  } else {
    for (var j = start; j >= end; j += step) {
      array.push(j);
    }
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, -.01, 3));