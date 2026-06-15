const fs = require('fs');

function replace(file, search, replace) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(search, replace);
  fs.writeFileSync(file, content);
}

replace('src/app/about/page.tsx', 'import Image from "next/image";\n', '');
replace('src/app/about/page.tsx', '"Transforming India through world-class employability-linked skill training."', '&quot;Transforming India through world-class employability-linked skill training.&quot;');
replace('src/app/about/page.tsx', '"Creating success stories through skill and quality training across our network of institutes."', '&quot;Creating success stories through skill and quality training across our network of institutes.&quot;');
replace('src/app/about/page.tsx', '<div className="absolute top-10 left-10 text-6xl font-serif text-gold/30 leading-none">"</div>', '<div className="absolute top-10 left-10 text-6xl font-serif text-gold/30 leading-none">&quot;</div>');
replace('src/app/about/page.tsx', 'Chairman\'s Message', 'Chairman&apos;s Message');
replace('src/app/about/page.tsx', 'we don\'t just teach', 'we don&apos;t just teach');

replace('src/app/admissions/page.tsx', 'import Link from "next/link";\n', '');

replace('src/app/campus/page.tsx', 'Vizag\'s', 'Vizag&apos;s');

replace('src/app/page.tsx', 'import Image from "next/image";\n', '');
replace('src/app/page.tsx', 'Visakhapatnam\'s', 'Visakhapatnam&apos;s');
replace('src/app/page.tsx', 'setActiveTab(tab as any)', 'setActiveTab(tab as "All" | "Aviation" | "Hospitality")');

replace('src/app/privacy/page.tsx', '("we", "our", "us")', '(&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)');

replace('src/app/programmes/page.tsx', 'setActiveTab(tab as any)', 'setActiveTab(tab as "All" | "Aviation" | "Hospitality")');

replace('src/app/terms/page.tsx', 'website\'s', 'website&apos;s');

replace('src/components/layout/Footer.tsx', 'Visakhapatnam\'s', 'Visakhapatnam&apos;s');

replace('src/components/ui/PageHero.tsx', 'import Link from "next/link";\n\n', '');

replace('src/components/ui/RecruiterStrip.tsx', 'import Image from "next/image";\n', '');

replace('src/components/ui/TestimonialCard.tsx', 'leading-none">"</div>', 'leading-none">&quot;</div>');

