import fs from 'fs';

export function get() {
    // our markdown files lie in src/posts.
    let data = fs.readdirSync(`src/propriedades`)
        .map(fileName => {
            const f = fs.readFileSync(`src/propriedades/${fileName}`,
            {encoding:'utf8', flag:'r'});
            return f;
        });
    let body = JSON.stringify(data);
    return { body }
  }
  