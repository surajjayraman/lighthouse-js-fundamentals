const organizeInstructors = (instructors) => {
let organizedList = {};
for (const instructor of instructors){  
  let courseName = instructor["course"];  
  if (courseName in organizedList){    
    organizedList[courseName].push(instructor.name);
  } else {
    organizedList[courseName] = [instructor.name];
  }
}
return organizedList;
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

/*

{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}

*/