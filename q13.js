//range inclusion check
function rangeCheck(n){
    if((n>=1 && n<= 5) || (n>=10 && n<=15)){
        return "in Range";
    } else {
        return "Not Valid";
    }
}
console.log(rangeCheck(12));