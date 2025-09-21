class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,id){
        super(username);
        this.id=id;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai =  new Teacher("chai",123);
chai.addCourse();

const tea = new User("tea");

tea.logMe();

console.log(chai instanceof Teacher);



