/******************************************************************************
 *  Execution       :   1. default node         cmd> node LeapYear.js 
 *                      2. if nodemon installed cmd> nodemon LeapYear.js
 * 
 *  Purpose         : Determines whether a year is leap or not.
 *
 *  @description    
 * 
 *  @file           : LeapYear.js
 *  @overview       : LeapYear module to check whether user given year is leap or not.
 *  @module         : LeapYear - This is optional if expeclictly its an npm or local package
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

var utility = require('./utility.js');
function leap(){
userInput.question("Enter year to check leap or not leap = ", (year) =>//get uder input
 {
    utility.checkLeapYear(year);//call method is in utility.js

});
}
leap();