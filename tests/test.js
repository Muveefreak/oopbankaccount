const assert = require('chai').assert;
import Accounts from '../src/accounts.js';
import Savings from '../src/savings.js'
import Current from '../src/current.js'

describe("AccountHolder",()=>{
    describe("AccountClass", ()=>{
      //This test block is for the accounts base class//
      let accountHolder;
      
      beforeEach(()=>{
        //initialize a new account object before each test block executed
         accountHolder = new Accounts('Akhere',30000,0,0,123456)
      })
      
       it("returns the name of the account holder", ()=>{
          assert.deepEqual(accountHolder.userName,'Akhere');
        });

        it("returns the details of the account holder", ()=>{
          assert.deepEqual(accountHolder.accountInfo(),'Akhere | 30000 | with BVN 123456');
        });

        it("returns Invalid Amount when a string is entered as withdrawal amount", ()=>{
          assert.deepEqual(accountHolder.makeWithdrawal('test'),'Invalid Amount');
        });

        it("returns Invalid Amount when a string is entered as deposit amount", ()=>{
          assert.deepEqual(accountHolder.makeDeposit('test'),'Invalid Amount');
        });

     })

})