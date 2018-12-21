module.exports = {
    /**
     * Aim:-User   Input   and   Replace   String   Template   “Hello   <<UserName>>,   How   are   you?”
     * @author Parmeshwar Raut
     * @version v10.11.0
     * @since 20/12/2018
     */
    replaceUserName(str, str1, str2) {
        var res = str.replace(str1, str2);
        console.log("After Replace user name:-" + res);


    },

    /**
     * Aim:-Flip   Coin   and   print   percentage   of   Heads   and   Tails
     * @author Parmeshwar Raut
     * @version v10.11.0
     * @since 20/12/2018
     */

    getPercentageOfFlipCoin(num) {

        var head = 0;
        var tail = 0;
        if (num > 0) {
            var result = new Array(num);
            for (var i = 0; i < num; i++) {
                result[i] = Math.random();
                if (result[i] < 0.5) {
                    console.log("Tails");
                    tail++;

                }
                else {
                    console.log("Heads");
                    head++;

                }
            }
            var percentageOfTail = (tail * 100) / num;
            console.log("Percentage of Tails=" + percentageOfTail);
            var percentageOfHead = (head * 100) / num;
            console.log("Percentage of Heads=" + percentageOfHead);
        }
        else {
            console.log("Enter positive number ");

        }

    },

    /**
     * Aim:-Leap   Year
     * @author Parmeshwar Raut
     * @version v10.11.0
     * @since 20/12/2018
     */

    checkLeapYear(year) {

        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            console.log("Year is Leap");
        }
        else {
            console.log("Year is not leap");
        }

    },

    /**
     * Aim:-This   program   takes   a   command­line   argument   N   and   prints   a   table   of   the
            powers   of   2   that   are   less   than   or   equal   to   2^N.
     * @author Parmeshwar Raut
     * @version v10.11.0
     * @since 20/12/2018
     */

    calculatePowerOfTwo(num) {
        n = +process.argv[2];

        var i = 1;
        var powerOfTwo = 1;

        while (i <= n) {
            console.log(i + " " + powerOfTwo);
            powerOfTwo = 2 * powerOfTwo;
            i = i + 1;

        }


    },


    /**
    * Aim:- Prints   the   Nth   harmonic   number:   1/1   +   1/2   +   ...   +   1/N
    * @author Parmeshwar Raut
    * @version v10.11.0
    * @since 20/12/2018
    */

    printHarmonicSeries() {
        rl.question("Enter number to print harmonic series up to it:", (num) => {
            var sum = 0;
            console.log("!!!!!! Harmonic Series !!!!!!");

            for (var i = 1; i <= num; i++) {
                sum = sum + (1 / i);
                console.log("1/" + i + "+" + "\t");

            }
            console.log("sum=" + sum);


        });
    },

    /**
    * Aim:-Computes   the   prime   factorization   of   N   using   brute   force.
    * @author Parmeshwar Raut
    * @version v10.11.0
    * @since 21/12/2018
    */
    calculatePrimeFactor(num) {
        while (num % 2 == 0) {
            console.log("Prime Factors are= " + 2);
            num /= 2;
        }
        for (var i = 3; i * i <= num; i++) {
            while (num % i == 0) {
                console.log(i);
                num /= i;
            }
        }
        if (num > 2) {
            console.log(num);


        }



    },

    /**
 * Aim:-Simulates   a   gambler   who   start   with   $stake   and   place   fair   $1   bets   until
        he/she   goes   broke   (i.e.   has   no   money)   or   reach   $goal.   Keeps   track   of   the   number   of
        times   he/she   wins   and   the   number   of   bets   he/she   makes.   Run   the   experiment   N
        times,averages   the   results,   and   prints   them   out.
 * @author Parmeshwar Raut
 * @version v10.11.0
 * @since 21/12/2018
 */

    playGambling(stake, g, trial) {

        var win = 0;
        var loss = 0;
        var noOfTimes = 0;

        while (stake != g && stake != 0 && noOfTimes <= trial) {
            var r = Math.round(Math.random());
            if (r == 0) {
                stake--;
                loss++;
            }
            else {
                stake++;
                win++;
            }
            noOfTimes++;

        }

        console.log(win + " Wins of " + trial);
        console.log("Percentage of win= " + (win / trial) * 100);
        console.log(loss + " Loss of " + trial);
        console.log("Percentage of loss= " + (loss / trial) * 100);



    },


    /**
   * Aim:Given   N   distinct   Coupon   Numbers,   how   many   random   numbers   do   you
         need   to   generate   distinct   coupon   number?   This   program   simulates   this   random process.
   * @author Parmeshwar Raut
   * @version v10.11.0
   * @since 21/12/2018
   */


    generateCoupon(num) {
        var count=0;
        var randomCount=0;
        var arr = new Array(num);
        while(count<num)
        {
            var r =Math.round(Math.random() * 100);
            randomCount++;
            console.log(r);
            for (var i = 0; i < arr.length; i++) {
                if(arr[i]!=r&&  r > 0) {
                    arr[i]=parseInt(r);
                    count++;
                }
            }
        }
        console.log("Random number are = "+randomCount);
        
       // console.log(arr);
        
        


    },


    /**
   * Aim:A   program   with   cubic   running   time.   Read   in   N   integers   and   counts   the
         number   of   triples   that   sum   to   exactly   0
   * @author Parmeshwar Raut
   * @version v10.11.0
   * @since 21/12/2018
   */
    additionOsNumsZero(n,arr) {
        var count=0;
        for(var i=0;i<n-2;i++)
        {
            for(var j=i+1;j<n-1;j++)
            {
                for(var k=j+1;k<n;k++)
                {
                    if(arr[i]+arr[j]+arr[k]==0)
                    {
                        count++;
                        console.log("Triplets are= "+arr[i]+","+arr[j]+","+arr[k]);
                        
                    }
                }
            }

        }
        console.log(count);
        

    }
};
