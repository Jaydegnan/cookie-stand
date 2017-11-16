'use strict';

function randomCusto(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  cookiesSoldPerHour: [],
  dataList: function() {
    console.log('First and Pike');
    var cookiesPerHour = 0;
    for (var i = 6; i < 21; i++) {
      cookiesPerHour = Math.floor(randomCusto(this.minCust, this.maxCust) * this.avgSale);
      var pikeInfo = document.getElementById('firstAndPike'); // parent
      var pikeListItems = document.createElement('li'); // child

      if (i < 13) {
        pikeListItems.textContent = (i + ' ' + 'AM:' + ' ' + cookiesPerHour); // THIS LINE PRINTS EVERYTHING
      } else if (i > 12) {
        pikeListItems.textContent = (i + ' ' + 'PM:' + ' ' + cookiesPerHour);
      }


      pikeInfo.appendChild(pikeListItems);
      console.log(cookiesPerHour);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    }
    return this.cookiesSoldPerHour;
  }
};
firstAndPike.dataList();


var seaTacAirport = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  cookiesSoldPerHour: [],
  dataList: function() {
    console.log('Seatac Airport');
    var cookiesPerHour = 0;
    for (var i = 6; i < 21; i++) {
      cookiesPerHour = Math.floor(randomCusto(this.minCust, this.maxCust) * this.avgSale);
      var seaTacAirportInfo = document.getElementById('seaTacAirport'); // parent
      var seaTacAirportListItems = document.createElement('li'); // child

      if (i < 13) {
        seaTacAirportListItems.textContent = (i + ' ' + 'AM:' + ' ' + cookiesPerHour); // THIS LINE PRINTS EVERYTHING
      } else if (i > 12) {
        seaTacAirportListItems.textContent = (i - 12 + ' ' + 'PM:' + ' ' + cookiesPerHour);
      }
      // seaTacAirportListItems.textContent = cookiesPerHour;
      console.log(seaTacAirportListItems);
      seaTacAirportInfo.appendChild(seaTacAirportListItems);
      console.log(cookiesPerHour);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    }
    return this.cookiesSoldPerHour;
  }
};
seaTacAirport.dataList();

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  cookiesSoldPerHour: [],
  dataList: function() {
    console.log('Seattle Center');
    var cookiesPerHour = 0;
    for (var i = 6; i < 21; i++) {
      cookiesPerHour = Math.floor(randomCusto(this.minCust, this.maxCust) * this.avgSale);
      var seattleCenterInfo = document.getElementById('seattleCenter'); // parent
      var seattleCenterListItems = document.createElement('li'); // child

      if (i < 13) {
        seattleCenterListItems.textContent = (i + ' ' + 'AM:' + ' ' + cookiesPerHour); // THIS LINE PRINTS EVERYTHING
      } else if (i > 12) {
        seattleCenterListItems.textContent = (i - 12 + ' ' + 'PM:' + ' ' + cookiesPerHour);
      }
      // seattleCenterListItems.textContent = cookiesPerHour;
      seattleCenterInfo.appendChild(seattleCenterListItems);
      console.log(cookiesPerHour);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    }
    return this.cookiesSoldPerHour;
  }
};
seattleCenter.dataList();

var capitalHill = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  cookiesSoldPerHour: [],

  dataList: function() {
    console.log('Capital Hill');
    var cookiesPerHour = 0;
    for (var i = 6; i < 21; i++) {
      cookiesPerHour = Math.floor(randomCusto(this.minCust, this.maxCust) * this.avgSale);
      var capitalHillInfo = document.getElementById('capitalHill'); // parent
      var capitalHillListItems = document.createElement('li'); // child

      if (i < 13) {
        capitalHillListItems.textContent = (i + ' ' + 'AM:' + ' ' + cookiesPerHour); // THIS LINE PRINTS EVERYTHING
      } else if (i > 12) {
        capitalHillListItems.textContent = (i - 12 + ' ' + 'PM:' + ' ' + cookiesPerHour);
      }
      // capitalHillListItems.textContent = cookiesPerHour;
      capitalHillInfo.appendChild(capitalHillListItems);
      console.log(cookiesPerHour);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    }
    return this.cookiesSoldPerHour;
  }
};
capitalHill.dataList();

var alki = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  cookiesSoldPerHour: [],
  dataList: function() {
    console.log('Alki');
    var cookiesPerHour = 0;
    for (var i = 6; i < 21; i++) {
      cookiesPerHour = Math.floor(randomCusto(this.minCust, this.maxCust) * this.avgSale);
      var alkiInfo = document.getElementById('alki'); // parent
      var alkiListItems = document.createElement('li'); // child

      if (i < 13) {
        alkiListItems.textContent = (i + ' ' + 'AM:' + ' ' + cookiesPerHour); // THIS LINE PRINTS EVERYTHING
      } else if (i > 12) {
        alkiListItems.textContent = (i - 12 + ' ' + 'PM:' + ' ' + cookiesPerHour);
      }
      //   alkiListItems.textContent = cookiesPerHour;
      alkiInfo.appendChild(alkiListItems);
      console.log(cookiesPerHour);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    }
    return this.cookiesSoldPerHour;
  }
};
alki.dataList();
