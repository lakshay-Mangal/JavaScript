function sayMyName () {
    console.log("L")
    console.log("A")
    console.log("K")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("Y")
}
sayMyName()

// function add2num (num1 ,num2){
//     console.log(num1+num2);
// }

// let result =add2num(3,5);
// console.log("Result: ",result);

function add2num (num1 ,num2){
    console.log("producing output");
    
     return num1+num2;
}

let result =add2num(3,5);
console.log("Result: ",result);

function loginReturnMessage (userName="User"){
    if(userName===undefined || userName===''){
        return "Please enter a userName";
        
    }
        return `${userName} just logged in`

}

console.log(loginReturnMessage());

