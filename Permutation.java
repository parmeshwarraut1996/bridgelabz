package com.bridgelabz.functionprogram;
import com.utility.Utility;
import java.util.Scanner;
public class Permutation {

	public static void main(String[] args)
	{
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter String=");
		String str=sc.nextLine();
		int n=str.length();
		Utility.permutationOfString(str,0,n-1);
	    sc.close();

	}

}
