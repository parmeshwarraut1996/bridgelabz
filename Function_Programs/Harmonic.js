const readline = require('readline');
const userInput = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });


var utility = require('../Function_Programs/utility');


function harmonicSeries() {
    userInput.question("Enter number to print harmonic series upto it  = ", (num) => {
        
        utility.printHarmonicSeries(num);
    });
}
harmonicSeries();
