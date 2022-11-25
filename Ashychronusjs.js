console.log('hello');

//ashycronus 
setTimeout(function(){
    console.log('i am from settimeout');
},3000)


console.log('javascript');

//both print first hell and javascript and after 3 seconds then function print

//now 2nd program 
console.log('START ...');
function waitforSevenSeconds(){
    let ms = 7000+new Date().getTime();
    while(new Date() < ms) {}
}
setTimeout(()=>{
    console.log('i am from settimeout but another one settimeOut');
},3000)//it doesn't depend on time 
//if call stack is not empty ,and callback queue has all the methods then they havenot pushded


console.log('END ...');
waitforSevenSeconds();