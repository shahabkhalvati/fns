import common from './common'
const R = require('ramda')

describe('common.evaluateIfNotNil', function () {
  test('evaluates when it should', function () {
    const providedValue = 'some_value'
    const defaultValue = 'default_value'

    const conditionalExecutor =
      common.evaluateIfNot(R.isNil)(R.identity)(defaultValue)

    expect(conditionalExecutor(providedValue)).toBe(providedValue)
  })
  test('ignores when provided value is null', function () {
    const providedValue = null
    const defaultValue = 'default_value'

    const conditionalExecutor =
      common.evaluateIfNot(R.isNil)(R.identity)(defaultValue)

    expect(conditionalExecutor(providedValue)).toBe(defaultValue)
  })
  test('ignores when provided value is undefined', function () {
    const providedValue = void 0
    const defaultValue = 'default_value'

    const conditionalExecutor =
      common.evaluateIfNot(R.isNil)(R.identity)(defaultValue)

    expect(conditionalExecutor(providedValue)).toBe(defaultValue)
  })
})

describe('random', function () {
  test('randomIntSmallerThan', function () {
    R.times(() => {
      const cap = common.random() * 1000
      const generatedNumber = common.randomIntSmallerThan(cap)
      expect(generatedNumber).toBeLessThanOrEqual(cap)
    }, 100)
  })
  test('randomIntLargerThan', function () {
    R.times(() => {
      const cap = common.random() * 1000
      const generatedNumber = common.randomIntLargerThan(cap)
      expect(generatedNumber).toBeGreaterThanOrEqual(cap)
    }, 100)
  })
  test('randomIntInRange', function () {
    R.times(() => {
      const op1 = common.randomInt()
      const op2 = common.randomInt()
      const lowerCap = Math.floor(R.min(op1, op2))
      const upperCap = Math.ceil(R.max(op1, op2))
      R.times(() => {
        const generatedNumber = common.randomIntInRange(lowerCap, upperCap)
        expect(generatedNumber).toBeGreaterThanOrEqual(lowerCap)
        expect(generatedNumber).toBeLessThanOrEqual(upperCap)
      }, 50)
    }, 100)
  })
})
