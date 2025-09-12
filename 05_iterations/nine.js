const nums = [1,2,3,5]

let ans = nums.reduce((acc, currVal)=> {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    
    return acc+currVal},0)
let nums2=[5,10,15,20];
let total = nums2.reduce((acc,currVal)=> acc+currVal,0);

console.log(ans);
console.log(total);


const shoppingCart = [
    {
        item: "js course",
        price: 2999
    },
     {
        item: "python course",
        price: 1999
    },
     {
        item: "java course",
        price: 5999
    },
     {
        item: "cpp course",
        price: 9999
    }
]

const price=shoppingCart.reduce((acc,item )=> acc+item.price,0)

console.log(price);

