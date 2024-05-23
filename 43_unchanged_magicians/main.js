"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  describing magicians names:
let magiciansName = ["Harry Houdini", "David Copper Feild", "Dynamo", "David Blaine"];
function show_magicians(magiciansName) {
    magiciansName.forEach(magicians => {
        console.log(magicians);
    });
}
;
function make_great(magicians) {
    return magicians.map(magicians => ` the great ${magicians}`);
}
;
// calling make great function that modify the magiciansName arry.
let great_magicians = make_great(magiciansName);
// calling show_magician that the modify list of array
// show_magicians(great_magicians);
// making a copy of original array:
let magicians_name = magiciansName.slice();
// modifying the copied array to include "the great" in their names:
let copy_great_magicians = make_great(magicians_name);
//showing the arrays:
//original:
show_magicians(magiciansName);
// "the great magicians" array;
show_magicians(copy_great_magicians);
