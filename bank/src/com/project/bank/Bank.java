package com.project.bank;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Bank {
	public static void main(String[] args) throws ClassNotFoundException, SQLException, NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BankFunction fn = new BankFunction();
		Class.forName("com.mysql.jdbc.Driver");  
		Connection con=DriverManager.getConnection(  
				"jdbc:mysql://localhost:3306/bank","root","");  
		
		System.out.println("my sql connection set up");
		System.out.println("welcome \n1.createAccount\n2.checkBalance\n3.take out money\n4.add money");

		int option = Integer.parseInt(br.readLine());
		switch(option)
		{
		case 1:
			
			fn.newAccount(br, con);
			break;
		case 2:
			
			fn.checkBalance(br, con);
			break;
			
		case 3:
			fn.deduct(br, con);
			break;
			
		case 4:
			fn.addmoney(br,con);
		}
	}
}
