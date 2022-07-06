import java.util.*;

class Program
{
	public static LinkedList reverseLinkedList( LinkedList head )
	{
		LinkedList previous = head;
		LinkedList current = head.next;
		LinkedList tail = null;
		
		while( current != null )
		{
			LinkedList next = current.next;
			current.next = previous;
			previous = current;
			current = next;
		}

		tail = head;
		tail.next = null;
		head = previous;

		return head;
	}

	static class LinkedList
	{
		int value;
		LinkedList next = null;
		public LinkedList(int value)
		{
			this.value = value;
		}
	}
}
