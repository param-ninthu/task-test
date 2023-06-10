/*
Reference about the Date prototype :
https://www.w3schools.com/jsref/jsref_prototype_date.asp
*/

// By extending the Date's prototype we are adding custom method called daysTo
Date.prototype.daysTo = function (d2) {
  // We are getting the value of d1 from the instance of the Date
  var d1 = this;
  // So here we are converting the date to milliseconds
  var startDate = d2.getTime();
  var endDate = d1.getTime();
  // Finaly this method return the difference between the two dates in days
  return parseInt((startDate - endDate) / (24 * 3600 * 1000));
};

var d1 = new Date("2023-05-02");
var d2 = new Date("2023-05-30");

console.log(d1.daysTo(d2));

// Here we can see that the method daysTo invoked on the d1 object and parse d2 as an argument
