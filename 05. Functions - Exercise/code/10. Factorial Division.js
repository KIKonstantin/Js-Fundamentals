function factorielDivision(firstNumber, secondNumber){
    function factorielCalculator(number){
        let result = 1;
        while(number != 1){
            result *= number;
            number--;
        }
        return result;
    }
    let firstNumberFactoriel = factorielCalculator(firstNumber);
    let secondNumberFactoriel = factorielCalculator(secondNumber);
    console.log(secondNumberFactoriel);
    console.log((firstNumberFactoriel / secondNumberFactoriel).toFixed(2));
}
factorielDivision(5, 2)