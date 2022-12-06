function sayHello(){
    console.log("say hello function called");
}
function sayHII(){
    console.log("say HIII function called");
}

function add(num1,num2, callback){
    console.log(num1+num2);
    callback();
}

//add(10,20);//30

// even i want to another way

let x = 34;
let y = 256;
add(x, y, sayHello);
add(x, y, sayHII);
add(30,45, sayHII);

//add anonymous functions in calling add function
add(10,20,function(){
    console.log("bye.....");
});


//map functioss...................@####################################




let arr = [2,3,4,5,6];
//result ye chahhiye[4,6,8,10,12]

// without map
// let arr1 =[];
// for(let i =0;i<arr.length;i++){
//     arr1[i] = arr[i]*2;
// }
// console.log(arr1);//[4,6,8,10,12]


//now using map function

let arr2 = arr.map(function(val){
    return val *3;
});

console.log(arr2);

//using arrow

let arr3 = arr.map((val)=> val*3);

console.log("using arrow functions:" + arr3);


//filter

let arrf =[2,22,13,5,6,61,25,7];
//greater than 10 value find out 
console.log(arrf); 
let arrf1= arrf.filter(val => val > 10);

console.log("After sorting"); 

console.log(arrf1); 



//object
let team = [
    {
        names:"gaurav",
        position : "developer"
    },
    {
        names:"saurav",
        position : "ui"
    },
    {
        names:"abhishek",
        position : "developer"
    },
    {
        names:"shandilya",
        position : "mca"
    },
    {
        names:"anonymous",
        position : "manager"
    }
]

//i just want to only developer

let developer = team.filter(val=>val.position == "developer");
console.log(developer);

// console.log(object);//clg shortcut
