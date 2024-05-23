"use strict";
let personName = "ayesha khan";
// lower case
console.log(personName.toLowerCase());
// UPPER CASE
console.log(personName.toUpperCase());
// Title Case
console.log(personName.replace(/\b\w/g, c => c.toUpperCase()));
