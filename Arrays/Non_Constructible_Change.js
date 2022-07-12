/****************************************************************
*            ALGOEXPERT NON CONSTRUCTIBLE CHANGE CHALLENGE	*
*                                                               *
* Given an coins of positive integers representing the values of*
* coins in your possession, write a function that returns the   *
* minimum amount of change (the minimum sum of money) that you  *
* cannot create. The given coins can have any positive integer  *
* value and aren't necessarily unique (i.e., you can have       *
* multiple coins of the same value).                            *
*                                                               *
* For example, if you're given coins = [1, 2, 5], the minimum   *
* amount of change that you can't create is 4.                  *
* If you're given no coins, the minimum amount of change that   *
* you can't create is 1.                                        *
*                                                               *
* Input 1: [5, 7, 1, 1, 2, 3, 22]                               *
* Output 1: 20                                                  *
*                                                               *
* Input 2: [1, 1, 1, 1, 1]                                      *
* Output 2: 6                                                   *
*                                                               *
* Input 3: [1, 5, 1, 1, 1, 10, 15, 20, 100]                     *
* Output 3: 55                                                  *
*                                                               *
* Input 4: [6, 4, 5, 1, 1, 8, 9]                                *
* Output 4: 3                                                   *
*                                                               *
* Input 5: [87]                                                 *
* Output 5: 1                                                   *
*                                                               *
* Input 5: [5, 6, 1, 1, 2, 3, 4, 9]                             *
* Output 5: 32                                                  *
*                                                               *
* Input 6: [5, 6, 1, 1, 2, 3, 43]                               *
* Output 6: 19                                                  *
*                                                               *
* Input 7: [1, 1]                                               *
* Output 7: 3                                                   *
*                                                               *
* Input 8: [2]                                                  *
* Output 8: 1                                                   *
*                                                               *
* Input 9: [109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4]     *
* Output 9: 87                                                  *
*                                                               *
* Input 9: [1, 2, 3, 4, 5, 6, 7]                                *
* Output 9: 29                                                  *
*                                                               *
****************************************************************/

var generateSubsets = function( array ) {
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

function nonConstructibleChange( coins ) {
        if( coins.length == 0 ) {
          return 1
        }

        let sums = generateSubsets( coins  );
        var result = [];
        for( i = 0; i < sums.length; i++ ) {
                result.push( sums[i].reduce((partialSum, a) => partialSum + a, 0) );
        }
        result = Array.from(new Set(result));
        result.sort( ( a, b ) => a - b );

        let c = 0;
        for( i = 0; i < result.length; i++ ) {
                if( result[i] !== c ) {
                        return c;
                }
                c++;
        }
        return result[ result.length - 1 ] + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;



// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;

