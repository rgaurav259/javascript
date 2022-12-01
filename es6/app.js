//import karna hoga saari file jo bhi export hai other files
//all files import ke liye 
import * as usr from './modules/account.js';

import{withdraw as wd,deposit} from './modules/account.js';


console.log(names);

code();
// withdraw(); instead of this 
wd();
deposit();

console.log(usr.account_number);//this is shortcut usr to all files import

