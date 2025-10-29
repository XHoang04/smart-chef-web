document.addEventListener('DOMContentLoaded', function() {
    // Menu Gallery Switching
    const menuButtons = document.querySelectorAll('.menu-btn');
    const menuGalleries = document.querySelectorAll('.menu-gallery');

    menuButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // Loại bỏ class 'active' khỏi tất cả các nút
            menuButtons.forEach(btn => btn.classList.remove('active'));

            // Thêm class 'active' cho nút vừa được nhấp
            this.classList.add('active');

            // Ẩn tất cả các khối menu
            menuGalleries.forEach(gallery => gallery.classList.add('hidden'));

            // Lấy ID của khối menu cần hiển thị
            const category = this.getAttribute('data-category');
            const targetGallery = document.getElementById(category);

            // Hiển thị khối menu tương ứng
            if (targetGallery) {
                targetGallery.classList.remove('hidden');
            }
        });
    });

    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Download Buttons Alert
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

    // Hero Content Fade In Animation
    const heroElements = document.querySelectorAll('.hero-content .fade-in-up');

    // Thêm delay cho từng phần tử
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, index * 200); // 200ms delay giữa mỗi phần tử
    });
});
