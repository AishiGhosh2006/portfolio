// ===============================
// Smooth Scroll for Navbar Links
// ===============================
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});


// ===============================
// Section Reveal Animation
// ===============================
const sections = document.querySelectorAll("section");

const revealSection = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("active-section");
    }
  });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);


// ===============================
// Active Navbar Highlight
// ===============================
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active-link");
    }
  });
});


// ===============================
// Simple Skill Animation
// ===============================
const skillCards = document.querySelectorAll("#skills .card");

const animateSkills = () => {
  skillCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.transform = "translateY(0)";
      card.style.opacity = "1";
    }, index * 200);
  });
};

const skillsSection = document.querySelector("#skills");

window.addEventListener("scroll", () => {
  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    animateSkills();
  }
});