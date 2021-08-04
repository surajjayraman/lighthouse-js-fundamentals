const calculateChange = (total, cash) => {
  let change = 0;
  change = cash - total;
  let totalChange = {}
  const billTypes = ["twentyDollar", "tenDollar", "fiveDollar", "twoDollar", "oneDollar",
                    "quarter", "dime", "nickel", "penny"];
  const billValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

  let amount = 0;
  for (let i = 0; i < billValues.length; i++){
    amount = Math.floor(change / billValues[i]);
    if (amount > 0){
      totalChange[billTypes[i]] = amount;
      change = change % billValues[i];
    }
  }
  return totalChange;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));