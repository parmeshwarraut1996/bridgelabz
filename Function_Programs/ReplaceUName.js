const readline = require('readline');
const prompt = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });

var utility = require('./utility.js');
function replaceName(){
prompt.question('Enter string:', (str) => 
{
    console.log("String is:-" + str);
    prompt.question('Enter user name to replace:', (str1) => 
    {
        prompt.question('Enter new user name:', (str2) => 
        {
            utility.replaceUserName(str,str1,str2)

        })
    })
});
}replaceName();