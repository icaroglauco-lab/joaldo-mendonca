import fs from 'fs';

export function get() {
    let data = fs.readdirSync(`src/propriedades/`)
        .map(fileName => {
            const f = JSON.parse(fs.readFileSync(`src/propriedades/${fileName}`,
            {encoding:'utf8', flag:'r'}));
            return f;
        });
    return data 
  }
  