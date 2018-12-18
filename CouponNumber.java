package com.bridgelabz.functionprogram;
import java.util.Scanner;
import com.utility.Utility;

public class CouponNumber {

	public static void main(String[] args)
	{
		Scanner sc=new Scanner(System.in);
		System.out.print("Enter how many coupon tou want=");	
		int n=sc.nextInt();
	   	Utility.getCouponNumber(n);
	    sc.close();
	   
		// TODO Auto-generated method stub
	}

}
