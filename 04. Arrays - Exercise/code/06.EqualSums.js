function equalSums(arr){
    let leftSum = 0;
    let rightSum = 0; 
    let isEqual = false;
    for (let i = 0; i < arr.length; i++){
        for(let right = i + 1;right < arr. length; right++){
            rightSum += arr[right];
        }
        for(let left = i - 1; left >= 0; left--){
            leftSum += arr[left];
        }
        if(rightSum === leftSum){
            console.log(i);
            isEqual = true;
        }
        rightSum = 0;
        leftSum = 0;
    }
    if (!isEqual){
        console.log("no")
    }
}
equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])