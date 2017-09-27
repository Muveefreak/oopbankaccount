/**cls
 * Accounts base class
 */
class Accounts {
    constructor(name, balance, deposit, withdrawal, bvn) {

        this.userName = name;
        this.userBalance = balance;
        this.userDeposit = deposit;
        this.userWithdrawal = withdrawal;
        this.bvn = bvn;
    }
    accountInfo() {
        //user account details//
        return `${this.userName} | ${this.userBalance} | with BVN ${this.bvn}`;
    }

    accountBalance() {
        return this.userBalance; //returns userbalance//
    }

    getName() {
        return this.userName;
    }

    setName(name) {
        return this.userName = name;
    }

    getBvn() {
        return this.bvn;
    }

    makeWithdrawal(userBalance, userWithdrawal) {
        let newBalance = this.userBalance - this.userWithdrawal;
        if (typeof (userWithdrawal) != 'number' || typeof (userBalance) != 'number'  || newBalance < 0) {
            return 'Invalid Amount';
        }
        return newBalance;
    }
    makeDeposit(userbalance, deposit) {
        let newBalance = this.userbalance + this.userDeposit;
        if (typeof (userDeposit) != 'number' || typeof (userBalance) != 'number') {
            return 'Invalid Amount';
        }
        return newBalance;
    }
}

export default Accounts;