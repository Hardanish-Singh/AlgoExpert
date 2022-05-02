/****************************************************************
*       ALGOEXPERT MIN MAX STACK CONSTRUCTION CHALLENGE	        *
*                                                               *
* Write a MinMaxStack class for a Min Max Stack.                *
* The class should support:                                     *
*       1) Pushing and popping values on and off the stack.     *
*       2) Peeking at the value at the top of the stack.        *
*       3) Getting both the minimum and the maximum values in   *
*          the stack at any given point in time.                *
*                                                               *
****************************************************************/

import java.util.*;

class Program 
{
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