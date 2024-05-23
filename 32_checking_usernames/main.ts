// current users array
let currentUsers:string[]=["ahmad","ali","imran","rayan","shayan"];
// new users array
let newUsers:string[]=["sufyan","ali","shayan","zoha","anaya"];

newUsers.forEach(newUser => {
    if(currentUsers.some(newuser1 => newuser1.toLowerCase() === newUser.toLowerCase())){
        console.log(`${newUser} will need to entre a new username.`)
    } else {
        console.log(`${newUser} is available`)
    }
})