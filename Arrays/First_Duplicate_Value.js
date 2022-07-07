function sortDictionaryByValues( dict ) {
        var items = Object.keys( dict ).map( key => [ key, dict[ key ] ] );
        // SORT BY VALUES
        items.sort( (first, second) => first[ 1 ] - second[ 1 ] );
        var keys = items.map( (e) => e[0] );
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
    
      let firstDuplicate = sortDictionaryByValues( duplicates )[0] ;
      return firstDuplicate == null ? -1 : Number( firstDuplicate ) ;
}
    
// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;
    