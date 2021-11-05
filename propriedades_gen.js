import fs from 'fs';
let data = fs.readdirSync(`static/propriedades/`, (err) => console.log(err));

if(data.length>0)
data = data
    .map(fileName => {
        let slug = fileName.split('.');
        slug.pop()
        slug = slug.join('.')
        const f = {
            slug,
            data: JSON.parse(fs.readFileSync(`static/propriedades/${fileName}`, {encoding:'utf8', flag:'r'}))};
        return f;
    });

fs.writeFileSync('static/propriedades.json', JSON.stringify(data));