function powerset(array) {
        if( array.length === 0 ) {
                return [ [] ];
	}
	var powerSets = [  ];
        var i = 0;
        for( i = 0; i < array.length; i++ ) {
                powerSets.push( [ array[ i ] ] );
        }
        i = 0;
        while( true ) {
                if( i === powerSets.length - 1 ) {
                        break;
                }
                let temp = powerSets[i];
                let index = array.indexOf( temp[ temp.length - 1 ] );
                for( let j = index + 1; j < array.length; j++ ) {
                        let t = [ ...temp, array[j] ];
                        powerSets.push( t );
                }
                i++;
        }
	powerSets.push([]);
	return powerSets;
}

// Do not edit the line below.
exports.powerset = powerset;

