function sum(a,b){
    return a+b;
}

//arrow function
let sumArrow = (a,b)=>{
    return a+b;
}

console.log(sum(2,3));
console.log(sumArrow(2,3));

//one line arrow then 
 let sumArro = (x=>x*2);
 console.log(sumArro(2));


 //again 2 param 
 let sumArrows = (a,b)=> a+b;
 console.log(sumArrows(2,5));


 function double(a){
    return 2*a;
 }
 console.log(double(50));
 //arrow unction
 let doubles = (a) => 2*a;
 console.log(doubles(50));


 //without param

 let randomA = () => Math.random();
 console.log(randomA());
 const idGenerator = () => Math.floor(Math.random() * 1000000);
 console.log(idGenerator());


 //clicked event

//  document.addEventListener('click',function(){
//     console.log("clicked.........");
//  });

 //now arrow above function
 document.addEventListener('click',() => console.log("clicked........."));


