/* TYPEWRITER */
const roles = ["Web Developer", "Aspiring DevOps Engineer", "CI/CD Enthusiast"];
const typeEl = document.getElementById("typewriter");
let r = 0, c = 0, deleting = false;

function tick() {
  const full = roles[r];
  if (!deleting) {
    c++;
    typeEl.textContent = full.substring(0, c);
    if (c === full.length) {
      deleting = true;
      setTimeout(tick, 1100);
      return;
    }
  } else {
    c--;
    typeEl.textContent = full.substring(0, c);
    if (c === 0) {
      deleting = false;
      r = (r + 1) % roles.length;
    }
  }
  setTimeout(tick, deleting ? 45 : 100);
}
tick();

/* SMOOTH NAVIGATION */
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id = a.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
  })
});

/* PROGRESS BARS: animate when skills section visible */
const skillSection = document.getElementById('skills');
const fills = document.querySelectorAll('.bar-fill');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      fills.forEach(f=>{
        const w = f.getAttribute('data-fill');
        f.style.width = w;
      });
      obs.unobserve(entry.target);
    }
  });
},{threshold:0.2});

observer.observe(skillSection);

/* Optional: subtle floating animation for profile card (small effect) */
const heroCard = document.querySelector('.hero-card');
let t = 0;
function floatCard(){
  t += 0.01;
  const y = Math.sin(t) * 4;
  if(heroCard) heroCard.style.transform = `translateY(${y}px)`;
  requestAnimationFrame(floatCard);
}
floatCard();



