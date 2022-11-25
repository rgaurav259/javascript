//scenario
/**
 * 1.register
 * 2.send welcome email
 * 3.logi
 * 4.get user data
 * 5.displaying user data
 * 
 */


//  function waitforSevenSeconds(){
//     let ms = 5000+new Date().getTime();
//     while(new Date() < ms) {}
// }

function register(){
    //waitforSevenSeconds();

    setTimeout(()=>{
        console.log('Register end');
    },2000);
    //console.log('Register end');
}

function sendEmail(){
    //waitforSevenSeconds();

    setTimeout(()=>{
        console.log('email end');
    },2000);
    // console.log('email end');
}

function login(){
    //waitforSevenSeconds();
    // console.log('login end');

    setTimeout(()=>{
        console.log('login end');
    },2000);
}

function getUserData(){
    //waitforSevenSeconds();
    //console.log('got UserData end');

    setTimeout(()=>{
        console.log('got UserData end');
    },2000);
}

function displayUserData(){
    //waitforSevenSeconds();
    //console.log('user dta displayed end');
    setTimeout(()=>{
        console.log('user dta displayed end');
    },2000);
}

register();
sendEmail();
login();
getUserData();
displayUserData();
console.log('Other applications work !!!!!!!!!!!!');



//all above synchronus line by line output dega

//now we are using asyncronus in same code i am goonna comment synchronus ciode


// in asynchronus other application first work and then wait waali
