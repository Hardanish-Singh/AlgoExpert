import java.util.*;

class Program
{
	// This is an input class. Do not edit.
	public static class LinkedList
	{
		public int value;
		public LinkedList next;

    		public LinkedList(int value)
		{
      			this.value = value;
      			this.next = null;
    		}
  	}

 	public LinkedList sumOfLinkedLists(LinkedList linkedListOne, LinkedList linkedListTwo)
	{
		LinkedList head = null;
		LinkedList tail = null;
		LinkedList node = null;
		short vals1 = 0;
		short vals2 = 0;
		short carry = 0;
		short remainder = 0;

		while( linkedListOne != null || linkedListTwo != null )
		{
			vals1 = (short) ( ( linkedListOne == null ) ? 0 : linkedListOne.value );
			vals2 = (short) ( ( linkedListTwo == null ) ? 0 : linkedListTwo.value );
			if( vals1 + vals2 + carry > 9 )
			{
				remainder = (short) ( ( vals1 + vals2 + carry ) % 10 );
				node = new LinkedList( remainder );
				carry = (short) ( ( vals1 + vals2 + carry ) / 10 );
			}
			else
			{
				node = new LinkedList( vals1 + vals2 + carry );
				carry = 0;
			}
			if( head == null )
			{
				head = tail = node;
			}
			else
			{
				tail.next = node;
				tail = node;
			}
			linkedListOne = ( linkedListOne != null ) ? linkedListOne.next : null;
			linkedListTwo = ( linkedListTwo != null ) ? linkedListTwo.next : null;
		}

		if( carry > 0 )
		{
			node = new LinkedList( carry );
			tail.next = node;
			tail = node;
		}

		return head;
	}
}
