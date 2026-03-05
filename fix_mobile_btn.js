const fs = require('fs');
const path = require('path');

const files = [
    'index.html', 'browse.html', 'article.html', 'advanced-search.html',
    'browse-az.html', 'dashboard.html', 'help-center.html', 'institutional-login.html',
    'issue.html', 'journal.html', 'login.html', 'open-access.html', 'search.html', 'register.html'
];

const dir = 'e:/projects/Rafiun Vai Projects/journal project';

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // Add ID to the mobile menu button
    content = content.replace('<button class="md:hidden', '<button id="mobile-menu-btn" class="md:hidden');

    fs.writeFileSync(path.join(dir, file), content);
    console.log('Added ID to mobile menu button in ' + file);
});
