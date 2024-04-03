## js-imports

This library is **not perfect**. It attempts to **capture most common types of
imports and exports**. Some invalid import or export expressions might be seen
as valid and some valid ones might be seen invalid. This library is **not
meant** as a tool **for strict validation** of imports and rather as a naive way
to get all imports in a particular file.

```ts
import {
  denoTypesCommentRegex,
  exportsRegex,
  importsRegex,
  isValidExport,
  isValidImport,
  tripleSlashCommentRegex,
} from 'https://deno.re/boywithkeyboard/js-imports@v0.1.0'
```

### `isValidImport()`

**Valid:**

```ts
import 'bar'
import foo from 'bar'
import * as foo from 'bar'
import { foo } from 'bar'
import { type foo } from 'bar'
import { foo as bar } from 'bar'
import { type foo as bar } from 'bar'
import { default as foo } from 'bar'
import { type default as foo } from 'bar'
import type { foo } from 'bar'
import type { foo as bar } from 'bar'
import type { default as foo } from 'bar'
import foo, * as bar from 'bar'
import foo, { bar } from 'bar'
import { bar, foo } from 'bar'
import { bar as foobar, foo } from 'bar'
```

### `isValidExport()`

**Valid:**

```ts
export * from 'bar'
export * as foo from 'bar'
export { foo } from 'bar'
export { foo as bar } from 'bar'
export { type foo } from 'bar'
export { type foo as bar } from 'bar'
export { default as foo } from 'bar'
export { type default as foo } from 'bar'
export type { foo } from 'bar'
export type { foo as bar } from 'bar'
export type { default as foo } from 'bar'
export { bar as foobar, foo } from 'bar'
```
