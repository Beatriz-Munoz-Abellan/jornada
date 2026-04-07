// === CARRUSEL ===
const carousel = document.getElementById('program-carousel');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
let currentIndex = 0;

function showDetail(index) {
  currentIndex = index;
  updateActiveCard();

  const card = document.getElementById(`card-${index}`);
  const title = card.querySelector('h3').innerText;
  
  const contentSource = document.getElementById(`content-${index}`);

  document.getElementById('detail-title').innerText = title;
  document.getElementById('detail-text').innerHTML = contentSource.innerHTML;
}

function updateActiveCard() {
  const cards = document.querySelectorAll('.program-card');
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === currentIndex);
  });
}

function scrollCarousel(direction) {
  const scrollAmount = 330;
  carousel.scrollBy({
    left: scrollAmount * direction,
    behavior: 'smooth'
  });
}

function updateArrows() {
  const scrollLeftPos = carousel.scrollLeft;
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;

  btnLeft.style.opacity = (scrollLeftPos < 30) ? "0" : "1";
  btnLeft.style.pointerEvents = (scrollLeftPos < 30) ? "none" : "auto";

  btnRight.style.opacity = (scrollLeftPos > maxScroll - 30) ? "0" : "1";
  btnRight.style.pointerEvents = (scrollLeftPos > maxScroll - 30) ? "none" : "auto";
}

// ====================== BOTÓN VOLVER ARRIBA ======================
function createBackToTopButton() {
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.innerHTML = `<i class="fa-solid fa-arrow-up text-xl"></i>`;
  btn.className = `
    fixed bottom-6 right-6 w-14 h-14 bg-purple-700 hover:bg-purple-800 
    text-white rounded-full shadow-lg flex items-center justify-center 
    transition-all duration-300 z-50 opacity-0 invisible
  `;
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'invisible');
      btn.classList.add('opacity-100', 'visible');
    } else {
      btn.classList.add('opacity-0', 'invisible');
      btn.classList.remove('opacity-100', 'visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// === INICIALIZACIÓN CORRECTA ===
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar botón volver arriba
  createBackToTopButton();

  // Inicializar carrusel
  if (carousel) {
    carousel.addEventListener('scroll', updateArrows);
    showDetail(0);
    updateArrows();
  }
});