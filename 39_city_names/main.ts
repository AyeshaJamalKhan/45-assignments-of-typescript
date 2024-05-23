// making function with parameters that return the value in string:
function city_country(city:string,country:string) : string{
    return `${city},${country}`
};
// calling a function that print the return value:
city_country("karachi","pakistan");
console.log(city_country("karachi","pakistan."));


city_country("tokyo","japan");
console.log(city_country("tokyo","japan."));


city_country("mexico","north africa");
console.log(city_country("mexico","north africa."));