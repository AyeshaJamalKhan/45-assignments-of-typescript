"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// makin a function with rest parameter that will accept all the arguments:
function makeSandwich(...items) {
    console.log(`making a sandwich with:${items.join(", ")}`);
}
;
// using function 3 times with 3 different arguments:
makeSandwich("chicken", "mayonnaise", "cheese", "onions");
makeSandwich("bacon", "lettuce", "tomato", "grilled cheese");
makeSandwich("turkey", "bacon", "lrttuce", "white bread", "mayonnaise");
