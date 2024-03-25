// sum.test.js
import { expect, test } from 'vitest'
import formatDate from '../helpers/formatDate'


test('test format date', () => {
  expect(formatDate(new Date())).toBe("2024-03-25")
})