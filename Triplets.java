package com.bridgelabz.functionprogram;
import com.utility.Utility;
import java.util.Scanner;
public class Triplets {

	public static void main(String[] args)
	{
		Scanner sc=new Scanner(System.in);
		System.out.print("How many element enter =");
		int n=sc.nextInt();
		int arr[] = new int[n];
		System.out.println("Enter element=");
		for(int i=0;i<n;i++)
		{
			arr[i]=sc.nextInt();
		}
		
		Utility.sumOfTriplets(arr,n);
		// TODO Auto-generated method stub

	}

}
