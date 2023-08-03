// This file is executed from npm script with project root as cwd.
import fs from 'node:fs'

fs.renameSync('dist/ast-to-vue.d.ts', 'dist/index.d.ts')

fs.rmSync('dist/src', { recursive: true })
