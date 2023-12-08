import { readFileSync } from 'fs';

export default function parse_input(params) {
    const { input_file_path } = params;

    const input = readFileSync(input_file_path, 'utf8');

    return input
        .split('\n')
        .map(line => line.trim())
        .map(parse_line);
}


function parse_line(line) {
    const [game_number_string, game_string] = line.split(':');

    const game_number = Number(game_number_string.match(/\d+/)[0]);

    const rounds = game_string
        .split(';')
        .map(parse_round);

    return {game_number, rounds};
}

function parse_round(round_string) {
    return Object.fromEntries(round_string
        .trim()
        .split(',')
        .map(parse_throw));

}

function parse_throw(throw_string) {
    const [count, colour] = throw_string.trim().split(' ');
    return [colour.trim(), Number(count)];
}