(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    //! якщо без підсторінок
    //! покращена версія з веревіркою чи вже доданий клас active 
    const currentUrl = window.location.pathname;
    //! Add class active to current menu item
        document.addEventListener("DOMContentLoaded", (function() {
        const menuItems = document.querySelectorAll(".menu__link");
        menuItems.forEach((item => {
            const href = item.getAttribute("href");
            if (href.includes(".html")) {
                const hrefWithoutHtml = href.slice(0, -5);
                if (currentUrl.includes(hrefWithoutHtml) || currentUrl === "/" && hrefWithoutHtml === "") item.classList.add("active");
            } else if (currentUrl.includes(href) || currentUrl === "/" && href === "") item.classList.add("active");
        }));
    }));
    //! Slideshow of screenshots
        if (currentUrl.includes("home")) document.addEventListener("DOMContentLoaded", (function() {
        const screenshotsContainer = document.querySelector(".article-home__screenshots");
        const screenshots = document.querySelectorAll(".article-home__screenshots img");
        let currentIndex = 0;
        let interval;
        screenshotsContainer.classList.add("loading");
        function showNextImage() {
            screenshots[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % screenshots.length;
            screenshots[currentIndex].classList.add("active");
        }
        function startSlideshow() {
            interval = setInterval(showNextImage, 3500);
        }
        function stopSlideshow() {
            clearInterval(interval);
        }
        screenshots[currentIndex].classList.add("active");
        setTimeout((() => {
            screenshotsContainer.classList.remove("loading");
            startSlideshow();
        }), 100);
        screenshotsContainer.addEventListener("mouseover", stopSlideshow);
        screenshotsContainer.addEventListener("mouseout", startSlideshow);
    }));
    window["FLS"] = true;
})();