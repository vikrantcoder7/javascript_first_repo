class user {
       constructor(email, pass){
            this.email = email;
            this.pass = pass;
       }

       get email(){
           return this._email.toUpperCase();
       }
       set email(value){
            this._email = value
       }

       get pass(){
           return this._pass.toUpperCase();
       }
       set pass(value){
           this._pass = value;
       }
}

const userobject = new user("user@gmail.com", "abc");

console.log(userobject.pass);