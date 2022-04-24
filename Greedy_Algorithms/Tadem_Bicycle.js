/****************************************************************
*               ALGOEXPERT TADEM BICYCLE CHALLENGE	        *
*                                                               *
* A tandem bicycle is a bicycle that's operated by two people   *
* person A and person B. Both people pedal the bicycle, but the *
* person that pedals faster dictates the speed of the bicycle.  *
* So if person A pedals at a speed of  5, and person B pedals at*
* a speed of 4, the tandem bicycle moves at a speed of 5        *
* (i.e.  tandemSpeed = max( speedA, speedB ) ). You're given two* 
* lists of positive integers: one that contains the speeds of   *
* riders wearing red shirts and one that contains the speeds of *
* riders wearing blue shirts. Each rider is represented by a    *
* single positive integer, which is the speed that they pedal a *
* tandem bicycle at. Both lists have the same length, meaning   *
* that there are as many red-shirt riders as there are          *
* blue-shirt riders. Your goal is to pair every rider wearing a *
* red shirt with a rider wearing a blue shirt to operate a      *
* tandem bicycle. Write a function that returns the maximum     *
* possible total speed or the minimum possible total speed of   *
* all of the tandem bicycles being ridden based on an input     *
* parameter, fastest. If fastest = true, your function should   *
* return the maximum possible total speed; otherwise it should  *
* return the minimum total speed. "Total speed" is defined as   *
* the sum of the speeds of all the tandem bicycles being ridden *
* For example, if there are 4 riders (2 red-shirt riders and 2  *
* blue-shirt riders) who have speeds of 1, 3, 4, 5, & if they're* 
* paired on tandem bicycles as follows: [1, 4], [5, 3], then    *
* the total speed of these tandem bicycles is 4 + 5 = 9.        *
*                                                               *
* Input 1: ( [5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true )           *
* Output 1: 32                                                  *
*                                                               *
* Input 2: ( [5, 5, 3, 9, 2], [3, 6, 7, 2, 1], false )          *
* Output 2: 25                                                  *
*                                                               *
* Input 3: ( [1, 2, 1, 9, 12, 3], [3, 3, 4, 6, 1, 2], false )   *
* Output 3: 30                                                  *
*                                                               *
* Input 4: ( [1, 2, 1, 9, 12, 3], [3, 3, 4, 6, 1, 2], true )    *
* Output 4: 37                                                  *
*                                                               *
* Input 5: ( [1, 2, 1, 9, 12, 3, 1, 54, 21, 231, 32, 1],        *
*            [3, 3, 4, 6, 1, 2, 5, 6, 34, 256, 123, 32], true ) *
* Output 5: 816                                                 *
*                                                               *
* Input 6: ( [1, 2, 1, 9, 12, 3, 1, 54, 21, 231, 32, 1],        *
*            [3, 3, 4, 6, 1, 2, 5, 6, 34, 256, 123, 32], false )*
* Output 6: 484                                                 *
*                                                               *
* Input 7: ( [1], [5], true )                                   *
* Output 7: 5                                                   *
*                                                               *
* Input 8: ( [1], [5], false )                                  *
* Output 8: 5                                                   *
*                                                               *
* Input 9: ( [1, 1, 1, 1], [1, 1, 1, 1], true )                 *
* Output 9: 4                                                   *
*                                                               *
* Input 10: ( [1, 1, 1, 1], [1, 1, 1, 1], false )               *
* Output 10: 4                                                  *
*                                                               *
* Input 11: ( [1, 1, 1, 1, 2, 2, 2, 2, 9, 11],                  *
*             [1, 1, 1, 1, 3, 3, 3, 3, 5, 7], true )            *
* Output 11: 48                                                 *
*                                                               *
* Input 12: ( [1, 1, 1, 1, 2, 2, 2, 2, 9, 11],                  *
*             [1, 1, 1, 1, 3, 3, 3, 3, 5, 7], false )           *
* Output 12: 36                                                 *
*                                                               *
* Input 13: ( [9, 8, 2, 2, 3, 5, 6],                            *
*             [3, 4, 4, 1, 1, 8, 9], true )                     *
* Output 13: 49                                                 *
*                                                               *
* Input 14: ( [9, 8, 2, 2, 3, 5, 6],                            *
*             [3, 4, 4, 1, 1, 8, 9], false )                    *
* Output 14: 35                                                 *
*                                                               *
* Input 15: ( [5, 4, 3, 2, 1], [1, 2, 3, 4, 5], false )         *
* Output 15: 15                                                 *
*                                                               *
****************************************************************/

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
        redShirtSpeeds.sort( ( a, b ) => a - b );
        blueShirtSpeeds.sort( ( a, b ) => a - b );
        
        var sum = 0;      
        for( let i = 0; i < redShirtSpeeds.length; i++ ) {
                fastest === true ? sum += Math.max( redShirtSpeeds[ i ], blueShirtSpeeds[ blueShirtSpeeds[ blueShirtSpeeds.length - 1 - i ] ] ) : sum += Math.max( redShirtSpeeds[ i ], blueShirtSpeeds[ i ] );
        }
              
        return sum;
}
      
// DO NOT EDIT THE LINE BELOW
exports.tandemBicycle = tandemBicycle;
      
      