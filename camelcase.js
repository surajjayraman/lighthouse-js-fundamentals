const camelCase = (input) => {
  //split the input string into an array of Strings
  let splitStr = input.split(" ");
  //Convert initial string to lowercase
  let camelStr = splitStr[0].toLowerCase();
  //loop through rest of the strings and capitalise starting character
  //concatenate all strings and return the resultant camelCase string
  for(let i = 1; i < splitStr.length; i++) {
    let upStr = splitStr[i].split('');
    upStr[0] = upStr[0].toUpperCase();
    camelStr = camelStr + upStr.join('');
  }
  return camelStr;
};

console.log(camelCase("THIS is a string"));
console.log(camelCase("LOOpy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase("GREAT jOB Suraj"));