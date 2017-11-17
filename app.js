'use strict';

// Array for collecting all of the Store objects
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = [];
// Array for all of the hours of operation

// Define Store constructor for building our object literals
function Store(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.avgCookies = avgCookies;
  this.cookiesSoldPerHour = [];
  this.dailyTotal = 0;
  // When a store object literal is created, push it to the stores array
  stores.push(this);
  // When a store object literal is created, populate the cookiesSoldPerHour and dailyTotals
  this.getHourlyCookies();
}
// Define any pre-existing store objects
new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capital Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

// Define any instance methods for populating our Stores' data
Store.prototype.getHourlyCookies = function() {
  // iterate over the hours array to do a thing for each hour
  for(var i = 0; i < hoursOpen.length; i++) {
    // create a number of cookies for each hour, push to array, and add to daily total
    this.cookiesSoldPerHour.push(Math.floor(this.getCustomersPerHour() * this.avgCookies));
    this.dailyTotal += this.cookiesSoldPerHour[i];
  }
  return this.cookiesSoldPerHour;
};

Store.prototype.getCustomersPerHour = function() {
  // returns a random number specific to the instance which called this method
  return randomCusto(this.minCust, this.maxCust);
};
// function getRandomNum(min, max) {
//   return Math.round(Math.random() * (max - min) + min);
// }
function randomCusto(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// 'use strict';
//
// function randomCusto(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// var firstAndPike = {
//   minCust: 23,
//   maxCust: 65,
//   avgCookies: 6.3,
//   cookiesSoldPerHour: [],
//
//   dataList: function() {
//     var cookiesPerHour = 0;
//     for (var i = 6; i < 21; i++) {
//       cookiesPerHour = randomCusto(this.minCust, this.maxCust) * this.avgCookies;
//       console.log(cookiesPerHour);
//       this.cookiesSoldPerHour.push(cookiesPerHour);
//     }
//     return this.cookiesSoldPerHour;
//   }
// };
// firstAndPike.dataList();
//
//
// var seaTacAirport = {
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 1.2,
//   cookiesSoldPerHour: [],
//   dataList: function() {
//     var cookiesPerHour = 0;
//     for (var i = 6; i < 21; i++) {
//       cookiesPerHour = randomCusto(this.minCust, this.maxCust) * this.avgCookies;
//       console.log(cookiesPerHour);
//       this.cookiesSoldPerHour.push(cookiesPerHour);
//     }
//     return this.cookiesSoldPerHour;
//   }
// };
// seaTacAirport.dataList();
//
// var seattleCenter = {
//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 3.7,
//   cookiesSoldPerHour: [],
//   dataList: function() {
//     var cookiesPerHour = 0;
//     for (var i = 6; i < 21; i++) {
//       cookiesPerHour = randomCusto(this.minCust, this.maxCust) * this.avgCookies;
//       console.log(cookiesPerHour);
//       this.cookiesSoldPerHour.push(cookiesPerHour);
//     }
//     return this.cookiesSoldPerHour;
//   }
// };
// seattleCenter.dataList();
//
// var capitalHill = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookies: 2.3,
//   cookiesSoldPerHour: [],
//   dataList: function() {
//     var cookiesPerHour = 0;
//     for (var i = 6; i < 21; i++) {
//       cookiesPerHour = randomCusto(this.minCust, this.maxCust) * this.avgCookies;
//       console.log(cookiesPerHour);
//       this.cookiesSoldPerHour.push(cookiesPerHour);
//     }
//     return this.cookiesSoldPerHour;
//   }
// };
// capitalHill.dataList();
//
// var alki = {
//   minCust: 2,
//   maxCust: 16,
//   avgCookies: 4.6,
//   cookiesSoldPerHour: [],
//   dataList: function() {
//     var cookiesPerHour = 0;
//     for (var i = 6; i < 21; i++) {
//       cookiesPerHour = randomCusto(this.minCust, this.maxCust) * this.avgCookies;
//       console.log(cookiesPerHour);
//       this.cookiesSoldPerHour.push(cookiesPerHour);
//     }
//     return this.cookiesSoldPerHour;
//   }
// };
// alki.dataList();
