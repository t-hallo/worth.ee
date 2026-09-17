(function() {
    'use strict';

    // Back to top button
    var backToTop = document.querySelector('.back-to-top');
    var wasVisible = false;
    function handleScroll() {
        var isVisible = window.scrollY > 300;
        if (isVisible !== wasVisible) {
            wasVisible = isVisible;
            backToTop.classList.toggle('is-visible', isVisible);
        }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Theme toggle with animation
    function setupThemeToggle() {
        var toggle = document.getElementById('modal-theme-toggle');
        if (toggle) {
            toggle.addEventListener('click', function() {
                var icon = document.getElementById('modal-theme-icon');
                if (icon) {
                    icon.style.transition = 'transform .4s cubic-bezier(.4,0,.2,1), opacity .4s ease';
                    icon.style.transform = 'rotate(180deg)';
                    icon.style.opacity = '0';
                    setTimeout(function() {
                        window.toggleTheme();
                        icon.style.transition = 'none';
                        icon.style.transform = 'rotate(0deg)';
                        icon.style.opacity = '1';
                        setTimeout(function() {
                            icon.style.transition = 'transform .4s cubic-bezier(.4,0,.2,1)';
                            icon.style.transform = 'rotate(180deg)';
                            setTimeout(function() {
                                icon.style.transform = 'rotate(0deg)';
                            }, 400);
                        }, 20);
                    }, 200);
                } else {
                    window.toggleTheme();
                }
            });
        }
    }
    setupThemeToggle();

    // Info sheet
    document.addEventListener('click', function(e) {
        var trigger = document.querySelector('.info-trigger');
        var sheet = document.querySelector('.info-sheet');
        if (!trigger || !sheet) return;
        if (e.target.closest('.info-trigger')) {
            sheet.classList.toggle('is-visible');
        } else if (!e.target.closest('.info-sheet')) {
            sheet.classList.remove('is-visible');
        }
    });
})();
