export let account_number =45455585;
let account_type = "saving";

 function withdraw(){
    console.log("Amount deducted....");

}

function deposit(){
    console.log("Balance updated....");

}

//we can individualy export one by one if we want
//or we can all files export
export{withdraw,deposit}