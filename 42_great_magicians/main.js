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
let great_magicians = make_great(magiciansName);
show_magicians(great_magicians);
