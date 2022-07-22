/****************************************************************
*             	ALGOEXPERT NODE SWAP CHALLENGE	        	*
*                                                              	*
* Write a function that takes in the head of a Singly Linked 	*
* List, swaps every pair of adjacent nodes in place (i.e., 	*
* doesn't create a brand new list), and returns its new head. 	*
*                                                               *
* If the input Linked List has an odd number of nodes, its final*
* node should remain the same.					*
*								*
* Each LinkedList node has an integer value as well as a next 	*
* node pointing to the next node in the list or to  None / null *
* if it's the tail of the list.					*
*								*
* You can assume that the input Linked List will always have at *
* least one node; in other words, the head will never be 	*
* None / null.							*
*								*
* Input 1							*
* 		head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 		*
* Output 1							*
*		1 -> 0 -> 3 -> 2 -> 5 -> 4 			*
*								*
****************************************************************/

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
