const readline = require('readline');
const prompt = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });
var num;
function powerOfTwo() {
    var utility = require('./utility.js');
    utility.calculatePowerOfTwo(num)
} powerOfTwo();
