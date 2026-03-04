const fs = require('fs');
const path = require('path');

const dir = __dirname;
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    let original = content;

    // Fix the logo link
    content = content.replace(/href="help-center\.html"(.*?class="flex items-center gap-3)/g, 'href="index.html"$1');

    if (content !== original) {
        fs.writeFileSync(path.join(dir, file), content);
        console.log(`Updated logo in ${file}`);
    }
});
