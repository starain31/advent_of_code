function extract_parts(lines) {
    return lines
        .flatMap((line, row) => extract_part({ line, row }));
}

function extract_part({ line, row }) {
    const matches = line.matchAll(/\d+/g);

    return Array.from(matches, (match) => {
        return {
            number: match[0],
            col_start: match.index,
            col_end: match.index + match[0].length - 1,
            row
        }
    });
}

export {
    extract_parts
}