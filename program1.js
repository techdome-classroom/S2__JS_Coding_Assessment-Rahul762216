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
            
            stack.push(char);
        }
    }

    
    return stack.length === 0;
}

 
console.log(isValid("()")); // Output: true

// Example 2
console.log(isValid("()[]{}")); // Output: true

// Example 3
console.log(isValid("(]")); // Output: false
