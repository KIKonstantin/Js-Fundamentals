function primeNumberCheck(n) {
    let isPrime = true;
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            isPrime = false;
            break;
        }
    } 
    console.log(isPrime);

}

primeNumberCheck(81);
