function BankAccount(customerName, balance =0){

    this.customerName=customerName;

    this.accountNumber = Date.now();

    this.balance = balance;

    this.deposit = function(amount){
        this.balance = balance + amount;
    };
    //withdraw function using arrow function this time
    this.withdraw = (amount)=>{
        this.balance -= amount;

    };

}


const shandilya = new BankAccount('shandilya kumar',1000);
shandilya.deposit(5000);
console.log(shandilya);
//balance is 6000 because opening balance is 1000 and deposit is 5000
//now again add 4000 and it will become 5000
shandilya.deposit(4000);
console.log(shandilya);
//now withdraw shandilya's account 4500 and it will become 500
shandilya.withdraw(4500);
console.log(shandilya); //500 bachega



const rakeshAccount = new BankAccount('Rakesh Kumar',1000);
const  sauravAccount = new BankAccount('saurav',25000);
const  sssauravAccount = new BankAccount('abhishek');



console.log(rakeshAccount.customerName,rakeshAccount.balance);
rakeshAccount.balance=555555550;
//this should not be happen ,but it will 
console.log(rakeshAccount);

console.log(sauravAccount);
console.log(sssauravAccount);
console.log(rakeshAccount);


//    dom manipulation
const accounts =[];//array empty
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

accountForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const account = new BankAccount(customerName.value,+balance.value);// string convert number

    accounts.push(account);

    console.log(accounts);
});