class Program 
{
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
                if( linkedList == null )
                {
                        return null;
                }
                if( linkedList.next == null )
                {
                        return linkedList;
                }

                LinkedList current = linkedList;
                current = middleNode( current );

                // FIND PREVIOUS NODE BEFORE MIDDLE NODE
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

                // MAKE LINKEDLIST list1 FROM STARTING NODE TO PREVIOUS NODE
                LinkedList list1 = linkedList;
                while( linkedList != null )
                {
                        if( linkedList.value == previous.value )
                        {
                                break;
                        }
                        linkedList = linkedList.next;
                }
                linkedList.next = null;

                // CONSTRUCT ZIP LINKED LIST
                LinkedList head = null;
                LinkedList tail = null;
                LinkedList node = null;

                while( true )
                {
                        if( list1 != null && current != null ) 
                        {
                                if( head == null )
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
                                node = new LinkedList( current.value );
                                tail.next = node;
                                tail = node;
                        }

                        else if( list1 != null && current == null )
                        {
                                node = new LinkedList( list1.value );
                                tail.next = node;
                                tail = node;
                                break;
                        }

                        else if( list1 == null && current != null )
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

                        list1 = list1.next;
                        current = current.next;
                }

                return head;
        }
}