function points({ winning_numbers, numbers_in_hand }) {
    const winning_numbers_in_hand = numbers_in_hand
        .filter(number => winning_numbers.includes(number));

    const points = calculate_points(winning_numbers_in_hand);

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