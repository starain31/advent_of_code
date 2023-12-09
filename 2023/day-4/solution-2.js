import parse_input from './parse-input.js';

function solution(input) {
    const number_of_copies = [];

    for (let card_index = 0; card_index < input.length; card_index++) {
        const card = input[card_index];

        const { winning_numbers, numbers_in_hand } = card;

        const winning_numbers_in_hand = numbers_in_hand
            .filter(number => winning_numbers.includes(number));
        
        console.log(winning_numbers_in_hand);
        
        for(let i = 0; i < winning_numbers_in_hand.length; i++) {

            const j = card_index + i;
            number_of_copies[j]  = (number_of_copies[j] ?? 0) + 1;
        }
        
        console.log(number_of_copies);
        const points = calculate_points(winning_numbers_in_hand);
    }

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