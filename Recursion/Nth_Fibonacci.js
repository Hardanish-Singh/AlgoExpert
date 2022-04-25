/****************************************************************
*               ALGOEXPERT N^th FIBONACCI CHALLENGE	        *
*                                                               *
* The Fibonacci sequence is defined as follows: the first number* 
* of the sequence is 0, the second number is 1 & the n^th number* 
* is the sum of the (n - 1)th and (n - 2)th numbers.            *
* Write a function that takes in an integer n & returns the     *
* n^th Fibonacci number.                                        *
* Important note: the Fibonacci sequence is often defined with  *
* its first two numbers as F0 = 0 and F1 = 1. For the purpose of* 
* this question, the first Fibonacci number is F0; therefore    *
* getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc *
*                                                               *
* Input 1: n = 6                                                *
* Output 1: 5                                                   *
****************************************************************/

function getNthFib( n ) {
        if( n == 1 ) {
                return 0;
        }
        if( n == 2 ) {
                return 1;
        }
        var prev = 0;
        var current = 1;
        var count = 2;
        var next = 0;
        while( count < n ) {
                next = prev + current;
                prev = current;
                current = next;
                count++;
        }
        return next;
}
      
// Do not edit the line below.
exports.getNthFib = getNthFib;
      
      