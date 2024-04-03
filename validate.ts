import { importsRegex } from './imports_regex.ts'
import { exportsRegex } from './mod.ts'

export function isValidImport(input: string) {
  return importsRegex.test(input + '\n')
}

export function isValidExport(input: string) {
  return exportsRegex.test(input + '\n')
}
