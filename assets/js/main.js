
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));


const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );

    if (
      scrollDown > sectionTop &&
      scrollDown <= sectionTop + sectionHeight &&
      sectionsClass
    ) {
      sectionsClass.classList.add("active-link");
    } else if (sectionsClass) {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);


const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  // reset: true // Uncomment if you want animations to repeat on scroll
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text");
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });



document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      e.preventDefault();
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth",
      });
    }
  });
});


const scrollUpBtn = document.getElementById("scroll-up");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) scrollUpBtn.classList.add("show-scroll");
  else scrollUpBtn.classList.remove("show-scroll");
});


const contactForm = document.querySelector(".contact__form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    setTimeout(() => {
      alert("✅ Message sent successfully! Thank you for reaching out.");
    }, 500);
  });
}
