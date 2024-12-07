import re


def parse_input(file_path):
    # Open the file in read mode
    first_ids = []
    second_ids = []

    with open(file_path, "r") as file:
        # content = file.read()

        for line in file:
            first_id, second_id = re.split(r"\s+", line.strip())

            first_ids.append(int(first_id))
            second_ids.append(int(second_id))

    first_ids.sort()
    second_ids.sort()
    return first_ids, second_ids


def sollution(first_ids, second_ids):
    total_distence = 0

    for first_id, second_id in zip(first_ids, second_ids):
        total_distence += abs(first_id - second_id)

    return total_distence


if __name__ == "__main__":
    first_ids, second_ids = parse_input(
        "/home/sakib/projects/advent_of_code/2024/day-01/input/input-01.txt"
    )

    print(sollution(first_ids, second_ids))
