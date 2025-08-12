function fibonacciSum(start, end){
    let sum=0;
    let a=0, b=1;
    for( ; a<=end; ){
        if (a >= start){
            sum+=a;
        }
        let next=a+b;
        a=b;
        b=next;
    }
    return sum;
}
console.log(fibonacciSum(10,100));