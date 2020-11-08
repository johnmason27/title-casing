function toTitleCase(input) {
    let inputLower = input.toLowerCase();
    let firstChar = inputLower.substr(0, 1);
    let removedString = inputLower.substr(1);
    const output = firstChar.toUpperCase() + removedString;
    return output;
}

export { toTitleCase };