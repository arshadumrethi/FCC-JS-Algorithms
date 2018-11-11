function bouncer(arr) {

    //Basic Solution
    newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != false && arr[i] != null && arr[i] != undefined && Number.isNaN(arr[i]) == false) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);

    //Intermediate Solutions
    newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!!arr[i] == true) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);

    newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i]) == true) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);

    

}

//Advanced Solution
let yo = arr.filter(bouncer);     
console.log(yo);
  
bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c", false]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([1, null, NaN, 2, undefined]);