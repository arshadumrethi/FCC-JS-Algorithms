function titleCase(str) {
    let a = str.toLowerCase().split(" ");
    let b = [];

    for (let i = 0; i < a.length; i++) {
        b.push(a[i][0].toUpperCase() + a[i].slice(1, a[i].length));
        
    }
    
    console.log(b.join(" "));
}
  
titleCase("I'm a little tea pot");

//My solution differed from the solution given by fcc
//Below is the intermediate solution given by fcc
// It maps my variable a to a function that replaces the first character
//using charAt, i find this solution inefficient as a simple push can be used
//along with string concatenation like i have done in my solution above. 

function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
  }
  
  titleCase("I'm a little tea pot");