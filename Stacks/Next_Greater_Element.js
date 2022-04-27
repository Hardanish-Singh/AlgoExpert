/****************************************************************
*               ALGOEXPERT NEXT GREATER ELEMENT CHALLENGE	*
*                                                               *
* Write a function that takes in an array of integers & returns * 
* a new array containing, at each index, the next element in    *
* the input array that's greater than the element at that index * 
* in the input array                                            *
*                                                               *
* In other words, your function should return a new array where * 
* outputArray[i] is the next element in the input array that's  *
* greater than inputArray[i]. If there's no such next greater   *
* element for a particular index, the value at that index in    * 
* the output array should be -1.                                *
* For example, array = [1, 2], function should return [2, -1].  *
*                                                               *
* Additionally, your function should treat the input array as a *
* circular array. A circular array wraps around itself as if it *
* were connected end-to-end. So the next index after the last   *
* index in a circular array is the first index. This means that * 
* for our problem, given array = [0, 0, 5, 0, 0, 3, 0 0], the   *
* next greater element after 3 is 5, since the array is circular*
*                                                               *
* Input 1: array = [2, 5, -3, -4, 6, 7, 2]                      *
* Output 1: [5, 6, 6, 6, 7, -1, 5]                              *
*                                                               *
* Input 2: array = [0, 1, 2, 3, 4]                              *
* Output 2: [1, 2, 3, 4, -1]                                    *
*                                                               *
* Input 3: array = [6, 4, 5, 7, 2, 1, 3]                        *
* Output 3: [7, 5, 7, -1, 3, 3, 6]                              *
*                                                               *
* Input 4: array = [1, 0, 1, 0, 1, 0, 1]                        *
* Output 4: [-1, 1, -1, 1, -1, 1, -1]                           *
*                                                               *
* Input 5: array = [5, 6, 1, 3, 1, -2, -1, 3, 4, 5]             *
* Output 5: [6, -1, 3, 4, 3, -1, 3, 4, 5, 6]                    *
*                                                               *
* Input 6: array = [7, 6, 5, 4, 3, 2, 1]                        *
* Output 6: [-1, 7, 7, 7, 7, 7, 7]                              *
*                                                               *
****************************************************************/

function findFirstMax( array ) {
	var max = array[0];
	for( let i = 1; i < array.length; i++ ) {
		if( array[i] > max ) {
			max = array[i];
			break;
		}
	}
	return max;
}

function nextGreaterElement( array ) {
	var nextGreatestElements = [];
	
	for( let i = 0; i < array.length; i++ ) {
		let temp = array.slice( i );
		let max = findFirstMax( temp );
		if( max > array[i] ) {
		        nextGreatestElements.push( max );
		} else {
			temp = [ array[i], ...array.slice(0 , i) ];
			max = findFirstMax(temp);
			if( max > array[i] ) {
				nextGreatestElements.push( max );
			} else {
				nextGreatestElements.push( -1 );
			}
		}
	}
	
	return nextGreatestElements;
}

// Do not edit the line below.
exports.nextGreaterElement = nextGreaterElement;

