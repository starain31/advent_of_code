import parse_input from './parse_input.js';

const DIRECTIONS = [
    [+0, +1], // right
    [+1, +1], // down right
    [+1, +0], // down
    [+1, -1], // down left
    [+0, -1], // left
    [-1, -1], // up left
    [-1, +0], // up
    [-1, +1], // up right
]

function solution(input) {
    return input
        .flatMap((line, row) => extract_part({ line, row }))
        .filter((part) => is_adjacent_to_a_symbol({ part, input }))
        .reduce((acc, part) => acc + Number(part.number), 0);
}

function is_adjacent_to_a_symbol({ part, input }) {
    const { number, row, col: number_col_start  } = part;

    const number_col_end = number_col_start + number.length;

    for (let col = number_col_start; col < number_col_end; col++) {
        for (const direction of DIRECTIONS) {
            if(is_symbol(input[row + direction[0]][col + direction[1]])) {
                return true;
            }
        }
    }

    return false;
}

function is_symbol(char) {
    return char !== '.' && !is_digit(char);
}

function is_digit(char) {
    return '0' <= char && char <= '9';
}



function extract_part({ line, row }) {
    const matches = line.matchAll(/\d+/g);

    return Array.from(matches, (match) => {
        return {
            number: match[0],
            col: match.index,
            row
        }
    });

}

{
    {
        const input_file_path = '/home/starain/Projects/programming_contest/advent_of_code/2023/day-3/input-1.txt';

        const input = parse_input({ input_file_path });
        console.log(solution(input));
    }
}