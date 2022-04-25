function getNthFib( n ) {
        if( n == 1 ) {
                return 0;
        }
        if( n == 2 ) {
                return 1;
        }
        var prev = 0;
        var current = 1;
        var count = 2;
        var next = 0;
        while( count < n ) {
                next = prev + current;
                prev = current;
                current = next;
                count++;
        }
        return next;
}
      
// Do not edit the line below.
exports.getNthFib = getNthFib;
      
      