/****************************************************************
*           ALGOEXPERT FIRST DUPLICATE VALUE CHALLENGE	        *
*                                                              	*
* Problem Statement                                            	*
* Given an array of integers between 1 and n, inclusive, where  *
* n is the length of the array, write a function that returns   *
* the first integer that appears more than once                 *
* (when the array is read from left to right).	                *
* 								*
* Examples                                                     	*
* Input 1: [2, 1, 5, 2, 3, 3, 4]                           	*
* Output 1: 2                                           	*
* 								*
* Input 2: [2, 1, 5, 3, 3, 2, 4]                          	*
* Output 2: 3                                           	*
*                                                               *
* Input 3: [1, 1, 2, 3, 3, 2, 2]                          	*
* Output 3: 1                                           	*
*                                                               *
* Input 4: [3, 1, 3, 1, 1, 4, 4]                          	*
* Output 4: 3                                           	*
*                                                               *
* Input 5: []                                             	*
* Output 5: -1                                           	*
*                                                               *
* Input 6: [1]                                             	*
* Output 6: -1                                           	*
*                                                               *
* Input 7: [1, 1]                                             	*
* Output 7: -1                                           	*
*                                                               *
* Input 8: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]                  *
* Output 8: 10                                           	*
*                                                               *
* Input 9: [2, 1, 1]                                            *
* Output 9: 1                                           	*
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

// SOLUTION 1

function sortDictionaryByValues( dict ) {
        let items = Object.keys( dict )
                          .map( key => [ key, dict[ key ] ] );
        // SORT BY VALUES IN ASCENDING ORDER
        items.sort( ( first, second ) => first[ 1 ] - second[ 1 ] );
        let keys = items.map( key => key[0] );
        return keys;
}

function firstDuplicateValue( array ) {
        let duplicates = {

        };
      
        for( let i = 0; i < array.length; i++ ) {
                if( array[ i ] in duplicates ) {
                        continue;
                }
                for( let j = i + 1; j < array.length; j++ ) {
                        if( array[ i ] === array[ j ] ) {
                                duplicates[ array[ i ] ] = j;
                                break;
                        }
                }
        }
    
      let [ firstDuplicate, ] = sortDictionaryByValues( duplicates );
      return firstDuplicate == null ? -1 : Number( firstDuplicate );
}

// DO NOT EDIT THE LINE BELOW.
exports.firstDuplicateValue = firstDuplicateValue;

// SOLUTION 2

function firstDuplicateValue( array ) {
        let duplicates = {

        };
      
        for( let i = 0; i < array.length; i++ ) {
                if( duplicates[ array[ i ] ] ) {
                        return array[ i ];
                }
                duplicates[ array[ i ] ] = true;
        }

        return -1;
}
    
// DO NOT EDIT THE LINE BELOW.
exports.firstDuplicateValue = firstDuplicateValue;
    