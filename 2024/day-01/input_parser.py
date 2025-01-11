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

    return first_ids, second_ids
