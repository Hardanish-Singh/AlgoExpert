import java.util.*;

class Program
{
	public static LinkedList reverse( LinkedList head )
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

	public static void removeKthNodeFromEnd( LinkedList head, int k )
	{

		// IF HEAD IS NULL / HEAD DOES NOT EXISTS / IF THERE IS ONLY ONE SINGLE NODE IN THE LINKED LIST
		if( head == null || head.next == null )
                {
			head = null;
                }

		LinkedList current = null;
		LinkedList previous = null;

		// REVERSE LINKED LIST
		head = reverse( head );

		// FIND THE ITEM & REMOVE IT FROM THE LINKED LIST
		current = head;
		previous = null;
		int index = 1;
		boolean isLastNode = false;

		while( current != null )
		{
			if( index + 1 == k )
			{
				previous = current;
			}
			else if( index == k )
			{
				// REMOVING THE FIRST NODE FROM THE LINKEDLIST
				if( previous == null )
		                {
		                    previous = current;
		                    current = current.next;
		                    previous.next = null;
				    head = current;
		                    break;
		                }
				// REMOVING THE LAST NODE FROM THE LINKED LIST
				if( current.next == null )
				{
					isLastNode = true;
					break;
				}
				previous.next = current.next;
				current.next = null;
				break;
			}
			current = current.next;
			index++;
		}

		// REVERSE THE LINKED LIST AGAIN
		head = reverse( head );

		if( isLastNode )
		{
			LinkedList second = head.next;
			head.next = null;
			head.next = second.next;
			head.value = second.value;
		}
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
