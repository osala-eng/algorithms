const binarygap = require('../binarygap/binarygap.js')

const test1 = () => {
    expect(binarygap.solution(9)).toBe(2)
}
const test2 = () => {
    expect(binarygap.solution(529)).toBe(4)
}

test('The binary gap of 9 to be 2', test1)
test('The binary gap of 529 should be 4', test2)