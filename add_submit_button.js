const fs = require('fs');
const path = require('path');

const files = [
    'index.html', 'browse.html', 'article.html', 'advanced-search.html',
    'browse-az.html', 'dashboard.html', 'help-center.html', 'institutional-login.html',
    'issue.html', 'journal.html', 'login.html', 'open-access.html', 'search.html', 'register.html'
];

const insertText = `<a href="submission-wizard.html"
                    class="text-[14px] font-semibold flex items-center gap-2 text-[#E9711C] hover:text-white bg-[#E9711C]/10 hover:bg-[#E9711C] px-5 py-2.5 rounded-full transition-all duration-300">
                    <i class="ph-bold ph-paper-plane-tilt text-lg pb-[1px]"></i>
                    Submit Article
                </a>
                `;

const dir = 'e:/projects/Rafiun Vai Projects/journal project';

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // The separator before the login button
    const regex = /(<div class="h-5 w-\[1px\] bg-slate-200"><\/div>\s*)(<a href="login\.html")/g;

    if (regex.test(content)) {
        content = content.replace(regex, `$1${insertText}$2`);
        fs.writeFileSync(path.join(dir, file), content);
        console.log('Updated ' + file);
    } else {
        console.log('Could not find target in ' + file);
    }
});
