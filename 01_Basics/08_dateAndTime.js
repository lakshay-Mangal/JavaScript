let myDate = new Date();
// console.log(myDate.toString()); // Current date and time 
// console.log(myDate.toDateString()); // Current date
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth()); // Month starts from 0 to 11
// console.log(myDate.getDate());
// console.log(myDate.getDay()); // Day starts from 0 to 6
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getTime()); // time in milliseconds from 1 Jan 1970 to current date

let myCreatedDate= new Date ("2023-02-11");
console.log(myCreatedDate.toLocaleString()); 

// let myTimeStamp =Date.now();
// console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));
console.log(myDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' ,weekday:`long`, hour: '2-digit', minute: '2-digit', second: '2-digit' }));