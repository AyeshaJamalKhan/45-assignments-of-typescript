"use strict";
// informing people that i've found a larger table for dinner 
let guestList = ["Anas", "Abdullah", "Jaweria", "fatima"];
guestList.forEach(guestName => console.log(`${guestName} i've asked more guest inside for dinner 
 because I found a larger dinner table.`));
// adding more guest
// first,add at the beginning of array
guestList.unshift("Zuhaib");
// second,add at the end of array
guestList.push("Furqan");
// third, add at the middle of array
guestList.splice(3, 0, "shehriyar");
// new set of invitation
guestList.forEach(oneguest => {
    console.log(`\n Hello ${oneguest},would you be intrested in 
joining us for dinner?`);
});
// question no 17 start:
//let guestlist:string[]=["Zuhaib","Anas","Abdullah","Shehriyar","Jaweria","fatima","Furqan"]
//guestlist.forEach(guestlist => console.log(`${guestlist}
// informing people that we can only invite two people for dinner
console.log("\nunfortunatly! i just found out that our new dinner table won't arrive on time so, i can invite only two people for dinner.");
// using while loop to remove  guests from list until two guest left
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`\n I'm Sorry ${removedGuest} but i cant  ask you  to dinner! `);
}
// invitation for the last two persons
guestList.forEach(twoguest => console.log(` \n Dear ${twoguest}, you are still invited to our dinner.`));
// removing last two guests from the list;
guestList.splice(0, guestList.length);
console.log(guestList);
