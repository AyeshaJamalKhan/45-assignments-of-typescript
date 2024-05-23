//new invitation
let guestName:string[]= ["Anas","Abdullah","Jaweria","fatima"];
guestName.forEach(guestName =>  console.log(`Hello ${guestName},we're having dinner at our place,would you like to come over?`));
//One guest cant come today.
let unableToAttend:string= "fatima";
console.log("fatima, cant come today for dinner at our place.")
//replace the guest.
let newGuest:string="zuhaib";
 guestName[guestName.indexOf(unableToAttend)]=newGuest;
//new invitation
guestName.forEach(guestName  =>{console.log(`Hello ${guestName},would you be facinated joining us for dinner at our house?`)});