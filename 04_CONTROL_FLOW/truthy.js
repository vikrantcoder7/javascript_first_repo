const userEmail = "v@vikrant";

if(userEmail) {
     console.log("Got the mail");
}
else{
     console.log("Don't have user email");
}

// FALSY VALUES -> False, 0, -0, BigInt 0n, "", null, undefined, NaN

// TRUTHY VALUES -> "0", 'false', " ", [], {}, function(){}

const userArray = [];

if(userArray.length === 0){
      console.log("Array is Empty");
}


const userObject = {};

if(Object.keys(userObject).length === 0){
      console.log("User object is empty");
}



 