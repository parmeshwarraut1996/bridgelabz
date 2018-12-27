/******************************************************************************
 *  Execution       :   1. default node         cmd> node Distance.js 
 *                      2. if nodemon installed cmd> nodemon Distance.js
 * 
 *  Purpose         :  Distance    that   takes   two   integer   command­line   arguments   x
                       and   y   and  prints   the   Euclidean   distance   from   the   point   (x,   y)   to   the   origin   (0,   0).   The
                       formulae   to   calculate   distance   =   sqrt(x*x   +   y*y).   Use   Math.power   function
 * 
 *  @description    
 * 
 *  @file           : Distance.js
 *  @overview       : Distance module to calculate distance from origin to (x,y).
 *  @module         : Distance - This is optional if expeclictly its an npm or local package
 *  @author         : BridgeLabz <bridgeit@bridgeit>
 *  @version        : 1.0
 *  @since          : 20-12-2018
 *
 ******************************************************************************/
 

function dist(){
var x;
var y;
var utility=require('./utility.js');//require utility.js file
utility.calculateDistance(x,y);//call to calulateDistance() function in utility.js
}
dist();  