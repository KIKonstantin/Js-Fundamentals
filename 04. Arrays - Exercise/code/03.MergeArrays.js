function mergeArrays(arrayOne, arrayTwo){
    let myArr = [];
    for(let i = 0; i < arrayOne.length; i++){
        if(i % 2 === 0){
            myArr.push(Number(arrayOne[i]) + Number(arrayTwo[i]));
        }else{
            myArr.push(`${arrayOne[i]}${arrayTwo[i]}`);
        }
    }
    console.log(myArr.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)