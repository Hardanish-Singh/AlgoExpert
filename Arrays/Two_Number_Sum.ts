/****************************************************************
*          		ALGOEXPERT TWO SUM CHALLENGE		*
*                                                              	*
* Problem Statement                                            	*
* Write a function that takes in a non-empty array of distinct	*
* integers and an integer representing a target sum. If any 	*
* two numbers in the input array sum up to the target sum, the	*
* function should return them in an array, in any order. If no	*
* two numbers sum up to the target sum, the function should 	*
* return an empty array.					*
* Note that the target sum has to be obtained by summing two 	*
* different integers in the array; you can't add a single 	*
* integer to itself in order to obtain the target sum. 		*
* You can assume that there will be at most one pair of numbers	*
* summing up to the target sum.					*
* 								*
* Examples                                                     	*
* Input 1: ([3, 5, -4, 8, 11, 1, -1, 6], 10)                   	*
* Output 1: [11, -1]                                           	*
*                                                              	*
* Input 2: ([4, 6], 10)		                        	*
* Output 2: [4, 6]                                             	*
*                                                              	*
* Input 3: ([4, 6, 1], 5)					*
* Output 3: [4, 1]						*
* 								*
* Input 4: ([4, 6, 1, -3], 3)					*
* Output 4: [-3, 6]						*
* 								*
* Input 5: ([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)	 		*
* Output 5: [8, 9]						*
*								*
* Input 6: ([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)		*
* Output 6: [3, 15]						*
* 								*
* Input 7: ([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)		*
* Output 7: [-5, 0]						*
* 								*
* Input 8: ([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163)	*
* Output 8: [-47, 210]						*
* 								*
* Input 9: ([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164)	*
* Output 9: []							*
* 								*
* Input 10: ([3, 5, -4, 8, 11, 1, -1, 6], 15)			*
* Output 10: []							*
* 								*
* Input 11: ([14], 15)						*
* Output 11: []							*
* 								*
* Input 12: ([15], 15)						*
* Output 12: []							*
* 								*
***************************************************************/

/*
	SOLUTION 1( NAIVE APPROACH )
		Time Complexity: O( n^2 )
		Space Complexity: O( 1 )
*/

export function twoNumberSumSolution1( nums: Array<number>, target: number): Array<number> {
	for( let i: number = 0; i < nums.length; i++ ) {
		for( let j: number = i+1; j<nums.length; j++ ) {
			if( nums[i] + nums[j] === target ) {
				return [ nums[i], nums[j] ];
			}
		}
	}
	return [];
}

/*
	SOLUTION 2( USING HASH TABLE )
		Time Complexity: O( n )
		Space Complexity: O( n )
*/

export function twoNumberSumSolution2( nums: Array<number>, target: number): Array<number> {
	let hashTable: {
		[ key: number ]: boolean;
	} = {

	};
	for( let i: number = 0; i < nums.length; i++ ) {
		let difference: number = target - nums[i];
		if( difference in hashTable ) {
			return[ difference, nums[ i ] ];
		}
		else {
			hashTable[ nums[ i ] ] = true;
		}
	}
	return [];
}

/*
	SOLUTION 3( MOST OPTIMAL )
		Time Complexity: O( nlog( n ) )
		Space Complexity: O( 1 )
*/

export function twoNumberSumSolution3( nums: Array<number>, target: number): Array<number> | [] {
	nums.sort( (a, b) => a - b );
	let leftIndex: number = 0;
	let rightIndex: number = nums.length - 1;
	while( leftIndex < rightIndex ){
		if( nums[leftIndex] + nums[rightIndex] < target ) {
			leftIndex++;
		}
		else if( nums[leftIndex] + nums[rightIndex] > target ) {
			rightIndex--;
		}
		else if( nums[leftIndex] + nums[rightIndex] === target ) {
			return [ nums[leftIndex], nums[rightIndex] ];
		}
	}
	return [];
}