document.addEventListener('DOMContentLoaded', function() {
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
});
// Thông báo khi click vào các nút download chưa hoạt động
document.addEventListener("DOMContentLoaded", () => {
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
});

document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.hero-content .fade-in-up');

    // Thêm delay cho từng phần tử
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, index * 200); // 200ms delay giữa mỗi phần tử
    });
});