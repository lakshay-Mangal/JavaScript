//for of loop

['a','b','c'] //character array
[{},{},{}]; //object array

const arr= [1,2,3,4,5]

for (const i of arr) {
    console.log(i);
    
}

let greetings = "Hello World !"
for(const i of greetings) {
    if(i==' ') continue;
    console.log(`Each character is ${i}`);
}

//Maps
const a= new Array(1,2,3,450);
const map = new Map();
map.set('IN',"India")
map.set('US',"Unted States")
map.set("FR","france");

console.log(map);

for(const [key,value] of map) console.log(key,'->',value);

const myObject = {
    "game1" : "NFS",
    'game2' : "GTA"
}

// for(const [key,value] of myObject) console.log(key,"->",value);

// for(const key in map) console.log(map[key]); //map is not iterable



const myCoding = [
    {
        languageName: "Js",
        languageFile: "Js"
    },
    {
          languageName: "Java",
        languageFile: "Java"
    },
    {
          languageName: "python",
        languageFile: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFile);
    
})
