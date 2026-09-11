emailjs.init({
    publicKey: "BGqUb7FNESQfvwNFl"
});

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

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    emailjs.sendForm(
        "service_5cmueu7",
        "template_4ohacx8",
        contactForm
    )
    .then(() => {
        alert("Message sent successfully!");
        contactForm.reset();
    })
    .catch((error) => {
    console.error("EmailJS Status:", error.status);
    console.error("EmailJS Message:", error.text);
    alert("Failed to send message. Please check the console.");
});
});