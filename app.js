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
    var cookiesPerHour = 0;
    for (var i = 6; i < 21; i++) {
      cookiesPerHour = randomCusto(this.minCust, this.maxCust) * this.avgSale;
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
    var cookiesPerHour = 0;
    for (var i = 6; i < 21; i++) {
      cookiesPerHour = randomCusto(this.minCust, this.maxCust) * this.avgSale;
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
    var cookiesPerHour = 0;
    for (var i = 6; i < 21; i++) {
      cookiesPerHour = randomCusto(this.minCust, this.maxCust) * this.avgSale;
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
    var cookiesPerHour = 0;
    for (var i = 6; i < 21; i++) {
      cookiesPerHour = randomCusto(this.minCust, this.maxCust) * this.avgSale;
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
    var cookiesPerHour = 0;
    for (var i = 6; i < 21; i++) {
      cookiesPerHour = randomCusto(this.minCust, this.maxCust) * this.avgSale;
      console.log(cookiesPerHour);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    }
    return this.cookiesSoldPerHour;
  }
};
alki.dataList();
