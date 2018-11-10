function frankenSplice(arr1, arr2, n) {
    let b = [arr2.slice(0, n), ...arr1, arr2.slice(n, arr2.length)]  
    console.log(b);
    
}
  
frankenSplice([1, 2, 3], [4, 5, 6], 2);
//should return [4, 1, 2, 3, 5, 6]

frankenSplice([1, 2, 3], [4, 5], 1)
//should return [4, 1, 2, 3, 5]

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
//should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]

// FCC Solution

function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
      }
      return localArray;
    
}