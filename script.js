const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenuClose = document.querySelector(".mobile-menu-close");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
  document.body.style.overflow = mobileMenu.classList.contains("active")
    ? "hidden"
    : "";
}

mobileMenuToggle.addEventListener("click", toggleMobileMenu);
mobileMenuClose.addEventListener("click", toggleMobileMenu);

// Close mobile menu when clicking on a link
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileMenu.classList.contains("active")) {
      toggleMobileMenu();
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    mobileMenu.classList.contains("active") &&
    !mobileMenu.contains(e.target) &&
    !mobileMenuToggle.contains(e.target)
  ) {
    toggleMobileMenu();
  }
});

const scrollToTopButton = document.getElementById("scrollToTop");

function toggleScrollToTopButton() {
  if (window.pageYOffset > 300) {
    scrollToTopButton.classList.add("visible");
  } else {
    scrollToTopButton.classList.remove("visible");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", toggleScrollToTopButton);
scrollToTopButton.addEventListener("click", scrollToTop);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".feature-item, .grid-item, .team-member, .blog-card"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    ".feature-item, .grid-item, .team-member, .blog-card"
  );

  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  animateOnScroll();

  window.addEventListener("scroll", animateOnScroll);
});
