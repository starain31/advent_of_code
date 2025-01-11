import input_parser

def sollution(first_ids, second_ids):
    total_distence = 0

    for first_id, second_id in zip(first_ids, second_ids):
        total_distence += abs(first_id - second_id)

    return total_distence


if __name__ == "__main__":
    first_ids, second_ids = input_parser.parse_input(
        "/home/sakib/projects/advent_of_code/2024/day-01/input/input-01.txt"
    )

    print(sollution(first_ids, second_ids))