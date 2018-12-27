/******************************************************************************
 *  Execution       :   1. default node         cmd> node Coupon.js 
 *                      2. if nodemon installed cmd> nodemon Coupon.js
 * 
 *  Purpose         : Genrate distinct Coupon numbers  
 * 
 *  @description    
 * 
 *  @file           : Coupon.js
 *  @overview       : Coupon module to generate distinct coupon numbers.
 *  @module         : Coupon - This is optional if expeclictly its an npm or local package
 *  @author         : BridgeLabz <bridgeit@bridgeit>
 *  @version        : 1.0
 *  @since          : 20-12-2018
 *
 ******************************************************************************/
/** 
*readline module provides an interface for reading data from readable stream one line

*/
const readline = require('readline');
const userInput = readline.createInterface(
    {

        /**
         * @param{object}readline
         * var {object} userInput
         */
        input: process.stdin,
        output: process.stdout
    });

var utility = require('./utility.js');//require utility.js
function couponNum() {
    userInput.question("Enter how many coupon you want= ", (num) =>// get user input 
    {
        utility.generateCoupon(num);// call method is in utility.js

    });
}
couponNum();