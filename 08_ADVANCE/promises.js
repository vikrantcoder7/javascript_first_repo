const promiseOne = new Promise(function (resolve, reject) {
    // Do an Async Task
    // Such as DB Calls, Cryptography, network

    setTimeout(function () {

        console.log("Async Task is Completed");
        resolve();
    }, 1000)

})

promiseOne.then(function () {
    console.log("Promise Consumed");
})

//                      METHOD 2

new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log("async task 2 is completed");
        resolve();
    }, 1000)

}).then(function () {
    console.log("promise consumed by using second method")
})

//    METHOD 3


const promiseThree = new Promise(function (resolve, reject) {

    setTimeout(function () {
        resolve({
            userName: "user1",
            email: "user1@example.com"
        })
    }, 1000)

})

promiseThree.then(function (user) {

    console.log(user);

})


// METHOD 4 - handling with ERROR

const promiseFour = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({
                userName: 'user2',
                password: '123'
            })
        }
        else{
              reject('ERROR: Something went wrong')
        }
    }, 1000)

})

promiseFour
.then((user) => {
     
    console.log(user);
    return user.userName
})
.then((username) => {
       console.log(username);
})
.catch((error) => {
     console.log(error);
})
.finally(() => console.log("the promise either resolved or rejected"));



                        // METHOD 5 

const promiseFive = new Promise(function(resolve, reject){
        
          setTimeout(function(){
                  let error = true;
                  if(!error){
                        resolve({
                               userName : "javascript",
                               password : "321"
                        })                         
                }
                else{
                      reject("ERROR! : Js Went Wrong");
                }
          }, 1000)
})

async function consumePromiseFive() {
       
       try {
        const response = await promiseFive;
        console.log(response);
       } catch (error) {
           console.log("The error is handled by using try catch");
       }
    
}

consumePromiseFive()


                // FETCH

// async function getfetchapi (){
        
       
//       try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const data = await response.json();

//        console.log(data);
        
//       } catch (error) {
//            console.log("E:" + error);
//       }
// }                

// getfetchapi()

                        // FETCH  METHOD 2

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => {

    return response.json();
    
})
.then((data) =>{

      
      console.log(data);

})
.catch((e) =>{
      console.log(e);
})