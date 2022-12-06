// document.cookie="item=milk ; expires =Sun, 20 Dec 2022 12:00:00 UTC";

// document.cookie="loc=item";

// document.cookie="item=bread,eggs,mango ; expires =Sun, 20 Dec 2022 12:00:00 UTC";

// let x = document.cookie;

// console.log(x);
// //expires ke liye past ka date dena hai automatic delete ho jayega 

// document.cookie="item=bread,eggs,mango ; expires =Thu, 1 Dec 2022 12:00:00 UTC";

//localstorage saving

// localStorage.setItem('FirstName',"gaurav");
// localStorage.setItem('Location',"delhi");

//get item key value pair 

// localStorage.getItem('Location');
// console.log(localStorage.getItem('Location'));

// localStorage.removeItem('Location');


//now session storage just change the local to session
sessionStorage.setItem('FirstName',"gaurav");
sessionStorage.setItem('Location',"delhi");
sessionStorage.getItem('Location');
console.log(sessionStorage.getItem('Location'));

sessionStorage.removeItem('Location');