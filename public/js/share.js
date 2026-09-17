(function() {
    'use strict';
    document.addEventListener('click', function(e) {
        var btn = e.target.closest('.share-btn');
        if (!btn) return;
        function showCopied() {
            var orig = btn.textContent;
            btn.textContent = '已复制';
            setTimeout(function() { btn.textContent = orig; }, 1500);
        }
        if (navigator.share) {
            navigator.share({ title: document.title, url: window.location.href }).then(showCopied).catch(function() {});
        } else if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(window.location.href).then(showCopied).catch(function() {});
        }
    });
})();
