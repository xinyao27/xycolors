import { describe, expect, it } from 'bun:test'
import { hexToRgb } from '../src/utils'

describe('convert HEX to RGB', () => {
  it(`hexToRgb('FFAA99')`, () => {
    const received = hexToRgb('FFAA99')
    const expected = [255, 170, 153]
    expect(received).toEqual(expected)
  })

  it(`hexToRgb('#FFAA99')`, () => {
    const received = hexToRgb('#FFAA99')
    const expected = [255, 170, 153]
    expect(received).toEqual(expected)
  })

  it(`hexToRgb('#FA9')`, () => {
    const received = hexToRgb('#FA9')
    const expected = [255, 170, 153]
    expect(received).toEqual(expected)
  })

  it(`hexToRgb('#FF99')`, () => {
    const received = hexToRgb('#FF99')
    const expected = [0, 0, 0]
    expect(received).toEqual(expected)
  })

  it(`hexToRgb('something')`, () => {
    const received = hexToRgb('something')
    const expected = [0, 0, 0]
    expect(received).toEqual(expected)
  })
})
