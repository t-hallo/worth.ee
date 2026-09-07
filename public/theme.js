// Apply theme IMMEDIATELY during head parsing
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
