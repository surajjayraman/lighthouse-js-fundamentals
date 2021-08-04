
const ageCalculator = function(name, yearOfBirth, currentYear){
  let age = parseInt(currentYear) - parseInt(yearOfBirth);
  return (name + " is " + age + " years old.");
}

console.log(ageCalculator('Suraj', '1974', '2021'));