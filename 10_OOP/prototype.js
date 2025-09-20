let name = "lakshay     "
let mySurname = "  mangal"

console.log(name.trim().length);


let myHero=["stark","thor"];

let heroPower = {
    stark :"suit",
    thor: "hammer",

    getSpiderPower: ()=>{
        console.log("stark power is ", this.stark);
        
    }
}

Object.prototype.lakshay= ()=>{
    console.log("Lakshay is omnipresent");
    
}
heroPower.lakshay();

myHero.lakshay();

Array.prototype.heyLakshay= ()=>{
    console.log("Lkashay says hello");
    
}
myHero.heyLakshay();
// heroPower.heyLakshay();


//Inheritence


const Teacher ={
    makeVideo: true
}
const teachingSupport ={
    isAvailable: true
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime : true,
    __proto__:teachingSupport
}
const user= {
    name:"Luke",
    email: "google"
}
// Teacher.__proto__= teachingSupport;
//Modern Syntax
Object.setPrototypeOf(teachingSupport,Teacher)


let anotherUsername= "LAKSHAY      "


String.prototype.trueLength = function(){
console.log(`${this}`);
// console.log(`${this.name}`);
console.log(`true length is : ${this.trim().length}`);


}
anotherUsername.trueLength();
name.trueLength();
"icetea".trueLength();