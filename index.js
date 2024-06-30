// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }

  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//Multiplier
function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

//Array of drivers already created
function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
  }
  