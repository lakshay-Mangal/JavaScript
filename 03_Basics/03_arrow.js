const user ={
    userName: "Lakshay",
    price: 999,

    welcomeMessage: function(){
        console.log(`Hello ${this.userName}, welcome to website`);
        console.log(this);

    }

}

user.userName="sam"
user.welcomeMessage() 
console.log(this); //browser ke andar run karenge to window object milega par yahan empty milta h


function tea(){
    let username= "lakshay"
    console.log(this.username); //this is only useful inside objects it gives undefined in functions without object
    
}

 tea()

 //Arrow function

 const chai=  (username)=>{

    console.log(` hello ${username} this is lakshay mangal`);
    console.log(this);
    
 }

 chai("Timeline");

// const add2= (num1,num2)=>{
//     return num1+num2;
//  }
 const addMul= (...numbers)=> numbers.reduce((num1,num2)=> num1+num2,0) //return not needed as it is implicit return
// const addTwo =(num1,num2)=> (num1+num2);
const addTwo= (num1,num2)=> ({username: "lakshay"})

 console.log(addTwo(3,5));
 console.log(addMul(1,2,34,5));
 
 const myArray = [2,3,57,8,9]

