// const coding = ["js",'python',"java","ruby","cpp","c"];
// //for each will not return a value 
// const values= coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// })

// console.log(values);


const nums = [1,2,3,4,5,6,7,8,9,10];

const newNums=nums.filter((num)=> {return num>4} )
console.log(newNums);


const nums2= []

nums.forEach((item)=>{
    if(item >4)  nums2.push(item);
})

console.log(nums2)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks= books.filter((book)=> book.genre=='History')
const userBooks= books.filter((book)=> book.publish>=1995 && book.genre== 'History' )
console.log(userBooks);
