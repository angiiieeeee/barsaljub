// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 70,
      behavior: "smooth",
    });

    // Close mobile carta after clicking a link
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });
});

// carta tabs
const cartaTabs = document.querySelectorAll(".carta-tab");

cartaTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    cartaTabs.forEach((t) => t.classList.remove("active"));

    // Add active class to clicked tab
    tab.classList.add("active");

    // Here you would typically change the content
    // For a fully working version, you'd need to add the other carta categories
    const target = tab.dataset.target;
    console.log(`Showing ${target} carta`);

    // In a complete implementation, you would show/hide different carta sections here
  });
});
