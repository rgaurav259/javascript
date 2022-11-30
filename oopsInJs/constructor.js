function BankAccount(customerName,balance = 0){//constructo function starts with capital

    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = this.balance;


    this.deposit = function(amount){
        this.balance= balance + amount;
    };
    //withdraw function arrow function
    this.withdraw=(amount)=>{
        this.balance -=amount;
    };

}
const gauravacc = new BankAccount("gaurav");
const sauravacc = new BankAccount("saurav",1000);
const abhishekacc = new BankAccount("gaurav",2000);
//console.log(gauravacc.customerName);
sauravacc.deposit(5000);
console.log(sauravacc);

let akas = new BankAccount('akash',1000);
console.log(akas);
akas.deposit(2000);
console.log(akas);
akas.withdraw(100);
console.log(akas);

//account form 

const accounts = [];

const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');


accountForm.addEventListener('submit',(e)=>{
    e.preventDefault();//page refresh se bachayega
    //console.log(customerName.value, balance.value);
   const account =  new BankAccount(customerName.value, +balance.value);//by default it will string
    accounts.push(account);
    console.log(accounts);
});



depositForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
});
