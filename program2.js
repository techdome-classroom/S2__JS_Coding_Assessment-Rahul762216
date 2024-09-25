function romanToInt(s) {
    // Map of Roman numerals to their corresponding integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0; // To hold the resulting integer value
    let prevValue = 0; // To track the previous numeral value

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanMap[s[i]]; // Get the integer value of the current Roman numeral
        
        // If the previous numeral is smaller, subtract its value twice (because it was added once before)
        if (currentValue > prevValue) {
            total += currentValue - 2 * prevValue;
        } else {
            total += currentValue; // Otherwise, just add the current value
        }

        // Update the previous value to the current one
        prevValue = currentValue;
    }

    return total;
}

// Example 1
console.log(romanToInt("III"));  
console.log(romanToInt("LVIII"));  
console.log(romanToInt("MCMXCIV")); // Output: 1994
