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
      
      // Replace ivory and cream with a white class or just keep them and we'll change tailwind config, 
      // but to be clean, let's rename to bg-[#fcfcfc] or bg-white
      // Actually let's just define a new theme in tailwind and use it.
      // Let's replace bg-gold with blue gradient
      content = content.replace(/bg-gold/g, 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-none');
      content = content.replace(/text-gold/g, 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500');
      content = content.replace(/border-gold/g, 'border-blue-500');
      content = content.replace(/bg-ivory/g, 'bg-[#fcfcfc]');
      content = content.replace(/bg-cream/g, 'bg-[#fcfcfc]');
      
      // Some hover states
      content = content.replace(/hover:bg-gold\/90/g, 'hover:from-blue-700 hover:to-cyan-600');
      content = content.replace(/hover:text-gold/g, 'hover:text-blue-600');
      content = content.replace(/hover:border-gold/g, 'hover:border-blue-500');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log('Replaced colors in src/');
