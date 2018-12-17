package com.bridgelabz.functionprogram;
import java.util.Scanner;
import com.utility.Utility;

public class PrimeFactor
{

	public static void main(String[] args) 
	{
		Scanner sc=new Scanner(System.in);
		System.out.print("Enter number=");
		int number=sc.nextInt();
		Utility.getPrimeFactors(number);
		sc.close();
			
	}

}
