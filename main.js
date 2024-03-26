document.addEventListener("DOMContentLoaded", function () {
    const navLinksResonsive = document.querySelectorAll(".nav__menu-linkResponsive");
    const navLinks = document.querySelectorAll(".nav__menu-link");

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

        navLinksResonsive.forEach((link) => {
            const section = document.querySelector(link.getAttribute("href"));
            if (section.offsetTop <= scrollPosition + 100) {
                navLinksResonsive.forEach((link) => {
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

document.addEventListener("DOMContentLoaded", function () {
    const iconMenu = document.querySelector('.icon__menu');
    const menuLinks = document.querySelector('.nav__menuLinks');
    let menuVisible = false;

    function showMenu() {
        menuLinks.style.display = 'block';
        menuVisible = true;
    }

    function hideMenu() {
        menuLinks.style.display = 'none';
        menuVisible = false;
    }

    iconMenu.addEventListener('click', () => {
        if (menuVisible) {
            hideMenu();
        } else {
            showMenu();
        }
    });

    document.addEventListener('click', (event) => {
        if (menuVisible && !event.target.closest('.nav__linksResponsive')) {
            hideMenu();
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const textsToChange = document.querySelectorAll("[data-section]");

    const changeLanguage = async (language) => {
        const requestJson = await fetch(`./languages/${language}.json`);
        const texts = await requestJson.json();
        
        for(const textToChange of textsToChange) {
            const section = textToChange.dataset.section;
            const value = textToChange.dataset.value;

            const inputElementPlaceholder = document.getElementById("mailPlaceholder");
            if (inputElementPlaceholder) {
                inputElementPlaceholder.placeholder = texts[section].mailPlaceholder;
            }

            const inputElementMessage = document.getElementById("message");
            if (inputElementMessage) {
                inputElementMessage.placeholder = texts[section].message;
            }

            textToChange.innerHTML = texts[section][value];
        }
    }

    const flagsElement = document.getElementById("flags");

    flagsElement.addEventListener("click", (e) => {
        changeLanguage(e.target.parentElement.dataset.language);
    });
});

// function zoom(event) {
//     const rect = event.target.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;
    
//     const scaleX = x / event.target.offsetWidth;
//     const scaleY = y / event.target.offsetHeight;
  
//     event.target.style.transformOrigin = scaleX * 100 + '% ' + scaleY * 100 + '%';
//   }