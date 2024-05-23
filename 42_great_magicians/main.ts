//  describing magicians names:
let magiciansName:string[]=["Harry Houdini","David Copper Feild","Dynamo","David Blaine"];

function show_magicians(magiciansName:string[]){
   magiciansName.forEach(magicians =>{
    console.log(magicians);
   })
};

function make_great(magicians: string[]){
    return magicians.map(magicians =>  ` the great ${magicians}` )
};
  // calling make great function that modify the magiciansName arry.
let great_magicians= make_great(magiciansName);

// calling show_magician that the modify list of array
show_magicians(great_magicians);