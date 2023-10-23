(function () {
    // Array of names
    var names = ["John", "Jane", "Jerry", "Jake", "Amy", "Alice"];
  
    // Loop over the names array
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      var firstLetter = name.charAt(0).toLowerCase();
  
      // Check if the first letter is 'j' or not
      if (firstLetter === 'j') {
        // If it starts with 'j', print Goodbye
        console.log("Goodbye " + name);
      } else {
        // If it starts with any other letter, print Hello
        console.log("Hello " + name);
      }
    }
  })();
  