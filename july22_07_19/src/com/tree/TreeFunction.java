package com.tree;


public class TreeFunction {
	TreeNode createTree()
	{
		TreeNode tn1 = new TreeNode(1);
		TreeNode tn2 = new TreeNode(2);
		TreeNode tn3 = new TreeNode(33);
		TreeNode tn4 = new TreeNode(4);
		TreeNode tn5 = new TreeNode(5);
		TreeNode tn6 = new TreeNode(6);

		tn1.left = tn2;
		tn1.right = tn3;
		tn2.left = tn4;
		tn2.right = tn5;
		tn3.left = tn6;

		return tn1;
		
	}
	
	

	void preorder(TreeNode root)
	{
		if(root!=null)
		{
			System.out.println(root.data);
			preorder(root.left);
			preorder(root.right);
		}
	}
	
	
	int highestElement(TreeNode root,int highestNumber)
	{
		if(root!=null)
		{
			if(highestNumber<root.data)
			{
				highestNumber = root.data;
				int left = highestElement(root.left, highestNumber);
				int right = highestElement(root.right, highestNumber);
				
				if(left>right)
				{
					return left;
				}
				else
				{
					return right;
				}
			}
			
			else
			{
				int left = highestElement(root.left, highestNumber);
				int right = highestElement(root.right, highestNumber);
				
				if(left>right)
				{
					return left;
				}
				else
				{
					return right;
				}
			}
		}
		else
		{
			return highestNumber;
		}
	}
	
	
	int sum(TreeNode root)
	{
		if(root!=null)
		{
			
			
			int left = sum(root.left);
			int right = sum(root.right);
			
			return (left + right + root.data);
		}
		else
		{
			return 0;
		}
	}

}
