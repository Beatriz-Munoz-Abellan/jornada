// ====================== NAV.JS ======================
// ================= CONFIG =================
const BASE_PATH = ''

function loadNav() {
  const navContainer = document.getElementById('main-nav');
  if (!navContainer) return;

  const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html';
  // 🔹 Items del programa (dinámico)
  const programItems = [
    { time: "8:30", key: "card0_Title" },
    { time: "9:00", key: "card1_Title" },
    { time: "9:30", key: "card2_Title" },
    { time: "10:30", key: "card3_Title" },
    { time: "11:30", key: "card4_Title" },
    { time: "13:45", key: "card5_Title" },
    { time: "14:30", key: "card6_Title" },
    { time: "14:30", key: "card7_Title" }

  ];

  const dropdownHTML = programItems.map((item, i) => `
    <div onclick="goToProgram(${i})" class="dropdown-item cursor-pointer">
      <span class="dropdown-time">${item.time}</span>
      <span data-key="${item.key}"></span>
    </div>
  `).join('');

  const headerClass = isHome
    ? "home-nav fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out"
    : "normal-nav relative top-0 left-0 w-full z-50 transition-all duration-300 ease-out";

  const textColor = isHome ? "" : "text-gray-700";

  navContainer.innerHTML = `
    <header id="main-header" class="${headerClass}">
      <div class="max-w-7xl mx-auto px-6 py-5">
        <div class="flex justify-between items-center">

          <!-- LOGO -->
            <a href="${BASE_PATH}index.html">
            <img src="img/Logo-Jornada1.png" alt="Logo" class="${isHome ? 'nav-logo' : 'h-20'}">
          </a>

          <!-- HAMBURGUESA -->
          <button id="menu-toggle" class="md:hidden text-2xl">
            <i class="fa-solid fa-bars"></i>
          </button>

          <!-- MENÚ -->
          <nav id="main-menu" class="menu flex  gap-8 md:gap-10 font-medium ${textColor}">
            
            <a href="index.html" class="nav-link" data-key="navHome"></a>

            <a href="nosotros.html" class="nav-link" data-key="navAbout"></a>

            <div class="relative dropdown">
              <button id="program-btn" class="nav-link flex items-center gap-1">
                <span data-key="navProgram"></span>
                <i id="chevron" class="fa-solid fa-chevron-down text-xs transition-transform duration-300"></i>
              </button>

              <div id="dropdown-menu" class="dropdown-content hidden">
                ${dropdownHTML}
              </div>
            </div>

            <a href="inscripcion.html" class="nav-link" data-key="navRegister"></a>
            <a href="contacto.html" class="nav-link" data-key="navContact"></a>

          </nav>

          <!-- IDIOMAS -->
          <div class="flex gap-2 ml-4">
            <button id="btn-ca" class="lang-btn">CA</button>
            <button id="btn-es" class="lang-btn">ES</button>
            <button id="btn-en" class="lang-btn">EN</button>
          </div>

        </div>
      </div>
    </header>
  `;

  initNavEvents();
  changeLanguage(currentLang);
  updateActiveLanguage(currentLang);
  setActiveNavLink();
}
function setActiveNavLink() {
  const currentPath = window.location.pathname;

  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = link.getAttribute('href');

    if (!linkPath) return;

    // Normalizamos casos como "/" y "/index.html"
    const isHomeLink = linkPath === '/index.html' || linkPath === '/';
    const isHomeCurrent = currentPath === '/' || currentPath.includes('index.html');

    if (
      (isHomeLink && isHomeCurrent) ||
      (!isHomeLink && currentPath.includes(linkPath))
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Caso especial: programa
  if (currentPath.includes('programa.html')) {
    const programBtn = document.getElementById('program-btn');
    if (programBtn) {
      programBtn.classList.add('active');
    }
  }
}
// ================= NAV EVENTS =================

function initNavEvents() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('main-menu');
  const icon = menuToggle ? menuToggle.querySelector('i') : null;

  if (!menuToggle || !menu || !icon) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');

    if (isOpen) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  const programBtn = document.getElementById('program-btn');
  if (programBtn) {
    programBtn.addEventListener('click', toggleDropdown);
  }

  document.getElementById('btn-ca')?.addEventListener('click', () => {
    changeLanguage('ca');
    updateActiveLanguage('ca');
  });

  document.getElementById('btn-es')?.addEventListener('click', () => {
    changeLanguage('es');
    updateActiveLanguage('es');
  });

  document.getElementById('btn-en')?.addEventListener('click', () => {
    changeLanguage('en');
    updateActiveLanguage('en');
  });
}

