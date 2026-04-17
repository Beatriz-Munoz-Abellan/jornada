// ====================== NAV.JS ======================

let BASE_PATH = '/';

// ================= DETECTAR BASE PATH =================
function detectBasePath() {
  const pathParts = window.location.pathname.split('/');
  BASE_PATH = pathParts.length > 1 ? `/${pathParts[1]}/` : '/';
}

// ================= UTIL =================
function isHomePage() {
  const path = window.location.pathname;
  return path === '/' || path.endsWith('/index.html');
}

// ================= LOAD NAV =================
function loadNav() {
  detectBasePath();

  const navContainer = document.getElementById('main-nav');
  if (!navContainer) return;

  const isHome = isHomePage();

  const programItems = [
    { time: "8:30 - 9:15", key: "card0_Title" },
    { time: "9:15 - 9:45", key: "card1_Title" },
    { time: "9:45 - 10:15", key: "card2_Title" },
    { time: "10:30 - 11:30", key: "card3_Title" },
    { time: "11:30 - 12:15", key: "card4_Title" },
    { time: "12:30 - 13:30", key: "card5_Title" },
    { time: "13:45 - 14:30", key: "card6_Title" },
    { time: "14:30 - 14:45", key: "card7_Title" }
  ];

  const dropdownHTML = programItems.map((item, i) => `
    <div onclick="goToProgram(${i})" class="dropdown-item flex items-center gap-3 px-4 py-3 cursor-pointer  hover:bg-gray-100 transition-all">
    
      <i class="fa-solid fa-clock text-[#7a044b] text-sm"></i>
      <span class="dropdown-time text-sm font-medium text-gray-700 min-w-[80px]">
        ${item.time}
      </span>
      <span data-key="${item.key}" class="text-gray-800 text-sm"></span>
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

          <a href="${BASE_PATH}index.html">
            <img src="${BASE_PATH}img/Logo-Jornada1.png" alt="Logo" class="${isHome ? 'nav-logo' : 'h-20'}">
          </a>

          <button id="menu-toggle" class="md:hidden text-2xl">
            <i class="fa-solid fa-bars"></i>
          </button>

          <nav id="main-menu" class="menu flex gap-8 md:gap-10 font-medium ${textColor}">
            <a href="${BASE_PATH}index.html" class="nav-link" data-key="navHome"></a>
            <a href="${BASE_PATH}nosotros.html" class="nav-link" data-key="navAbout"></a>

            <div class="relative dropdown">
              <button id="program-btn" class="nav-link flex items-center gap-1" aria-expanded="false">
                <span data-key="navProgram"></span>
                <i id="chevron" class="fa-solid fa-chevron-down text-xs transition-transform duration-300"></i>
              </button>

              <div id="dropdown-menu" class="dropdown-content hidden">
               <div  class="dropdown-item flex m-auto text-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all">
                <i class="fa-solid fa-calendar-days text-[#7a044b] text-sm"></i>
               <a href="programa.html" class="text-gray-800 text-sm " data-key="navProgram">PROGRAMA</a>
               </div>

                ${dropdownHTML}
              </div>
            </div>

            <a href="${BASE_PATH}inscripcion.html" class="nav-link" data-key="navRegister"></a>
            <a href="${BASE_PATH}contacto.html" class="nav-link" data-key="navContact"></a>
          </nav>

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

// ================= ACTIVE LINK =================
function setActiveNavLink() {
  const currentPath = window.location.pathname.toLowerCase();

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');

    const href = link.getAttribute('href') || '';
    const cleanHref = href.toLowerCase().replace(BASE_PATH, '');

    if (cleanHref === 'index.html' || cleanHref === '') {
      if (isHomePage()) {
        link.classList.add('active');
      }
    } else if (currentPath.endsWith(cleanHref)) {
      link.classList.add('active');
    }
  });

  const programBtn = document.getElementById('program-btn');
  if (programBtn) {
    programBtn.classList.toggle(
      'active',
      currentPath.includes('programa.html')
    );
  }
}

// ================= NAV EVENTS =================
function initNavEvents() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('main-menu');
  const icon = menuToggle?.querySelector('i');

  if (menuToggle && menu && icon) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');

      icon.classList.toggle('fa-bars', !isOpen);
      icon.classList.toggle('fa-times', isOpen);
    });
  }

  const programBtn = document.getElementById('program-btn');
  if (programBtn) {
    programBtn.addEventListener('click', toggleDropdown);
  }

  // Cerrar dropdown al hacer click fuera
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('dropdown-menu');
    const button = document.getElementById('program-btn');

    if (!dropdown || !button) return;

    if (!button.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
      dropdown.classList.add('hidden');
      button.setAttribute('aria-expanded', 'false');
    }
  });

  ['ca', 'es', 'en'].forEach(code => {
    document.getElementById(`btn-${code}`)?.addEventListener('click', () => {
      changeLanguage(code);
      updateActiveLanguage(code);
    });
  });
}

// ================= SCROLL =================
function initScrollEffect() {
  const header = document.getElementById('main-header');
  if (!header) return;

  let ticking = false;

  function updateHeader() {
    const scrollY = window.scrollY;

    if (isHomePage()) {
      header.classList.toggle('scrolled', scrollY > 50);
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
function toggleDropdown() {
  const menu = document.getElementById('dropdown-menu');
  const chevron = document.getElementById('chevron');
  const btn = document.getElementById('program-btn');

  if (!menu || !chevron || !btn) return;

  const isMobile = window.innerWidth <= 768;
  const isOpen = menu.classList.contains('show');

  if (isMobile) {
    menu.classList.toggle('show');
  } else {
    if (isOpen) {
      menu.classList.remove('show');
      setTimeout(() => menu.classList.add('hidden'), 200);
    } else {
      menu.classList.remove('hidden');
      menu.offsetHeight;
      menu.classList.add('show');
    }
  }

  const nowOpen = menu.classList.contains('show');
  chevron.style.transform = nowOpen ? 'rotate(180deg)' : 'rotate(0deg)';
  btn.setAttribute('aria-expanded', nowOpen);
}

function goToProgram(index) {
  window.location.href = `${BASE_PATH}programa.html?item=${index}`;
}

// ================= LANGUAGE =================
function updateActiveLanguage(lang) {
  ['ca', 'es', 'en'].forEach(code => {
    document
      .getElementById(`btn-${code}`)
      ?.classList.toggle('active', code === lang);
  });
}

// ================= CARRUSEL =================
function initCarousel() {
  const carousel = document.getElementById('program-carousel');
  if (!carousel) return;

  const btnLeft = document.getElementById('btn-left');
  const btnRight = document.getElementById('btn-right');

  const scrollAmount = 320;

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

  btnLeft?.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  btnRight?.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  carousel.addEventListener('scroll', updateArrows);

  window.addEventListener('load', () => {
    showDetail(0);
    updateArrows();
  });
}

// ================= SMOOTH SCROLL =================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
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