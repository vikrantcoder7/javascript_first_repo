// Singleton
//Object.create
// Object literals

const mysym = Symbol("Key1");

const Jsuser = {

    name: "Vikrant",
    age: 18,
    "Full Name": "xyz",
    [mysym]: "MyKey1",
    location: "Us",
    email: "vikrant@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.age);
// console.log(Jsuser["age"]);
// console.log(Jsuser["Full Name"]);
// console.log(typeof Jsuser[mysym]);

Jsuser.email = "Vikrant@123.com";
//Object.freeze(Jsuser);
// Jsuser.email = "vikrant@abc.com";
// console.log(Jsuser);

// adding a function to object

Jsuser.greeting = function(){
     console.log("Hello Js User");
}

Jsuser.greetingtwo = function(){
     console.log(`Hello js User, ${this.name}`)
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());



