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
var month = 3;
var year = 2021;
function calcYear(year) {
  if (year % 4) {
    mon2 = 29;
  } else {
    mon2 = 28;
  }
}
