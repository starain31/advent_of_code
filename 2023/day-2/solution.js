export default function solution(input) {
    return input
        .filter(is_possible_round)
        .reduce(sum_game_number, 0);
}

function sum_game_number(sum, { game_number }) {
    return sum + game_number;
}

function is_possible_round({ rounds }) {
    return rounds.every(is_possible_draw);
}

function is_possible_draw(draws) {
    const { red, green, blue } = draws;

    return (red == undefined || red <= 12)
        && (green == undefined || green <= 13)
        && (blue == undefined || blue <= 14)

}