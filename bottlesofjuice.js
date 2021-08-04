let num = 99;
let bjuicePlural = " bottles of juice on the wall! ";
let bjuice = " bottles of juice! Take one down, pass it around... ";
let bjuiceSingular = " bottle of juice on the wall! ";

while (num >= 1){

  if (num === 1){
    console.log(num + bjuiceSingular + num + " bottle of juice! Take one down, pass it around... " + (num-1)
    + bjuicePlural );
  } else if(num === 2){
    console.log(num + bjuicePlural + num + bjuice + (num-1)
    + bjuiceSingular);
  } else {
    console.log(num + bjuicePlural + num + bjuice + (num-1)
    + bjuicePlural);
  }
  num--;
}
