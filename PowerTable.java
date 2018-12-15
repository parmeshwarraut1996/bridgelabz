package demoapp;
//import java.util.*;

public class PowerTable {

	public static void main(String[] args) 
	{
		//Scanner sc = new Scanner(System.in);
		//System.out.println("Enter  number = ");
		//int n=sc.nextInt();
		long n=Long.parseLong(args[1]);
		long p=0;
		for(int i=0;i<=n;i++)
		{
				 p=(long)Math.pow(2,i);
				 System.out.println(p+"\n");
				
		}
		
		
		
		// TODO Auto-generated method stub

	}

}
