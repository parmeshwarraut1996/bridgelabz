const readline = require('readline');
const userinput = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout


    });
var utility = require('./utility.js');
input();
function input() {
    userinput.question("How nany elements enter ", function (n) {
        addValues(n);

    });

}

function addValues(n) {
    var arr = [];
    var len = parseInt(n);

    add(len);

    function add(len) {
        if (len > 0) {
            userinput.question("Enter elements = ", (i) => {
                arr.push(parseInt(i));
                len--;
                add(len)
            });

        }
        else
        {
            utility.additionOsNumsZero(n,arr);
        }
    }



}