import java.util.*;

class Program
{
	// This is an input class. Do not edit.
	public static class LinkedList
	{
		int value;
		LinkedList next;

		LinkedList( int value )
		{
			this.value = value;
			this.next = null;
		}
	}

	public static LinkedList mergeLinkedLists( LinkedList headOne, LinkedList headTwo )
	{
		LinkedList head = null;
		LinkedList tail = null;

		// LOOP THROUGH LIST 1 AND ADD NODES
		while( headOne != null )
		{
			LinkedList node = new LinkedList( headOne.value );
			if( head == null )
			{
			    head = tail = node;
			}
			else
			{
			    tail.next = node;
			    tail = node;
			}
			headOne = headOne.next;
		}

		// LOOP THROUGH LIST 2 AND ADD NODES
		while( headTwo != null )
		{
			LinkedList node = new LinkedList( headTwo.value );
			if( head == null )
			{
			    head = tail = node;
			}
			else
			{
			    tail.next = node;
			    tail = node;
			}
			headTwo = headTwo.next;
		}

		// BUBBLE SORT
		LinkedList current = head;
		LinkedList next = null;
		int temp = 0;

		while( current != null )
		{
			next = current.next;
			while( next != null )
			{
				if( current.value > next.value )
				{
					temp = current.value;
					current.value = next.value;
					next.value = temp;
				}
				next = next.next;
			}
			current = current.next;
		}

		return head;

	}
}
