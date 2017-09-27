    /**
 * Cuurent class inherits/extends Accounts base class
 */
import Accounts from './accounts.js';

class Current extends Accounts{

    constructor(name,balance,deposit,withdrawal,bvn,withdrawalLimit,chequebook){
        super(name,balance,deposit,withdrawal,bvn);
        this.withdrawalLimit=withdrawalLimit; //includes a new instant variable for withdrawal limit//
        this.chequebook = chequebook;
    }

    setWithdrawalLimit(){
        let newBalance;
        newBalance = this.userBalance -  this.withdrawal;
        if(this.withdrawal > this.withdrawalLimit){
            return 'Maximum daily amount exceeded';
        }
        return newBalance;
    }
    getchequebook(){
        return true;
    }

    getDetails(){
        return `Current account holder info: ${super.accountInfo()}` 
    }
}

export default Current