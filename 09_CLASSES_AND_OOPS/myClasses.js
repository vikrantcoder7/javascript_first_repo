// ES6

class User {

            constructor(username, email, password){
                this.username = username;
                this.email = email;
                this.password = password;
            }

            encryptPassword(){
                return `${this.password}abc`
            }

            changeUsername(){
                   return `${this.username.toUpperCase()}`
            }
}

const givedetails = new User("ramesh", "ramesh@123", 123);

console.log(givedetails.encryptPassword());
console.log(givedetails.changeUsername());


// behind the scene 


 function user1 (username, email, password){
         
         this.username = username;
         this.email = email;
         this.password = password;
  
 }


 user1.prototype.encryptPassword = function(){

        return `${this.password}abc`
        console.log(`the encryptedpassword is ${this.password}abc`);
 }

 user1.prototype.changeUsername = function(){
       return `${this.username.toUpperCase()}`
       console.log(`the uppercased username is ${this.username.toUpperCase()}`);
 }

 const log1 = new user1("check1", "check1@g", 123)


 console.log(log1.encryptPassword());
 console.log(log1.changeUsername());