const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

// Replace footer wrapper text color
content = content.replace('className="bg-navy text-ivory/80 pt-20 pb-10"', 'className="bg-navy text-white/80 pt-20 pb-10"');

// Replace text-sm with text-sm text-white/70 on links and paragraphs
content = content.replace(/className="hover:text-gold transition-colors text-sm"/g, 'className="hover:text-gold transition-colors text-sm text-white/70"');
content = content.replace(/className="text-sm leading-relaxed mb-6"/g, 'className="text-sm leading-relaxed mb-6 text-white/70"');

// Replace text-sm on contact items
content = content.replace(/className="text-sm"/g, 'className="text-sm text-white/70"');
content = content.replace(/className="text-sm text-white\/70 hover:text-gold/g, 'className="text-sm text-white/70 hover:text-gold'); // Fix double if any

// Replace text-xs on bottom section
content = content.replace(/className="text-xs mb-4 md:mb-0"/g, 'className="text-xs mb-4 md:mb-0 text-white/50"');
content = content.replace(/className="text-xs hover:text-white transition-colors"/g, 'className="text-xs hover:text-white transition-colors text-white/50"');

fs.writeFileSync('src/components/layout/Footer.tsx', content);
