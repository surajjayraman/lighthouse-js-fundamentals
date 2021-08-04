const multiplicationTable = (maxValue) => {
  let str;
  for (i = 1; i <= maxValue; i++ ){
    str = '';
    for (j = 1; j <= maxValue; j++){
      str = str + i * j + " ";     
    }    
    console.log(str);
  }  
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));