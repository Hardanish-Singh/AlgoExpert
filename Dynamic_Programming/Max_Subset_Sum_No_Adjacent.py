def maxSubsetSumNoAdjacent( array ):
        if len( array ) == 0:
                return 0
        if len( array ) == 1:
                return array[ 0 ]