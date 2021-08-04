const makeCase = (input, style) => {
  let caseStr = '';
  // Switch based on the casing style
  switch(style){
    case "camel":
      caseStr = camelCase(input);
      break;
    case "pascal":
      caseStr = pascalCase(input);
      break;
    case "snake":
      caseStr = snakeCase(input);
      break;
    case "kebab":
      caseStr = kebabCase(input);
      break;
    case "title":
      caseStr = titleCase(input);
      break;
    case "vowel":
      caseStr = vowelCase(input);
      break;
    case "consonant":
      caseStr = consonantCase(input);
      break;
  }
  return caseStr;
}
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

const pascalCase = (input) => {
  //split the input string into an array of chars
  let splitStr = input.split('');
  //Convert initial string to upper case
  splitStr[0] = splitStr[0].toUpperCase();  
  //loop through rest of the strings and capitalise starting character
  //concatenate all strings and return the resultant Pascal Case string
  for(let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === " "){
      splitStr[i+1] = splitStr[i+1].toUpperCase();
      splitStr[i] = splitStr[i].replace(" ", "");
    }
  }
  return splitStr.join("");
};

const snakeCase = (input) => {
  //split the input string into an array of chars
  let splitStr = input.split('');   
  //loop through rest of the strings and replace space with underscore
  //concatenate all strings and return the resultant Pascal Case string
  for(let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === " "){
      splitStr[i] = splitStr[i].replace(" ", "_");
    }
  }
  return splitStr.join("");
};

const kebabCase = (input) => {
  //split the input string into an array of chars
  let splitStr = input.split('');   
  //loop through rest of the strings and replace space with hyphen
  //concatenate all strings and return the resultant Pascal Case string
  for(let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === " "){
      splitStr[i] = splitStr[i].replace(" ", "-");
    }
  }
  return splitStr.join("");
};

const titleCase = (input) => {
  //split the input string into an array of chars
  let splitStr = input.split('');   
  splitStr[0] = splitStr[0].toUpperCase();
  //loop through rest of the strings and capitalise first letter of each phrase
  //concatenate all strings and return the resultant Case string
  for(let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === " "){
      splitStr[i+1] = splitStr[i+1].toUpperCase();
    }
  }
  return splitStr.join("");
};

const vowelCase = (input) => {
  //split the input string into an array of chars
  let splitStr = input.split('');   
  
  //loop through rest of the strings and capitalise Vowels => (a,e,i,o,u)
  //concatenate all strings and return the resultant Case string
  for(let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === "a" || splitStr[i] === "e" || splitStr[i] === "i" || 
        splitStr[i] === "o" || splitStr[i] === "u"){
      splitStr[i] = splitStr[i].toUpperCase();
    }
  }
  return splitStr.join("");
};

const consonantCase = (input) => {
  //split the input string into an array of chars
  let splitStr = input.split('');   
  
  //loop through rest of the strings and capitalise all except Vowels => (a,e,i,o,u)
  //concatenate all strings and return the resultant Case string
  for(let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] !== "a" && splitStr[i] !== "e" && splitStr[i] !== "i" &&
        splitStr[i] !== "o" && splitStr[i] !== "u"){
          splitStr[i] = splitStr[i].toUpperCase();
    }
  }
  return splitStr.join("");
};



//console.log(makeCase("this is a string", "camel"));
//console.log(makeCase("this is a string", "pascal"));
//console.log(makeCase("this is a string", "snake"));
//console.log(makeCase("this is a string", "kebab"));
//console.log(makeCase("this is a string", "title"));
//console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
//console.log(makeCase("this is a string", ["upper", "snake"]));