function findLongestWordLength(str) {
    let a = str.split(" ");
    let store = 0;
    let longest;
    for (var i = 0; i < a.length; i++) {
        if(a[i].length > store) {
            store = a[i].length;
            longest = a[i]
        }
    } console.log(longest.length);
    
}


findLongestWordLength("The quick brown fox jumped over the lazy dog");