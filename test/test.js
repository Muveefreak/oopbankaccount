const assert = require('chai').assert;
import Accounts from '../src/classes/accounts.js';
import Savings from '../src/classes/savings.js'
import Current from '../src/classes/current.js'

describe("AccountHolder",()=>{
    describe("AccountClass", ()=>{
      //This test block is for the accounts base class//
      let accountHolder;
      
      beforeEach(()=>{
        //initialize a new account object before each test block executed
         accountHolder = new Accounts('Akhere',30000,15000,0,123456)
      })
      
       it("returns the name of the account holder", ()=>{
          assert.deepEqual(accountHolder.userName,'Akhere');
        });

        it("returns the details of the account holder", ()=>{
          assert.deepEqual(accountHolder.accountInfo(),'Akhere | 30000 | with BVN 123456');
        });

        it("returns Invalid Amount when a string is entered as withdrawal amount", ()=>{
          assert.deepEqual(accountHolder.makeWithdrawal('test','string'),'Invalid Amount');
        });

        it("returns Invalid Amount when a string is entered as deposit amount", ()=>{
          assert.equal(accountHolder.makeDeposit('text','text'),'Invalid Amount');
        });

     })
     describe("SavingsAccountClass", ()=>{
      //This test block is for the savings accounts class//
      let saccountHolder;
      
      beforeEach(()=>{
        //initialize a new account object before each test block executed
         saccountHolder = new Savings('Paul',80000,10000,50000,123456,60000)
      })
      
       it("returns the name of the account holder", ()=>{
          assert.deepEqual(saccountHolder.userName,'Paul');
        });

        it("returns the details of the account holder", ()=>{
          assert.deepEqual(saccountHolder.getDetails(),'Savings account holder info: Paul | 80000 | with BVN 123456');
        });

        it("returns the bvn of the account holder", ()=>{
          assert.deepEqual(saccountHolder.getBvn(),123456);
        });

        it("returns Invalid Amount when a string is entered as withdrawal amount", ()=>{
          assert.deepEqual(saccountHolder.makeWithdrawal('test'),'Invalid Amount');
        });

        it("returns Invalid Amount when a string is entered as deposit amount", ()=>{
          assert.deepEqual(saccountHolder.makeDeposit('test'),'Invalid Amount');
        });

     })
     describe("CurrentAccountClass", ()=>{
      //This test block is for the savings accounts class//
      let caccountHolder;
      
      beforeEach(()=>{
        //initialize a new account object before each test block executed
         caccountHolder = new Current('Ihenyen',100000,200000,60000,123456,40000)
      })
      
       it("returns the name of the account holder", ()=>{
          assert.deepEqual(caccountHolder.userName,'Ihenyen');
        });

        it("returns the details of the account holder", ()=>{
          assert.deepEqual(caccountHolder.getDetails(),'Current account holder info: Ihenyen | 100000 | with BVN 123456');
        });
        

        it("returns Invalid Amount when a string is entered as withdrawal amount", ()=>{
          assert.deepEqual(caccountHolder.makeWithdrawal('test'),'Invalid Amount');
        });

        it("returns Invalid Amount when a string is entered as deposit amount", ()=>{
          assert.deepEqual(caccountHolder.makeDeposit('test'),'Invalid Amount');
        });

        it("returns true to get cheque book", ()=>{
          assert.deepEqual(caccountHolder.getchequebook(),true);
        });

     })

})