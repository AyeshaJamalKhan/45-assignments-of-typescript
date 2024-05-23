"use strict";
// without any change in alphabetical order.
let countries = ["saudi arab", "antarctica", "japan", "china", "maldives"];
console.log("\n Original order:", countries);
// in alphabetical order without modufying the actual list.
console.log("\n in Alphabetical order:", [...countries].sort());
// printing that  array is still  in its original order.
console.log("\n still in its original order:", countries);
//printing in reverse order, without changing the actual one.
console.log("\n reverse order:", [...countries].reverse());
// printing that  array is still  in its original order.
console.log("\n still in its original order:", countries);
// reverse the order of original array.
console.log("\n reverse the original order:", countries.reverse());
// reverse the order of list again and printing it back to its original order.
console.log("\n reverse back to its original position:", countries.reverse());
// sorted the array in alphabetical order, and its order has been changed.
console.log("\n sorted in alphabetical order", countries.sort());
// we have changed again the original array order and the list are in reversed order.
console.log("\n original array reversed again:", countries.reverse());
