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

function loginuserMessage(username = "sam") {

    if(!username){
         console.log("username is undefined, please enter username")
         return;
    }
    
    return `${username} just logged in`

}

const result2 =  loginuserMessage();

console.log("username function result " + result2);