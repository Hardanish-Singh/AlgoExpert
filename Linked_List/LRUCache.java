/****************************************************************
*               ALGOEXPERT LRU CACHE CHALLENGE	                *
*                                                              	*
* Implement an LRUCache class for a Least Recently Used (LRU)   *
* cache. The class should support:                              *
* 1) Inserting key-value pair with the insertKeyValuePair method*
* 2) Retrieving a key's value with the getValueFromKey method   *
* 3) Retrieving the most recently used (the most recently       *
*    inserted or retrieved) key with the getMostRecentKey method*
*                                                               *
* Each of these methods should run in constant time.            *
*                                                               *
* Additionally, the LRUCache class should store a capacity      *
* property set to the size of the cache, which is passed in as  *
* an argument during instantiation. This size represents the    *
* maximum number of key-value pairs that the cache can store at *
* once. If a key-value pair is inserted in the cache when it has*
* reached maximum capacity, the least recently used key-value   *
* pair should be evicted from the cache & no longer retrievable;*
* the newly added key-value pair should effectively replace it. *
*                                                               *
* Note that inserting a key-value pair with an already existing *
* key should simply replace the key's value in the cache with   *
* the new value and shouldn't evict a key-value pair if the     *
* cache is full. Lastly, attempting to retrieve a value from a  *
* key that isn't in the cache should return None /  null.       *     
*                                                               *
****************************************************************/

/*
        Input 1:
                {
                        "classMethodsToCall": [
                                { "arguments": ["b", 2], "method": "insertKeyValuePair" },
                                { "arguments": ["a", 1], "method": "insertKeyValuePair" },
                                { "arguments": ["c", 3], "method": "insertKeyValuePair" },
                                { "arguments": [], "method": "getMostRecentKey" },
                                { "arguments": ["a"], "method": "getValueFromKey" },
                                { "arguments": [], "method": "getMostRecentKey" },
                                { "arguments": ["d", 4], "method": "insertKeyValuePair" },
                                { "arguments": ["b"], "method": "getValueFromKey" },
                                { "arguments": ["a", 5], "method": "insertKeyValuePair" },
                                { "arguments": ["a"], "method": "getValueFromKey" }
                        ],
                        "maxSize": 3
                }
        Output 1:
                [
                        { "arguments": ["b", 2], "method": "insertKeyValuePair", "output": null },
                        { "arguments": ["a", 1], "method": "insertKeyValuePair", "output": null },
                        { "arguments": ["c", 3], "method": "insertKeyValuePair", "output": null },
                        { "arguments": [], "method": "getMostRecentKey", "output": "c" },
                        { "arguments": ["a"], "method": "getValueFromKey", "output": 1 },
                        { "arguments": [], "method": "getMostRecentKey", "output": "a" },
                        { "arguments": ["d", 4], "method": "insertKeyValuePair", "output": null },
                        { "arguments": ["b"], "method": "getValueFromKey", "output": null },
                        { "arguments": ["a", 5], "method": "insertKeyValuePair", "output": null },
                        { "arguments": ["a"], "method": "getValueFromKey", "output": 5 }
                ]
        
        Input 2:
                {
                        "classMethodsToCall": [
                                { "arguments": ["a"], "method": "getValueFromKey" },
                                { "arguments": ["a", 1], "method": "insertKeyValuePair" },
                                { "arguments": ["a"], "method": "getValueFromKey" },
                                { "arguments": ["a", 9001], "method": "insertKeyValuePair" },
                                { "arguments": ["a"], "method": "getValueFromKey" },
                                { "arguments": ["b", 2], "method": "insertKeyValuePair" },
                                { "arguments": ["a"], "method": "getValueFromKey" },
                                { "arguments": ["b"], "method": "getValueFromKey" },
                                { "arguments": ["c", 3], "method": "insertKeyValuePair" },
                                { "arguments": ["a"], "method": "getValueFromKey" },
                                { "arguments": ["b"], "method": "getValueFromKey" },
                                { "arguments": ["c"], "method": "getValueFromKey" }
                        ],
                        "maxSize": 1
                }
*/

import java.util.HashMap;

class Node
{
        private int key;
        private int value;
        private Node next;
        private Node previous;
        
        public Node( int key, int value )
        {
                this.key = key;
                this.value = value;
        }
        
        public int getKey() 
        {
                return key;
        }
        
        public int getValue() 
        {
                return value;
        }

        public Node getNextNode()
        {
                return next;
        }
        
        public Node getPreviousNode()
        {
                return previous;
        }
        
        public void setNextNode( Node next )
        {
                this.next = next;
        }
        
        public void setPreviousNode( Node previous )
        {
                this.previous = previous;
        }
        
        public void setNextAndPreviousNode( Node node )
        {
                this.next.previous = node;
        }
        
        public void setPreviousAndNextNode( Node node )
        {
                this.previous.next = node;
        }
}


class Program 
{
  
        static class LRUCache 
        {
                private int capacity;
                private Node head = null;
                private Node tail = null;
                // HashMap is a key-value pair of Keys as "Key Number" & Value as "Node Address"
                private HashMap<String, Node> map = null;

                public LRUCache( int capacity ) 
                {
                        // Initialize Capacity
                        this.capacity = capacity;
                        // Initialize Doubly Linked List
                        head = new Node( "", 0 );
                        tail = new Node( "", 0 );
                        head.setNextNode( tail );
                        tail.setPreviousNode( head );
                        head.setPreviousNode( null );
                        tail.setNextNode( null );
                        // Initialize HashMap
                        map = new HashMap<String, Node>();
                }

                public void insertKeyValuePair( String key, int value ) 
                {
                        if( map.containsKey( key ) )
                        {
                                // Remove the Node from the Doubly Linked List
                                Node node = map.get( key );
                                delete( node );
                        }
                        if( map.size() == capacity )
                        {
                                // Remove the Node before Tail Node from the Doubly Linked List
                                Node node = map.get( tail.getPreviousNode().getKey() );
                                delete( node );
                        }
                        Node node = new Node( key, value );
                        insert( node );
                }

                public LRUResult getValueFromKey( String key ) 
                {
                        if( map.containsKey( key ) )
                        {
                                Node node = map.get( key );
                                delete( node );
                                insert( node );
                                return new LRUResult( true, node.getValue() );
                        }
                        else
                        {
                                return null;
                        }
                }

                public String getMostRecentKey() 
                {
                        return head.getNextNode().getKey();
                }

                public void insert( Node node )
                {
                        // Add the key in HashMap
                        map.put( node.getKey(), node );
                        // Add the node at the first position always
                        node.setNextNode( head.getNextNode() );
                        node.setNextAndPreviousNode( node );
                        head.setNextNode( node );
                        node.setPreviousNode( head );
                }

                public void delete( Node node )
                {
                        // Remove the key from the HashMap
                        map.remove( node.getKey() );
                        // Remove the node from the Doubly Linked List
                        node.setPreviousAndNextNode( node.getNextNode() );
                        node.setNextAndPreviousNode( node.getPreviousNode() );
                }
        }

        static class LRUResult 
        {
                boolean found;
                int value;

                public LRUResult( boolean found, int value ) 
                {
                        this.found = found;
                        this.value = value;
                }
        }

}