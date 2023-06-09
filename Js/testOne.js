/*
Reference about the Date prototype :
https://www.w3schools.com/jsref/jsref_prototype_date.asp
*/

//////////////////  //////////////////////
Date.prototype.daysTo = function (d2) {
  var d1 = this;
  var startDate = d2.getTime();
  var endDate = d1.getTime();
  return parseInt((startDate - endDate) / (24 * 3600 * 1000));
};

var d1 = new Date("2019-01-01");
var d2 = new Date("2019-01-30");

console.log(d1.daysTo(d2));
