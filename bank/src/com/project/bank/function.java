package com.project.bank;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;



class BankFunction
{
	void addmoney(BufferedReader br , Connection con) throws IOException, SQLException
	{
		System.out.println("enter the name");
		String name2 = br.readLine();
		System.out.println("enter the amount you want to add");
		int amount2 = Integer.parseInt(br.readLine());
		String query2 = "select balance from bank where name = '"+name2+"'";
		PreparedStatement pstm2 = con.prepareStatement(query2);
		ResultSet r1 = pstm2.executeQuery();
		if(r1.next())
		{
			System.out.println(r1.getString(1));
		}
		else
		{
			System.out.println("Record Not Found...");
		}
		int newsalary2 = Integer.parseInt(r1.getString(1))+amount2;
		System.out.println(newsalary2);
		String update2 = "update bank set balance = '"+newsalary2+"' where name = '"+name2+"'";
		PreparedStatement pstm3 = con.prepareStatement(update2);
		pstm3.executeUpdate();

	}
	void deduct(BufferedReader br , Connection con) throws SQLException, NumberFormatException, IOException
	{

		System.out.println("enter the name");
		String name1 = br.readLine();
		System.out.println("enter the amount you want to take out");
		int amount1 = Integer.parseInt(br.readLine());
		String query1 = "select balance from bank where name = '"+name1+"'";
		PreparedStatement pstmt2 = con.prepareStatement(query1);
		ResultSet rs1 = pstmt2.executeQuery();
		if(rs1.next())
		{
			System.out.println(rs1.getString(1));
		}
		else
		{
			System.out.println("Record Not Found...");
		}
		int newsalary = Integer.parseInt(rs1.getString(1))-amount1;
		System.out.println(newsalary);
		String update = "update bank set balance = '"+newsalary+"' where name = '"+name1+"'";
		PreparedStatement pstmt3 = con.prepareStatement(update);
		pstmt3.executeUpdate();
		PreparedStatement pstmt4 = con.prepareStatement(query1);
		pstmt4.executeQuery(query1);
	}

	void newAccount(BufferedReader br , Connection con) throws NumberFormatException, IOException, SQLException 
	{
		System.out.println("enter the amount");
		int amount = Integer.parseInt(br.readLine());

		String insertQuery = "Insert into bank" + "(cid,name,balance)" +  "values(?,?,?)";
		PreparedStatement pstmt = con.prepareStatement(insertQuery);

		pstmt.setInt(1, 2);
		pstmt.setString(2, "sham");
		pstmt.setInt(3, amount);
		pstmt.execute();	
	}

	void checkBalance(BufferedReader br , Connection con) throws IOException, SQLException
	{
		System.out.println("enter the name");
		String name = br.readLine();
		String searchQuery = "select * from bank where name = '"+name+"'";
		PreparedStatement pstmt1 = con.prepareStatement(searchQuery);
		ResultSet rs = pstmt1.executeQuery();
		if(rs.next())
		{
			System.out.println(rs.getString(1)+","+rs.getString(2)+","+rs.getString(3));
		}
		else
		{
			System.out.println("Record Not Found...");
		}

	}
}
