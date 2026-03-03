const fs = require('fs');
const path = require('path');

const dir = 'e:/projects/Rafiun Vai Projects/journal project';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html');

const indexHtml = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const headerMatch = indexHtml.match(/(    <header[\s\S]*?<\/header>)/);

if (!headerMatch) {
    console.error("Could not find the header in index.html");
    process.exit(1);
}

const newHeader = headerMatch[1];

let updatedCount = 0;
files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace the <header> block entirely
    if (content.match(/<header/)) {
        content = content.replace(/ *<header[\s\S]*?<\/header>/, newHeader);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated header logo size in ${file}`);
        updatedCount++;
    }
});
console.log(`Total files updated: ${updatedCount}`);
