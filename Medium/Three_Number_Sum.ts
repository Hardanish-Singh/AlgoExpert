/*****************************************************************************************************************
 *                                        ALGOEXPERT THREE SUM CHALLENGE		                         *
 *                                                                                                               *
 * Problem Statement                                                                                             *
 * Write a function that takes in a non-empty array of distinct	integers & an integer representing a target sum. *
 * The function should find all triplets in the array that sum up to the target sum & return a two-dimensional   *
 * array of all these triplets. The numbers in each triplet should be ordered in ascending order, & the triplets *
 * themselves should be ordered in ascending order with respect to the numbers they hold                         *
 *                                                                                                               *
 * if no three numbers sum up to the target sum, the function should return an empty array                       *
 *                                                                                                               *
 * Examples                                                                                                      *
 * Input 1: ( [12, 3, 1, 2, -6, 5, -8, 6], 0 )                                                                   *
 * Output 1: [ [-8, 2, 6], [-8, 3, 5], [-6, 1, 5] ]                                                              *
 *                                                                                                               *
 * Input 2: ( [1, 2, 3], 6 )                                                                                     *
 * Output 2: [ [1, 2, 3] ]                                                                                       *
 *                                                                                                               *
 * Input 3: ( [1, 2, 3], 7 )                                                                                     *
 * Output 3: []                                                                                                  *
 *                                                                                                               *
 * Input 4: ( [8, 10, -2, 49, 14], 57 )                                                                          *
 * Output 4: [ [-2, 10, 49] ]                                                                                    *
 *                                                                                                               *
 * Input 5: ( [12, 3, 1, 2, -6, 5, 0, -8, -1], 0 )                                                               *
 * Output 5: [ [-8, 3, 5], [-6, 1, 5], [-1, 0, 1] ]                                                              *
 *                                                                                                               *
 * Inout 6: ( [12, 3, 1, 2, -6, 5, 0, -8, -1, 6], 0 )                                                            *
 * Output 6: [ [-8, 2, 6], [-8, 3, 5], [-6, 0, 6], [-6, 1, 5], [-1, 0, 1] ]                                      *
 *                                                                                                               *
 * Input 7: ( [12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], 0 )                                                        *
 * Output 7: [ [-8, 2, 6], [-8, 3, 5], [-6, 0, 6], [-6, 1, 5], [-5, -1, 6], [-5, 0, 5], [-5, 2, 3], [-1, 0, 1] ] *
 *                                                                                                               *
 * Input 8: ( [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18 )                                                              *
 * Output 8: [ [1, 2, 15], [1, 8, 9], [2, 7, 9], [3, 6, 9], [3, 7, 8], [4, 5, 9], [4, 6, 8], [5, 6, 7] ]         *
 *                                                                                                               *
 * Input 9: ( [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 32 )                                                              *
 * Output 9: [ [8, 9, 15] ]                                                                                      *
 *                                                                                                               *
 * Input 10: ( [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 33 )                                                             *
 * Output 10: []                                                                                                 *
 *                                                                                                               *
 * Input 11: ( [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 5 )                                                              *
 * Output 11: []                                                                                                 *
 *                                                                                                               *
 ****************************************************************************************************************/

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