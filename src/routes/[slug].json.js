import fs from 'fs';

export function get({ params }) {
    // we could get the dynamic slug from the parameter of get.
    const { slug } = params;
  
    const body = fs.readFileSync(`static/propriedades/${slug}.json`);
  
    return { body }
  }
  