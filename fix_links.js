const fs = require('fs');
const path = require('path');

const dir = __dirname;
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const replacements = [
    { textPattern: /Sign in/i, link: "login.html" },
    { textPattern: /Register|Create account/i, link: "register.html" },
    { textPattern: /My account/i, link: "dashboard.html" },
    { textPattern: /Journals & Books|View Articles|View all|Explore/i, link: "browse.html" },
    { textPattern: />Search</i, link: "search.html" },
    { textPattern: /Help|Contact and support/i, link: "help-center.html" },
    { textPattern: /Advanced search/i, link: "advanced-search.html" },
    { textPattern: /Submit your article/i, link: "submission-home.html" },
    { textPattern: /Track your article|Order Journal|My Dashboard/i, link: "dashboard.html" },
    { textPattern: /Find your institution|OpenAthens|Shibboleth/i, link: "institutional-login.html" },
    { textPattern: />Open Access</i, link: "open-access.html" }
];

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    let original = content;

    // We look for `<a href="javascript:void(0)"` or `<a href="#"` followed by attributes and then inner HTML matching our patterns.
    for (const r of replacements) {
        // Regex to match generic links containing the specific text.
        const regex1 = new RegExp(`href="(?:javascript:void\\(0\\)|#)"([^>]*>.*?${r.textPattern.source})`, 'gi');
        content = content.replace(regex1, `href="${r.link}"$1`);
    }

    // Replace all remaining href="#" with javascript:void(0) to prevent page jumping
    content = content.replace(/href="#"/g, 'href="javascript:void(0)"');

    if (content !== original) {
        fs.writeFileSync(path.join(dir, file), content);
        console.log(`Updated ${file}`);
    }
});
