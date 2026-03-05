const fs = require('fs');
const path = require('path');

const files = [
    'index.html', 'browse.html', 'article.html', 'advanced-search.html',
    'browse-az.html', 'dashboard.html', 'help-center.html', 'institutional-login.html',
    'issue.html', 'journal.html', 'login.html', 'open-access.html', 'search.html', 'register.html'
];

const mobileMenuHTML = `
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden hidden bg-white border-t border-slate-200 shadow-md">
            <div class="px-4 pt-2 pb-4 space-y-1">
                <a href="browse.html" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-[#E9711C] hover:bg-slate-50">Journals & Books</a>
                <a href="help-center.html" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-[#E9711C] hover:bg-slate-50">Help</a>
                <a href="dashboard.html" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-[#E9711C] hover:bg-slate-50">My account</a>
                <div class="h-[1px] bg-slate-200 my-2"></div>
                <a href="submission-wizard.html" class="block px-3 py-2 rounded-md text-base font-medium text-[#E9711C] hover:bg-slate-50">Submit Article</a>
                <a href="login.html" class="block px-3 py-2 rounded-md text-base font-medium text-[#007398] hover:bg-slate-50">Sign in</a>
            </div>
        </div>
`;

const dir = 'e:/projects/Rafiun Vai Projects/journal project';

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // Look for the closing header tag
    const regex = /<\/header>/;

    if (regex.test(content)) {
        // Insert mobile menu right before the closing header tag
        content = content.replace(regex, `${mobileMenuHTML}    </header>`);
        fs.writeFileSync(path.join(dir, file), content);
        console.log('Added mobile menu to ' + file);
    } else {
        console.log('Could not find </header> in ' + file);
    }
});
