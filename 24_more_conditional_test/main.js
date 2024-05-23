"use strict";
let apple = "apple";
let five = 5;
let fruits = ["banana", "kiwi", "peach"];
// equality and inequality with strings:
console.log("testing equality and inequality with strings:");
console.log(apple == "apple"); //true
console.log(apple == "Apple"); //false
// test using the lower case:
console.log("\n testing the equality with lowerCase:");
console.log("Apple".toLowerCase() == "apple"); //true
console.log("Apple".toLowerCase() != "apple"); //false
//test involving equqlity,inequality,greater  than and less than and greater than or equal to and less than or equal to: 
console.log("\n numerical testing with equality and inequality : ");
console.log(five == 5); //true
console.log(five != 5); //false
// testing with less than and greater than:
console.log("\n testing with greater than or less than:");
console.log(5 > 4); //true
console.log(5 < 3); //false
// testing with greater than equal to or less than equal to:
console.log("\n testing with greater than equal to or less than equal to:");
console.log(5 >= 4); // true
console.log(5 <= 3); // false
// using && operator:
console.log("\n testing with && operator:");
console.log(5 >= 2 && 6 <= 7); // true
console.log(5 <= 2 && 7 >= 5); // false
// using || operator:
console.log("\n testing with || operator:");
console.log(6 >= 8 || 8 == 8); //true
console.log(6 < 4 || 5 <= 3); //false
// testing whether an item is in array:
console.log("\n testing whether an item is in array:");
console.log(fruits.includes("banana")); // true
// testing whether an item is not included in array:
console.log("\n testing whether an item is not in array:");
console.log(fruits.includes("apple")); // false
