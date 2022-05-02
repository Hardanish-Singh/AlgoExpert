import java.util.*;

class Program 
{
        // Feel free to add new properties and methods to the class.
        static class MinMaxStack 
	{
		ArrayList<Integer> stack = new ArrayList<Integer>();
                public int peek() 
                {
                        return stack.get( stack.size() - 1 );
                }

                public int pop() 
                {
                        return stack.remove( stack.size() - 1 );
                }

                public void push(Integer number) 
                {
                        stack.add( number );
                }

                public int getMin() 
                {
                        int minimum = stack.get(0);
                        for (int i = 1; i < stack.size(); i++) 
                        {
                                if (minimum > stack.get(i)) 
                                {
                                        minimum = stack.get(i);
                                }
                        }
                        return minimum;
                }

                public int getMax() 
                {
                        int maximum = stack.get(0);
                        for (int i = 1; i < stack.size(); i++) 
                        {
                                if (maximum < stack.get(i)) 
                                {
                                        maximum = stack.get(i);
                                }
                        }
                        return maximum;
                }
        }
}