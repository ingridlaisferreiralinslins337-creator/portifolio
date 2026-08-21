/* =========================================================
   PORTFÓLIO — INGRID LINS
   JavaScript principal
========================================================= */


/* =========================================================
   NAVBAR DURANTE O SCROLL
========================================================= */

const navbar = document.getElementById("mainNavbar");

function updateNavbar() {
    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* =========================================================
   FECHAR MENU MOBILE APÓS CLICAR EM UM LINK
========================================================= */

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarContent = document.getElementById("navbarContent");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {

        if (
            navbarContent.classList.contains("show") &&
            window.innerWidth < 992
        ) {
            const bootstrapCollapse =
                bootstrap.Collapse.getOrCreateInstance(navbarContent);

            bootstrapCollapse.hide();
        }
    });
});


/* =========================================================
   EFEITO DE TEXTO DIGITANDO
========================================================= */

const typingElement = document.getElementById("typingText");

const typingPhrases = [
    "Interesse em interfaces industriais.",
    "Tecnologia aplicada à indústria.",
    "Em constante aprendizado."
];

let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeText() {

    const currentPhrase = typingPhrases[phraseIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentPhrase.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentPhrase.length) {

            isDeleting = true;

            setTimeout(typeText, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentPhrase.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            isDeleting = false;

            phraseIndex =
                (phraseIndex + 1) % typingPhrases.length;
        }
    }

    const typingSpeed = isDeleting ? 35 : 65;

    setTimeout(typeText, typingSpeed);
}

if (typingElement) {
    typeText();
}


/* =========================================================
   ANIMAÇÕES DE ENTRADA
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================================
   BOTÃO VOLTAR AO TOPO
========================================================= */

const backToTopButton = document.getElementById("backToTop");

function updateBackToTop() {

    if (window.scrollY > 500) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
}

window.addEventListener("scroll", updateBackToTop);

backToTopButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

updateBackToTop();


/* =========================================================
   SCROLL SUAVE PARA LINKS INTERNOS
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const navbarHeight =
            navbar.offsetHeight;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    });
});