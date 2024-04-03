export const exportsRegex =
  /export\s+((\*(\s+as\s+[a-zA-Z$_][0-9a-zA-Z$_]*)?)|((type\s+)?{((\s+)?(type\s+)?[a-zA-Z$_][0-9a-zA-Z$_]*(\s+as\s+[a-zA-Z$_][0-9a-zA-Z$_]*)?(\s)?)((\s+)?,(\s+)?(type\s+)?[a-zA-Z$_][0-9a-zA-Z$_]*(\s+as\s+[a-zA-Z$_][0-9a-zA-Z$_]*)?(\s)?)*}))\s+from\s+('|")(?<identifier>[^"']+)('|")(;|\n|\r\n)/gm
