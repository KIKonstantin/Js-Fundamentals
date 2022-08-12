function TriangleOfNumbers(n){
    emptySTRING = ""

    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            emptySTRING += i +" ";
        }
        console.log(emptySTRING);
        emptySTRING = "";
    }
}
TriangleOfNumbers(6)