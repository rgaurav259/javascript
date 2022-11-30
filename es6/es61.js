function sum(...args){ //rest parameter
    let result =0;
    for(let i=0; i < args.length; i++){
        result = result+args[i];
    }
    console.log(result);
}
sum(2,3,7,8,9,1,45);

// ... spread operator,rest parameter

let array1 =[1,2,3,4];
let array2 =[5,4,...array1];
console.log(array2);//output (6) [5, 4, 1, 2, 3, 4]
let array3 =[...array1,...array2]; //it will combine two array
console.log(array3);


//forof method 

let score = "helloworld";
for(let x of score){
    console.log(x);
}


//template literals..............

let str = "hellow \n ordddssfsfsf sjsn";
let str1 = `hellow 
ordddssfsfsf sjsn`;
console.log(str);
console.log(str1);



//destructing ..


let book =["advance js",200,150,54,'gaurav'];
// let name = book[0];
// let pages = book[2];
// let price =book[2];
console.log(book[2]);
// destructing
let[names,page,price]=book;
console.log(price);
console.log(page);
console.log(names);

//use 
function bookss(){
    //do something
    return["advance js",200];
}

let[book_title, prices]=bookss();
console.log(price);
console.log(book_title);


// Object Destructuring in js
let copy ={ nam:"java",
            pagess:200,
            pricessss:1500,

            publication:{
                pub_name:"gaurav",
                year:2022
            }
        };
// let n = copy.pricessss;
// console.log(n);
    

// Destructuring

// let{nam : title,pagess,pricessss}=copy;
let{nam : title,pagess,pricessss,publication:{pub_name :pub,year}}=copy;
console.log(pricessss);
console.log(title);
console.log(pub);





