const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix residual gold
      content = content.replace(/border-t-gold/g, 'border-t-blue-500');
      content = content.replace(/border-gold/g, 'border-blue-500');
      content = content.replace(/text-gold/g, 'text-blue-600');
      content = content.replace(/bg-gold/g, 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white');
      content = content.replace(/hover:text-gold/g, 'hover:text-blue-600');
      content = content.replace(/group-hover:text-gold/g, 'group-hover:text-blue-600');
      
      // Replace instances of #fcfcfc to standard tailwind class or leave as is. We already did bg-[#fcfcfc]
      
      // Let's improve the hero gradient text if it got messed up:
      content = content.replace(/group-hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500/g, 'group-hover:text-blue-600');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log('Fixed residuals in src/');
