const username = {
    name: "Lakshay",
    email: "xyz@abc.com",
    signedI: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`UserName: ${this.name}`);
        
    }
}

// console.log(user.name);
// console.log(user.getUserDetails());

// const promise1= new Promise(); //here new keyword


function user(username,email,isLoggedIn){
    this.username= username;
    this.email=email;
    this.isLoggedIn= isLoggedIn
    this.greet = ()=> console.log(`welcome ${this.username}`);
    
    return this; 
}

const userOne =new user("lakshay","xyz@xyz",true);
const userTwo =new user("mangal","abc@wxt",true);
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);
