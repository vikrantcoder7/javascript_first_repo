// Immediately Invoked Function Expression  (IIFE)

(function chai()                             // Named IIFE
{
   console.log("DB Connected");
   console.log("the older one is connected as well ");
})();


// ()()                               first () - definition, Second () - Execution - to avoid global scope pollution we use iife

( () => { 
          
          console.log("DB Connected Two");
}) ();


( (name) => {
       
      console.log(`DB username ${name}`);
}

)("sam")















