import { exportsRegex } from './exports_regex.ts'
import {
  denoTypesCommentRegex,
  importsRegex,
  tripleSlashCommentRegex,
} from './mod.ts'

export function rewriteIdentifiers(
  fileContent: string,
  replacer: (
    identifier: string,
    type: 'import' | 'export' | 'denoTypesComment' | 'tripleSlashComment',
  ) => string,
) {
  fileContent = fileContent.replace(importsRegex, (...arr) => {
    const importStatement = arr[0]
    let identifier = arr[arr.length - 1].identifier

    identifier = replacer(identifier, 'import')

    return importStatement.replace(arr[arr.length - 1].identifier, identifier)
  })

  fileContent = fileContent.replace(exportsRegex, (...arr) => {
    const importStatement = arr[0]
    let identifier = arr[arr.length - 1].identifier

    identifier = replacer(identifier, 'export')

    return importStatement.replace(arr[arr.length - 1].identifier, identifier)
  })

  fileContent = fileContent.replace(denoTypesCommentRegex, (...arr) => {
    const importStatement = arr[0]
    let identifier = arr[arr.length - 1].identifier

    identifier = replacer(identifier, 'denoTypesComment')

    return importStatement.replace(arr[arr.length - 1].identifier, identifier)
  })

  fileContent = fileContent.replace(tripleSlashCommentRegex, (...arr) => {
    const importStatement = arr[0]
    let identifier = arr[arr.length - 1].identifier

    identifier = replacer(identifier, 'tripleSlashComment')

    return importStatement.replace(arr[arr.length - 1].identifier, identifier)
  })

  return fileContent
}
