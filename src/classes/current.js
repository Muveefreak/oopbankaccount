    /**
 * Cuurent class inherits/extends Accounts base class
 */
import {Accounts} from './accounts.js';

export class Current extends Accounts{

    constructor(name,balance,deposit,withdrawal,bvn,withdrawalLimit,chequebook){
        super(name,balance,deposit,withdrawal,bvn);
        this.withdrawalLimit=withdrawalLimit; //includes a new instant variable for client budget//
        this.chequebook = chequebook;
    }

    setWithdrawalLimit(){
        let newBalance;
        newBalance = this.userBalance -  this.withdrawal;
        if(this.withdrawal > this.withdrawalLimit){
            return 'Maximum daily amount exceeded';
        }
        return newBalance; //adds 10% of the client budget for that week as default payment//
    }
    getchequebook(){
        return true;
    }

    getDetails(){
        return `Savings account holder info: ${super.accountInfo()}` //junior developer batch//
    }

}

