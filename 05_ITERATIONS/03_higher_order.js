// for of

const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
    
   // console.log(i);
}

const greetings = "Hello, Welcome to the codebase";

for (const i of greetings) {

    if(i == " "){
         continue;
    }
    else{
         //console.log(i);
    }
    
}

// MAPS

const map1 = new Map();

map1.set("IN", "India");
map1.set("USA", "United State Of America")

console.log(map1);

// for(const i of map1){
     
//     console.log(i[1]);
// }

for(const [key, value] of map1){
     
    console.log(key, ":-", value);
}


const myobj = {
     
     "game1" : "nfs",
     "game2" : "cs",
     "game3" : "pubg"
}

for(const [key, value] of myobj){
      
    console.log(key , value);
}