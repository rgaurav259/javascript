const heading = document.createElement('h1');
heading.innerHTML = 'javascript is awesome! it has dom feature';
heading.classList.add('id1');
const parentsss = document.querySelector('.parent');
parentsss.appendChild(heading);//this will print browser

console.log(heading);