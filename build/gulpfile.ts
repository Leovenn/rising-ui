import { series, parallel } from 'gulp'

import { buildComponents, buildStyle, copyPkgAndMd, removeDist, unpackRising } from '.'

export default series(
  () => removeDist(),
  () => buildComponents(),
  parallel(
    () => unpackRising(),
    () => copyPkgAndMd(),
    () => buildStyle()
  )
)
