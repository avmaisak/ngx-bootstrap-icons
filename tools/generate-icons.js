const fs = require('fs-extra');
const clc = require('cli-color');

const uppercamelcase = require('uppercamelcase');

// source original bootstrap icons
const iconsSrcFolder = '../icons/icons';
// destination of generated icons
const iconsDestFolder = 'projects/ngx-bootstrap-icons-lib/src/lib/icons';
// template for icons
const componentTemplate = fs.readFileSync('tools/tmpl/component.ts.tpl', 'utf-8');

const indexFile = `${iconsDestFolder}/index.ts`;
const allFile = `${iconsDestFolder}/all.ts`;

let exportAllString = `\nexport const allIcons = {\n`;

return Promise.resolve()
  .then(() => fs.emptyDirSync(iconsDestFolder))
  .then(() => {
    fs.readdirSync(`${iconsSrcFolder}`).forEach(filename => {

      if (filename === '__t.txt') return;

      const iconName = filename.replace('.svg', '').trim();
      const fileContent = fs.readFileSync(`${iconsSrcFolder}/${filename}`, 'utf-8');
      const exportName = uppercamelcase(iconName);

      let output = componentTemplate
        .replace(/__EXPORT_NAME__/g, exportName)
        .replace(/__PAYLOAD__/, fileContent)
        .replace(/__EXPORT_ICON_PATH__/, iconName);

      fs.writeFileSync(`${iconsDestFolder}/${iconName}.ts`, output, 'utf-8');
      fs.appendFileSync(indexFile,`export { ${exportName} } from './${iconName}';\n`);
      fs.appendFileSync(allFile,`import { ${exportName} } from './${iconName}';\n`);
      exportAllString += `  ${exportName},\n`;

      console.log(`icon ${ clc.green(exportName) } generated.`);
    })

    exportAllString += `};\n`;
    fs.appendFileSync(allFile,exportAllString);
    fs.appendFileSync(indexFile,`\nexport { allIcons } from './all';\n`);
  });
