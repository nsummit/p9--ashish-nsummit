const hasDuplicate = arr => new Set(arr).size !== arr.length

hasDuplicate([3,3,4,5,1,0,-1,0])    

module.exports = hasDuplicate