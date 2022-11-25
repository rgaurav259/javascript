function login(){

    console.log("hello from function");
}

login();

function logins(userName,password){

    console.log(`${userName},and password is  :: ${password}  login successfully`);
}

logins('gaurav',1234);
logins('saurav',1234);
logins('abhsihek',1234);

function uppercaseString(str){
    //console.log(str.toUpperCase());
    return str.toUpperCase();
}
//uppercaseString('welcome');

const result =uppercaseString('welcome');
console.log(result);


//------------------------------------------------
//we can also define default parameter
function calculateArea(width,height=1){//with es6 we can directly use parameter default value

    //without es6
    //height= height === undefined ? 1 : height;
    const area = width * height;
    //return width*height;
    return area;
}
const area =calculateArea(15,20);
console.log(area);
const areas =calculateArea(15);
console.log(areas);


//variable scope

function download(){
    //download logic goes here 
    
    const filename = 'xyz.pdf';
}

console.log(filename);
download()









