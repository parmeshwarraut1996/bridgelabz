const readline = require('readline');
const userinput = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout

    });

var utility = require('./utility.js');
function windchill() {
    var t;
    var v;
    utility.calculateWindChill(t, v);
} windchill();