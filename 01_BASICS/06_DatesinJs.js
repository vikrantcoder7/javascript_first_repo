let mydate = new Date();

//console.log(mydate);
// console.log(mydate.toTimeString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(typeof mydate);

let mycustomdate = new Date(2023, 0, 23);
console.log(mycustomdate.toDateString());

let mycustomdate2 = new Date("2023-01-14");
console.log(mycustomdate2.toLocaleString());

let mytimestamp = Date.now();

console.log(mytimestamp);
console.log(mycustomdate2.getTime());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() +1
);
console.log(newDate.getDay());


newDate.toLocaleString(`default`, {
        weekday : "long"
})
