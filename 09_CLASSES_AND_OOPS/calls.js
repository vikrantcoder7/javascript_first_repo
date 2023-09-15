function setUsername(username) {
        
        this.username = username;
       console.log();
}

function createuser(username, email, password){

    setUsername.call(this, username)
    this.email = email;
    this.password = password;
}

const chai = new createuser("chai", "chai@ex.com", 123);

console.log(chai);


