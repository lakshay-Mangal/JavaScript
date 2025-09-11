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
