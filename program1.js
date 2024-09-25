function isValid(s) {
    
    const stack = [];
    
    
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If it is a closing bracket
        if (char in bracketMap) {
            // Pop from stack, if stack is empty use a dummy value '#'
            const topElement = stack.length === 0 ? '#' : stack.pop();

            // If the popped element does not match the corresponding opening bracket, return false
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            // If it is an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // The string is valid if the stack is empty at the end
    return stack.length === 0;
}

// Example 1
console.log(isValid("()")); // Output: true

// Example 2
console.log(isValid("()[]{}")); // Output: true

// Example 3
console.log(isValid("(]")); // Output: false
