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

                while( true )
                {
                        if( list1 != null && list2 != null ) 
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

                        else if( list1 == null && list2 != null )
                        {
                                node = new LinkedList( list2.value );
                                tail.next = node;
                                tail = node;
                                break;
                        }

                        else
                        {
                                break;
                        }

                        list1 = list1.next;
                        list2 = list2.next;
                }

                return head;
        }
}