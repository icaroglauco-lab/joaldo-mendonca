import fs from 'fs';
if(fs.existsSync(`src/propriedades/`)){
    let data = fs.readdirSync(`src/propriedades/`)
    .map(fileName => {
        let slug = fileName.split('.');
        slug.pop()
        slug = slug.join('.')
        const f = {
            slug,
            data: JSON.parse(fs.readFileSync(`src/propriedades/${fileName}`, {encoding:'utf8', flag:'r'}))};
        return f;
    });

    fs.writeFileSync('static/propriedades.json', JSON.stringify(data));
}