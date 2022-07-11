def maxSubsetSumNoAdjacent( array ):
        if len( array ) == 0:
                return 0
        if len( array ) == 1:
                return array[ 0 ]
        
        dp = array
        dp[ 1 ] = max( array[ 0 ], array[ 1 ] )

        for i in range( 2, len( array ) ):
                dp[ i ] = max( dp[ i - 1 ], array[ i ] + dp[ i - 2 ] )
        
        return dp[-1]