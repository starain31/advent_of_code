import parse_input from './parse-input.js';

function solution(input) {
    const number_of_copies = Array.from({ length: 300 }).fill(1);
    let total_cards = 0;

    for (let card_index = 0; card_index < input.length; card_index++) {
        const card = input[card_index];

        const { winning_numbers, numbers_in_hand } = card;

        const winning_numbers_in_hand = numbers_in_hand
            .filter(number => winning_numbers.includes(number));

        for (let i = 1; i <= winning_numbers_in_hand.length; i++) {
            const j = card_index + i;
            number_of_copies[j] = number_of_copies[j]
                + number_of_copies[card_index] * 1;
        }

        total_cards += number_of_copies[card_index];

    }
    return total_cards;

}

{
    {
        const input_file_path = '/home/starain/Projects/programming_contest/advent_of_code/2023/day-4/input-2.txt';
        const input = parse_input({ input_file_path });
        console.log(solution(input));
    }
}