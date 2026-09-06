const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/recruiters');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const list = [
  { id: 'air-india', name: 'Air India', sector: 'Aviation', url: 'https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--3c6a707f-2e38-48d0-ac12-4751c4f554ba/AI_Logo_Red_New.svg' },
  { id: 'indigo', name: 'IndiGo', sector: 'Aviation', url: 'https://www.goindigo.in/content/dam/s6web/in/en/assets/logo/IndiGo_logo_2x.png' },
  { id: 'spicejet', name: 'SpiceJet', sector: 'Aviation', url: 'https://www.spicejet.com/v1.svg' },
  { id: 'jet-airways', name: 'Jet Airways', sector: 'Aviation', url: 'https://cdn.worldvectorlogo.com/logos/jet-airways.svg' },
  { id: 'jetlite', name: 'JetLite', sector: 'Aviation', url: 'https://static.wixstatic.com/media/56bd62_c30044b7d8eb407a8a5256076bff50db~mv2.png/v1/fill/w_222,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/jetlite_Logo-white.png' },
  { id: 'taj-ihcl', name: 'Taj Hotels (IHCL)', sector: 'Hospitality', url: 'https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/727e95c175076ae1fe5f98b6327425059b1e6f13-2053x799.png' },
  { id: 'hilton', name: 'Hilton Hotels', sector: 'Hospitality', url: 'https://www.hilton.com/modules/assets/svgs/logos/HI.svg' },
  { id: 'novotel', name: 'Novotel Accor', sector: 'Hospitality', url: 'https://cdn.worldvectorlogo.com/logos/novotel-1.svg' },
  { id: 'hotelf1', name: 'HotelF1 Accor', sector: 'Hospitality', url: 'https://hotelf1.accor.com/assets/images/logos/wide.svg' },
  { id: 'grand-mercure', name: 'Grand Mercure', sector: 'Hospitality', url: 'https://grand-mercure.accor.com/a/content/dam/brands/gme/global-marketing/brand-identity/logos/full-color.svg' },
  { id: 'all-accor', name: 'ALL Accor Live Limitless', sector: 'Hospitality', url: 'https://all.accor.com/a/content/dam/all/global-marketing/brand-identity/logos/all-accor/blue/vertical/Logo%20ALL%20ACCOR_BLUE_Vertical_RGB.svg' },
  { id: 'wyndham', name: 'Wyndham Hotels & Resorts', sector: 'Hospitality', url: 'https://cdn.worldvectorlogo.com/logos/wyndham-1.svg' },
  { id: 'holiday-inn', name: 'Holiday Inn (IHG)', sector: 'Hospitality', url: 'https://digital.ihg.com/is/content/ihg/hi_logo' },
  { id: 'fortune-hotels', name: 'Fortune Hotels', sector: 'Hospitality', url: 'https://www.fortunehotels.in/images/logo.png' },
  { id: 'sarovar-hotels', name: 'Sarovar Hotels', sector: 'Hospitality', url: 'https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_1500,h_751,r_0,c_crop,q_90/w_355,h_200,f_auto,c_fit/sarovar-hotels---indias-leading-hotel-chain/Sarovar_Hotels_Logo_qubx1f' },
  { id: 'royal-orchid', name: 'Royal Orchid Hotels', sector: 'Hospitality', url: 'https://www.royalorchidhotels.com/images/logo.png' },
  { id: 'tcs', name: 'TCS (Tata Consultancy Services)', sector: 'Corporate', url: 'https://cdn.worldvectorlogo.com/logos/tata-consultancy-services-1.svg' },
  { id: 'wipro', name: 'Wipro', sector: 'Corporate', url: 'https://www.wipro.com/content/dam/wipro/social-icons/wipro_new_logo.svg' },
  { id: 'ibm', name: 'IBM', sector: 'Corporate', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { id: 'hsbc', name: 'HSBC Bank', sector: 'Corporate', url: 'https://www.hsbc.com/-/files/hsbc/header/hsbc-logo-200x25.svg?la=en-GB&h=25&hash=FCDFB4DC1991B6B5EE0AB98E7208CB82' },
  { id: 'pg', name: 'P&G (Procter & Gamble)', sector: 'Corporate', url: 'https://images.ctfassets.net/oe48y40ukei6/7znyJc3Y7SecEoKSYKWoaQ/823b9197d34f0dcb0f3dee778dc625a7/P_G_Logo_RGB.svg' },
  { id: 'delite-softech', name: 'Delite Softech', sector: 'Corporate', url: 'https://delitesoftech.com/img/logo.png' }
];

async function downloadAll() {
  const recruiters = [];
  for (const item of list) {
    try {
      const res = await fetch(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        let ext = 'png';
        const ct = res.headers.get('content-type') || '';
        if (ct.includes('svg') || item.url.endsWith('.svg')) ext = 'svg';
        else if (ct.includes('webp') || item.url.endsWith('.webp')) ext = 'webp';
        else if (ct.includes('jpeg') || item.url.endsWith('.jpg')) ext = 'jpg';
        
        let buffer = Buffer.from(await res.arrayBuffer());
        if (ext === 'svg') {
          let svgStr = buffer.toString('utf8');
          // Strip white square background path (M0 0h192.756v192.756H0V0z)
          svgStr = svgStr.replace(/<path[^>]*fill="#fff"[^>]*d="M0 0h192\.756v192\.756H0V0z"[^>]*\/>/gi, '');
          svgStr = svgStr.replace(/<path[^>]*fill="#ffffff"[^>]*d="M0 0h192\.756v192\.756H0V0z"[^>]*\/>/gi, '');
          svgStr = svgStr.replace(/<rect[^>]*fill="#fff"[^>]*\/>/gi, '');
          buffer = Buffer.from(svgStr, 'utf8');
        }
        const fileName = `${item.id}.${ext}`;
        const filePath = path.join(dir, fileName);
        fs.writeFileSync(filePath, buffer);
        console.log(`[SUCCESS] ${item.name} -> /images/recruiters/${fileName} (${buffer.length} bytes)`);
        recruiters.push({
          name: item.name,
          sector: item.sector,
          logo: `/images/recruiters/${fileName}`
        });
      } else {
        console.log(`[FAIL] ${item.name}: ${res.status}`);
        recruiters.push({ name: item.name, sector: item.sector, logo: item.url });
      }
    } catch(e) {
      console.log(`[ERROR] ${item.name}: ${e.message}`);
      recruiters.push({ name: item.name, sector: item.sector, logo: item.url });
    }
  }
  fs.writeFileSync(path.join(__dirname, '../src/data/recruiters.json'), JSON.stringify(recruiters, null, 2));
  console.log('Updated src/data/recruiters.json successfully!');
}

downloadAll();
