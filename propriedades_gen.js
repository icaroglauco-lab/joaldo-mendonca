import fs from 'fs';
let data = fs.readdirSync(`src/propriedades/`)
    .map(fileName => {
        const f = JSON.parse(fs.readFileSync(`src/propriedades/${fileName}`,
        {encoding:'utf8', flag:'r'}));
        return f;
    });

fs.writeFileSync('static/propriedades.json', JSON.stringify(data));