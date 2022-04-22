function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
        redShirtSpeeds.sort( ( a, b ) => a - b );
        blueShirtSpeeds.sort( ( a, b ) => a - b );
        
        var j = blueShirtSpeeds.length - 1;
        var sum = 0;      
        for( let i = 0; i < redShirtSpeeds.length; i++ ) {
                fastest === true ? sum += Math.max( redShirtSpeeds[i], blueShirtSpeeds[j] ) : sum += Math.max( redShirtSpeeds[i], blueShirtSpeeds[i] );
                j--;
        }
              
        return sum;
}
      
// DO NOT EDIT THE LINE BELOW
exports.tandemBicycle = tandemBicycle;
      
      