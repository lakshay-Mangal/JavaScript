let a=300

if(true)
{
let a=10
const b=20
 console.log("local scope: ",a);
 function addNum(a,b){
    return a+b;
 }

}

 console.log(a);
// console.log(b);

function one (){
   const username ="Lakshay"

   function two(){
      const website= "youtube"
      console.log(username);
      
   }
   // console.log(website);
   two()
}
one();

if(true){
   const username="Lakshay"
   if(username){
      const website="youtube"
      console.log(username+website) ;
      
   }
   // console.log(website);
   
}
// console.log(username);

/* -------------------INTERSTING -------------- */
console.log((addone(5))
);
function addone(num) {
   return num+1;
}
//One to declaration se phle use ho rha h but add2 declaration se phle use nhi kar sakte
addTwo(5)
const addTwo= function(num){
   return num+2;
}
