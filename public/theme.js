// Apply theme immediately
(function() {
    const t = localStorage.getItem('theme');
    const d = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (t === 'dark' || (!t && d)) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.backgroundColor = '#0a0a0a';
    } else {
        document.documentElement.style.backgroundColor = '#fff';
    }
})();

// Theme toggle
requestIdleCallback(() => {
    const icon = document.getElementById('theme-icon');
    const sun = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>';
    const moon = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>';
    
    const isDark = document.documentElement.classList.contains('dark');
    if (icon) icon.innerHTML = isDark ? moon : sun;
    
    document.getElementById('theme-toggle')?.addEventListener('click', () => {
        const newIsDark = !document.documentElement.classList.contains('dark');
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
        if (icon) icon.innerHTML = newIsDark ? moon : sun;
    });
});
