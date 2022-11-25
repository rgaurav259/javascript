//scenario now promises
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

function register(){

    return new Promise((resolve,reject)=>{

        setTimeout(() => {

            //return reject('error in while register');
            console.log('Register end');
    
            resolve();
    
        },2000);

    });
    
    
}

function sendEmail(){


    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log('email end');
            resolve();
            
        },5000);

    });

   
    
}

function login(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log('login end');
            resolve();
        },3000);

    });

   
}

function getUserData(){

    setTimeout(()=>{
        console.log('got UserData en d');
    },2000);
}

function displayUserData(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log('user dta displayed end');
            resolve();

        },2000);

    });
    
}


//callback hell
// register(function(){
//     sendEmail(function(){
//         login(function (){
//             getUserData();
//             displayUserData();
//         });
        
//     });
    
// });



//promises...........................................
// register()
//     .then(sendEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch((err)=>{
//         console.log("Error ",err);
//     });


//async await 

async function authenticate(){
    await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
    //by default it will return promises
}
authenticate().then(()=>{
    console.log("all set");
});

console.log('Other applications work !!!!!!!!!!!!');
//then we only use if function return promise