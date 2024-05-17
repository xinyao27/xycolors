/**
 * By https://github.com/webdiscus/ansis/blob/master/src/ansi-codes.js
 * Convert hex color string to RGB values.
 *
 * A hexadecimal color code can be 3 or 6 digits with an optional "#" prefix.
 *
 * The 3 digits specifies an RGB doublet data as a fully opaque color.
 * For example, "#123" specifies the color that is represented by "#112233".
 *
 * The 6 digits specifies a fully opaque color.
 * For example, "#112233".
 *
 * @param {string} value A string that contains the hexadecimal RGB color representation.
 * @return {[number, number, number]} The red, green, blue values in range [0, 255] .
 */
export const hexToRgb = (value: string) => {
  let [, color] = /([\da-f]{3,6})/i.exec(value) || []
  const len = color ? color.length : 0

  if (len === 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2]
  } else if (len !== 6) {
    return [0, 0, 0]
  }

  const num = Number.parseInt(color, 16)

  return [(num >> 16) & 255, (num >> 8) & 255, num & 255]
}
