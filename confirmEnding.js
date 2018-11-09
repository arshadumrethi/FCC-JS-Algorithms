function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    let num = target.length;
    let a = str.split("");
    let b = a.slice(str.length - num);
    let c = b.join("")
    
    if (c == target) {
        console.log(true);
    } else {
        console.log(false);
    }
    
    //Intermediate solution
    // console.log(str.slice(str.length - target.length) === target); 
}
  
confirmEnding("Bastian", "n");
confirmEnding("Open sesame", "same");
confirmEnding("Abstraction", "action");