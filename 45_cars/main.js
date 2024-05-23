"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
////function with optional character.  
function create_car(manufacturer, model, optional) {
    return {
        manufacturer,
        model,
        ...optional
    };
}
;
let car1 = create_car("toyota", "corolla", { color: "black", year: 2024 });
console.log(car1);
