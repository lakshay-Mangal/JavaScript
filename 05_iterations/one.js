
//for loop
// array = [1,2,3,4,5,"Lakhsya"];
// let sum =0;
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     sum+=array[index];
//     console.log(element);
    
// }
// console.log(sum);

for(let i=1;i<5;i++){
    console.log(`Outer loop value ${i}`);
     for(let j=1;j<=10;j++) {
        //console.log(`inner loop value ${j} and outer loop ${i}`);
       console.log(i+ '*' +j + '=' +(i*j));
        
}
}

let myArray= ["flash","batman","superman"];

// for(let i=0;i< myArray.length;i++) console.log(myArray[i]);

//also taught use of break and continue