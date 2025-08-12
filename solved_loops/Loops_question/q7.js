function gcd(a,b){
    a= Math.abs(a);
    b= Math.abs(b);//to make sure a and b is +ve
    while(b!== 0){
        let temp =b;
        b= a%b;
        a= temp;
    }
    return a;
}
console.log(gcd(48,18));