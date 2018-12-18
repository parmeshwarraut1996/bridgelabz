package com.utility;
import java.util.Scanner;
import java.util.List;
import java.util.Random;
import java.util.ArrayList;
import java.util.Collections;
import java.io.PrintWriter;
import java.io.OutputStreamWriter;
public class Utility
{
	static Scanner sc=new Scanner(System.in);


/**
 * Aim:-replace old user name with new user name
 * @author admin1
 * @version 1.0
 * @since 15/12/2018
 *
 */
	public static void replaceUserName()
	{
		String sentence,str1,str2,str3=" ";
		
		System.out.print(" Enter sentence = ");
		sentence=sc.nextLine();
		System.out.print("Enter which string is replace = ");
		str1=sc.nextLine();
		System.out.print("enter string to replace = ");
		str2=sc.nextLine();
		str3=sentence.replace(str1,str2);
		System.out.println("New string= "+str3);
		
		
	}
	
	/**
	 *Aim:-leap year 
	 * @author admin1
	 * @since 15/12/2018
	 * 	
	 *
	 */
		
		public static void leapYear()
		{
			System.out.print("Enter year = ");
			int year=sc.nextInt();
			
			if((year%4==0&&year%100!=0)||(year%400==0))
			{
				System.out.println("Entered year is leap ");
				
			}
			else
			{
				System.out.println("Entered year is Not Leap ");
			}
		}
		
		/**
		 * Aim :-prints a table of the powers of 2 that are less than or equal to 2^N.
		 * @author admin1
		 * @version 1.0
		 * @since 15/12/2018
		 *
		 */
		
		public static void printTable()
		{
		    System.out.println("Enter number = ");
		    int n=sc.nextInt();
	        int i = 0;                
	        int powerOfTwo=1;       
			
	        while (i <= n) 
	        {
	        	System.out.println(i + " " + powerOfTwo);
	        	powerOfTwo = 2 * powerOfTwo; 
	        	i = i + 1;
	        	
			}

		}
		
		/**
		 *Aim:-Flip Coin and print percentage of Heads and Tails
		 *@author admin1
		 *@version 1.0
		 *@since 15/12/2018 
		 */
		
		public static void getPercentageOfFlipCoin()
		{
		
		   
			System.out.print("Enter how many times you flip coin=");
			int n=sc.nextInt();
			
			int head=0,tail=0;
			if(n>0)
			{
				double[] result=new double[n];
				for(int i=0;i<n;i++)
				{
					result[i]=Math.random();
					//System.out.println(" Random values are "+result[i]);
					if(result[i]<0.5)
					{
						System.out.println(" tail ");	
						tail++;
						
					}
					else
					{
						System.out.println(" Head ");
						head++;
						
					}
					
				}
				float percentageOfTail=(tail*100)/n;
			  	System.out.println("percentage of tail = "+percentageOfTail);
			  	float percentageOfHead=(head*100)/n;
		     	System.out.println("percentage of head = "+percentageOfHead);
				
	         }
			else
			{
				System.err.println("!!! enter positive number !!!");
				//System.out.err("Enter positive number = ");
			}
		}
		
		
	/**
	 *Aim :-Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
	 * @author admin1
	 * @version 1.0
	 * @since 15/12/2018
	 *
	 */
		
		public static void getHarmonicNumberSeries()
		{
			System.out.print("Enter number to print harmonic series upto it =");
			int num=sc.nextInt();
			float sum=0;
			System.out.println("!!!!!!!! harmonic series !!!!!!!!!    ");
			for(int i=1;i<=num;i++)
			{
				sum=sum+(float)1/i;
				System.out.print("1/"+i+"+");
			}
			
			System.out.print("="+sum);

			
		}

/**
 * Aim :- find prime factorization of given number
* @author bridgeit
* @version 1.0
* @since 16/12/2018
*/
		
