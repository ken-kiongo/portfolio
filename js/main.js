/* ===========================
   PORTFOLIO JS — Ken Kiongo
=========================== */

// ===== NAV SCROLL =====
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';

  const spans = hamburger.querySelectorAll('span');
  if (menuOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.transform = '';
  }
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.transform = '';
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll(
  '.service-card, .work-card, .testimonial-card, .reliability-card, .about-left, .about-right, .contact-left, .contact-right'
);

revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = ((i % 4) * 0.1) + 's';
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ===== STAT COUNTER ANIMATION =====
window.addEventListener('load', () => {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.count);
    const duration = 1500;
    const start = performance.now();

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    };

    requestAnimationFrame(update);
  });
});

// ===== WORK FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const workCards = document.querySelectorAll('.work-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    workCards.forEach(card => {
      const category = card.dataset.category;
      const matches = filter === 'all' || category === filter;
      if (matches) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ===== TESTIMONIALS SLIDER (mobile) =====
const tCards = document.querySelectorAll('.testimonial-card');
const tDots = document.querySelectorAll('.t-dot');
let currentTestimonial = 0;

function updateTestimonials(idx) {
  currentTestimonial = idx;
  tDots.forEach(d => d.classList.remove('active'));
  if (tDots[idx]) tDots[idx].classList.add('active');

  if (window.innerWidth <= 900) {
    tCards.forEach((c, i) => {
      c.style.display = i === idx ? 'block' : 'none';
    });
  } else {
    tCards.forEach(c => c.style.display = '');
  }
}

tDots.forEach(dot => {
  dot.addEventListener('click', () => {
    updateTestimonials(parseInt(dot.dataset.idx));
  });
});

function handleTestimonialsResize() {
  if (window.innerWidth <= 900) {
    updateTestimonials(currentTestimonial);
  } else {
    tCards.forEach(c => c.style.display = '');
  }
}
window.addEventListener('resize', handleTestimonialsResize);
handleTestimonialsResize();

setInterval(() => {
  updateTestimonials((currentTestimonial + 1) % tCards.length);
}, 5000);

// ===== CONTACT FORM — handled by Formspree =====
// Form submits natively to https://formspree.io/f/xgopeanr

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + id) {
          link.style.color = 'var(--accent)';
        }
      });
    }
  });
});

// ===== MAGNETIC BUTTONS =====
document.querySelectorAll('.btn-primary, .btn-ghost').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

// ===== PARALLAX HERO BG TEXT =====
const heroBgText = document.querySelector('.hero-bg-text');
if (heroBgText) {
  window.addEventListener('scroll', () => {
    heroBgText.style.transform = `translateX(-50%) translateY(${window.scrollY * 0.3}px)`;
  });
}

// ===== TILT EFFECT ON CARDS =====
document.querySelectorAll('.service-card, .work-card, .reliability-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    card.style.transform = `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ===== TERMINAL GLOW ON HOVER =====
const terminalCard = document.querySelector('.terminal-card');
if (terminalCard) {
  terminalCard.addEventListener('mousemove', (e) => {
    const rect = terminalCard.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    terminalCard.style.background = `radial-gradient(circle at ${x}% ${y}%, #1e2230 0%, var(--bg3) 60%)`;
  });
  terminalCard.addEventListener('mouseleave', () => {
    terminalCard.style.background = '';
  });
}

// ===== PAGE LOAD FADE =====
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});
