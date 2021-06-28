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

	public LinkedList removeDuplicatesFromLinkedList( LinkedList linkedList )
	{
		LinkedList current = linkedList;
		LinkedList next = current.next;

		while( next != null )
		{
			if( current.value == next.value )
			{
				current.next = next.next;
				next.next = null;
				next = current.next;
			}
			else
			{
				current = current.next;
				next = current.next;
			}
		}

		return linkedList;
	}
}
