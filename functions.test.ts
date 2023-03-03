const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return an array', ()=>{
  
        expect(Array.isArray(shuffleArray([1,2,3]))).toBe(true)
    })

    test('return an array of the same length', ()=>{
        let array = [1,2,3]
        let test = shuffleArray(array)
        expect(array.length).toBe(test.length)
    })

    test('return an array with the same items', ()=>{
        let array = [1,2,3]
        let test = shuffleArray(array)

        expect(test.sort()).toEqual(array)

    })

    test('returns a shuffled array', ()=>{
        let array = [1,2,3]
        let test = shuffleArray(array)

        expect(test).toEqual(expect.arrayContaining(array))
    })
})