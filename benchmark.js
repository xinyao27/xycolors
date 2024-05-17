#!/usr/bin/env node
import { Suite } from '@jonahsnider/benchmark'
import ansi from 'ansi-colors'
import chalk from 'chalk'
import cliColor from 'cli-color'
import * as colorette from 'colorette'
import kleur from 'kleur'
import * as kleurColors from 'kleur/colors'
import * as nanocolors from 'nanocolors'
import picocolors from 'picocolors'
import * as xycolors from './dist/index.mjs'

const suite = new Suite('simple', {
  warmup: { trials: 10_000_000 },
  run: { trials: 1_000_000 },
})

// eslint-disable-next-line no-unused-vars
let out

suite
  .addTest('xycolors', () => {
    out = xycolors.red('Add plugin to use time limit')
    out = xycolors.green('Add plugin to use time limit')
    out = xycolors.blue(`Add plugin to ${xycolors.cyan('use')} time limit`)
  })
  .addTest('cli-color', () => {
    out = cliColor.red('Add plugin to use time limit')
    out = cliColor.green('Add plugin to use time limit')
    out = cliColor.blue(`Add plugin to ${cliColor.cyan('use')} time limit`)
  })
  .addTest('ansi-colors', () => {
    out = ansi.red('Add plugin to use time limit')
    out = ansi.green('Add plugin to use time limit')
    out = ansi.blue(`Add plugin to ${ansi.cyan('use')} time limit`)
  })
  .addTest('chalk', () => {
    out = chalk.red('Add plugin to use time limit')
    out = chalk.green('Add plugin to use time limit')
    out = chalk.blue(`Add plugin to ${chalk.cyan('use')} time limit`)
  })
  .addTest('kleur', () => {
    out = kleur.red('Add plugin to use time limit')
    out = kleur.green('Add plugin to use time limit')
    out = kleur.blue(`Add plugin to ${kleur.cyan('use')} time limit`)
  })
  .addTest('kleur/colors', () => {
    out = kleurColors.red('Add plugin to use time limit')
    out = kleurColors.green('Add plugin to use time limit')
    out = kleurColors.blue(`Add plugin to ${kleurColors.cyan('use')} time limit`)
  })
  .addTest('colorette', () => {
    out = colorette.red('Add plugin to use time limit')
    out = colorette.green('Add plugin to use time limit')
    out = colorette.blue(`Add plugin to ${colorette.cyan('use')} time limit`)
  })
  .addTest('nanocolors', () => {
    out = nanocolors.red('Add plugin to use time limit')
    out = nanocolors.green('Add plugin to use time limit')
    out = nanocolors.blue(`Add plugin to ${nanocolors.cyan('use')} time limit`)
  })
  .addTest('picocolors', () => {
    out = picocolors.red('Add plugin to use time limit')
    out = picocolors.green('Add plugin to use time limit')
    out = picocolors.blue(`Add plugin to ${picocolors.cyan('use')} time limit`)
  })

const results = await suite.run()

const table = [...results]
  // Convert median execution time to mean ops/sec
  .map(([library, histogram]) => [library, Math.round(1e9 / histogram.percentile(50))])
  // Sort fastest to slowest
  .sort(([, a], [, b]) => b - a)
  // Convert to object for console.table
  .map(([library, opsPerSec]) => ({
    library,
    'ops/sec': opsPerSec.toLocaleString(),
  }))

// eslint-disable-next-line no-console
console.table(table)
