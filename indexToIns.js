function getIndexToIns(arr, num) {
    arr.sort(function(a, b){
        return a - b;
    });
        
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] > num) {
            return i;
        }
    }
    
    if (num > arr[arr.length - 1]) {
        arr.push(num);
        return arr.length - 1;
    }
}

//Better solution - Intermediate
// function getIndexToIns(arr, num) {
//     arr.push(num);
//     arr.sort(function(a, b){return a-b});
//     return arr.indexOf(num);
// }

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 5, 10], 15));