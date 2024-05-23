"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "Pakistan") {
    console.log(`"${city}" is in "${country}"`);
}
;
//calling functions:
describe_city("karachi");
describe_city("islamabad");
// different country with city:
describe_city("Mexico", "North America");
