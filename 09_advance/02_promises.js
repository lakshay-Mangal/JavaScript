// fetch('https://something.com').then().catch().finally()  baad mein padhenge

// promise reduce callback hell - callback ke andar callback fir andar callback
const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //db calls, cryptography , network
    setTimeout(() => {
        console.log(`Async task is Completed`);
        resolve();
    }, 1000);
});
//resolve - .then
//reject    -.catch
promiseOne.then(()=>{
    console.log("Promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(()=>{
    console.log("Async 2 resolved");
    
})


const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{

        resolve({username: "lakshay", email:"xyz@example.com"} )
    },1000)
})

promise3.then(function(user){
    console.log(user);
    
})

const promise4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error =false;
        if(!error) {
            resolve ({username:"Lakshya", password:123})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

promise4.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error); 
}).finally(()=>{
    console.log("Finally the promise is either resolve or rejected");  
})

const promise5 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error =true;
        if(!error) {
            resolve ({username:"javascript", password:123})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000);
});

async function consumePromise5(){
    try {
       const response =await promise5
    console.log(response); 
    } catch (error) {
        console.log(error);
         
    }
    
}
consumePromise5();


async function getAllUsers(){
 try {
    const response= await  fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(response);
    
 const data =await response.json()
 console.log(data);
 } catch (error) {
    console.log("E: ",error);
    
 }

} 
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))
.finally("Fetch completed");

