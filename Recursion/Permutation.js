/*******************************************************************************
*                       ALGOEXPERT PERMUTATION CHALLENGE	                *
*                                                                               *
* Write a function that takes in an array of unique integers and returns an     *
* array of all permutations of those integers in no particular order.           *
*                                                                               *
* If the input array is empty, the function should return an empty array.       *
*                                                                               *
* Input 1:  [1, 2, 3 ]                                                          *
* Output 1: [ [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1] ]*
*                                                                               *
********************************************************************************/


function is_complete( array1, array2 ) {
        let is_complete = true;
        for( let k=0; k<array1.length; k++ ) {
                if( array1[k].length !== array2.length ) {
                        is_complete = false;
                        break;
                }
        }
        return is_complete ? false : true;
}

function getPermutations( nums ) {
        if( nums.length === 0 ) {
                return [];
        }
        if( nums.length === 1 ) {
                return [nums];
        }
        let permutations = [];
        let temp = [];
        let temp_permutations = [];
        for( let i=0; i<nums.length; i++ ) {
                temp_permutations.push([nums[i]]);
                temp = [...nums.slice(0,i), ...nums.slice(i+1)];
                while( is_complete( temp_permutations, nums ) ) {
                        let elementArray = temp_permutations.shift();
                        for( let j=0; j<temp.length; j++ ) {
                                if( ! ( elementArray.includes( temp[j] ) ) ) {
                                        let t = [ ...elementArray, temp[j] ];
                                        if( t.length === nums.length ){
                                                permutations.push( t );
                                        }
                                        temp_permutations.push( [ ...elementArray, temp[j] ] );
                                }
                        }
                }
                temp_permutations = [];
        }
        return permutations;
};

// Do not edit the line below.
exports.getPermutations = getPermutations;
