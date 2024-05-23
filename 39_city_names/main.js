"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// making function with string:
function city_country(city, country) {
    return `${city},${country}`;
}
;
// calling a function that print the return value:
city_country("karachi", "pakistan");
console.log(city_country("karachi", "pakistan."));
// calling a function that print the return value:
city_country("tokyo", "japan");
console.log(city_country("tokyo", "japan."));
// calling a function that print the return value:
city_country("mexico", "north africa");
console.log(city_country("mexico", "north africa."));
