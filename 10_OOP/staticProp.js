class User {
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    createId(){
        return `123`;
    }
}
const lakshay = new User("Lakshay");
console.log(lakshay.createId());
//static

class teacher extends User {
    constructor(username,email){
        super (username);
        this.email= email;
    }
}

const iphone = new teacher("teacher","gmail");
iphone.logMe()