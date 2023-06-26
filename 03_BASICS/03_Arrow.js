// const user = {
//         username : "vikrant",
//         price: 999,
        
//         welcomeMessage: function() 
//         {
//             console.log(`${this.username},  Weclome to website`);    
//             console.log(this);
//         }       
// }

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//       let username = "hitesh"
//       console.log(this.username);
// }

// const chai = function() {
//        let username= "vikrant"
//        console.log(this.username);
// }

// chai();


           /************   ARROW FUNCTION **********/

// const chai = function() {
     
//        let username = "hitesh"
//        console.log(this.username);

// }

          /************   ARROW FUNCTION **********/

// const chai = () => {

//     let username = "hitesh"                              // function definition
//     console.log(this);
       
// }          

// const addtwo = (num1, num2) => {                         // Basic Arrow functions with parameters
//        return num1 + num2;                               // explicit return
// }

const addtwo = (num1 , num2) => num1+num2;                   // implicit return - method 1

const addtwo2 = (num1 , num2) => (num1+num2);                // implicit return - method 2

const objret = () => ({username : "sam"});                    // implicit object return

console.log(objret());




