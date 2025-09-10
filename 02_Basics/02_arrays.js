let marvelHero= ["Ironman","Hawkeye","BlackWidow","Spider-man"];
let dcHero= ["Superman","Flash","Batman","Martian"];
let magicians = ["harry","ron","hermoine","Neville"]
marvelHero.push(dcHero);
console.log(marvelHero); //Array merge nhi hua balki array mein ek array push ho gya

console.log(marvelHero[4][3]);
let concatAll= marvelHero.concat(dcHero,magicians);
console.log(concatAll);
let villains =["Killmonger","Thanos","Ronan"]
//oR we can use spread
let allHero= [...dcHero ,...marvelHero, ...magicians,...villains]
console.log(allHero);

let arr= [1,2,3,[4,5,6],[7],8,9,10,[11,12,[13,14,15]]];
let flattenedArray =arr.flat(Infinity)
console.log(flattenedArray);
let a1= new Array(1,2,3,4,[4,5,6,6])
console.log(a1.flat());

console.log(Array.isArray("Hello World"));
console.log(Array.from("Hello World"));

console.log(Array.from({name :"Lakshay"})); //interesting system samajh nhi pa rha iska array kaise banau

let score1=100;
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));


