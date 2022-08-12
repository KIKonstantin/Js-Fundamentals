function PrintandSum(start, end) {
    let sum = 0;
    let nums = "";
    for (let i = start; i <= end; i++){
        nums += i + " ";
        sum += i;
    }
    console.log(nums);
    console.log(`Sum: ${sum}`);
}
PrintandSum(5, 10)
PrintandSum(0, 26)
PrintandSum(50, 60)
