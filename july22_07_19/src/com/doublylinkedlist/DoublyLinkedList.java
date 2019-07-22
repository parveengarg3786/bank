package com.doublylinkedlist;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;




public class DoublyLinkedList {
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		function1 fn = new function1();
		fn.add(1);
		fn.add(2);
		fn.add(3);
		fn.add(4);


		System.out.println("forward display");
		fn.fdisplay();

		System.out.println("back display");
		fn.bdisplay();


	}

}
