function mapAlg(){
    let numsAsStrings = ['5', '3','14', '-2', '8'];
    let r1 = numsAsStrings.map(x => Number(x));
    let r2 = mapToNumber(numsAsStrings);
    console.log(r1.join(' ') , r2.join(' '));
    function mapToNumber(arr){
        let result = [];
        for (let element of arr) {
            result.push(Number(element));
        }
        return result;
    }
}
mapAlg();

let myArr = ['one','two','three', 'four'];
let longWords = myArr.filter(x => x.length > 3)
console.log(longWords);// ['three','four']