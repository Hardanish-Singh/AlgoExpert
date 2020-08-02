function swap(input, index_A, index_B) {
        let temp = input[index_A];
        input[index_A] = input[index_B];
        input[index_B] = temp;
        return input;
}
function getPermutations(array) {
        if(array.length==0) return [];
        let permuationArray = new Array(), temp = [[array[0]]];
        let i = 1;
        for(let j=0; j<temp.length; j++){
                if(temp[j].length==array.length) break;
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
        let ans = new Array();
        for(let h=0; h<temp.length; h++) if(temp[h].length == array.length) ans.push(temp[h]);
        return ans;
}
    