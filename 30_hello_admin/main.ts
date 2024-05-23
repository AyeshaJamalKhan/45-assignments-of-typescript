let userNames:string[]=["admin","leo","miles","james","robert"];
userNames.forEach(oneUser => {
    if(oneUser  ==="admin"){
    console.log(`hello ${oneUser}, would you like to see a status report?`)
}else {
    console.log(`hello  ${oneUser}, thank you for logging in again.`)
} 
});