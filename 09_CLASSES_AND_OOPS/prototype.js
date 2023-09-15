
const myheros = ["thor", "spiderman"];

const heropower = {
      thor : "hammer",
      spiderman : "sling",
      getspider : function(){
           console.log(`Spidy Power is ${this.spiderman}`);
      }
}

Object.prototype.logfromobject = function(){
      console.log(`hey printsome from object`);
}

Array.prototype.logfromarray = function(){
     console.log(`hey log from Array`);
}




//heropower.printsome();
//myheros.logfromarray();

heropower.logfromarray();


const user = {
      
      name: 'chai',
      email : 'chai@google.com'
}

const teacher = {
   makevideo : true
}

const TeachingSupport = {
   isAvailable : false
}

const TAsupport = {
       makeAssignment : 'Js Assignment',
       fulltime: true,
       __proto__ : TeachingSupport
}

teacher.__proto__  = user;


// modern syntax

Object.setPrototypeOf(TeachingSupport, teacher);  // prototyping 

//

let anotherUsername= "user1    ";

String.prototype.truelength = function(){
   console.log(`${this}`);
      console.log(`the true length is : ${this.trim().length}`);
}

anotherUsername.truelength();
"TajChai".truelength();
"iceTea".truelength();
