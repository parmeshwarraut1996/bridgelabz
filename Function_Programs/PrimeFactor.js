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