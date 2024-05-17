/* eslint-disable no-console */
import { exec } from 'node:child_process'
import { env } from 'node:process'
import { promisify } from 'node:util'
import { describe, expect, it } from 'bun:test'
import * as c from '../src/index'
import { theme } from '../src/theme'

const pExec = promisify(exec)
const testColor = (startCode: number | string, endCode: number | string) => {
  return `\u001B[${startCode}mfoo\u001B[${endCode}m`
}
const testRgb = (r: number, g: number, b: number) => {
  return `\u001B[38;2;${r};${g};${b}mfoo\u001B[39m`
}
const testBgRgb = (r: number, g: number, b: number) => {
  return `\u001B[48;2;${r};${g};${b}mfoo\u001B[49m`
}

describe('colors', () => {
  it(`theme`, () => {
    Object.entries(theme).forEach(([key, [startCode, endCode]]) => {
      if (key === 'rgb' || key === 'bgRgb' || key === 'hex' || key === 'bgHex') return

      // @ts-expect-error it's fine
      const received = c[key]('foo')
      console.log(`${key}:`, received)
      const expected = testColor(startCode, endCode)
      expect(received).toEqual(expected)
    })
  })

  it(`Nested colors`, () => {
    const received = c.red(`Error: ${c.yellow('Warning')} continues in red`)
    console.log(received)
    expect(received).toEqual('\u001B[31mError: \u001B[33mWarning\u001B[31m continues in red\u001B[39m')
  })

  it(`Is noop when no colors are supported`, async () => {
    const { stdout: received } = await pExec('node test/fixture.js', { env: { ...env, FORCE_COLOR: '0' } })
    console.log(received)
    expect(received).toEqual('foo\n')
  })

  it(`rgb(255, 170, 153)`, () => {
    const received = c.rgb(255, 170, 153)('foo')
    console.log(received)
    const expected = testRgb(255, 170, 153)
    expect(received).toEqual(expected)
  })

  it(`bgRgb(255, 170, 153)`, () => {
    const received = c.bgRgb(255, 170, 153)('foo')
    console.log(received)
    const expected = testBgRgb(255, 170, 153)
    expect(received).toEqual(expected)
  })

  it(`hex('#ffaa99')`, () => {
    const received = c.hex('#ffaa99')('foo')
    console.log(received)
    const expected = testRgb(255, 170, 153)
    expect(received).toEqual(expected)
  })

  it(`bgHex('#ffaa99')`, () => {
    const received = c.bgHex('#ffaa99')('foo')
    console.log(received)
    const expected = testBgRgb(255, 170, 153)
    expect(received).toEqual(expected)
  })
})
