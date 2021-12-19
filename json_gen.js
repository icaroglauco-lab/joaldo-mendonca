import fs from 'fs';

let geradores = [
    {
        "PASTA": 'static/propriedades/',
        "DESTINO": 'static/propriedades.json'
    },
    {
        "PASTA": 'static/empreendimentos/',
        "DESTINO": 'static/empreendimentos.json'
    }
];

geradores.forEach( (item, index) => {
    if(fs.existsSync(item["PASTA"])){
        let data = fs.readdirSync(item["PASTA"])
        .map(fileName => {
            let slug = fileName.split('.');
            slug.pop()
            slug = slug.join('.')
            const f = {
                slug,
                ...JSON.parse(fs.readFileSync(`${item["PASTA"]}${fileName}`, {encoding:'utf8', flag:'r'}))};
            return f;
        });

        fs.writeFileSync(item["DESTINO"], JSON.stringify(data));
    }
})
