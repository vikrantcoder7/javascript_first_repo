// Random Color generator 

console.log("hello");
const randomColor = function() {
     const hex = '0123456789ABCDEF';
     let color = '#';

     for(let i= 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
     }

     console.log(color);
     return color;
}

let changeclr;

const startchangingcolor = function(){
     
    if(!changeclr)
     changeclr = setInterval(changebgclr, 1000);
    
   function changebgclr(){
       document.getElementById('whbody').style.backgroundColor = randomColor();
   }

   
}

const stopchangingcolor = function(){

    clearInterval(changeclr)
    changeclr = null;
}

document.querySelector("#start").addEventListener('click',startchangingcolor);
document.querySelector("#stop").addEventListener('click', stopchangingcolor);