export function generateDecimalAndBinaryPair(min: number, max: number): [number, string] {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    const binaryRepresentation = randomNum.toString(2).padStart(8, '0');
    return [randomNum, binaryRepresentation];
}
