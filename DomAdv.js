const heading = document.createElement('h1');
heading.innerHTML = 'javascript is awesome! it has dom feature';
heading.classList.add('id1');
const parentsss = document.querySelector('.parent');
parentsss.appendChild(heading);//this will print browser

console.log(heading);


//dom events .............................................

//eventtest
const btnn = document.querySelector('#btn');
const hed1 = document.querySelector('#heading1');


btnn.addEventListener('click',function(event){
        hed1.style.color = 'purple';
        hed1.style.fontSize ='40px';
        
        console.log('button click',event);
});
