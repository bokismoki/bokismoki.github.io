// FIXED NAV AFTER VIEW IS ON PORTFOLIO SECTION
const nav = document.querySelector(".navigation");
const hero = document.querySelector(".hero");
const portfolio = document.querySelector(".portfolio");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const li1 = document.getElementById("li1");
const li2 = document.getElementById("li2");
const li3 = document.getElementById("li3");
const li4 = document.getElementById("li4");

document.addEventListener("scroll", e => {

    let positionHero = hero.getBoundingClientRect();
    let positionPortfolio = portfolio.getBoundingClientRect();
    let positionAbout = about.getBoundingClientRect();
    let positionContact = contact.getBoundingClientRect();

    // HERO BOUNDING
    if (positionHero.y <= 0) {

        li1.classList.add("navigation-list__item--active");
        li2.classList.remove("navigation-list__item--active");
        li3.classList.remove("navigation-list__item--active");
        li4.classList.remove("navigation-list__item--active");

    }

    // PORTFOLIO BOUNDING
    if (positionPortfolio.y <= 10) {

        li2.classList.add("navigation-list__item--active");
        li1.classList.remove("navigation-list__item--active");
        li3.classList.remove("navigation-list__item--active");
        li4.classList.remove("navigation-list__item--active");

    }

    // ABOUT BOUNDING
    if (positionAbout.y <= 10) {

        li3.classList.add("navigation-list__item--active");
        li1.classList.remove("navigation-list__item--active");
        li2.classList.remove("navigation-list__item--active");
        li4.classList.remove("navigation-list__item--active");

    }

    // CONTACT BOUNDING
    if (positionContact.y <= 0) {

        li4.classList.add("navigation-list__item--active");
        li1.classList.remove("navigation-list__item--active");
        li2.classList.remove("navigation-list__item--active");
        li3.classList.remove("navigation-list__item--active");

    }

    // FIX NAV
    if (positionPortfolio.y <= 50) {

        nav.style.position = "fixed";
        nav.style.top = "0px";
        nav.style.width = "100vw";
        nav.style.zIndex = "2";
        hero.style.height = "105vh";

    } else if (positionPortfolio.y >= 0) {

        nav.style.position = "relative";
        hero.style.height = "100vh";

    }

})

// PROJECTS FILTER
const filtersBtn = document.querySelectorAll(".filters button");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const all = document.querySelectorAll(".all");
const html = document.querySelectorAll(".html-g");
const js = document.querySelectorAll(".js-g");

filtersBtn.forEach(btn => {

    btn.addEventListener("click", e => {

        if (e.target.innerText === "ALL") {

            e.target.classList.add("filters__btn--active");
            btn2.classList.remove("filters__btn--active");
            btn3.classList.remove("filters__btn--active");

            all.forEach(item => {
                item.style.display = "block";
            });

        } else if (e.target.innerText === "HTML/CSS") {

            e.target.classList.add("filters__btn--active");
            btn1.classList.remove("filters__btn--active");
            btn3.classList.remove("filters__btn--active");

            html.forEach(item => {
                item.style.display = "block";
            });

            js.forEach(item => {
                item.style.display = "none";
            });

        } else if (e.target.innerText === "JS") {

            e.target.classList.add("filters__btn--active");
            btn1.classList.remove("filters__btn--active");
            btn2.classList.remove("filters__btn--active");

            js.forEach(item => {
                item.style.display = "block";
            });

            html.forEach(item => {
                item.style.display = "none";
            });

        }

    });

});


// HAMBURGER TOGGLER 
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation-list");

hamburger.addEventListener("click", () => {

    navigation.classList.toggle("show");

});