(function() {
    'use strict';
    var el = document.getElementById('intro');
    if (!el) return;
    var t = null;
    function toggle() {
        if (el.classList.contains('show')) {
            el.classList.remove('show');
            clearTimeout(t);
        } else {
            el.classList.add('show');
            t = setTimeout(function() { el.classList.remove('show'); }, 3000);
        }
    }
    el.addEventListener('click', toggle);
    el.addEventListener('touchstart', function(e) { e.preventDefault(); toggle(); }, { passive: false });
    el.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') toggle();
    });
})();
