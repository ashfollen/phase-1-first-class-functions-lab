// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2);
}

returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function(array) {
    return array.slice(2);
}

returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}
    
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fareQuintupler = createFareMultiplier(5);

//console.log(fareQuintupler(5));

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
}

console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers))

