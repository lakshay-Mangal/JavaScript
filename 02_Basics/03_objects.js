// 2 methods - 1-> singleton 2-> object.create

//object literals
let person= {
    name :"Tony Stark",
    age: 45,
    hero: "Ironman",
    speak: function(to, line) {
        console.log(`hey ${to} I am ${this.name} and i want to say ${line}`);
        
    } 
};
person.speak("Spider-man","Hello World")
//using object it is equivalent to object literals only
let car = new Object();
car.brand ="Tesla";
car.model= "Model y";
car.mileage= "190 km"
car.drive= function() {console.log("Vroom Vroom!");
}

//using ES6 Class

class hero  {
    constructor(name,power){
        this.name=name;
        this.power=power;
        console.log(`Superhero ${this.name} created`);
        }
     display(currentAbility) {
        console.log(`This superhero's name is ${this.name} and power is ${this.power} . currently they can show you ${currentAbility}`)
    }
}

let Ironman= new hero("Tony", "Brains");
Ironman.display("Suits \n");
let spiderman= new hero("Peter", "Stength and senses among others")
spiderman.display("Web \n");
// spiderman.speak("Tron","Hello World"); will not work


const mySymbol = Symbol("key1");

const user ={
    name :"Lakshay",
    age:20,
    [mySymbol]:"key2",
    location: "Jaipur",
    email:"lakshay@gmail.com",
    isLoggedIn: true,
    lastLoggedIn: ["Monday","Friday"],
    "full name": "lakshay mangal"
}
console.log(user.email);
console.log(user["email"]) //full name ko bina square bracket waale method ke access hi nhi kar sakte
console.log(user["full name"]);
console.log(user[mySymbol]);
user.email= "lakshay@google.com";
// Object.freeze(user);
user.email="mangal@yahoo.com";
console.log(user["email"])
console.log(user);

user.greeting= function() {
    console.log("Hello world") ;
};

user.greeting();

