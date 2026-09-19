// ==============================
// MENU MOBILE
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// ==============================
// FECHAR MENU AO CLICAR
// ==============================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ==============================
// ANIMAÇÃO AO APARECER
// ==============================

const elements = document.querySelectorAll(
    ".service-card, .location-card, .about-content, .about-box, .price-box"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


// ==============================
// ANIMAÇÃO CSS
// ==============================

const animationStyle = document.createElement("style");

animationStyle.innerHTML = `

.hidden {
    opacity: 0;
    transform: translateY(25px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.show {
    opacity: 1;
    transform: translateY(0);
}

`;

document.head.appendChild(animationStyle);
