console.log("file running")
const s1 = "hello"
const s2= "World"
const name ="Lakshay"
const count=50
// console.log(s1+ count) //Avoid using use backtics instead
console.log(`Hello my name is ${name} amd my count is ${count}`)

const myName = new String("Lakshay Mangal");
console.log(myName);
console.log(typeof myName)
console.log(myName.__proto__)
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(2));
console.log(myName.indexOf('t'));44

let newString = myName.substring(0,4)

console.log(newString);
let anotherString= myName.slice(-8,-3)
console.log(anotherString)

let s3= "             Lakshay          "
console.log(s3)
console.log(s3.trim());
let s4= "Orange is the new black";
console.log(s4.split(' '))
console.log(s4.replaceAll(' ','   '));
console.log(s4.includes("the"));

