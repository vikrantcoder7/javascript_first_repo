let a = 300

if(true)
{
    let a = 10
    const b= 20
    var c = 30
    console.log("INNER a: ", a);
     
}

// for (let index = 0; index < array.length; index++) 
// {
//     const element = array[index];
    
// }

console.log(a);
//console.log(b);
console.log(c);

/*************** SCOPE LEVEL AND MINI HOISTING ***************/

function one()
{
     
       const username = "sam";

       function two()
       { 
          
          const website = "sam.com"
          console.log(username);
       }

       //console.log(website);

       two();
}

one();


/************************  IF STATEMENT SCOPE  ****************/

if(true)
{
     
       const username = "tom";

       if(username === "tom")
       {
           const website = "tom.com";
           //console.log(`Username : ${username} and website: ${website}`);
       }

}

/***************************** IMPORTANT  *********************/

console.log(addone(5));

function addone(num) {
      return num + 1
}

//addtwo(5);
console.log("hoisting's phase " + addtwo(2));   // We can't call addtwo before declaration

const  addtwo =  function (num) {              // HOISTING PHASE
      return num + 2;
}

// console.log("hoisting's phase " + addtwo(2));     // Here we can execute and call the addtwo function



