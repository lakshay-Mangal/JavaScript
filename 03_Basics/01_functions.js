// function sayMyName () {
//     console.log("L")
//     console.log("A")
//     console.log("K")
//     console.log("S")
//     console.log("H")
//     console.log("A")
//     console.log("Y")
// }
// sayMyName()

// function add2num (num1 ,num2){
//     console.log("producing output");
    
//      return num1+num2;
// }

// let result =add2num(3,5);
// console.log("Result: ",result);

function loginReturnMessage (userName="User"){
    if(userName===undefined || userName===''){
        return "Please enter a userName";
        
    }
        return `${userName} just logged in`

}

console.log(loginReturnMessage());

function calCartPrice(...num1){
    return num1.reduce((a,b)=>a+b,0);
}

console.log(calCartPrice(100,200,300));

const user = {
    username: "Lakshay",
    age: 20
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
    
}

handleObject(user);

handleObject({
    username:"SAM",
    age: 300
})

const myArray = [200,300,400,500];

function return2 (getArray){
    return getArray[1];
}
console.log( return2(myArray)
);
console.log(return2([100,200,300]))