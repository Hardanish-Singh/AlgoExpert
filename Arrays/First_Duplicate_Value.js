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
***************************************************************/

function sortDictionaryByValues( dict ) {
        let items = Object.keys( dict )
                          .map( key => [ key, dict[ key ] ] );
        // SORT BY VALUES
        items.sort( ( first, second ) => first[ 1 ] - second[ 1 ] );
        let keys = items.map( e => e[0] );
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
    