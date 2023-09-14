const user = {

       userName : "user1",
       loginCount : 8,
       signedIn : true,

       getuserdetails: function(){
            console.log(`username: ${this.userName}`);
       }
}

console.log(user.userName);
console.log(user.getuserdetails());


function userfun(username, logincount, Isloggedin){
       this.userName = username;
       this.logincount =  logincount;
       this.Isloggedin = Isloggedin;

       const checkfunction = function(){
            console.log(`Welcome ${this.userName}`);
       }
       return this;
}

const userOne = new userfun("ramesh", 12, true)
const userTwo = new userfun("check", 13, false)
console.log(userOne);
console.log(userTwo);