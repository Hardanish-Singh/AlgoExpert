/****************************************************************
*            ALGOEXPERT NON CONSTRUCTIBLE CHANGE CHALLENGE	*
*                                                               *
* Given an array of positive integers representing the values of*
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
****************************************************************/

function nonConstructibleChange(array) {
        if(array.length === 0 ) {
                return 1;
        }
        array.sort( ( a, b ) => a - b );
	var powerSets = [  ];
        var sums = [ ];
        var i = 0;

        for( i = 0; i < array.length; i++ ) {
                powerSets.push( [ array[ i ], i ] );
                sums.push( [ array[ i ] ] );
        }
        i = 0;
        while( true ) {
                if( i === powerSets.length - 1 ) {
                        break;
                }
                let temp = powerSets[i].slice(0, powerSets[i].length - 1) ;
                let index = powerSets[i][powerSets[i].length - 1];
                for( let j = index + 1; j < array.length; j++ ) {
                        let t = [ ...temp, array[j], j ];
                        sums.push( [ ...temp, array[j] ] );
                        powerSets.push( t );
                }
                i++;
        }

        var result = [];
        for( i = 0; i < sums.length; i++ ) {
                result.push( sums[i].reduce((partialSum, a) => partialSum + a, 0) );
        }
        result.sort( ( a, b ) => a - b );
        result = Array.from(new Set(result));
        let minSum = 1;
        let c = 1;
        let flag = false;

        for( i = 0; i < result.length; i++ ) {
                if( c !== result[i] ) {
                        flag = true;
                        minSum = c;
                        break;
                }
                c++;
        }

    return flag === true ? minSum : result[result.length - 1 ] + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;

