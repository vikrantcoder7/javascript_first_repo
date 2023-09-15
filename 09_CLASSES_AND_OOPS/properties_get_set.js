function User(email, pass){
       this._email = email;
       this._pass = pass;

       Object.defineProperty(this, 'email', {
           get: function(){ return this._email.toUpperCase()},
           set: function(value){ this._email = value}
       })
}

const chai = new User("user@123", "123abc" )

console.log(chai.email);