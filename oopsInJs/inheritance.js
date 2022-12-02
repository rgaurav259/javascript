class Person{
    //constructor function
    constructor(){
        console.log("person constructor created.......");
    }
}
let person1 = new Person();
console.log(person1);
let person2 = new Person();
console.log(person2);
// person constructor created.......
// inheritance.js:8 Person {}
// inheritance.js:4 person constructor created.......
// inheritance.js:10 Person {}

class persons{
    constructor(n,a){
        this.name=n;
        this.age = a;
    }

    //method 
    sayHi(){
        console.log("Hi..!!!!!!!! from method ");
    }
    //static method
     static hello(){
        console.log("Hi..!!!!!!!! from static method.. ");
    }

    //static property
    static sproperty = "something";

}

let persons1 = new persons('gaurav',25);
persons1.sayHi();
persons.hello();//class name se call ho rha hai
console.log(persons1)
console.log(persons.sproperty)



//inheritance

class emp{
    constructor(n){
        this.names=n;
        console.log("employee constructor called");
    }

    msg(){
        
        console.log("hii from message")
    }
    
}


class manager extends emp {
    constructor(p, d){
        super(p);
        this.department = d;
        console.log("manager   constructor called");
    }
    info(){
        super.msg();
        this.msg();
        console.log(this.names + " is manager of department "+this.department);
    }
}


let mng1 = new manager('gaurv',"MCa");
console.log(mng1);
mng1.msg();

mng1.info();