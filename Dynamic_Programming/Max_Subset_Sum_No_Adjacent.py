"""
/****************************************************************
*        ALGOEXPERT MAX SUBSET SUM NO ADJACENT CHALLENGE        *
*                                                              	*
* Problem Statement                                            	*
* Write a function that takes in an array of positive integers  *
* and returns the maximum sum of non-adjacent elements in the   *
* array. If the array is empty, the function should return 0    *
* 								*
* Examples                                                     	*
* Input 1: [75, 105, 120, 75, 90, 135]                          *
* Output 1: 330                                           	*
* 								*
* Input 2: []                                             	*
* Output 2: 0                                           	*
*                                                               *
* Input 3: [1]                                            	*
* Output 3: 1                                           	*
*                                                               *
* Input 4: [1, 2]                                         	*
* Output 4: 2                                           	*
*                                                               *
* Input 5: [1, 2, 3]                                            *
* Output 5: 4                                           	*
*                                                               *
* Input 6: [1, 15, 3]                                           *
* Output 6: 15                                           	*
*                                                               *
* Input 7: [7, 10, 12, 7, 9, 14]                                *
* Output 7: 33                                           	*
*                                                               *
* Input 8: [4, 3, 5, 200, 5, 3]                                 *
* Output 8: 207                                           	*
*                                                               *
* Input 9: [10, 5, 20, 25, 15, 5, 5, 15]                        *
* Output 9: 60                                           	*
*                                                               *
* Input 10: [2, 2, 2, 2, 2, 2, 2, 2, 2]                         *
* Output 10: 2                                           	*
*                                                               *
* Input 11: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]                     *
* Output 11: -1                                           	*
*                                                               *
* Input 12: [7, 6, 5, 3, 6, 4, 3, 5, 2]                         *
* Output 12: 6                                           	*
*                                                               *
* Input 13: [9, 13, 6, 2, 3, 5, 5, 5, 3, 2, 2, 2, 2, 4, 3]      *
* Output 13: 5                                           	*
*                                                               *
****************************************************************/
"""

def maxSubsetSumNoAdjacent( array ):
        if len( array ) == 0:
                return 0
        if len( array ) == 1:
                return array[ 0 ]
        
        dp = array
        dp[ 1 ] = max( array[ 0 ], array[ 1 ] )

        for i in range( 2, len( array ) ):
                dp[ i ] = max( dp[ i - 1 ], array[ i ] + dp[ i - 2 ] )
        
        return dp[-1]