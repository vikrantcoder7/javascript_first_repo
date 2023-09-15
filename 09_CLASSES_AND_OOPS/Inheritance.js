class user {
       
       constructor(username) {
         this.username = username;
       }

       logMe(){
            console.log(`Username is ${this.username}`);
       }    
}

class Teacher extends user{

       constructor(username, email, password){
                
                super(username)
                this.email = email;
                this.password = password;
       }

       addcourse(){
           console.log(`the new course added by ${this.username}`);
       }
      
}

const chai = new Teacher("user1", "user1@gmail", 123)

chai.addcourse()

console.log(chai instanceof Teacher);
console.log(chai instanceof user);