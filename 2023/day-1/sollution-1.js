const fs = require('fs');
const lines = fs.readFileSync('2023/day-1/input-2.txt', 'utf8');

try {
    const sum = lines
        .split('\n')
        .map(line =>
            calibration_value(line.trim())
        )
        .reduce((a, b) => a + b, 0);

    console.log(sum);
} catch (error) {
    console.log(error)
}

function calibration_value(s) {
    const value = Number(first_digit(s)*10 + last_digit(s));
    return value;
}

function first_digit(s) {
    for (let index = 0; index < s.length; index++) {
        const digit = digit_value(s, index);
        
        if (digit) {
            return digit;
        }
    }
}

function last_digit(s) {
    for (let index = s.length - 1; index >= 0; index--) {
        const digit = digit_value(s, index);

        if (digit) {
            return digit;
        }
    }
}

function digit_value(string, position) {
    const digits = [
        "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
        '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];

    return ((digits.findIndex(digit => string.startsWith(digit, position))) % 9) + 1;
}
