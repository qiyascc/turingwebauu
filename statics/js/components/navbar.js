document.addEventListener("DOMContentLoaded", function() {
    const openBtn = document.querySelector(".open-btn-nav");
    const closeBtn = document.querySelector(".close-btn-nav");
    const responsiveMenu = document.querySelector(".responsive-menu");
    const navigationBar = document.querySelector(".navigation-bar");

    if (openBtn && closeBtn && responsiveMenu && navigationBar) {
        openBtn.addEventListener("click", () => {
            responsiveMenu.style.display = "block";
            navigationBar.style.display = "none";
        });

        closeBtn.addEventListener("click", () => {
            responsiveMenu.style.display = "none";
            navigationBar.style.display = "flex";
        });
    }

    const dropdown = document.querySelector(".dropdown");
    const innerList = document.querySelector(".inner-list");

    if (dropdown && innerList) {
        dropdown.addEventListener("click", () => {
            innerList.style.display = "block";
        });
    }
});
