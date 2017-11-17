'use strict';


var hoursOpen = ['Time:', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = []; // Array for  stores object

function Store(name, minCust, maxCust, avgCookies) { // cunstructor function for object literals
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesSoldPerHour = [];
  this.dailyTotal = 0;
  stores.push(this); // pushes new Store to stores array
  this.getCookiesSoldPerHour(); // executes for-loop. enters in info from fancy for-loop to array and daily totals
  // ojbects dont 'return' , they are storage centers for information and CAN contain functions, but they are not a function
}
Store.prototype.getCookiesSoldPerHour = function() { // this is a method (function attached to an object)
  for(var i = 0; i < hoursOpen.length - 1; i++) {
    this.cookiesSoldPerHour.push(Math.floor(randomCusto(this.minCust, this.maxCust) * this.avgCookies)); // this is a lot of stuff
    // floor rounds out decimals, then we take random # of customers per hour, include min/max, multiply by avg cookies per day
    this.dailyTotal += this.cookiesSoldPerHour[i]; // combines all cookies sold per our to create daily total
  }
  return this.cookiesSoldPerHour; // function sends back information that you asked for
};
function randomCusto(min, max) { //
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capital Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);


function createTheader() {
  var tHead = document.getElementById('table-header');
  console.log(tHead); // find. access thead from html
  var headerRow = document.createElement('tr'); // create. child of header, parent of table data.
  console.log(headerRow);
  tHead.appendChild(headerRow); // attach. create the row, attach to header
  for(var j = 0; j < hoursOpen.length; j++) { //
    var tableHours = document.createElement('td'); // create table data, child of header
    tableHours.textContent = hoursOpen[j]; //  fill table data
    headerRow.appendChild(tableHours); // combines child and parent
  }
}
createTheader();

function createTbody() {
  var tBody = document.getElementById('tableBody');
  for(var a = 0; a < stores.length; a++) {
    var bodyRow = document.createElement('tr'); // child of tBody, parent of tableCookies
    tBody.appendChild(bodyRow);
    var tableCookiesOne = document.createElement('td'); // child of bodyRow
    tableCookiesOne.textContent = stores[a].name;
    bodyRow.appendChild(tableCookiesOne); // child. attaches to parent
    for(var y = 0; y < stores[a].cookiesSoldPerHour.length; y++) {
      var tableCookiesTwo = document.createElement('td');
      tableCookiesTwo.textContent = stores[a].cookiesSoldPerHour[y];
      bodyRow.appendChild(tableCookiesTwo);
    }

  }
}
createTbody();
