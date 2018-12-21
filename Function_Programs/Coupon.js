const readline = require('readline');
const prompt = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });

var utility = require('./utility.js');

prompt.question("Enter how many coupon you want= ",(num)=>
{
   utility.generateCoupon(num);

});
