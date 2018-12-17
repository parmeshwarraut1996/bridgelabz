package com.bridgelabz.functionprogram;
import java.util.Scanner;
import com.utility.Utility;

public class Gambler 
{

	public static void main(String[] args)
	{
		Scanner sc=new Scanner(System.in);
		System.out.print("Enter stake=");
		int stake=sc.nextInt();
		System.out.print("Enter goal=");
		int goal=sc.nextInt();
		System.out.print("Enter trials=");
		int trials=sc.nextInt();
		Utility.playGambling(stake, goal, trials);
		sc.close();
		// TODO Auto-generated method stub

	}

}
