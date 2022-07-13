var mon1 = 31;
var mon2 = calcYear(year);
var mon3 = 31;
var mon4 = 30;
var mon5 = 31;
var mon6 = 30;
var mon7 = 31;
var mon8 = 31;
var mon9 = 30;
var mon10 = 31;
var mon11 = 30;
var mon12 = 31;

var month = 5;
var year = 2021;
function calcYear(year) {
  if (year % 4) {
    mon2 = 29;
  } else {
    mon2 = 28;
  }
}
if (month === 1 ) {
  console.log(mon1);
} else if (month === 2) {
  console.log(mon2);
} else if (month === 3) {
  console.log(mon3);
} else if (month === 4) {
  console.log(mon4);
} else if (month === 5) {
  console.log(mon5);
} else if (month === 6) {
  console.log(mon6);
} else if (month === 7) {
  console.log(mon7);
} else if (month === 8) {
  console.log(mon8);
} else if (month === 9) {
  console.log(mon9);
} else if (month === 10) {
  console.log(mon10);
} else if (month === 11) {
  console.log(mon11);
} else {
  console.log(mon12);
}
