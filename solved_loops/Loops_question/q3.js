function SumUntillSingleDigit (num){
     for ( ; num >= 10; ){ //outer loop
        let sum=0;
        for( ;num >0; ){ //inner loop
            sum += num%10;
            num=(num/10);
            num = Math.floor(num);
        }
       num=sum;
     }
     return num;
}
console.log(SumUntillSingleDigit(123));