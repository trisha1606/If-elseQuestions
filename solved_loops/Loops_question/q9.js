function countSetBits(num){
    let count=0;
    while(num>0){
        if (num & 1){
            count ++;
        }
        num= num >> 1;
    }
    return count;
}
console.log(countSetBits(13));