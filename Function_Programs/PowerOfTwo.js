const readline = require('readline');
const prompt = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });

var utility = require('./utility.js');
utility.calculatePowerOfTwo()

