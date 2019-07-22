package com.doublylinkedlist;
public class function1{
	DoublyLinkedListNode head;
	 DoublyLinkedListNode temp1 = head;
	void add(int data)
	{
		DoublyLinkedListNode nd = new DoublyLinkedListNode();
		nd.data = data;
		nd.previous = null;
		nd.next = null;

		if(head == null)
		{
			head = nd;
		}

		else
		{
			DoublyLinkedListNode ntemp = head;
			DoublyLinkedListNode ptemp = head;

			while(ntemp.next!=null)
			{

				ntemp = ntemp.next;
			}

			ntemp.next = nd;
			ptemp = ntemp;
			ntemp = ntemp.next;
			ntemp.previous = ptemp;
			//			ntemp.next = head;
			//			

		}


	}

	

	void fdisplay()
	{
		DoublyLinkedListNode temp = head;
		int number = 1;
		
			while(temp!=null&&number!=2)
			{
				
				System.out.println(temp.data);
				temp = temp.next;
				if(temp == head)
				{
					number = number+1;
				}
				
			}
	}
		

	

	void bdisplay()
	{
		DoublyLinkedListNode temp = head;
		while(temp.next!=null)
		{
			temp = temp.next;

		}

		while(temp!=null)
		{
			System.out.println(temp.data);
			temp = temp.previous;
		}
	}


	
}
