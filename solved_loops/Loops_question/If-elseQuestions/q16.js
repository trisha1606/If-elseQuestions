//power of two and threshold check
function isPowerOfTwo(n){
    if ((n>0) && ((n&(n-1))===0)){ //here & is a bitwise operator
        return "valid power";
    } else {
        return "Invalid";
    }
}
console.log(isPowerOfTwo(128));