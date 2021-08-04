const urlDecode = (text) => {
  // Put your solution here
  let isAmpersand = false;
  let splitStr = text.split('');
  let objUrl = {};
  for (let i = 0; i < splitStr.length; i++){
    if(splitStr[i] === "%"){
      splitStr[i] = " ";
      splitStr[i+1] = "";
      splitStr[i+2] = "";
    }
    if(splitStr[i] === '&'){
      isAmpersand = true;
    }
  }
  let objStr = splitStr.join('');  
  let keyVal;  
  if(isAmpersand){
    objStr = objStr.split("&");
    for (let i = 0; i < objStr.length; i++){
      keyVal = objStr[i].split("=");
      objUrl[keyVal[0]] = keyVal[1];  
    }
  } else {
    keyVal = objStr.split("=");
    objUrl[keyVal[0]] = keyVal[1];
  }
  return objUrl;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
