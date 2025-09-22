const descriptor =Object.getOwnPropertyDescriptor(Math,'PI')

console.log(Math.PI);
Math.PI=5;
console.log(Math.PI);

console.log(descriptor);

const chai = {
    name: "ginger tea",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai fat gyi");
        
    }
}
//if we false enumeration then it will not show up in loops
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
 
for (let [key,value] of Object.entries(chai) ) {
    if(typeof value != `function`)
   { console.log(`${key} : ${value}`);}
    
}