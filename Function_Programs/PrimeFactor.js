/******************************************************************************
 *  Execution       :   1. default node         cmd> node PrimeFactor.js 
 *                      2. if nodemon installed cmd> nodemon PrimeFactor.js
 * 
 *  Purpose         : Compute prime factors of user given number.   
 * 
 *  @description    
 * 
 *  @file           : PrimeFactor.js
 *  @overview       : PrimeFactor module to compute prime factors of user given number.
 *  @module         : PrimeFactor - This is optional if expeclictly its an npm or local package
 *  @author         : BridgeLabz <bridgeit@bridgeit>
 *  @version        : 1.0
 *  @since          : 20-12-2018
 *
 ******************************************************************************/
/** 
*readline module provides an interface for reading data from readable stream one line

*/
const readline = require('readline');
const prompt = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });

var utility = require('./utility.js');
function primeFact(){
prompt.question("Enter number to find prime factors= ", (num) => 
{
    utility.calculatePrimeFactor(num);;

});
}primeFact();