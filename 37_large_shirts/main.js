"use strict";
// making function:
function make_shirt(size = "Large", message = "I Love TypeScript") {
    console.log(`making a ${size} size T-shirt with message "${message}" printed on it. `);
}
;
// calling function:
//  by-default size and message.
make_shirt();
//medium  size with same message.
make_shirt("Medium");
// different size with a different message.
make_shirt("Small", "No Comments");
