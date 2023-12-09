import { readFileSync } from 'fs';

export default function parse_input(params) {
    const { input_file_path } = params;

    const input = readFileSync(input_file_path, 'utf8');

    return input
        .split('\n')
        .map(parse_line)
}

function parse_line(line) {
    const [winning_numbers, numbers_in_hand] = line.split(':')[1]
        .split('|')
        .map(parse_numbers);

    return {
        winning_numbers,
        numbers_in_hand
    }
}

function parse_numbers(numbers_srting) {
    return numbers_srting
        .trim()
        .split(/\s+/)
        .map(Number);
}

{{

}}
{  
    {
        const input_file_path = '/home/starain/Projects/programming_contest/advent_of_code/2023/day-4/test-input.txt';

        const input = parse_input({ input_file_path });
    }
}