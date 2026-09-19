const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


const links = document.querySelectorAll("#navMenu a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


const cards = document.querySelectorAll(
    ".service-card, .location-card, .about-box, .price-container"
);


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "opacity .6s ease, transform .6s ease";

    observer.observe(card);

});
