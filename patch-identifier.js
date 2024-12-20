const fs = require('fs');
const path = require('path');

const MISSING_FUNCTIONS = {
  instanceOfnumber: `
function instanceOfnumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value);
}
  `,
  numberToJSON: `
function numberToJSON(value: number): any {
    if (typeof value !== 'number' || isNaN(value)) {
        throw new Error('Invalid number provided for serialization.');
    }
    return value;
}
  `,
  instanceOfstring: `
function instanceOfstring(value: any): boolean {
    return typeof value === 'string';
}
  `,
  stringToJSON: `
function stringToJSON(value: string): any {
    if (typeof value !== 'string') {
        throw new Error('Invalid string provided for serialization.');
    }
    return value;
}
  `,
  stringFromJSONTyped: `
function stringFromJSONTyped(json: any, ignoreDiscriminator: boolean): string {
    if (typeof json !== 'string') {
        throw new Error('Invalid JSON for string deserialization.');
    }
    return json;
}
  `,
  numberFromJSONTyped: `
function numberFromJSONTyped(json: any, ignoreDiscriminator: boolean): number {
    const parsedNumber = Number(json);
    if (isNaN(parsedNumber)) {
        throw new Error('Invalid JSON for number deserialization.');
    }
    return parsedNumber;
}
  `,
};

/**
 * Attempts to fix a TypeScript file by adding missing function definitions
 * that are referenced but not defined.
 *
 * @param {string} filePath - The absolute path of the TypeScript file to fix.
 */
function fixTypeScriptFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`File does not exist: ${filePath}`);
    return;
  }

  const stats = fs.statSync(filePath);
  if (!stats.isFile()) {
    console.error(`The provided path is not a file: ${filePath}`);
    return;
  }

  let content;
  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch (readErr) {
    console.error(`Error reading file ${filePath}:`, readErr);
    return;
  }

  let fixesApplied = false;
  for (const [funcName, funcDefinition] of Object.entries(MISSING_FUNCTIONS)) {
    const isReferenced = new RegExp(`\\b${funcName}\\b`).test(content);
    const isDefined = new RegExp(`function\\s+${funcName}\\s*\\(`).test(content);

    if (isReferenced && !isDefined) {
      console.log(`Adding missing function: ${funcName}`);

      content += `\n\n${funcDefinition.trim()}\n`;
      fixesApplied = true;
    }
  }

  if (fixesApplied) {
    try {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`File fixed and saved: ${filePath}`);
    } catch (writeErr) {
      console.error(`Error writing file ${filePath}:`, writeErr);
    }
  } else {
    console.log(`No fixes needed for: ${filePath}`);
  }
}

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Usage: node fix-typescript-missing-functions.js <path-to-typescript-file>');
  process.exit(1);
}

const filePath = path.resolve(args[0]);
fixTypeScriptFile(filePath);
