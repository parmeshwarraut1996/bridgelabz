const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var utility = require('./utility.js');
function permutation() {
    userInput.question("Enter string = ", (str) => {
        utility.obtainPermutation(str);
        
    });
}permutation();