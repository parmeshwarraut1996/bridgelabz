package com.utility;
import java.util.Scanner;
import java.lang.*;
/**
 * Aim:-replace old user name with new user name
 * @author admin1
 * @version 1.0
 * @since 15/12/2018
 *
 */

public class Utility 
{
	static Scanner sc=new Scanner(System.in);
	
	public static void replaceUserName()
	{
		String sentence,str1,str2,str3=" ";
		
		System.out.print(" Enter sentence = ");
		sentence=sc.nextLine();
		System.out.println("Enter which string is replace = ");
		str1=sc.nextLine();
		System.out.println("enter string to replace = ");
		str2=sc.nextLine();
		str3=sentence.replace(str1,str2);
		System.out.println("New strin = "+str3);
		
		
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
	 * Aim :- print table of 2^N 
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

}

