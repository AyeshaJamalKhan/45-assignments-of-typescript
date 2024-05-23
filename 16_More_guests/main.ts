// continue with question no 15

let guestName:string[]= ["Anas","Abdullah","Jaweria","fatima"];
guestName.forEach(guestName =>  console.log(`Hello ${guestName},we're having dinner at our place
,would you like to come over?`));

// informing people that i've found a larger table for dinner 

let guestList:string[]= ["Anas","Abdullah","Jaweria","fatima"];
 guestName.forEach(guestName => console.log(`${guestName} i've asked more guest inside for dinner 
 because I found a larger dinner table.`));

// adding more guest
let moreGuestName:string[]=["Anas","Abdullah","Jaweria","fatima"];
// first, at the beginning of array
moreGuestName.unshift("Zuhaib")
// second, at the end of array
moreGuestName.push("Furqan")
// third, at the middle of array
moreGuestName.splice(3,0,"Shehriyar")
// new set of invitation
moreGuestName.forEach(moreGuestName  =>{console.log(`Hello ${moreGuestName},would you be intrested in 
joining us for dinner?`)});