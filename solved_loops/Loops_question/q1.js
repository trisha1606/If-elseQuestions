function primeGenerator(n){
    let prime=[];
    let num=2;
    while (prime.length<n){
        let isprime=true;
        for(let i=2; i<= Math.sqrt(num); i++){
            if(num%i === 0){
              isprime= false;
              break;
            }
        }
        if(isprime){
            prime.push(num);
        }
        num++;
    }
    return prime;
}
console.log(primeGenerator(5));