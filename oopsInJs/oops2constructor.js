//constructor function naming conventions
function Person(firstname,lastname,age){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    //add method also in constructor
    this.sayHi = function(){
        alert("Hi from constructor function");
    }

    this.changeAge = function(newAge){
        this.age=newAge;
    }
};

let person1 = new Person("gaurav","kumar",25);
console.log(person1);
let person2 = new Person("saurav","kumar",26);
person2.changeAge(40);
console.log(person2);