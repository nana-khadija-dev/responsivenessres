
const menuButton = document.getElementById("menu-button");
const navbar = document.getElementById("navbar");
const themeButton = document.getElementById("theme-button");
const backToTopButton = document.getElementById("back-to-top");
const contactForm = document.getElementById("contact-form");
const formResponse = document.getElementById("form-response");
const navLinks = document.querySelectorAll(".nav-link");

// Mobile menu
menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show");

    if (navbar.classList.contains("show")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});

// Close mobile menu after clicking a link
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("show");
        menuButton.textContent = "☰";
    });
});

// Dark mode
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️";
        localStorage.setItem("portfolioTheme", "dark");
    } else {
        themeButton.textContent = "🌙";
        localStorage.setItem("portfolioTheme", "light");
    }
});

// Remember theme after refreshing the page
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️";
}

// Back to top button
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Contact form
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formResponse.textContent =
        `Thank you, ${name}! Your message has been received.`;

    contactForm.reset();
});

// Active navigation link
const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});
