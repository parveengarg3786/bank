package com.linkedlist;


public class function{

	Node head;

	void add(int data)
	{
		Node nd = new Node();
		nd.data =data;
		nd.next = null;

		if(head == null)
		{
			head = nd;

		}
		else
		{
			Node temp = head;
			while(temp.next!=null)
			{
				temp = temp.next;
			}

			temp.next = nd;

		}
	}

	void display()
	{
		Node temp = head;

		while(temp!=null)
		{
			System.out.println(temp.data);
			temp = temp.next;
		}

	}

	void middleElement()
	{
		Node temp = head;
		
		int count = 0;
		
		while(temp!=null)
		{
			count = count+1;
			temp = temp.next;
		}
		temp = head;
		
		if(count%2 !=0)
		{
			count = (count/2) + 1;
			
			for(int i=1;i<count;i++)
			{
				temp = temp.next;
			}
			System.out.println(temp.data);
		}
		else
		{
			
			for(int i=1;i<count/2;i++)
			{
				temp = temp.next;
			}
			System.out.println(temp.data);
			
		}
	}
}