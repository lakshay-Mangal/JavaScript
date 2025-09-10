const myArr=  [0,1,2,3,4,5,true,"Lakshay"]
let arr2= [1,2,34,5];

console.log(arr2[0])
let arr1= arr2
arr1[2]=3;
console.log(arr2); //arrays make shallow copy

let arr3 = new Array(1,2,3,4,5,6,7,8);

console.log(arr3.includes(3));
arr3.pop();
console.log(arr3)
arr3.push(10);

arr3.splice(7,0,8,9);
arr3.unshift(-1);
arr3.shift();
console.log(arr3.indexOf(5));

console.log(arr3);
let sentence1= arr3.join();
console.log(sentence1);
 arr1= ["my", "name","is","Lakshay","mangal"];
let sentence2= arr1.join("- ");
console.log(sentence2);

//Differnce between splice and slice

/*
1. slice()

Does NOT change the original array (non-destructive).

Returns a new array containing a portion of the original.

Syntax:

array.slice(start, end)
*/

/*
2. splice()

Changes the original array (destructive).

Can remove, replace, or insert elements.

Syntax:

array.splice(start, deleteCount, item1, item2, ...)
*/
let arr5=arr3.slice(1,5)
console.log(arr5);
arr3.splice(4,3,101,102,103);
console.log(arr3);