// ================= SCROLL EFFECT =================

function initScrollEffect() {
  const header = document.getElementById('main-header');
  if (!header) return;

  let ticking = false;

  function updateHeader() {
    const scrollY = window.scrollY;
    const isHome = window.location.pathname === '/' || window.location.pathname.includes('index.html');

    if (isHome) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    } else {
      if (scrollY > 100) {
        header.classList.add('fixed', 'shadow-md');
        header.classList.remove('relative');
      } else {
        header.classList.remove('fixed', 'shadow-md');
        header.classList.add('relative');
      }
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });
}

// ================= DROPDOWN =================

let dropdownOpen = false;

function toggleDropdown() {
  const menu = document.getElementById('dropdown-menu');
  const chevron = document.getElementById('chevron');

  if (!menu || !chevron) return;

  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    menu.classList.toggle('show');

    chevron.style.transform =
      menu.classList.contains('show')
        ? 'rotate(180deg)'
        : 'rotate(0deg)';
  } else {
    dropdownOpen = !dropdownOpen;

    if (dropdownOpen) {
      menu.classList.remove('hidden');
      menu.offsetHeight;
      menu.classList.add('show');
      chevron.style.transform = 'rotate(180deg)';
    } else {
      menu.classList.remove('show');
      chevron.style.transform = 'rotate(0deg)';
      setTimeout(() => menu.classList.add('hidden'), 250);
    }
  }
}

function goToProgram(index) {
  const menu = document.getElementById('dropdown-menu');
  const chevron = document.getElementById('chevron');

  if (menu) {
    menu.classList.remove('show');
    if (chevron) chevron.style.transform = 'rotate(0deg)';
    setTimeout(() => menu.classList.add('hidden'), 300);
  }

  window.location.href = `${BASE_PATH}programa.html?item=${index}`;
}

// ================= LANGUAGE ACTIVE =================

function updateActiveLanguage(lang) {
  const buttons = ["ca", "es", "en"];

  buttons.forEach(code => {
    const btn = document.getElementById(`btn-${code}`);
    if (!btn) return;

    btn.classList.toggle("active", code === lang);
  });
}

// ================= CARRUSEL =================

function initCarousel() {
  const carousel = document.getElementById('program-carousel');
  if (!carousel) return;

  const btnLeft = document.getElementById('btn-left');
  const btnRight = document.getElementById('btn-right');

  const scrollAmount = 320;

  function scrollCarousel(direction) {
    carousel.scrollBy({
      left: scrollAmount * direction,
      behavior: 'smooth'
    });
  }

  function updateArrows() {
    const scrollLeft = carousel.scrollLeft;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    if (btnLeft) {
      btnLeft.style.opacity = scrollLeft < 30 ? '0.4' : '1';
      btnLeft.style.pointerEvents = scrollLeft < 30 ? 'none' : 'auto';
    }

    if (btnRight) {
      btnRight.style.opacity = scrollLeft > maxScroll - 30 ? '0.4' : '1';
      btnRight.style.pointerEvents = scrollLeft > maxScroll - 30 ? 'none' : 'auto';
    }
  }

  btnLeft?.addEventListener('click', () => scrollCarousel(-1));
  btnRight?.addEventListener('click', () => scrollCarousel(1));
  carousel.addEventListener('scroll', updateArrows);

  window.addEventListener('load', () => {
    showDetail(0);
    updateArrows();
  });
}

// ================= SMOOTH SCROLL =================

// ... (tus funciones loadNav, initNavEvents, etc., se mantienen igual)

// 1. Encapsula el Smooth Scroll
function initSmoothScroll() {
  // Ahora buscamos los enlaces DESPUÉS de que el Nav se ha cargado
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}


// ================= INIT =================

document.addEventListener('DOMContentLoaded', () => {
  loadNav();
  initScrollEffect();
  initCarousel();
  initSmoothScroll();
});

// ================= GLOBAL =================

window.toggleDropdown = toggleDropdown;
window.goToProgram = goToProgram;


