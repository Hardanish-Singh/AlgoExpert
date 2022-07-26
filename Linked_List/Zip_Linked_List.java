/****************************************************************
*               ALGOEXPERT ZIP LINKED LIST CHALLENGE	        *
*                                                              	*
* You're given the head of a Singly Linked List of arbitrary    *
* length  k. Write a function that zips the Linked List in place*
* (i.e., doesn't create a brand new list) and returns its head. *
*                                                               *
* A Linked List is zipped if its nodes are in the following     *
* order, where  k is the length of the Linked List:             *
* 1^st node -> k^th node -> 2^nd node -> (k - 1)^th node ->     *
* 3^rd node -> (k - 2)^th node and so on                        *
*                                                               *
* Each LinkedList node has an integer value as well as a next   *
* node pointing to the next node in the list or to  None / null *
* if it's the tail of the list.                                 *
*                                                               *
* You can assume that the input Linked List will always have at *
* least one node; in other words, the head will never be        *
* None / null                                                   *
*                                                               *
* Input 1:  1 -> 2 -> 3 -> 4 -> 5 -> 6                          *
* Output 1: 1 -> 6 -> 2 -> 5 -> 3 -> 4                          *
*                                                               *
* Input 2:  1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7                     *
* Output 2: 1 -> 7 -> 2 -> 6 -> 3 -> 5 -> 4                     *
*                                                               *
* Input 3:  1 -> 2 -> 3                                         *
* Output 3: 1 -> 3 -> 2                                         *
*                                                               *
* Input 4:  1 -> 2                                              *
* Output 4: 1 -> 2                                              *
*                                                               *
* Input 5:  1                                                   *
* Output 5: 1                                                   *
*                                                               *
****************************************************************/

class Program 
{
        public static class LinkedList 
        {
                public int value;
                public LinkedList next;

                public LinkedList( int value ) 
                {
                        this.value = value;
                        this.next = null;
                }
        }

        public static LinkedList middleNode( LinkedList head ) 
        {
                double middle = 0;
                LinkedList list2 = head;

                while( list2 != null )
                {
                        middle++;
                        list2 = list2.next;
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
                LinkedList list2 = head.next;
                LinkedList tail = head;
                tail.next = null;

                while( list2 != null )
                {
                        LinkedList next = list2.next;
                        list2.next = previous;
                        previous = list2;
                        list2 = next;
                }

                head = previous;
                return head;
        }

        public LinkedList zipLinkedList(LinkedList linkedList) 
        {
                if( linkedList == null )
                {
                        return null;
                }
                if( linkedList.next == null )
                {
                        return linkedList;
                }

                LinkedList list2 = linkedList;
                list2 = middleNode( list2 );

                // FIND PREVIOUS NODE BEFORE MIDDLE NODE
                LinkedList copy = linkedList;
                LinkedList previous = null;
                while( list2.value != copy.value )
                {
                        previous = copy;
                        copy = copy.next;  
                }
                // MAKE LINKEDLIST list1 FROM STARTING NODE TO PREVIOUS NODE
                LinkedList list1 = linkedList;
                while( linkedList.value != previous.value )
                {
                        linkedList = linkedList.next;
                }
                linkedList.next = null;

                list2 = reverseList( list2 );

                // CONSTRUCT ZIP LINKED LIST
                LinkedList head = null;
                LinkedList tail = null;
                LinkedList node = null;

                while( list1 != null || list2 != null )
                {
                        if( list1 != null && list2 != null ) 
                        {
                                if( head == null && tail == null )
                                {
                                        node = new LinkedList( list1.value );
                                        head = tail = node;
                                }
                                else
                                {
                                        node = new LinkedList( list1.value );
                                        tail.next = node;
                                        tail = node;
                                }
                                node = new LinkedList( list2.value );
                                tail.next = node;
                                tail = node;
                        }

                        else if( list1 != null && list2 == null )
                        {
                                node = new LinkedList( list1.value );
                                tail.next = node;
                                tail = node;
                                break;
                        }

                        else if( list2 != null && list1 == null )
                        {
                                node = new LinkedList( list2.value );
                                tail.next = node;
                                tail = node;
                                break;
                        }

                        list1 = list1.next;
                        list2 = list2.next;
                }

                return head;
        }
}