function sortNUMS(num1, num2, num3){
    let maxnumber = Number.MAX_SAFE_INTEGER;
    maxnumber = num1;
    if(num1 < num2){
        maxnumber = num2;
        if(num2 < num3){
            maxnumber = num3;
        }
    }else if(num1 < num3){
        maxnumber = num3;
    }
    
    if (num1 === maxnumber){
        if(num2>num3){
            console.log(num1);
            console.log(num2);
            console.log(num3);
        }else{
            console.log(num1);
            console.log(num3);
            console.log(num2);
        }
    }else if(num2 === maxnumber){
        if(num1>num3){
            console.log(num2);
            console.log(num1);
            console.log(num3);
        }else{
            console.log(num2);
            console.log(num3);
            console.log(num1);
        }
    }else if(num3 === maxnumber){
        if(num1>num2){
            console.log(num3);
            console.log(num1);
            console.log(num2);
        }else{
            console.log(num3);
            console.log(num2);
            console.log(num1);
        }
    }
}
sortNUMS(2,1,3)