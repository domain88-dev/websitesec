// Mobile nav toggle
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('show');
  navToggle.setAttribute('aria-expanded', String(open));
});

// Close nav when clicking a link (mobile)
nav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('show'));
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll fix for Safari (optional but harmless)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

        // Tab functionality
        document.addEventListener('DOMContentLoaded', function() {
            const tabBtns = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all buttons and contents
                    tabBtns.forEach(b => b.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));
                    
                    // Add active class to clicked button
                    btn.classList.add('active');
                    
                    // Show corresponding content
                    const tabId = btn.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
        });

// Gallery modal
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const modalCaption = document.getElementById('modalCaption');
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.add('show');
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalCaption.textContent = img.alt || '';
    modal.setAttribute('aria-hidden', 'false');
  });
});
document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  });
});
modal?.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }
});

// Contact form -> open WhatsApp with prefilled text
const form = document.getElementById('contactForm');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(form);
  const name = (fd.get('name') || '').toString().trim();
  const email = (fd.get('email') || '').toString().trim();
  const message = (fd.get('message') || '').toString().trim();

  if (!name || !email || !message) {
    alert('Please fill all required fields.');
    return;
  }

  const text = `Halo SEC,%0A%0ANama: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APesan: ${encodeURIComponent(message)}%0A%0ATerkirim dari website SEC.`;
  const phone = '6281234567890'; // ganti dengan nomor WA Anda (tanpa +)
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
});
