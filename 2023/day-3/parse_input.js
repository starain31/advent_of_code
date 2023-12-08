import { readFileSync } from 'fs';

export default function parse_input(params) {
    const { input_file_path } = params;

    const input = readFileSync(input_file_path, 'utf8');

    return pad_input(input)
        .split('\n')
        .map(pad)
}

function pad_input(input) {
    const pad_string = '.'.repeat(200);

    return `${pad_string}\n${input}\n${pad_string}`;
}

function pad(line) {
    return '.' + line.trim() + '.'
}


{
    {
        const input_file_path = '/home/starain/Projects/programming_contest/advent_of_code/2023/day-3/test-input.txt';

        const input = parse_input({ input_file_path });
        input
    }
}