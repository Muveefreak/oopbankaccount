    /**
 * Savings Class inhreits from Accounts base class
 */
import {Accounts} from './accounts.js';

export class Savings extends Accounts{

    constructor(name,balance,deposit,withdrawal,bvn,withdrawalLimit){
        super(name,balance,deposit,withdrawal,bvn);
        this.withdrawalLimit=withdrawalLimit //includes a new instant variable for client budget//
    }

    setWithdrawalLimit(){
        let newBalance;
        newBalance = this.userBalance -  this.withdrawal;
        if(this.withdrawal > this.withdrawalLimit){
            return 'Maximum daily amount exceeded';
        }
        return newBalance; //adds 10% of the client budget for that week as default payment//
    }

    getDetails(){
        return `Savings account holder info: ${super.getDetails()}` //junior developer batch//
    }

}

