// Immediately invoked function expressions (IIFE)

(function () {
    console.log("DB Connected");
    
})(); //no need to give name to function


/*
Why use IIFE?

To avoid polluting the global scope.

To run code immediately without needing to call the function later.

Super common in older JS patterns (before ES6 let/const modules).
*/

//can also write the same using arrow function

(()=>{
    console.log("DB connected using arrow");
})();

(function (){
    console.log("Practice iife");
    
})();

((username)=>{console.log(`h1 ${username} Practice iife using arrow`);
} )("lakshay")