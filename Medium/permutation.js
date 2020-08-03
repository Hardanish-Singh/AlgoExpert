function swap(input, index_A, index_B) {
        let temp = input[index_A];
        input[index_A] = input[index_B];
        input[index_B] = temp;
        return input;
}
function getPermutations(array) {
        if(array.length==0) return [];
        let temp = [[array[0]]];
        let i = 1;
        for(let j=0; j<temp.length; j++){
                if(temp[j].length==array.length) {
                        for(let b=j-1;b>=0;b--) temp.splice(b,1);
                        return temp;
                }
                for(let k=0; k<temp[j].length+1; k++){
                        if(k==0) {
                                let t = [...temp[j]];
                                t.unshift(array[i]);
                                temp.push(t);
                        }
                        else temp.push(swap([...temp[temp.length-1]], k-1, k));
                }
                if(temp[j].length != temp[j+1].length) i++;
        }
}
// Do not edit the line below.
exports.getPermutations = getPermutations;
