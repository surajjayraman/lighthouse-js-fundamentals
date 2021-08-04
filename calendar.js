const talkingCalendar = (date) => {
  const year = date.slice(0,4);
  const month = date.slice(5,7) - 1; //adjusting for index count of calendar months Jan = 0, Dec =11
  const day = parseInt(date.slice(8));
  const calMonth = ["January", "February", "March", "April", "May", "June",
                     "July", "August", "September", "October", "November", "December"];

  let suffix;
  switch(day){
    case 1:
    case 21:
    case 31:
      suffix = "st";
      break;
    case 2:
    case 22:
      suffix = "nd";
      break;
    case 3:
    case 23:
      suffix = "rd";
      break;
    default:
      suffix = "th";
      break; 
  }
  let dateString = calMonth[month] + " " + day + suffix + ", " + year;
  return dateString;
}

console.log(talkingCalendar("2017/12/02")); // return December 2nd, 2017
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/23"));