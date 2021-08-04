const urlEncode = (text) => {
  let trimText = text.trim();
  console.log(trimText);
  let urlString = trimText.split(" ").join("%20");
  return urlString;
}

//console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
//console.log(urlEncode("blue is greener than purple for sure"));