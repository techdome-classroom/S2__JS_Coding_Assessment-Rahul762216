function isValid(s) {
    
    const stack = [];
    
    
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

     
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

         
        if (char in bracketMap) {
            
            const topElement = stack.length === 0 ? '#' : stack.pop();

           
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
