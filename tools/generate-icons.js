const fs = require("fs-extra");
const clc = require("cli-color");
const lodash = require("lodash");

const urlBase = "https://icons.getbootstrap.com/icons/";
const allIconsVariable = "allIcons";
const libFolder = "projects/ngx-bootstrap-icons-lib/src/lib";

// source original bootstrap icons
const iconsSrcFolder = "../icons/icons";
// enum output folder
const enumDestFolder = `${libFolder}/enums`;
// type output folder
const typeDestFolder = "projects/ngx-bootstrap-icons-lib/src/lib/types";
// destination of generated icons
const iconsDestFolder = `${libFolder}/icons`;
// template for icons
const componentTemplate = fs.readFileSync(
  "tools/tmpl/component.ts.tpl",
  "utf-8"
);

const indexFile = `${iconsDestFolder}/index.ts`;
const allFile = `${iconsDestFolder}/all.ts`;
const enumFile = `${enumDestFolder}/icon-names.enum.ts`;
const typeFile = `${typeDestFolder}/icon-names.type.ts`;

let exportAllString = `\nexport const allIcons = {\n`;
let exportEnumString = `/** Enum with all icons. */`;
let exportTypeString = `/** Type for icon names. */`;

exportEnumString += `\nexport enum IconNamesEnum {\n`;
exportTypeString += `\nexport type IconName =\n`;

fs.emptyDirSync(iconsDestFolder);
fs.readdirSync(iconsSrcFolder).forEach((filename) => {
  let iconName = filename.replace(".svg", "").trim();

  if (!isNaN(parseInt(iconName))) {
    iconName = `icon${iconName}`
  }

  const fileContent = fs.readFileSync(`${iconsSrcFolder}/${filename}`, "utf-8");
  const exportName = lodash.camelCase(iconName);

  exportEnumString += `/** {@link ${urlBase}${iconName}} */\n`;
  exportEnumString += `${lodash.startCase(iconName).replace(/\s/g, '')} = '${iconName}',\n`;
  exportTypeString += `/** {@link ${urlBase}${iconName}} */\n`;
  exportTypeString += `'${iconName}' | \n`;

  let output = componentTemplate
    .replace(/__ICON_NAME__/g, iconName)
    .replace(/__EXPORT_NAME__/g, exportName)
    .replace(/__PAYLOAD__/, fileContent);
  fs.writeFileSync(`${iconsDestFolder}/${iconName}.ts`, output, "utf-8");
  fs.appendFileSync(
    indexFile,
    `export { ${exportName} } from './${iconName}';\n`
  );
  fs.appendFileSync(
    allFile,
    `import { ${exportName} } from './${iconName}';\n`
  );
  exportAllString += `  ${exportName},\n`;
  console.log(`icon ${clc.green(exportName)} generated.`);
});
exportAllString += `};\n`;
exportEnumString += `};\n`;

// Remove last Pipe character ("|") from Type Output
exportTypeString = exportTypeString.slice(0, -3);
exportTypeString += `;\n`;

fs.appendFileSync(allFile, exportAllString);
fs.appendFileSync(
  indexFile,
  `\nexport { ${allIconsVariable} } from './all';\n`
);
fs.writeFileSync(enumFile, exportEnumString);
fs.writeFileSync(typeFile, exportTypeString);
