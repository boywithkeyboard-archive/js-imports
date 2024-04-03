export const importsRegex =
  /import(\s+(type\s)?([a-zA-Z$_][0-9a-zA-Z$_]*(\s)?,(\s)?)?((((\*\s+as)\s+)?[a-zA-Z$_][0-9a-zA-Z$_]*)|({((\s+)?(type\s+)?[a-zA-Z$_][0-9a-zA-Z$_]*(\s+as\s+[a-zA-Z$_][0-9a-zA-Z$_]*)?(\s)?)((\s+)?,(\s+)?(type\s+)?[a-zA-Z$_][0-9a-zA-Z$_]*(\s+as\s+[a-zA-Z$_][0-9a-zA-Z$_]*)?(\s)?)*}))\s+from)?\s+('|")(?<specifier>[^"']+)('|")(;|\n|\r\n)/gm
