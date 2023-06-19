const accountId = 1234;
let accountEmail = "check@gmail.com";
var accountPassword = "1234"
accountCity = "Pune"

// ccountId = 2 /* not allowed, we can't change const's value

accountEmail = "check2@gmail.com";
accountPassword = "2121";
accountCity = "Bengaluru";

/*
 Prefer not to use var 
 because of issue in block scope and functional scope

*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
