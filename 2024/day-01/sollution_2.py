import input_parser


def sollution(first_ids, second_ids):
    total_similarity_score = 0

    for first_id in first_ids:
        # total_distence += abs(first_id - second_id)
        similarity_score = 0
        for second_id in second_ids:
            if first_id == second_id:
                similarity_score += first_id
        
        total_similarity_score += similarity_score

    return total_similarity_score


if __name__ == "__main__":
    first_ids, second_ids = input_parser.parse_input(
        "/home/sakib/projects/advent_of_code/2024/day-01/input/input-01.txt"
    )

    print(sollution(first_ids, second_ids))
