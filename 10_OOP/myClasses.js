// //ES 6 afterwards

// //No inbuilt class in js. it is all syntactical sugar

// class User {
//     constructor (username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }
//         encryptPassword(){
//             return `${this.password}abc`;
//         }
//         changeUsername(){
//             return `${this.username.toUpperCase()}`
//         }
//     }

//     const lakshay= new User("lakshau", "xyz","123")

//     console.log(lakshay.encryptPassword());
//     console.log(lakshay.changeUsername());
    

    //behind the scene

    function User (username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }

    User.prototype.encryptPassword= ()=>{
           return `${this.password}abc`;
    }
    User.prototype.changeUsername= function(){
                    return `${this.username.toUpperCase()}`

    }

    const mangal = new User("mangal","gmail","4234");

    console.log(mangal.changeUsername());

    
    