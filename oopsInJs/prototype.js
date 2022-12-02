let person1 ={};
console.log(person1);
let person2 ={names:"gaurav"};
console.log(person2);
console.log(person2.hasOwnProperty('names'));
console.log(person2.hasOwnProperty('age'));
console.log(person1.hasOwnProperty('name'));

//use of prototype

function Person(first,last,a){
    this.firstName = first;
    this.lastName= last;
    this.age=a;

    
}

//add prototype

Person.prototype.fullName = function(){
    console.log(this.firstName + " "+this.lastName);
}
//create object
let personss1 = new Person("gurav","kumar",28);
let personss2 = new Person("surav","kumar",25);
console.log(personss1);
console.log(personss2);


