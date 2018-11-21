function mutation(arr) {
    
    let original = arr[0].toLowerCase() ;
    let test = arr[1].toLowerCase() ;

    for (let i = 0; i < test.length; i++) {
        if (original.indexOf(test[i]) < 0) {
            return false;
        }
    }    
    return true;

    
}
  

console.log(mutation(["hello", "hey"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));