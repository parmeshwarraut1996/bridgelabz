const readline = require('readline');
const prompt = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });

var utility = require('./utility.js');
 function couponNum(){
prompt.question("Enter how many coupon you want= ",(num)=>
{
   utility.generateCoupon(num);

});
}
couponNum();