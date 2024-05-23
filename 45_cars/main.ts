
// make object:
interface car{
   manufacturer:string;
   model:string;
   [extraKey :string]: any;
}
//function with optional character:  
function create_car(  manufacturer:string,  model:string, optional:Record <string,any>){
   return{
      manufacturer,
      model,
      ...optional
   }
};
// calling the function by variable:
let car1= create_car("toyota","corolla",{color:"black", year:2024});
console.log(car1);


