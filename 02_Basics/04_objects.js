const tinderUser = new Object();

console.log(tinderUser);
tinderUser.name="Lakshay"
tinderUser.age=20
tinderUser.value=55

const user = {
    email:"lakshay@google.com",
    fullname :{

        userfullname: {
        firstName: "Lakshay",
        lastName: "Mangal"
        }
    }
}
console.log(user.fullname?.userfullname)


const obj1= {1:"a", 2:"b"}
const obj2= {3:"a", 4:"b"}
const obj0 = {5:"a", 6:"b"}
//  const obj3= {obj1,obj2};
// const obj4= Object.assign( {},obj1,obj2,obj0)
const obj3 = {...obj1 ,...obj2,...obj0};
console.log(obj3)

const users =[
     {
        id: 1,
        email: "h@gmail.com",
        name :"lakshay"
     },
       {
        id: 2,
        email: "i@gmail.com",
        name :"akshay"
     },
       {
        id: 3,
        email: "j@gmail.com",
        name :"kshay"
     },
       {
        id: 4,
        email: "k@gmail.com",
        name :"shay"
     },
     
    ]
console.log(    users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('value'));

 const course = {
    courseName :"Javascript",
    coursePrice: 1934,
    courseInstructor: "FreeCodeCamp"
 }
//destructuring an obkect
 const {courseInstructor : instructor}= course
 console.log(instructor);

//  const navbar = ({company}) => {

//  }
//  navbar(company ="lakshay") 

// {
//   "name" : "Lakshya",
//   "courseName" : "JavaScript",
//   "price" : "Free"
// }
[
  {},
  {},
]