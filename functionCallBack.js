//funtion expression and declaration

//declaration 
//function login(){}
//function expression
// anonymouys function
const asdf = function(){
    console.log('logggggeeeeddd innn......');
}

asdf();


//callback function

function formatText(text){

    return text.toUpperCase();
} 
const resultsssss = formatText('hello gaurav');
console.log(resultsssss);

//now call back 

function formatTextt(text, formatCb){
    return typeof formatCb === 'function'? 
    formatCb(text):text.toUpperCase;
    
}
const res = formatTextt('hello hello helllo',function(text){

    text.charAt(0).toUpperCase +text.slice(1);
});
console.log(res);


// iimediately invoked function expression  IIFE
(function setup(){
    console.log('setup done');
})();//wrapping is important even we call under braces.


//Arrow function 
const loggg = (username)=>{
    console.log(`login user.${username}..using arrow function`);
}
loggg('gaurav');
    
//short form arrow function

const sum =(num1,num2)=>{
    return num1+num2;
}

const result = sum(6,4);
console.log(result);

//short
const summ = (a,b) => a+b;
const summmmmm = summ(5,8);
console.log(summmmmm);


