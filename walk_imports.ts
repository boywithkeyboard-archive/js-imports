import {
  denoTypesCommentRegex,
  exportsRegex,
  importsRegex,
  tripleSlashCommentRegex,
} from './mod.ts'

type Result = {
  input: string
  identifier: string
  regexpArray: RegExpExecArray
  type: 'import' | 'export' | 'denoTypesComment' | 'tripleSlashComment'
}

export function* walkImports(fileContent: string): Generator<Result> {
  for (const match of fileContent.matchAll(importsRegex)) {
    if (match.groups) {
      const result: Result = {
        input: match.input,
        identifier: match.groups.identifier,
        regexpArray: match,
        type: 'import',
      }

      yield result
    }
  }

  for (const match of fileContent.matchAll(exportsRegex)) {
    if (match.groups) {
      const result: Result = {
        input: match.input,
        identifier: match.groups.identifier,
        regexpArray: match,
        type: 'export',
      }

      yield result
    }
  }

  for (const match of fileContent.matchAll(denoTypesCommentRegex)) {
    if (match.groups) {
      const result: Result = {
        input: match.input,
        identifier: match.groups.identifier,
        regexpArray: match,
        type: 'denoTypesComment',
      }

      yield result
    }
  }

  for (const match of fileContent.matchAll(tripleSlashCommentRegex)) {
    if (match.groups) {
      const result: Result = {
        input: match.input,
        identifier: match.groups.identifier,
        regexpArray: match,
        type: 'tripleSlashComment',
      }

      yield result
    }
  }
}
