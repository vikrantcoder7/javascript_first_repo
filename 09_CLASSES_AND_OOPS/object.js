// function mulby5(num){
//        return num * 5;
// }

// mulby5.power = 2;

// console.log(mulby5(5));
// console.log(mulby5.power);
// console.log(mulby5.prototype);

function createUser(userName, price){
        this.userName = userName;
        this.price = price;
        
        return this;
}

createUser.prototype.increment = function(){
       this.price++;
}

createUser.prototype.printMe = function(){
       console.log(`the price is ${this.price}`);
}

const chai = new createUser("dark", 12);
const tea  = createUser("milktea", 20)

chai.printMe();
//console.log(tea);