const readline = require('readline');
const prompt = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout
  });

var utility = require('./utility.js');

var arr;

function add() {
  prompt.question("how many times you want flip coin = ", (size) => {
    utility.getPercentageOfFlipCoin(size);

  }
  );
}
add();



