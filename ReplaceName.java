package demoapp;
import java.util.*;

public class ReplaceName {

	public static void main(String[] args) 
	{
		
		String str1, str2, str3, str4;
		Scanner sc=new Scanner(System.in);
		System.out.print("Enter String: ");
		str1 = sc.nextLine();
		System.out.print("Enter name you want to replace:");
		str2 = sc.nextLine();
		System.out.print("Enter name you want to replace with: ");
		str3 = sc.nextLine();
		str4 = str1.replace(str2, str3);
		System.out.println("New String: " + str4);
		sc.close();
	}

}