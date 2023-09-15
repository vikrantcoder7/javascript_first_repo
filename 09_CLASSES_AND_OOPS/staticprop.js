class user {

        constructor(username){
               this.username = username;
        }
        
        logMe(){
              console.log(`the username is : ${this.username}`);
        }

       static createId(){     /// static keyword doesn't give access to the other classes
               return `123`
        }
}

class Teacher extends user{
        
        constructor(username , email, password){
               super(username);
               this.email = email;
               this.password = password;
        }

}

//const check1 = new user("ramesh");

const check2 = new Teacher("suresh", "suresh@gmail.com", 123)
console.log(check2.createId());