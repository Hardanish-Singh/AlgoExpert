import java.util.*;

class Program 
{
  // This is an input class. Do not edit.
  public static class LinkedList 
  {
    public int value;
    public LinkedList next;

    public LinkedList(int value) {
      this.value = value;
      this.next = null;
    }
  }

  public static LinkedList middleNode(LinkedList head) 
  {
          double middle = 0;
          LinkedList current = head;
                  
          while( current != null )
          {
                  middle++;
                  current = current.next;
          }
          if( middle % 2 == 0 )
          {
                  middle++;
          }
          middle = Math.ceil( middle / 2 );
          
          double count = 1;
          while( head != null )
          {
                  if( count == middle ) 
                  {
                          break;
                  }
                  head = head.next;
                  count++;
          }
          
          return head;
  }

  public static LinkedList reverseList( LinkedList head )
        {

		if( head == null )
		{
			return null;
		}

		LinkedList previous = head;
		LinkedList current = head.next;
		LinkedList tail = head;
		tail.next = null;

		while( current != null )
		{
			LinkedList next = current.next;
			current.next = previous;
			previous = current;
			current = next;
		}

		head = previous;
		return head;

        }

  public LinkedList zipLinkedList(LinkedList linkedList) 
  {
    if( linkedList.next == null )
    {
      return linkedList;
    }
    
    LinkedList current = linkedList;
    current = middleNode( current );
      
    LinkedList copy = linkedList;
    LinkedList previous = null;
    while( copy != null )
    {
      if( current.value == copy.value )
      {
        break;
      }
      previous = copy;
      copy = copy.next;  
    }
      
    current = reverseList( current );

    LinkedList copy2 = linkedList;
      while( linkedList != null )
      {
        if( linkedList.value == previous.value )
        {
          break;
        }
        linkedList = linkedList.next;
      }
      linkedList.next = null;
      
      LinkedList head = null;
      LinkedList tail = null;
      LinkedList node = null;

      while( true )
      {
        if( copy2 != null && current != null ) 
        {
          if( head == null )
          {
            node = new LinkedList( copy2.value );
            head = tail = node;
          }
          else
          {
            node = new LinkedList( copy2.value );
            tail.next = node;
            tail = node;
          }
          node = new LinkedList( current.value );
          tail.next = node;
          tail = node;
        }

        else if( copy2 != null && current == null )
        {
          node = new LinkedList( copy2.value );
          tail.next = node;
          tail = node;
          break;
        }

        else if( copy2 == null && current != null )
        {
          node = new LinkedList( current.value );
          tail.next = node;
          tail = node;
          break;
        }

        else
        {
          break;
        }
        
        copy2 = copy2.next;
        current = current.next;
      }
    
    return head;
    
  }
  
}