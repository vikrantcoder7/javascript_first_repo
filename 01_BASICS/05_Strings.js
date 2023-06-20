const name = "vikrant";
const repoCount = 2;

// console.log(name + repoCount + "value") // old method

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // string interpolation method

const gamename = new String('hiteshhc');

// console.log(gamename[0]);

// console.log(gamename.__proto__);         // getting a type 

// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('t'));

const newString = gamename.substring(0, 4);

console.log(newString);

const animal =  ['a', 'b', 'c', 'd'];

console.log(animal.slice(2));

const animalname = "tiger";

console.log(animalname.slice(0,2));

const newStringOne = "  vikrant   ";

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://localhost/host%20change";

console.log(url.replace('%20', '-'));





