var util = require('util');
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

    printHarmonicSeries(num) {

        var sum = 0;
        console.log("!!!!!! Harmonic Series !!!!!!");
        for (var i = 1; i <= num; i++) {
            util.print("1/" + i + "+");
            sum = sum + (1 / i);
        }
        console.log("=" + sum);



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
        var count = 0;
        var randomCount = 0;
        var arr = new Array(num);
        while (count < num) {
            var r = Math.round(Math.random() * 100);
            randomCount++;
            console.log(r);
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] != r && r > 0) {
                    arr[i] = parseInt(r);
                    count++;
                }
            }
        }
        console.log("Random number are = " + randomCount);

        // console.log(arr);




    },


    /**
   * Aim:A   program   with   cubic   running   time.   Read   in   N   integers   and   counts   the
         number   of   triples   that   sum   to   exactly   0
   * @author Parmeshwar Raut
   * @version v10.11.0
   * @since 21/12/2018
   */
    additionOsNumsZero(n, arr) {
        var count = 0;
        for (var i = 0; i < n - 2; i++) {
            for (var j = i + 1; j < n - 1; j++) {
                for (var k = j + 1; k < n; k++) {
                    if (arr[i] + arr[j] + arr[k] == 0) {
                        count++;
                        console.log("Triplets are= " + arr[i] + "," + arr[j] + "," + arr[k]);

                    }
                }
            }

        }
        console.log("NUmber of tripltes" + count);


    },

    /**
  * Aim:Write   a   program     Distance    that   takes   two   integer   command­line   arguments   x
        and   y   and   prints   the   Euclidean   distance   from   the   point   (x,   y)   to   the   origin   (0,   0).   The
        formulae   to   calculate   distance   =   sqrt(x*x   +   y*y).   Use   Math.power   function
  * @author Parmeshwar Raut
  * @version v10.11.0
  * @since 22/12/2018
  */

    calculateDistance(x, y) {

        x = +process.argv[2];
        y = +process.argv[3];
        console.log("Points (x,y) are =" + "(" + x + "," + y + ")");
        var distance = Math.pow(Math.sqrt(x * x + y * y), 1);
        console.log("Euclidean Distance =" + distance);


    },

    /**
  * Aim:Write   static   functions   to   return   all   permutation   of   a   String   using   iterative   method   and
        Recursion   method.   Check   if   the   arrays   returned   by   two   string   functions   are   equal.
  * @author Parmeshwar Raut
  * @version v10.11.0
  * @since 22/12/2018
  */

    obtainPermutation(str) {
        var len = str.length;
        var str2 = " ";
        recursion(str2, str);

        function recursion(str2, str) {
            if (str.length == 0) {
                console.log(str2);
                str2 = " ";
            }
            for (var i = 0; i < str.length; i++) {
                recursion(str2 + str.charAt(i), str.substring(0, i) + str.substring(i + 1, str.length));
            }
        }


    },

    /**
* Aim:Write   a   Stopwatch   Program   for   measuring   the   time   that   elapses   between
      the   start   and   end   clicks
* @author Parmeshwar Raut
* @version v10.11.0
* @since 22/12/2018
*/

    time() {
        var d = new Date();
        t = d.getTime()
        return t;
    },
    elapsedTime(start, stop) {
        var elapsed = stop - start;
        return elapsed;

    },



    /**
  * Aim:Write a program to find the roots of the equation a*x*x+b*x+c.Since the equation is x*x, hence there are 2 roots.The 2 roots of the equation
        can be found using a formula.
        delta=b*b-4*a*c.
        Root 1 of x=(­b+sqrt(delta))/(2*a)
        Root 2 of x=(­b-sqrt(delta))/(2*a)
        Take a,b and c as input values to find the roots of x.
  * @author Parmeshwar Raut
  * @version v10.11.0
  * @since 22/12/2018
  */


    calculateRoots(a, b, c) {
        var delta = 0;
        delta = b * b - 4 * a * c;
        console.log("Delta = " + delta);
        var root1 = 0;
        var root2 = 0;

        root1 = (-b + Math.sqrt(delta)) / (2 * a);
        root2 = (-b - Math.sqrt(delta)) / (2 * a);

        console.log("Root 1 of X = " + root1);
        console.log("Root 2 of X = ", +root2);



    },

    /**
    * Aim:Write   a   program     WindChill  that   takes   two   double   command­line   arguments   t
          and   v   and   prints   the   wind   chill.   Use   Math.pow(a,   b)   to   compute   ab.
          Given   the   temperature   t   (in   Fahrenheit)   and   the   wind   speed   v   (in   miles   per   hour),
          the National   Weather   Service   defines   the   effective   temperature   (the   wind   chill)  to be:
          Note  :   the   formula   is   not   valid   if   t   is   larger   than   50   in   absolute   value   or   if   v   is   larger
          than   120   or   less   than   3   (you   may   assume   that   the   values   you   get   are   in   that   range).
    * @author Parmeshwar Raut
    * @version v10.11.0
    * @since 22/12/2018
    */


    calculateWindChill(t, v) {
        t = +process.argv[2];
        v = +process.argv[3];
        if (t < 50 || (v > 120 && v < 3)) {
            var s = Math.pow(v, 0.16);
            var w = 35.75 + 0.6215 * t + (0.4275 * t - 35.75) * s;
            console.log("Temperature = " + t);
            console.log("Wind Speed = " + v);
            console.log("Wind Chill = " + w);
        }
        else {
            console.log("Enter proper value t is less than 50 OR v is less than 120 and greater than 3");

        }


    }
};
