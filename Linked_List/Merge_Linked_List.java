/****************************************************************
*             ALGOEXPERT MERGE LINKED LIST CHALLENGE	        *
*                                                              	*
* Write a function that takes in the heads of two Singly Linked *
* Lists that are in sorted order, respectively. The function	*
* should merge the lists in place (i.e., it shouldn't create a 	*
* brand new list) and return the head of the merged list; the 	*
* merged list should be in sorted order.   			*
*								*
* Each LinkedList node has an integer value as well as a next 	*
* node pointing to the next node in the list or to  None / null *
* if it's the tail of the list.					*
*								*
* You can assume that the input linked lists will always have at*
* least one node; in other words, the heads will never be 	*
* None / null.							*
*                                                               *
* Input 1							*
* 		headOne = 2 -> 6 -> 7 -> 8			*
*		headTwo = 1 -> 3 -> 4 -> 5 -> 9 -> 10		*
* Output 1							*
*		1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 *
*								*
****************************************************************/

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
			if( head == null && tail == null )
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
			if( head == null && tail == null )
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
