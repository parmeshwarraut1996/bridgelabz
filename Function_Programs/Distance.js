const readline = require('readline');
const userInput=readline.createInterface(
{
    input: process.stdin,
    output: process.stdout
});
function dist(){
var x;
var y;
var utility=require('./utility.js');//require utility.js file
utility.calculateDistance(x,y);//call to calulateDistance() function in utility.js
}
dist();//call dist function