console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);

console.log("2" === 2);

//******************** MEMORY ********************/

// STACK -> PRIMITIVE , HEAP -> NON-PRIMITIVE

let myname = "xyz";

let anothername = myname;
anothername = "abc";

console.log(myname);
console.log(anothername);

let userOne = {
     email: "xyz@gmail.com",
     upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "abc@gmail.com",
userTwo.upi = "user2@ybl"

console.log(userOne.email);
console.log(userTwo.email);