/****************************************************************
 *          		ALGOEXPERT TWO SUM CHALLENGE		*
 *                                                              *
 * Problem Statement                                            *
 * Write a function that takes in a non-empty array of distinct	*
 * integers and an integer representing a target sum. If any 	*
 * two numbers in the input array sum up to the target sum, the	*
 * function should return them in an array, in any order. If no	*
 * two numbers sum up to the target sum, the function should 	*
 * return an empty array.					*
 * Note that the target sum has to be obtained by summing two 	*
 * different integers in the array; you can't add a single 	*
 * integer to itself in order to obtain the target sum. 	*
 * You can assume that there will be at most one pair of numbers*
 * summing up to the target sum.				*
 * 								*
 * Examples                                                     *
 * Input 1: ([3, 5, -4, 8, 11, 1, -1, 6], 10)                   *
 * Output 1: [11, -1]                                           *
 *                                                              *
 * Input 2: ([4, 6], 10)		                        *
 * Output 2: [4, 6]                                             *
 *                                                              *
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
 * Solution Efficiency						*
 * Time Complexity: O(nlogn)					*
 * Space Complexity: O(1)					*
 ***************************************************************/

function twoNumberSum(nums, target) {
	nums.sort(function(a, b){return a - b});
	let leftIndex = 0;
	let rightIndex = nums.length-1;
	while(leftIndex < rightIndex){
		if((nums[leftIndex]+nums[rightIndex])<target) leftIndex++;
		else if((nums[leftIndex]+nums[rightIndex])>target) rightIndex--;
		else if((nums[leftIndex]+nums[rightIndex])==target) return [nums[leftIndex], nums[rightIndex]];
	}
	return [];
}
