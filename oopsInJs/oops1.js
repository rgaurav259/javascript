let person1={
    firstName:"gaurav",
    'last name':"kumar",
    age:28,

    //combine
    combineName: function(){
        console.log(this.firstName + " "+this["last name"]);
    }
};
console.log(person1.firstName);
console.log(person1["last name"]);
document.write(person1.age);
console.log(person1.age);
console.log(person1);
person1.age=30;
console.log(person1.age);


person1.combineName();
//second way
let person2={};
person2.names ="saurav Kumr";

person2.sayHi=function(){
    alert("HI..");
}

console.log(person2);
person2.sayHi();



//third way
let person3 = new Object();

person3.names ="ABHISHEK Kumr";

person3.sayHi=function(){
    alert("HI..");
}

console.log(person3);
person3.sayHi();