document.addEventListener('DOMContentLoaded', function() {
    // =============================
    // MENU GALLERY SWITCH WITH FADE
    // =============================
    const menuButtons = document.querySelectorAll('.menu-btn');
    const menuGalleries = document.querySelectorAll('.menu-gallery');

    menuButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // Bỏ active ở tất cả nút
            menuButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-category');
            const targetGallery = document.getElementById(category);

            if (!targetGallery) return;

            // Hiệu ứng fade-out cho tất cả gallery
            menuGalleries.forEach(gallery => {
                if (!gallery.classList.contains('hidden')) {
                    gallery.classList.add('fade-out');
                    setTimeout(() => {
                        gallery.classList.add('hidden');
                        gallery.classList.remove('fade-out');
                    }, 400); // thời gian khớp với CSS transition
                }
            });

            // Hiển thị gallery mới với hiệu ứng fade-in
            setTimeout(() => {
                targetGallery.classList.remove('hidden');
                targetGallery.classList.add('fade-in');
                setTimeout(() => targetGallery.classList.remove('fade-in'), 400);
            }, 400);
        });
    });

    // =============================
    // HAMBURGER MENU TOGGLE
    // =============================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Đóng menu khi click vào link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Đóng menu khi click ra ngoài
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // =============================
    // DOWNLOAD BUTTONS ALERT
    // =============================
    const appstoreBtn = document.querySelector('.download-btn[data-platform="appstore"]');
    const googleplayBtn = document.querySelector('.download-btn[data-platform="googleplay"]');

    if (appstoreBtn) {
        appstoreBtn.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Ứng dụng đang được phát triển. Vui lòng quay lại sau!");
        });
    }

    if (googleplayBtn) {
        googleplayBtn.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Ứng dụng đang được phát triển. Vui lòng quay lại sau!");
        });
    }

    // =============================
    // HERO CONTENT FADE-IN
    // =============================
    const heroElements = document.querySelectorAll('.hero-content .fade-in-up');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, index * 200);
    });
});
