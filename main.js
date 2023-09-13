document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav__link");

    function highlightNavLink() {
        const scrollPosition = window.scrollY;

        navLinks.forEach((link) => {
            const section = document.querySelector(link.getAttribute("href"));
            if (section.offsetTop <= scrollPosition + 100) {
                navLinks.forEach((link) => {
                    link.classList.remove("nav__link-active");
                });
                link.classList.add("nav__link-active");
            }
        });
    }
    window.addEventListener("scroll", highlightNavLink);
});

document.addEventListener("DOMContentLoaded", function () {
    const fixedIcon = document.getElementById("fixed-icon");

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const showIconPosition = 500;
        if (scrollY > showIconPosition) {
            fixedIcon.style.display = "block";
        } else {
            fixedIcon.style.display = "none";
        }
    });
});
