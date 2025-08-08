// arithmetic sequence checker
function arithmeticSequence(a,b,c){
    if (b-a === c-b){
        return "Arithmetic";
    } else {
        return "not valid";
    }
}
console.log(arithmeticSequence(2,4,6));