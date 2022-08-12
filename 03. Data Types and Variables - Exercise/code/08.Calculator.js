function calculator(firstNum, operator, secondNum){
    switch(operator){
        case '+':console.log((firstNum + secondNum).toFixed(2)); break;
        case '-':console.log((firstNum - secondNum).toFixed(2)); break;
        case '*':console.log((firstNum * secondNum).toFixed(2)); break;
        case '/':console.log((firstNum / secondNum).toFixed(2)); break;
    }
}
calculator(5, "+", 10)
calculator(25.5, "-", 3)