// ---------- TYPEWRITER EFFECT ----------
const typewriterElement = document.getElementById("typewriter");
const phrases = [
  "Web Developer.",
  "DevOps & Cloud Enthusiast.",
  "AI & Automation Explorer."
];
let typeIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 50;
let delayBetween = 2000;

function type() {
  if (charIndex < phrases[typeIndex].length) {
    typewriterElement.textContent += phrases[typeIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterElement.textContent = phrases[typeIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    typeIndex = (typeIndex + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (phrases.length) setTimeout(type, 500);
});

// ---------- SKILL BAR ANIMATION ----------
function animateSkillBars() {
  const bars = document.querySelectorAll(".bar-fill");
  bars.forEach(bar => {
    const fill = bar.getAttribute("data-fill");
    bar.style.width = fill;
  });
}

// Animate when skills section is visible
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}

window.addEventListener("scroll", function() {
  const skillsSection = document.getElementById("skills");
  if (isElementInViewport(skillsSection)) {
    animateSkillBars();
  }
});

// ---------- SMOOTH SCROLL FOR NAV LINKS ----------
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
