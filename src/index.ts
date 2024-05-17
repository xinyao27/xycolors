import { WriteStream } from 'node:tty'
import { hexToRgb } from './utils'
import { theme } from './theme'

// TODO: Use a better method when it's added to Node.js (https://github.com/nodejs/node/pull/40240)
const hasColors = WriteStream.prototype.hasColors()
const closeCode = 39
const bgCloseCode = 49

/**
 * By https://github.com/sindresorhus/yoctocolors
 * @param open
 * @param close
 * @returns
 */
const format = (open: number | string, close: number | string) => {
  if (!hasColors) {
    return (input: string) => input
  }

  const openCode = `\u001B[${open}m`
  const closeCode = `\u001B[${close}m`

  return (input: string) => {
    const string = `${input}`
    let index = string.indexOf(closeCode)

    if (index === -1) {
      // Note: Intentionally not using string interpolation for performance reasons.
      return openCode + string + closeCode
    }

    // Handle nested colors.

    // We could have done this, but it's too slow (as of Node.js 22).
    // return openCode + string.replaceAll(closeCode, openCode) + closeCode;

    let result = openCode
    let lastIndex = 0

    while (index !== -1) {
      result += string.slice(lastIndex, index) + openCode
      lastIndex = index + closeCode.length
      index = string.indexOf(closeCode, lastIndex)
    }

    result += string.slice(lastIndex) + closeCode

    return result
  }
}
export const rgb = (r: number | string, g: number | string, b: number | string) =>
  format(`38;2;${r};${g};${b}`, closeCode)
export const bgRgb = (r: number | string, g: number | string, b: number | string) =>
  format(`48;2;${r};${g};${b}`, bgCloseCode)
const createHexFn =
  (fn: (r: number | string, g: number | string, b: number | string) => (input: string) => string) => (hex: string) => {
    const [r, g, b] = hexToRgb(hex)
    return fn(r, g, b)
  }
export const hex = createHexFn(rgb)
export const bgHex = createHexFn(bgRgb)

export const reset = format(...theme.reset)
export const bold = format(...theme.bold)
export const dim = format(...theme.dim)
export const italic = format(...theme.italic)
export const underline = format(...theme.underline)
export const overline = format(...theme.overline)
export const inverse = format(...theme.inverse)
export const hidden = format(...theme.hidden)
export const strikethrough = format(...theme.strikethrough)

export const black = format(...theme.black)
export const red = format(...theme.red)
export const green = format(...theme.green)
export const yellow = format(...theme.yellow)
export const blue = format(...theme.blue)
export const magenta = format(...theme.magenta)
export const cyan = format(...theme.cyan)
export const white = format(...theme.white)
export const gray = format(...theme.gray)

export const bgBlack = format(...theme.bgBlack)
export const bgRed = format(...theme.bgRed)
export const bgGreen = format(...theme.bgGreen)
export const bgYellow = format(...theme.bgYellow)
export const bgBlue = format(...theme.bgBlue)
export const bgMagenta = format(...theme.bgMagenta)
export const bgCyan = format(...theme.bgCyan)
export const bgWhite = format(...theme.bgWhite)
export const bgGray = format(...theme.bgGray)

export const redBright = format(...theme.redBright)
export const greenBright = format(...theme.greenBright)
export const yellowBright = format(...theme.yellowBright)
export const blueBright = format(...theme.blueBright)
export const magentaBright = format(...theme.magentaBright)
export const cyanBright = format(...theme.cyanBright)
export const whiteBright = format(...theme.whiteBright)

export const bgRedBright = format(...theme.bgRedBright)
export const bgGreenBright = format(...theme.bgGreenBright)
export const bgYellowBright = format(...theme.bgYellowBright)
export const bgBlueBright = format(...theme.bgBlueBright)
export const bgMagentaBright = format(...theme.bgMagentaBright)
export const bgCyanBright = format(...theme.bgCyanBright)
export const bgWhiteBright = format(...theme.bgWhiteBright)
