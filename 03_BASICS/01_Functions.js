// syntax of function

function sayMyName() {        // { } -> scope of the function
    console.log("x");
    console.log("y");
    console.log("z");
}

sayMyName();                  // sayMyName -> without paranthesis called as reference of the function & 
                                 // sayMyName() -> () denotes execution of the functions

// function addtwonum(num1, num2){
//       console.log(num1 + num2);
// }

function addtwonum(num1 , num2 ) {
     const result = num1 + num2;
     return result;
}


//addtwonum(2,3);

const result = addtwonum(2, 3);

//console.log(result);

// function loginuserMessage(username = "sam") {

//     if(!username){
//          console.log("username is undefined, please enter username")
//          return;
//     }
    
//     return `${username} just logged in`

// }

// const result2 =  loginuserMessage();

// console.log("username function result " + result2);


                     
                     
function calculateCartPrice(val1, val2,  ...num1) {                  // ... => also called as rest operator depends on use case 

   return num1;

}        

//console.log(calculateCartPrice(200, 300, 400));

                                    /***************** FUNCTIONS WITH OBJECT ***************/

const user = {
      username : "vikrant",
      email : "123@gmail.com"
}


function objectfunction(anyobject) {
      
     // console.log(`username is: ${anyobject.username} and email: ${anyobject.email}`);
}

objectfunction ({
     username: "sam",
     email: "123@sam.com"
})

                                /*********** Array Passing in function **********/

const mynewArray = [100, 200, 300]

function arrayfunction(getArray){
      console.log(`the first value of the array is ${getArray[0]}`);
}

arrayfunction([100,200,300]);





