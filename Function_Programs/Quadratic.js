const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var utility = require('./utility.js');
function quadratic() {
    userInput.question("Enter value of first Coeficient a = ", (a) => {
        userInput.question("Enter value of second coefient b = ", (b) => {
            userInput.question("Enter value of constant c = ", (c) => {
                utility.calculateRoots(a, b, c);

            });

        });
    });
} quadratic();