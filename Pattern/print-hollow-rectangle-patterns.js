function printHollowRectangle(rows, cols) {
    let pattern = '';
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
                pattern += '* ';
            } else {
                pattern += '  ';
            }
        }
        pattern += '\n';
    }
    console.log(pattern);
}

// Example usage:
// For a rectangle of 5 rows and 7 columns
printHollowRectangle(5, 7);

// For a square of 5 rows and 5 columns
printHollowRectangle(5, 5);
