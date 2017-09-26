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

    makeWithdrawal(userBalance, userWithdrawal) {
        let newBalance = this.userBalance - this.userWithdrawal;
        if (typeof (this.userWithdrawal) != 'number' || typeof (this.userBalance) != 'number'  || newBalance < 0) {
            return 'Invalid Amount';
        }
        return newBalance;
    }
    makeDeposit(userbalance, deposit) {
        let newBalance = userbalance + deposit;
        if (typeof (deposit) != 'number' || typeof (userBalance) != 'number') {
            return 'Invalid Amount';
        }
        return newBalance;
    }
}

//savings
class Savings extends Accounts{

    constructor(name,balance,deposit,withdrawal,bvn,withdrawalLimit){
        super(name,balance,deposit,withdrawal,bvn);
        this.withdrawalLimit=withdrawalLimit //includes a new instant variable for withdrawal limit//
    }

    setWithdrawalLimit(userBalance,userWithdrawal){
        let newBalance = this.userBalance -  this.userWithdrawal;
        if(this.userWithdrawal > this.withdrawalLimit){
            return 'Maximum daily amount exceeded';
        }
        return newBalance;
    }

    getDetails(){
        return `Savings account holder info: ${super.accountInfo()}` //Savings account holder info//
    }
}

//current
class Current extends Accounts{

    constructor(name,balance,deposit,withdrawal,bvn,withdrawalLimit,chequebook){
        super(name,balance,deposit,withdrawal,bvn);
        this.withdrawalLimit=withdrawalLimit; //includes a new instant variable for withdrawal limit//
        this.chequebook = chequebook; //includes a new instant variable for cheque availability to current account holders//
    }

    setWithdrawalLimit(userBalance,userWithdrawal){
        let newBalance;
        newBalance = this.userBalance -  this.userWithdrawal;
        if(this.userWithdrawal > this.withdrawalLimit){
            return 'Maximum daily amount exceeded';
        }
        return newBalance; //new balance after withdrawal//
    }
    getchequebook(){
        return true;
    }

    getDetails(){
        return `Savings account holder info: ${super.accountInfo()}` //current account holder info//
    }

}

let accountHolder = new Savings('Ihenyen', 80000, 0, 50000, 123456);
console.log(accountHolder.accountInfo());

let saccountHolder = new Savings('Paul', 80000, 0, 50000, 123456, 40000);
console.log('Savings Account Balance: ', saccountHolder.setWithdrawalLimit(this.userBalance, this.userWithdrawal));
console.log(saccountHolder.accountInfo());

let caccountHolder = new Current('Akhere', 70000, 0, 40000, 123456, 50000);
console.log('Current Account Balance:' + caccountHolder.setWithdrawalLimit(this.userBalance, this.userWithdrawal));
console.log(caccountHolder.accountInfo());
console.log('chequebook available: ' + caccountHolder.getchequebook());


//export default Accounts;