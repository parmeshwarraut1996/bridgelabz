const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var utility = require('./utility.js');

var i, j;
var cont, choice;

console.log("1. To print 2D Integer array \n"
    + "2. To print 2D Double Array \n"
    + "3. To print 2D Boolean Array");

userInput.question('Enter your choice :', (choice) => {

    if (choice == 1) {
        var row = col = 2, value = 1;
        var arr = new Array();
        for (i = 0; i < row; i++) {
            arr[i] = new Array();
            for (j = 0; j < col; j++) {
                value += 1;
                arr[i][j] = value;

            }

        }
        console.log('Elements are :-');
        utility.printIntegerArray(arr, 0, arr.length);
        process.exit();
    }

    else if (choice == 2) {
        var row = col = 2, value = 1.0;
        var arr = new Array();
        for (i = 0; i < row; i++) {
            arr[i] = new Array();
            for (j = 0; j < col; j++) {
                value += 1.5;
                arr[i][j] = value;

            }

        }
        console.log('Elements are :');
        utility.printDoubleArray(arr, 0, arr.length);
        process.exit();
    }


    else if (choice == 3) {
        var row = col = 2;
        var arr = new Array();
        for (i = 0; i < row; i++) {
            arr[i] = new Array();
            for (j = 0; j < col; j++) {

                if (i == j) {
                    arr[i][j] = 'true';
                }
                else {
                    arr[i][j] = 'false';
                }


            }

        }
        console.log('Elements  are :');
        utility.printDoubleArray(arr, 0, arr.length);
        process.exit();
    }

    else {
        console.log('Please enter valid input')
    }

});




