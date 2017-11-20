'use strict';


var hoursOpen = ['Time:', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];
var stores = []; // Array for  stores object

function Store(name, minCust, maxCust, avgCookies) { // constructor function for object literals
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesSoldPerHour = [];
  this.dailyTotal = 0;
  stores.push(this); // pushes new Store to stores array
  this.getCookiesSoldPerHour(); // executes for-loop. enters in info from fancy for-loop to array and daily totals
  // ojbects dont 'return' , they are storage centers for information and CAN contain functions, but they are not a function
  this.tRowCreator();
}
Store.prototype.getCookiesSoldPerHour = function() { // this is a method (function attached to an object)
  for(var i = 0; i < hoursOpen.length - 2; i++) {
    this.cookiesSoldPerHour.push(Math.floor(randomCusto(this.minCust, this.maxCust) * this.avgCookies)); // this is a lot of stuff
    // floor rounds out decimals, then we take random # of customers per hour, include min/max, multiply by avg cookies per day
    this.dailyTotal += this.cookiesSoldPerHour[i]; // combines all cookies sold per our to create daily total
  }
  this.cookiesSoldPerHour.push(this.dailyTotal);
  return this.cookiesSoldPerHour; // function sends back information that you asked for
};
function randomCusto(min, max) { //
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function createTheader() {
  var tHead = document.getElementById('tableHeader');
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

Store.prototype.tRowCreator = function() {
  var tableEl = document.getElementById('tableBody');
  var tableRow = document.createElement('tr');
  tableEl.appendChild(tableRow);
  var tableBodyInfo = document.createElement('td');
  tableBodyInfo.textContent = this.name;
  tableRow.appendChild(tableBodyInfo);

  for (var j = 0; j < this.cookiesSoldPerHour.length; j++) {
    var tableCookies = document.createElement('td');
    tableCookies.textContent = this.cookiesSoldPerHour[j];
    tableRow.appendChild(tableCookies); // attaches child (tableCookies) to parent (tableRow)
  }
};
var formEl = document.getElementById('main-form');

function onSubmit(event) {
  event.preventDefault();
  console.log('the form was submitted');
  var myFormData = {};

  myFormData.name = event.target.name.value;
  myFormData.min = event.target.min.value;
  myFormData.max = event.target.max.value;
  myFormData.avg = event.target.avg.value;
  new Store(myFormData.name, myFormData.min, myFormData.max, myFormData.avg);

  console.log('my form data', myFormData);
}

formEl.addEventListener('submit', onSubmit);

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capital Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);


// var sixAM = document.createElement('td');
// sixAM.textContent = this.cookiesSoldPerHour[0];
// tableRow.appendChild(sixAM);
// var sevenAM = document.createElement('td');
// sevenAM.textContent = this.cookiesSoldPerHour[1];
// tableRow.appendChild(sevenAM);
// var eightAM = document.createElement('td');
// eightAM.textContent = this.cookiesSoldPerHour[2];
// tableRow.appendChild(eightAM);


// function createTbody() {
//   var tBody = document.getElementById('tableBody');
//   for(var a = 0; a < stores.length; a++) {
//     var bodyRow = document.createElement('tr'); // child of tBody, parent of tableCookies
//     tBody.appendChild(bodyRow);
//     var tableCookiesOne = document.createElement('td'); // child of bodyRow
//     tableCookiesOne.textContent = stores[a].name;
//     bodyRow.appendChild(tableCookiesOne); // child. attaches to parent
//     for(var y = 0; y < stores[a].cookiesSoldPerHour.length; y++) {
//       var tableCookiesTwo = document.createElement('td');
//       tableCookiesTwo.textContent = stores[a].cookiesSoldPerHour[y];
//       bodyRow.appendChild(tableCookiesTwo);
//     }
//
//   }
// }
// createTbody();




// var picloop = 0;
//
// function carousel() {
//   var i;
//   var j = document.getElementByClassName('loop');
//   for (i = 0; i < j.length; i++) {
//     j[i].style.display = 'none';
//   }
// picloop++
// if (picloop > j.length) {picloop = 1;}
// j[picloop - 1].style.display = 'inline-block';
// setTimeout(carousel, 3000);
// // 3000 milaseconds = 3 seconds.  \Change image every 3 seconds
// }
// carousel();
