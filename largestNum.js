function largestOfFour(arr) {
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i][0]
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] > temp) {
                temp = arr[i][j]
            }
        } newArr.push(temp);
    } console.log(newArr);
  }
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
