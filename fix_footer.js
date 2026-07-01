const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

// Replace link hover states
content = content.replace(/hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500/g, 'hover:text-gold');

// Replace social icon hover states
content = content.replace(/hover:bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-none hover:text-navy/g, 'hover:bg-gold text-white hover:text-navy');

// Replace icon color
content = content.replace(/text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500/g, 'text-gold');

fs.writeFileSync('src/components/layout/Footer.tsx', content);
