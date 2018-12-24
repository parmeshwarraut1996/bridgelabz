const readline = require('readline');
const userInput = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });
var utility = require('./utility.js');
function stopwatch(){
userInput.question(" Press 1 to start to timer = ", (start) => {
    start = utility.time();
    if (start) {
        userInput.question("Press 2 to stop 2  timer = ", (stop) => {
            
                stop = utility.time();
               // utility.elapsedTime(start, stop);
                elapsed = utility.elapsedTime(start, stop);
            console.log("Elapsed time from start to stop = "+elapsed/1000+" seconds");
            
        });
    }
}
);
}stopwatch();