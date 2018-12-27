/******************************************************************************
 *  Execution       :   1. default node         cmd> node ReplaceUName.js 
 *                      2. if nodemon installed cmd> nodemon ReplaceUName.js
 * 
 *  Purpose         : Replace string template   
 * 
 *  @description    
 * 
 *  @file           : ReplaceUName.js
 *  @overview       : ReplaceUName module to replace one string template by new string.
 *  @module         : ReplaceUName - This is optional if expeclictly its an npm or local package
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
        /**
         * @param{object}readline
         * var{object}userInput
         */
        input: process.stdin,
        output: process.stdout
    });

var utility = require('./utility.js');
function replaceName(){
prompt.question('Enter string:', (str) => 
{
    console.log("String is:-" + str);
    prompt.question('Enter user name to replace:', (str1) => 
    {
        prompt.question('Enter new user name:', (str2) => 
        {
            utility.replaceUserName(str,str1,str2)

        })
    })
});
}replaceName();