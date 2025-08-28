//Types of datatypes 

// PRIMITIVE - 7 TYPES: STRING , NULL, NUMBER , BOOLEAN , UNDEFINED,SYMBOL, bigInt They all are call by value

//Non primitive -reference types  - They are call by reference => Array, Object, Function

const id= Symbol("123")
const id2= Symbol("123")

console.log(id===id2)
console.log(id==id2)

const heroes= ["Superman", "Spiderman", "Nova"]

let myObj=
{
    name : "lakshay",
    age:19,
    isMale: true
}

console.log(typeof myObj)

 const myFun = function(){
    console.log("Hello World");
    
}
console.log(myFun)
myFun();

//-------------------------------------------------------------------
//Stack (primitive) heap(non primitive)
let num1=5;
let num2=10;
num2=15
console.log(num1); console.log(num2);

let user1 ={
    name: "Lakshay Mangal",
    email: "mangal@xyz.com"
}
let user2 = user1

user2.name= "AKSHAY"

console.log(user1)

