let str = 'hello gaurav';

console.log(str);
console.log(str[0]);
console.log(str[3]);
console.log(str.indexOf("g"));
console.log(str.indexOf("Z"));//-1
console.log(str.replace("hello","namaste"));


// DOM MANIPULATION
let headings = document.getElementById("myHeading");
console.log(headings);

//we can use directly also 


//html content changes
headings.innerText = "gaurav";

headings.innerText = str; //hello gaurav printed
headings.style.backgroundColor = "green";


