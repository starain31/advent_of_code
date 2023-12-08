import parse_input from './parse_input.js';
import { extract_parts } from './util.js';

export default function solution(input) {
    const parts = extract_parts(input);

    let sum_of_all_of_the_gear_ratios = 0;

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            sum_of_all_of_the_gear_ratios
                += gear_ratio_if_gear_other_wise_zero({ input, row, col, parts });
        }
    }

    return sum_of_all_of_the_gear_ratios;
}

function gear_ratio_if_gear_other_wise_zero({ input, row, col, parts }) {
    const element = input[row][col];

    if (element === '*' && has_two_adjacent_gears({ row, col, parts })) {
        const adjacent_parts = parts.filter(part => is_adjacent({ part, row, col }));

        if (adjacent_parts.length === 2) {
            const ratio = Number(adjacent_parts[0].number) * Number(adjacent_parts[1].number);
            return ratio;
        }
    }
    return 0;
}

function is_adjacent({ part, row, col }) {
    return ((row - 1) <= part.row && part.row <= (row + 1))
        && ((part.col_start - 1) <= col && col <= (part.col_end + 1))

}

{
    {
        const input_file_path = '/home/starain/Projects/programming_contest/advent_of_code/2023/day-3/input-2.txt';

        const input = parse_input({ input_file_path });
        console.log(solution(input));
    }
}