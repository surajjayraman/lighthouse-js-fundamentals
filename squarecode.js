const squareCode = (message) => {
  let codeString = '';
  let index = 0;
  let trimMsg = message.split(" ").join("");
  let columns = Math.ceil(Math.sqrt(trimMsg.length));
  let splitStr = trimMsg.split('');
  while (index < columns){
    for (let i = index; i < trimMsg.length; i+=columns){
      codeString += splitStr[i];
    }
    codeString += " ";
    index++;    
  }
  return codeString;
}

console.log(squareCode("chill out")); // return clu hlt io 
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));