import parse_input from './parse_input.js';

export default function solution(input) {
    return input
        .map(power)
        .reduce((a, b) => a + b, 0);
}

function power({ rounds }) {
    return ["red", "green", "blue"]
        .map(color => min_ball_required({ color, rounds }))
        .reduce((a, b) => a * b, 1);
}

function min_ball_required({ color, rounds }) {
    return Math.max(...rounds.map(round => round[color] || 0));
}

{
    {
        const input = parse_input({ input_file_path: '/home/starain/Projects/programming_contest/advent_of_code/2023/day-2/test-input-1.txt' });
        console.log(solution(input));
    }
}