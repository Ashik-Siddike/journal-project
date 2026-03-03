// Main JavaScript for Global Interactions

document.addEventListener('DOMContentLoaded', () => {
    // Top Navigation scroll effect
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('shadow-sm');
        } else {
            header.classList.remove('shadow-sm');
        }
    });

    // Handle Mobile Menu interactions
    const mobileMenuBtn = document.querySelector('button.md\\:hidden');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.replace('ph-x', 'ph-list');
            } else {
                icon.classList.replace('ph-list', 'ph-x');
            }
        });
    }
});
