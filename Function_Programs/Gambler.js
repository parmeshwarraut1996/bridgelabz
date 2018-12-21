const readline = require('readline');
const prompt = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });

var utility = require('./utility.js');

prompt.question("Enter stake value= ", (stake) => 
{
    prompt.question("Enter Goal value= ", (g) => 
    {
        prompt.question("Enter number of times you play game= ", (trial) => 
        {
            utility.playGambling(stake,g,trial);
        })
    })
});
