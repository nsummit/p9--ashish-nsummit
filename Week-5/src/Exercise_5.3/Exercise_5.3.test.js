const hasDuplicate = require('./Exercise_5.3')

test('Contains Duplicate - True', () => {
    expect(hasDuplicate([3,3,4,5,1,0,-1,0])).toBe(true)
});

test('Contains Duplicate - False', () => {
    expect(hasDuplicate([3,3,4,5,1,0,-1,0])).toBe(true)
});