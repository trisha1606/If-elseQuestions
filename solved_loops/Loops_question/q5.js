function perfectSquare(a,b){
    let count=0;
    for(let i=a; i<=b; i++){
        let squrt= Math.sqrt(i);
        if (squrt=== Math.floor(squrt)){
            count ++;
        }
    }
    return count;
}
console.log(perfectSquare(1,10));