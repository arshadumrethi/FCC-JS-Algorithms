function truncateString(str, num) {
    // Clear out that junk in your trunk
    a = str.split("");
    if (str.length > num) {
        a.splice(num, str.length - num);
        console.log(a.join("") + "...");
    }
    
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  truncateString("Peter Piper picked a peck of pickled peppers", 11)