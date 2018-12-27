/******************************************************************************
 *  Execution       :   1. default node         cmd> node PowerOfTwo.js 
 *                      2. if nodemon installed cmd> nodemon PowerOfTwo.js
 * 
 *  Purpose         : This   program   takes   a   command­line   argument   N   and   prints   a   table   of   the
                      powers   of   2   that   are   less   than   or   equal   to   2^N.
 * 
 *  @description    
 * 
 *  @file           : PowerOfTwo.js
 *  @overview       : PowerOfTwo module to print table of 2^N.
 *  @module         : PowerOfTwo - This is optional if expeclictly its an npm or local package
 *  @author         : BridgeLabz <bridgeit@bridgeit>
 *  @version        : 1.0
 *  @since          : 20-12-2018
 *
 ******************************************************************************/

N=+process.argv[2];//get command line argument
function powerOfTwo() {
    var utility = require('./utility.js');
    utility.calculatePowerOfTwo(N)
} powerOfTwo();
