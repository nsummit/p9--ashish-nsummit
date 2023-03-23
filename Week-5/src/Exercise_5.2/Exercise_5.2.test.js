const { isVowel, vowelCount } = require('./Exercise-5.2')

test('if a is vowel', () => {
    expect(isVowel('a')).toBe(true);
});

test('if b is vowel', () => {
    expect(isVowel('b')).toBe(true);
});