//alert("hello gaurav");

let x =10;
//alert(x);

console.log(x);
x=30;
console.log(x);
x=40;

//let x =40; // we can't assign x again using in let 
console.log(x);
console.log(x);

const y =120;
//y=20;//we can't change the value  again using in const kind of private 
console.log(y);


//var old keyword
var z = 123;
z=12;
var z =125;
z=25000;
//uisng var we can change the value as well as re-assign also
console.log(z);

//    TypeOf-----------

let xx =125;
console.log(typeof xx);//number

let str="34";
console.log(typeof str);//string

let gaurav;
console.log(typeof gaurav);//undefined

let boo = true;
console.log(typeof boo);//boolean

let em = null;
console.log(typeof em);//object

 

//----
let a =33;
let b =true;

console.log(a + 12 + b);//46 because true denotes 1 false 0
let c ="gaurav";
console.log(c);
console.log(a + 12 + c);

let names ="gaurav";
let lastName ="kumar";

console.log(names + " "+lastName);
console.log("hey my name is "+ names + " "+lastName+ " .");


//ecma script backtick 

console.log(`hey my name is ${names} ${lastName}`);
console.log(`hey my name is ${72} ${lastName}`);



//convert number to string
let m =56;
console.log(m);
console.log(typeof String(m));

let m1 ="56";
console.log(m1);
console.log(typeof Number(m1));