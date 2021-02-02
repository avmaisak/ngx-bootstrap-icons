const fs = require("fs-extra");
const clc = require("cli-color");

const camelCase = require("camelCase");
const uppercamelcase = require('uppercamelcase');

// source original bootstrap icons
const iconsSrcFolder = "../icons/icons";
// enum output folder
const enumDestFolder = "projects/ngx-bootstrap-icons-lib/src/lib/enums";
// destination of generated icons
const iconsDestFolder = "projects/ngx-bootstrap-icons-lib/src/lib/icons";
// template for icons
const componentTemplate = fs.readFileSync(
  "tools/tmpl/component.ts.tpl",
  "utf-8"
);

const indexFile = `${iconsDestFolder}/index.ts`;
const allFile = `${iconsDestFolder}/all.ts`;
const enumFile = `${enumDestFolder}/icon-names.enum.ts`;

let exportAllString = `\nexport const allIcons = {\n`;
let exportEnumString = `/** Enum with all icons. */`;
exportEnumString += `\nexport enum IconNamesEnum {\n`;

return Promise.resolve()
  .then(() => fs.emptyDirSync(iconsDestFolder))
  .then(() => {
    fs.readdirSync(`${iconsSrcFolder}`).forEach((filename) => {
      const iconName = filename.replace(".svg", "").trim();
      const fileContent = fs.readFileSync(
        `${iconsSrcFolder}/${filename}`,
        "utf-8"
      );
      const exportName = camelCase(iconName);

      exportEnumString += `  /** https://icons.getbootstrap.com/icons/${iconName} */\n`;
      exportEnumString += `  ${uppercamelcase(iconName)} = '${iconName}',\n`;

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
    exportEnumString += `}\n`;
    fs.appendFileSync(allFile, exportAllString);
    fs.appendFileSync(indexFile, `\nexport { allIcons } from './all';\n`);
    fs.writeFileSync(enumFile, exportEnumString);
  });
