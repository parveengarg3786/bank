package com.tree;

public class Tree {
	public static void main(String[] args) {
		TreeFunction tf = new TreeFunction();
		
		TreeNode root = tf.createTree();
		
		tf.preorder(root);
		
		int result = tf.highestElement(root, root.data);
		
		System.out.println("largest number in tree: " + result);
		
		int sumResult = tf.sum(root);
		System.out.println("sum of tree: " + sumResult);
	}
}
