//example of callback
/*function sayHello(){
  //this function i am going to use call back
  console.log("say Hello functions");
}

function sayHi(){
  console.log("say hiiiiiiiiiiiiiiii...............");
}
function sum(num1,num2,clbk){
  console.log("just for testing....");
  console.log(num1+num2);
  clbk();
  
}

let a =10;
let b =20;
sum(a,b,sayHello);
sum(100,58,sayHi);

*/
/*
const datas=[
    {"name":"gaurav","profession":"software Engineer"},
    {"name":"abhishek","profession":"software Engineer"}

];

function getDatas(){

    setTimeout(() => {

        let output = "";
        datas.forEach((data,index) => {
            output+= `<li>${data.name}</li>`;
        })
        document.body.innerHTML=output;
    }, 1000);

}

getDatas();
*/

/*Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

Callback
A callback is a function which can be passed as parameter to other function. See the example below*/
// a callback function, the name of the function could be any name
// const callbackfun = (n) => {
//     return n ** 2
//   }
//   // function that takes other function as a callback
//   function cube(callbackfun, n) {
//     return callbackfun(n) * n
//   }
//   console.log(cube(callbackfun, 5));


//============================
// Higher order function returning an other function
// const higherOrder = n => {
//     const doSomething = m => {
//       const doWhatEver = t => {
//         return 2 * n + 3 * m + t
//       }
//       return doWhatEver
//     }
//     return doSomething
//   }
//   console.log(higherOrder(2)(3)(10));

  //for each 
//   let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => console.log(num))
//console.log(sum);//output is 1,2,3,4,5,0;

//now i want to sum 
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num)
console.log(sum); //ans is 15;

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
countries.forEach((element) => console.log(element.toUpperCase()))

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)


const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)
console.log(countriesFirstThreeLetters);


//------------
const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty);

//every
const namess = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = namess.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)


const result = names.find((name) => name.length > 7)
console.log(result)
