/****************************************************************
*                       ALGOEXPERT POWERSET CHALLENGE	        *
*                                                               *
* Write a function that takes in an array of unique integers    *
* and returns its powerset. The powerset P(X) of a set X is the *
* set of all subsets of X.                                      *
* For example, the powerset of [1,2] is  [[], [1], [2], [1,2]]. *
* The sets in the powerset can be in any particular order.      *
*                                                               *
* Input 1: [1, 2, 3]                                            *
* Output 1: [[1],[2],[3],[1, 2],[1, 3],[2, 3],[1, 2, 3],[]]     *
*                                                               *
* Input 1: [1, 2, 3, 4]                                         *
* Output 1: [[1],[2],[3],[4],[1, 2],[1, 3],[1, 4],[2, 3],[2, 4],*
*            [3, 4],[1, 2, 3],[1, 2, 4],[1, 3, 4],[2, 3, 4],    *
*            [1, 2, 3, 4],[]]                                   *
****************************************************************/

function powerset( array ) {
        if( array.length === 0 ) {
		return [ [] ];
	}

        array.sort( (a, b) => a - b );
	var powerSets = [  ];
        var i = 0;
        for( i = 0; i < array.length; i++ ) {
                powerSets.push( [ array[ i ], i ] );
        }
        
        i = 0;
        while( i !== powerSets.length - 1 ) {
                let powerSet = powerSets[ i ].slice( 0, powerSets[ i ].length - 1 );
                index = powerSets[ i ][ powerSets[ i ].length - 1 ];
                
                for( let j = index + 1; j < array.length; j++ ) {
                        powerSets.push( [ ...powerSet, array[j], j ] );
                }
                
                i++;
        }

        let hash_map = {
                
        };

        for( let i = 0; i < powerSets.length; i++ ) {
                let powerSet = powerSets[ i ].slice( 0, powerSets[ i ].length - 1 );
                if( hash_map[ powerSet ] ) {
                        continue;
                }
                else {
                        hash_map[ powerSet ] = true;
                }
        }

        let result = [];
        for( const key of Object.keys( hash_map ) ) {
                result.push( key.split(",").map( Number ) );
        }
        result.push( [] );
        return result;
}

// Do not edit the line below.
exports.powerset = powerset;