const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});