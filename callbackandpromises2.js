//scenario
/**
 * 1.register
 * 2.send welcome email
 * 3.login
 * 4.get user data
 * 5.displaying user data
 * 
 */


//  function waitforSevenSeconds(){
//     let ms = 5000+new Date().getTime();
//     while(new Date() < ms) {}
// }

function register(callback){

    setTimeout(() => {
        console.log('Register end');

        callback();

    },2000);
    
}

function sendEmail(callback){

    setTimeout(()=>{
        console.log('email end');
        callback();
    },5000);
    
}

function login(callback){

    setTimeout(()=>{
        console.log('login end');
        callback();
    },3000);
}

function getUserData(){

    setTimeout(()=>{
        console.log('got UserData en d');
    },2000);
}

function displayUserData(){
    setTimeout(()=>{
        console.log('user dta displayed end');
    },2000);
}


//callback hell
register(function(){
    sendEmail(function(){
        login(function (){
            getUserData();
            displayUserData();
        });
        
    });
    
});

console.log('Other applications work !!!!!!!!!!!!');
