import parse_input from './parse-input.js';

function solution(input) {
    return input
        .map(points)
        .reduce((a, b) => a + b);
}

function points({ winning_numbers, numbers_in_hand }) {
    const my_winning_numbers = numbers_in_hand
        .filter(number => winning_numbers.includes(number));

    const points = calculate_points(my_winning_numbers);

    // console.log(my_winning_numbers)

    // console.log(winning_numbers);
    // console.log(numbers_in_hand);
    // console.log(points);
    return points;
}

function calculate_points(my_winning_numbers) {
    if (my_winning_numbers.length === 0) {
        return 0;
    }
    return Math.pow(2, my_winning_numbers.length - 1);
}

{
    {
        const input_file_path = '/home/starain/Projects/programming_contest/advent_of_code/2023/day-4/test-input.txt';


        const input = parse_input({ input_file_path });
        
        console.log(solution(input));
    }
}

/*
29 62 28 53 94 87 50 67  7 24
62 37 95 70 38  7 28 97 24 67 78 35 94 22 21 50 10 87 33 49 92 53 29 55  2

*/