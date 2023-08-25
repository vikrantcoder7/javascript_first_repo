// for 

for(let i = 0; i<=10; i++){
     
     const element = i;
     console.log(element);
}


for(let i=0; i<=10; i++)
{
      
     console.log(`Outer Loop value: ${i}`);
     for(let j=0; j<=10; j++)
     {
         // console.log(`Inner loop value ${j} and inner loop ${i}`);
         console.log(`${i} *  ${j} = ${i*j}`);
     }
     
}


let myArray = ["Batman", "flash", "Spiderman"]

for(let i= 0; i< myArray.length ; i++){
      
      const element = myArray[i];
      console.log (element);
} 