const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/recruiters');

async function fixLogos() {
  // 1. Fix jet-airways.svg viewBox tight crop
  const jetPath = path.join(dir, 'jet-airways.svg');
  if (fs.existsSync(jetPath)) {
    let svg = fs.readFileSync(jetPath, 'utf8');
    svg = svg.replace(/viewBox="[^"]*"/i, 'viewBox="5 75 180 44"');
    svg = svg.replace(/width="[^"]*"/i, 'width="180"');
    svg = svg.replace(/height="[^"]*"/i, 'height="44"');
    fs.writeFileSync(jetPath, svg);
    console.log('Fixed jet-airways.svg viewBox tight crop!');
  }

  // 2. Fix wyndham.svg viewBox tight crop
  const wyndhamPath = path.join(dir, 'wyndham.svg');
  if (fs.existsSync(wyndhamPath)) {
    let svg = fs.readFileSync(wyndhamPath, 'utf8');
    svg = svg.replace(/viewBox="[^"]*"/i, 'viewBox="5 45 183 98"');
    svg = svg.replace(/width="[^"]*"/i, 'width="183"');
    svg = svg.replace(/height="[^"]*"/i, 'height="98"');
    fs.writeFileSync(wyndhamPath, svg);
    console.log('Fixed wyndham.svg viewBox tight crop!');
  }

  // 3. Fix novotel.svg viewBox tight crop
  const novotelPath = path.join(dir, 'novotel.svg');
  if (fs.existsSync(novotelPath)) {
    let svg = fs.readFileSync(novotelPath, 'utf8');
    svg = svg.replace(/viewBox="[^"]*"/i, 'viewBox="10 40 180 145"');
    svg = svg.replace(/width="[^"]*"/i, 'width="180"');
    svg = svg.replace(/height="[^"]*"/i, 'height="145"');
    fs.writeFileSync(novotelPath, svg);
    console.log('Fixed novotel.svg viewBox tight crop!');
  }

  // 4. Taj IHCL official colored SVG with dark charcoal text
  try {
    const tajUrl = 'https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/7bba7e538789e510d69f4cf107cf84dc096f65eb-165x57.svg';
    const res = await fetch(tajUrl);
    if (res.ok) {
      const text = await res.text();
      fs.writeFileSync(path.join(dir, 'taj-ihcl.svg'), text);
      console.log('Saved taj-ihcl.svg (colored dark text SVG)');
    }
  } catch(e) {
    console.log('Taj fetch error:', e.message);
  }

  // 5. Royal Orchid colored/dark logo
  try {
    const roUrl = 'https://www.royalorchidhotels.com/images/logo-2.webp';
    const res = await fetch(roUrl);
    if (res.ok) {
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(path.join(dir, 'royal-orchid.webp'), buffer);
      console.log('Saved royal-orchid.webp (colored logo)');
    }
  } catch(e) {
    console.log('Royal Orchid fetch error:', e.message);
  }

  // Update recruiters.json to point to new files
  const jsonPath = path.join(__dirname, '../src/data/recruiters.json');
  const recruiters = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  const updated = recruiters.map(r => {
    if (r.name.includes('Taj')) {
      return { ...r, logo: '/images/recruiters/taj-ihcl.svg' };
    }
    if (r.name.includes('Royal Orchid')) {
      return { ...r, logo: '/images/recruiters/royal-orchid.webp' };
    }
    return r;
  });

  fs.writeFileSync(jsonPath, JSON.stringify(updated, null, 2));
  console.log('Updated recruiters.json successfully!');
}

fixLogos();
