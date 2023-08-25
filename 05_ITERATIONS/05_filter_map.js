const coding = ["js", "ruby", "java", "python", "cpp"]

// const values  = coding.forEach( (item ) => {

//      console.log(item);

//      return item;
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums =  myNums.filter( (num) => {
//     return num > 4
// });


// const   newNums = [];

// myNums.forEach( (num) => {

//        if(num > 4) {
//             newNums.push(num)
//        }

// })

// console.log(newNums);


const books = [
        {
             title: "Book one",
             genre: "mystery",
             publish: 1999,
             edition: 2004
        },
        {
             title: "Book two",
             genre: "drama",
             publish: 2000,
             edition: 2005
        },
        {
             title: "Book three",
             genre: "Non-Fiction",
             publish: 2002,
             edition: 2006
        },
        {
             title: "Book four",
             genre: "Fiction",
             publish: 1999,
             edition: 2004
        },


]

// const userBooks = books.filter( (selectBooks) => {
//         return selectBooks.genre === 'Fiction'
// })

const userBooks = books.filter( ( selectBooks ) => {
       
        return selectBooks.publish >= 2000 && books.genre === "History"
})

console.log(userBooks);