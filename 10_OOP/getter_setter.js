class user{
    constructor(name,password){
        this.name=name;
        this.password=password;
    }

    get password(){
        return `${this._password}lakshay`;
    }
    set password(value){
        this._password=value;
    }

    get name(){
        return this._name.toUpperCase();
    }
    set name(value){
        this._name = value
    }
}


const lakshay = new user("lakshuy","abc")

console.log(lakshay.password);
console.log(lakshay.name);