		public static void getPrimeFactors(int n)
		{
			/*(for(int i=2;i<=number/i;i++)
			{
				System.out.println("( "+"i="+i+"  number="+number+" )");
				while(number%i==0)
				{
					number /=i;
					System.out.println("Factor="+i);
				}
			}
			if(number>1)
			{
				System.out.println("Factor="+number);
			}*/
			
			while (n%2==0)
			{
				System.out.print(2 + " ");
				n /= 2;
			}

			for (int i = 3; i*i<= n; i+= 2)
			{
				while (n%i == 0)
				{
					System.out.print(i + " ");
					n /= i;
				}
			}
			System.out.println("");

			if (n > 2)
				System.out.print(n);
			
		}
		
/**
 *Aim :Simulates a gambler who start with $stake and place fair $1 bets until
       he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number of
       times he/she wins and the number of bets he/she makes. Run the experiment N
       times, averages the results, and prints them out.
 * @author bridgeit
 * @version 1.0
 * @since 17/12/2018
 *
 */
		
		
		public static void playGambling(int stake,int goal,int trials)
		{
			int win=0;
			int loss=0;
			int cash;
			
           
            for(int i=1;i<=trials;i++)
            {
            	 cash=stake;
            	while(cash>0&&cash<goal)
            	{
           
            		if(Math.random()<0.5)
            		{
            			cash++;
            		}
            		else
            		{
            			cash--;
            		}
            	}
            	if(cash==goal)
            	{
            		win++;
            	}
            	else
            		
            		loss++;
     
            }
            System.out.print(win+" wins of "+trials);
    		System.out.print("\nPercentage of game won = "+100.0 * win / trials);
    		System.out.print("\n"+loss+" loss of "+trials+"\n");
    		System.out.print("Percentage of game loss = "+100.0 * loss / trials);
			
	
	  }
		
/**
 * Aim:-Given N distinct Coupon Numbers, how many random numbers do you
        need to generate distinct coupon number? This program simulates 
        this random process. 
 * @author bridgeit
 * @version 1.0
 * @since 17/12/2018
 */
		
		public static void getCouponNumber(int num)
		{
				
			List<Integer> numbers = new ArrayList<Integer>();
		    int n=num; 
		    Random random = new Random();
		 
		    do
		    {
		    	int next = random.nextInt(n);
		        if (!numbers.contains(next))
		        {
		        	numbers.add(next);
		            System.out.print("  "+next);
		        }
		        
		    }while (numbers.size()<n);
			
			 /* ArrayList<Integer> list = new ArrayList<Integer>();
		        for (int i=1; i<11; i++) {
		            list.add(new Integer(i));
		        }
		        Collections.shuffle(list);
		        for (int i=0; i<10; i++) {
		            System.out.println(list.get(i));
				*/
			
			
		}

		
		public static void printTwoDArray()
		{
			int r=3;
			int c=3;
			int[][] arr1=new int[r][c];
			OutputStreamWriter ow=new OutputStreamWriter(System.out);
			PrintWriter pw=new PrintWriter(ow);
			for(int j=0;j<=3;j++)
			{
				for(int k=0;k<=3;k++)
				{
					pw.print(arr1[j][k]);
				}
					
			}
				
						
	
	
		}

		public static void sumOfTriplets(int arr[],int n) 
		{
			int count=0;
			for(int i=0;i<n-2;i++)
			{
				for(int j=i+1;j<n-1;j++)
				{
					for(int k=j+1;k<n;k++)
					{
						if(arr[i]+arr[j]+arr[k]==0)
						{
							count++;
							System.out.println("Triplates are="+arr[i]+" "+arr[j]+" "+arr[k]);
						}
					}
				}
			}
			System.out.println("No of distinct triplates="+count);
			
		}

	
		public static void calculateDistance(int x, int y)
		{		
			System.out.println("Points (x,y)are="+"("+x+","+y+")");
			double distance=Math.sqrt(x*x+y*y);
			System.out.println("Euclidean Distance"+"("+x+","+y+")"+" to (0,0)="+distance);
		}

		public static void permutationOfString(String str,int r,int len) 
		{
			if(r==len)
			{
				System.out.println(str);
			}
			else
			{
				for(int i=r;i<=len;i++)
				{
					str=swap(str,r,i);
					permutationOfString(str,r+1,len);
					str=swap(str,r,i);
						
				}
				
			}
			
			
		}
		public static String swap(String s,int i,int j)
		{
			char temp;
			char[] charArray=s.toCharArray();
			temp=charArray[i];
			charArray[i]=charArray[j];
			charArray[j]=temp;
			return String.valueOf(charArray);
		}
		
		
}			
			
			