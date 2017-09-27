    /**
 * Savings Class inhreits from Accounts base class
 */
import Accounts from './accounts.js';

class Savings extends Accounts{

    constructor(name,balance,deposit,withdrawal,bvn,withdrawalLimit){
        super(name,balance,deposit,withdrawal,bvn);
        this.withdrawalLimit=withdrawalLimit; //includes a new instant variable for withdrawal limit//
    }

    setWithdrawalLimit(){
        let newBalance;
        newBalance = this.userBalance -  this.withdrawal;
        if(this.withdrawal > this.withdrawalLimit){
            return 'Maximum daily amount exceeded';
        }
        return newBalance; 
    }
    
    getDetails(){
        return `Savings account holder info: ${super.accountInfo()}` 
    }

}

export default Savings