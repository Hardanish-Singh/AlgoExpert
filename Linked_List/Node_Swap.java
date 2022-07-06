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

	public LinkedList nodeSwap( LinkedList head )
	{
		if( head == null )
		{
			return null;
		}

		if( head.next == null )
		{
			return head;
		}

		LinkedList previous = head;
		LinkedList current = head.next;

		LinkedList next = null;
		head = current;

		while( true )
		{
			next = current.next;
                        if( next == null )
			{
                                current.next = previous;
                                previous.next = null;
			        break;
			}
                        current.next = previous;
                        if( next.next == null )
                        {
                                previous.next = next;
                                break;
                        }
			previous.next = next.next;
			previous = next;
			current = previous.next;
		}

		return head;
	}
}
