
const month= 3;


switch (month){
    case 1: console.log("January");
    break;
     case 2: console.log("Feb");
    break;
     case 3: console.log("mar");
    break;
     case 4: console.log("Apr");
    break;
     case 5: console.log("May");
    break;
     case 6: console.log("june");
    break;
    
    default: console.log("No month");
    
}
/* 
falsy values
false ,0,-0,BigInt 0n, "",null,undefined,NaN
*/

// Truthy values 1,"0", 'false', " ", [], {}, function() {}- empty function

const emptyObj = {}

if(Object.keys(emptyObj).length===0) console.log("Object is empty");


// NUllish coalescing OPerator (??) : null undefined


let val1;
val1= 5??10;

val1= null ??10 // null ke liye safety check karne ke liye use hota h

val1 = undefined ?? 15 ??55 //Phla number le lega


console.log(val1);

// Terniry operator ?

const icePrice= 100
icePrice >=90 ? console.log("More than or equal to 90") :console.log("Less than 90");
;



