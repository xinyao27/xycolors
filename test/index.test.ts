/* eslint-disable no-console */
import { exec } from 'node:child_process'
import { env } from 'node:process'
import { promisify } from 'node:util'
import { describe, expect, it } from 'bun:test'
import * as c from '../src/index'
import { theme } from '../src/theme'
import { hexToRgb } from '../src/utils'

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
const testHex = (hex: string) => {
  const [r, g, b] = hexToRgb(hex)
  return testRgb(r, g, b)
}

describe('colors', () => {
  it(`reset`, () => {
    const received = c.reset('foo')
    console.log(received)
    const expected = testColor(theme.reset[0], theme.reset[1])
    expect(received).toEqual(expected)
  })

  it(`bold`, () => {
    const received = c.bold('foo')
    console.log(received)
    const expected = testColor(theme.bold[0], theme.bold[1])
    expect(received).toEqual(expected)
  })

  it(`dim`, () => {
    const received = c.dim('foo')
    console.log(received)
    const expected = testColor(theme.dim[0], theme.dim[1])
    expect(received).toEqual(expected)
  })

  it(`italic`, () => {
    const received = c.italic('foo')
    console.log(received)
    const expected = testColor(theme.italic[0], theme.italic[1])
    expect(received).toEqual(expected)
  })

  it(`underline`, () => {
    const received = c.underline('foo')
    console.log(received)
    const expected = testColor(theme.underline[0], theme.underline[1])
    expect(received).toEqual(expected)
  })

  it(`overline`, () => {
    const received = c.overline('foo')
    console.log(received)
    const expected = testColor(theme.overline[0], theme.overline[1])
    expect(received).toEqual(expected)
  })

  it(`inverse`, () => {
    const received = c.inverse('foo')
    console.log(received)
    const expected = testColor(theme.inverse[0], theme.inverse[1])
    expect(received).toEqual(expected)
  })

  it(`hidden`, () => {
    const received = c.hidden('foo')
    console.log(received)
    const expected = testColor(theme.hidden[0], theme.hidden[1])
    expect(received).toEqual(expected)
  })

  it(`strikethrough`, () => {
    const received = c.strikethrough('foo')
    console.log(received)
    const expected = testColor(theme.strikethrough[0], theme.strikethrough[1])
    expect(received).toEqual(expected)
  })

  it(`black`, () => {
    const received = c.black('foo')
    console.log(received)
    const expected = testColor(theme.black[0], theme.black[1])
    expect(received).toEqual(expected)
  })

  it(`red`, () => {
    const received = c.red('foo')
    console.log(received)
    const expected = testColor(theme.red[0], theme.red[1])
    expect(received).toEqual(expected)
  })

  it(`green`, () => {
    const received = c.green('foo')
    console.log(received)
    const expected = testColor(theme.green[0], theme.green[1])
    expect(received).toEqual(expected)
  })

  it(`yellow`, () => {
    const received = c.yellow('foo')
    console.log(received)
    const expected = testColor(theme.yellow[0], theme.yellow[1])
    expect(received).toEqual(expected)
  })

  it(`blue`, () => {
    const received = c.blue('foo')
    console.log(received)
    const expected = testColor(theme.blue[0], theme.blue[1])
    expect(received).toEqual(expected)
  })

  it(`magenta`, () => {
    const received = c.magenta('foo')
    console.log(received)
    const expected = testColor(theme.magenta[0], theme.magenta[1])
    expect(received).toEqual(expected)
  })

  it(`cyan`, () => {
    const received = c.cyan('foo')
    console.log(received)
    const expected = testColor(theme.cyan[0], theme.cyan[1])
    expect(received).toEqual(expected)
  })

  it(`white`, () => {
    const received = c.white('foo')
    console.log(received)
    const expected = testColor(theme.white[0], theme.white[1])
    expect(received).toEqual(expected)
  })

  it(`gray`, () => {
    const received = c.gray('foo')
    console.log(received)
    const expected = testColor(theme.gray[0], theme.gray[1])
    expect(received).toEqual(expected)
  })

  it(`bgBlack`, () => {
    const received = c.bgBlack('foo')
    console.log(received)
    const expected = testColor(theme.bgBlack[0], theme.bgBlack[1])
    expect(received).toEqual(expected)
  })

  it(`bgRed`, () => {
    const received = c.bgRed('foo')
    console.log(received)
    const expected = testColor(theme.bgRed[0], theme.bgRed[1])
    expect(received).toEqual(expected)
  })

  it(`bgGreen`, () => {
    const received = c.bgGreen('foo')
    console.log(received)
    const expected = testColor(theme.bgGreen[0], theme.bgGreen[1])
    expect(received).toEqual(expected)
  })

  it(`bgYellow`, () => {
    const received = c.bgYellow('foo')
    console.log(received)
    const expected = testColor(theme.bgYellow[0], theme.bgYellow[1])
    expect(received).toEqual(expected)
  })

  it(`bgBlue`, () => {
    const received = c.bgBlue('foo')
    console.log(received)
    const expected = testColor(theme.bgBlue[0], theme.bgBlue[1])
    expect(received).toEqual(expected)
  })

  it(`bgMagenta`, () => {
    const received = c.bgMagenta('foo')
    console.log(received)
    const expected = testColor(theme.bgMagenta[0], theme.bgMagenta[1])
    expect(received).toEqual(expected)
  })

  it(`bgCyan`, () => {
    const received = c.bgCyan('foo')
    console.log(received)
    const expected = testColor(theme.bgCyan[0], theme.bgCyan[1])
    expect(received).toEqual(expected)
  })

  it(`bgWhite`, () => {
    const received = c.bgWhite('foo')
    console.log(received)
    const expected = testColor(theme.bgWhite[0], theme.bgWhite[1])
    expect(received).toEqual(expected)
  })

  it(`bgGray`, () => {
    const received = c.bgGray('foo')
    console.log(received)
    const expected = testColor(theme.bgGray[0], theme.bgGray[1])
    expect(received).toEqual(expected)
  })

  it(`redBright`, () => {
    const received = c.redBright('foo')
    console.log(received)
    const expected = testColor(theme.redBright[0], theme.redBright[1])
    expect(received).toEqual(expected)
  })

  it(`greenBright`, () => {
    const received = c.greenBright('foo')
    console.log(received)
    const expected = testColor(theme.greenBright[0], theme.greenBright[1])
    expect(received).toEqual(expected)
  })

  it(`yellowBright`, () => {
    const received = c.yellowBright('foo')
    console.log(received)
    const expected = testColor(theme.yellowBright[0], theme.yellowBright[1])
    expect(received).toEqual(expected)
  })

  it(`blueBright`, () => {
    const received = c.blueBright('foo')
    console.log(received)
    const expected = testColor(theme.blueBright[0], theme.blueBright[1])
    expect(received).toEqual(expected)
  })

  it(`magentaBright`, () => {
    const received = c.magentaBright('foo')
    console.log(received)
    const expected = testColor(theme.magentaBright[0], theme.magentaBright[1])
    expect(received).toEqual(expected)
  })

  it(`cyanBright`, () => {
    const received = c.cyanBright('foo')
    console.log(received)
    const expected = testColor(theme.cyanBright[0], theme.cyanBright[1])
    expect(received).toEqual(expected)
  })

  it(`whiteBright`, () => {
    const received = c.whiteBright('foo')
    console.log(received)
    const expected = testColor(theme.whiteBright[0], theme.whiteBright[1])
    expect(received).toEqual(expected)
  })

  it(`bgRedBright`, () => {
    const received = c.bgRedBright('foo')
    console.log(received)
    const expected = testColor(theme.bgRedBright[0], theme.bgRedBright[1])
    expect(received).toEqual(expected)
  })

  it(`bgGreenBright`, () => {
    const received = c.bgGreenBright('foo')
    console.log(received)
    const expected = testColor(theme.bgGreenBright[0], theme.bgGreenBright[1])
    expect(received).toEqual(expected)
  })

  it(`bgYellowBright`, () => {
    const received = c.bgYellowBright('foo')
    console.log(received)
    const expected = testColor(theme.bgYellowBright[0], theme.bgYellowBright[1])
    expect(received).toEqual(expected)
  })

  it(`bgBlueBright`, () => {
    const received = c.bgBlueBright('foo')
    console.log(received)
    const expected = testColor(theme.bgBlueBright[0], theme.bgBlueBright[1])
    expect(received).toEqual(expected)
  })

  it(`bgMagentaBright`, () => {
    const received = c.bgMagentaBright('foo')
    console.log(received)
    const expected = testColor(theme.bgMagentaBright[0], theme.bgMagentaBright[1])
    expect(received).toEqual(expected)
  })

  it(`bgCyanBright`, () => {
    const received = c.bgCyanBright('foo')
    console.log(received)
    const expected = testColor(theme.bgCyanBright[0], theme.bgCyanBright[1])
    expect(received).toEqual(expected)
  })

  it(`bgWhiteBright`, () => {
    const received = c.bgWhiteBright('foo')
    console.log(received)
    const expected = testColor(theme.bgWhiteBright[0], theme.bgWhiteBright[1])
    expect(received).toEqual(expected)
  })

  it(`blackStylize`, () => {
    const received = c.blackStylize('foo')
    console.log(received)
    const expected = testHex(theme.blackStylize[0])
    expect(received).toEqual(expected)
  })

  it(`blackSecondaryStylize`, () => {
    const received = c.blackSecondaryStylize('foo')
    console.log(received)
    const expected = testHex(theme.blackStylize[1])
    expect(received).toEqual(expected)
  })

  it(`redStylize`, () => {
    const received = c.redStylize('foo')
    console.log(received)
    const expected = testHex(theme.redStylize[0])
    expect(received).toEqual(expected)
  })

  it(`redSecondaryStylize`, () => {
    const received = c.redSecondaryStylize('foo')
    console.log(received)
    const expected = testHex(theme.redStylize[1])
    expect(received).toEqual(expected)
  })

  it(`greenStylize`, () => {
    const received = c.greenStylize('foo')
    console.log(received)
    const expected = testHex(theme.greenStylize[0])
    expect(received).toEqual(expected)
  })

  it(`greenSecondaryStylize`, () => {
    const received = c.greenSecondaryStylize('foo')
    console.log(received)
    const expected = testHex(theme.greenStylize[1])
    expect(received).toEqual(expected)
  })

  it(`yellowStylize`, () => {
    const received = c.yellowStylize('foo')
    console.log(received)
    const expected = testHex(theme.yellowStylize[0])
    expect(received).toEqual(expected)
  })

  it(`yellowSecondaryStylize`, () => {
    const received = c.yellowSecondaryStylize('foo')
    console.log(received)
    const expected = testHex(theme.yellowStylize[1])
    expect(received).toEqual(expected)
  })

  it(`blueStylize`, () => {
    const received = c.blueStylize('foo')
    console.log(received)
    const expected = testHex(theme.blueStylize[0])
    expect(received).toEqual(expected)
  })

  it(`blueSecondaryStylize`, () => {
    const received = c.blueSecondaryStylize('foo')
    console.log(received)
    const expected = testHex(theme.blueStylize[1])
    expect(received).toEqual(expected)
  })

  it(`magentaStylize`, () => {
    const received = c.magentaStylize('foo')
    console.log(received)
    const expected = testHex(theme.magentaStylize[0])
    expect(received).toEqual(expected)
  })

  it(`magentaSecondaryStylize`, () => {
    const received = c.magentaSecondaryStylize('foo')
    console.log(received)
    const expected = testHex(theme.magentaStylize[1])
    expect(received).toEqual(expected)
  })

  it(`cyanStylize`, () => {
    const received = c.cyanStylize('foo')
    console.log(received)
    const expected = testHex(theme.cyanStylize[0])
    expect(received).toEqual(expected)
  })

  it(`cyanSecondaryStylize`, () => {
    const received = c.cyanSecondaryStylize('foo')
    console.log(received)
    const expected = testHex(theme.cyanStylize[1])
    expect(received).toEqual(expected)
  })

  it(`whiteStylize`, () => {
    const received = c.whiteStylize('foo')
    console.log(received)
    const expected = testHex(theme.whiteStylize[0])
    expect(received).toEqual(expected)
  })

  it(`whiteSecondaryStylize`, () => {
    const received = c.whiteSecondaryStylize('foo')
    console.log(received)
    const expected = testHex(theme.whiteStylize[1])
    expect(received).toEqual(expected)
  })

  it(`grayStylize`, () => {
    const received = c.grayStylize('foo')
    console.log(received)
    const expected = testHex(theme.grayStylize[0])
    expect(received).toEqual(expected)
  })

  it(`graySecondaryStylize`, () => {
    const received = c.graySecondaryStylize('foo')
    console.log(received)
    const expected = testHex(theme.grayStylize[1])
    expect(received).toEqual(expected)
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
