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

