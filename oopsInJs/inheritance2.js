class employee{
    #name ="";
    constructor(n){
         //this.name =n;   //this is public constructor
        //  if we declare # then it's private
        this.#name=n;
    }

    getName(){
        console.log(this.#name);
    }
    //method ko bhi private bana sakte hai uske aage #add kar do 
}

let Emp1 = new employee("saurav");
console.log(Emp1.name);
console.log(Emp1.getName());


//mixing ........................................................

//object
let usefullMethod = {
    sayHi(){
        console.log("Hi...........")
    },
    sayBye(){
        console.log("Bye...........")
    }
};



class user{
    constructor(){
        this.name="gaurav";
    }
}

Object.assign(user.prototype, usefullMethod);
//create object
let user1 = new user();
console.log(user1);
//we have to assign prototype in Object
console.log(user1.sayHi());
