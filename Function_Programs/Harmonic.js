/******************************************************************************
 *  Execution       :   1. default node         cmd> node Harmonic.js 
 *                      2. if nodemon installed cmd> nodemon Harmonic.js
 * 
 *  Purpose         :   Prints the Nth harmonic numbers: 1/1+1/2+...+1/N
 * 
 *  @description    
 * 
 *  @file           : Harmonic.js
 *  @overview       : Harmonic module to compute 1/1+1/2+1/3+...+1/N
 *  @module         : Harmonic - This is optional if expeclictly its an npm or local package
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

var utility = require('../Function_Programs/utility');//require utility file 
function harmonicSeries() {
    userInput.question("Enter number to print harmonic series upto it  = ", (num) => {
        utility.printHarmonicSeries(num);//calll method
    });
}
harmonicSeries();
