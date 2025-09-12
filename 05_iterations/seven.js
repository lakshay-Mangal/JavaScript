const nums = [1,2,3,4,5,6,7,8,9,10];

const num2=[];
 nums.forEach((item)=> {item+10;
    num2.push(item);
 })

 console.log(num2);
//OR

// const newNums =nums.map((num)=>num+10)
// console.log(newNums);

const num3 = nums
        .map((num)=> num*10)
        .map((num)=> num+1)
        .filter((num)=>num>=40)
console.log(num3);

