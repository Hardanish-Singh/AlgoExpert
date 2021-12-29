/*
        Write a function that takes in a string of words separated by one or more whitespaces and returns a string that has these words in reverse order. 
        For example, given the string "tim is great", your function should return "great is tim"

        For this problem, a word can contain special characters, punctuation, and numbers. 
        The words in the string will be separated by one or more whitespaces, and the reversed string must contain the same whitespaces as the original string. 
        For example, given the string "whitespaces 4" you would be expected to return "4 whitespaces"

        Input 1: "AlgoExpert is the best!"
        Output 1: "best! the is AlgoExpert"

        Input 2: "Reverse These Words"
        Output 2: "Words These Reverse"
*/
function reverseWordsInString( string ) {
        return string.split(" ").reverse().join(" ");
}

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;
      