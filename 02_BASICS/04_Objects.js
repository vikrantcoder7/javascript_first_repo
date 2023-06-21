//const tinderuser = new Object() // singleton object

const tinderuser = {} // non singleton object

tinderuser.id = "123x";
tinderuser.name = "mark";
tinderuser.email = "mark@mail.com";
tinderuser.isLoggedIn = false;

//console.log(tinderuser);

const regularuser = 
{
       
    email: "some@gmail.com",
    fullname: {
            userfullname : {
                firstname : "some",
                lastname: "somelastname"
            }   
    }
       
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

// const obj3 = {obj1 , obj2};

// console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2, obj3);

// console.log(obj4);

const obj4_spread = {...obj1, ...obj2};

// console.log(obj4_spread);

const users = [
    {
         id: 1,
         email: "some@gmail.com"
    },
    {
        id: 2,
        email: "some1@gmail.com"
    },
    {
        id: 3,
        email : "some2@gmail.com"
    },
    {
        id: 4,
        email: "some3@gmail.com"
    }
]


console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));



