(function() {
    'use strict';
    window.applyTheme = function() {
        var t = localStorage.getItem('theme');
        var d = window.matchMedia('(prefers-color-scheme:dark)').matches;
        var e = document.documentElement;
        if (t === 'dark' || (!t && d)) {
            e.classList.add('dark');
            e.style.colorScheme = 'dark';
        } else {
            e.classList.remove('dark');
            e.style.colorScheme = 'light';
        }
        var icon = document.getElementById('modal-theme-icon');
        if (icon) {
            icon.innerHTML = e.classList.contains('dark')
                ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">'
                : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">';
        }
    };
    window.toggleTheme = function() {
        var toDark = !document.documentElement.classList.contains('dark');
        document.documentElement.classList.toggle('dark');
        document.documentElement.style.colorScheme = toDark ? 'dark' : 'light';
        localStorage.setItem('theme', toDark ? 'dark' : 'light');
        window.applyTheme();
    };
    window.applyTheme();
    document.addEventListener('astro:page-load', function() {
        window.applyTheme();
    });
})();
