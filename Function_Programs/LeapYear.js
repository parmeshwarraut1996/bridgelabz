const readline = require('readline');
const prompt = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });

var utility = require('./utility.js');

prompt.question("Enter year to check leap or not leap = ", (year) =>
 {
    utility.checkLeapYear(year);

});
