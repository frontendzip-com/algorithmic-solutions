function printSquare(size) {
    const line = "*  ".repeat(size); // Create a single line of stars

    for (let i = 0; i < size; i++) {
        console.log(line);
    }
}

// Square pattern size variable
let patternSize = 5;

// Calling function for pattern printing
printSquare(patternSize);
