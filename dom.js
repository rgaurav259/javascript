//DOM manipulation document object model
//there are four ways to get the data
// "1.getElementById"
// console.log('hello');

// let title = document.getElementById('title');

// console.log(title.innerText);
const heading = document.getElementById('heading');
console.log(heading.innerText);

// "2.getElementsByTagName"

const headings = document.getElementsByTagName('h1');
//console.log(headings);
console.log(headings);//it will return array collection

//"3."  getElementsByClassName

const head=document.getElementsByClassName('headingss');
console.log(head);


//"4." querySelector
const que = document.querySelector('#heading');//css selector types
console.log(que.innerText);
// if id then # if class then . in querySelector;

// "5."quierySelectorAll
const queryselec= document.querySelectorAll('.headingss');
console.log(queryselec);
console.log('now get parents .................................');

//traverse Dom
//parent node dom

const h = document.querySelector('.child');
const p = h.parentNode;
console.log(p);

//childNodes 
const p1 = document.querySelector('.parent');
console.log(p1.childNodes);

//3. nextElementSibling

const sib = document.querySelector('.child');
console.log(sib.nextElementSibling);

//4. previousSiblings

const sibb = document.querySelector('h5');
console.log(sibb.previousSibling);


/**
 * manipulation ....................................
 */

const docc = document.querySelector('#heading');
docc.innerHTML = 'webdev is awesome';
docc.style.color='red';
docc.style.fontSize='100px';