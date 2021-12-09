/****************************************************************
 *                ALGOEXPERT THREE SUM CHALLENGE		*
 *                                                              *
 * Problem Statement                                            *
 * Write a function that takes in a non-empty array of distinct	*
 * integers and an integer representing a target sum. The       *
 * function should find all triplets in the array that sum up to*
 * the target sum & return a two-dimensional array of all these *
 * triplets. The numbers in each triplet should be ordered in   *
 * ascending order, & the triplets themselves should be ordered *
 * in ascending order with respect to the numbers they hold     *
 *                                                              *
 * if no three numbers sum up to the target sum, the function   *
 * should return an empty array                                 *
 *                                                              *
 * Examples                                                     *
 * Input 1: ( [12,3,1,2,-6,5,-8,6], 0 )                         *
 * Output 1: [ [-8, 2, 6], [-8, 3, 5], [-6, 1, 5] ]             *
 *                                                              *
 * Input 2: ( [1, 2, 3], 6 )                                    *
 * Output 2: [ [1, 2, 3] ]                                      *
 *                                                              *
 * Input 3: ( [1, 2, 3], 7 )                                    *
 * Output 3: []                                                 *
 *                                                              *
 * Input 4: ( [8, 10, -2, 49, 14], 57 )                         *
 * Output 4: [ [-2, 10, 49] ]                                   *
 ***************************************************************/

export function threeNumberSum(nums: Array<number>, target: number): Array<Array<number>> {
        nums.sort( (a, b) => a - b );
        let triplets: Array<Array<number>> = [];
        for( let i: number = 0; i<nums.length; i++ ) {
                if( nums[i] == nums[i-1] ) {
                        continue;
                }
                let leftIndex: number = i+1;
                let rightIndex: number = nums.length-1;

                while( leftIndex < rightIndex ){
                        if( nums[leftIndex] === nums[leftIndex-1] && leftIndex != i + 1 ) {
                                leftIndex++;
                        }
                        else if( nums[rightIndex] === nums[rightIndex+1] ) {
                                rightIndex--;
                        }
                        else if( nums[leftIndex] + nums[rightIndex] + nums[i] < target) {
                                leftIndex++;
                        }
                        else if( nums[leftIndex] + nums[rightIndex] + nums[i] > target) {
                                rightIndex--;
                        }
                        else if( nums[leftIndex] + nums[rightIndex] + nums[i] === target) {
                                triplets.push( [ nums[i], nums[leftIndex], nums[rightIndex] ] );
                                leftIndex++;
                                rightIndex--;
                        }
                }
        }
        return triplets;
}