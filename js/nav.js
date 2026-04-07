// ====================== NAV.JS ======================

let BASE_PATH = '/Jornada/';   // ← Cambia esto si cambias el nombre del repo

// ================= DETECTAR BASE PATH (más robusto) =================
function detectBasePath() {
  const path = window.location.pathname;

  if (path.includes('/Jornada/')) {
    BASE_PATH = '/Jornada/';
  } else if (path === '/' || path === '/index.html') {
    BASE_PATH = '/';
  }
}

// ================= LOAD NAV =================
function loadNav() {
  detectBasePath();

  const navContainer = document.getElementById('main-nav');
  if (!navContainer) return;

  const currentPath = window.location.pathname.toLowerCase();

  // Detectar si estamos en la página de inicio
  const isHome = currentPath === '/' || 
                 currentPath.endsWith('/index.html') || 
                 currentPath === BASE_PATH || 
                 currentPath === BASE_PATH + 'index.html';

  // Items del programa
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
            <img src="${BASE_PATH}img/Logo-Jornada1.png" alt="Logo" class="${isHome ? 'nav-logo' : 'h-20'}">
          </a>

          <!-- HAMBURGUESA -->
          <button id="menu-toggle" class="md:hidden text-2xl">
            <i class="fa-solid fa-bars"></i>
          </button>

          <!-- MENÚ -->
          <nav id="main-menu" class="menu flex gap-8 md:gap-10 font-medium ${textColor}">
            <a href="${BASE_PATH}index.html" class="nav-link" data-key="navHome"></a>
            <a href="${BASE_PATH}nosotros.html" class="nav-link" data-key="navAbout"></a>

            <div class="relative dropdown">
              <button id="program-btn" class="nav-link flex items-center gap-1">
                <span data-key="navProgram"></span>
                <i id="chevron" class="fa-solid fa-chevron-down text-xs transition-transform duration-300"></i>
              </button>

              <div id="dropdown-menu" class="dropdown-content hidden">
                ${dropdownHTML}
              </div>
            </div>

            <a href="${BASE_PATH}inscripcion.html" class="nav-link" data-key="navRegister"></a>
            <a href="${BASE_PATH}contacto.html" class="nav-link" data-key="navContact"></a>
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

// ================= ACTIVE NAV LINK =================
function setActiveNavLink() {
  const currentPath = window.location.pathname.toLowerCase();

  // Quitar active a todos
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Links normales
  document.querySelectorAll('.nav-link').forEach(link => {
    let href = (link.getAttribute('href') || '').toLowerCase();
    href = href.replace(BASE_PATH, '');

    if (href === 'index.html' || href === '') {
      if (currentPath === '/' || currentPath.endsWith('/index.html') || currentPath === BASE_PATH) {
        link.classList.add('active');
      }
    } else if (currentPath.includes(href)) {
      link.classList.add('active');
    }
  });

  // Programa (solo activo en programa.html)
  const programBtn = document.getElementById('program-btn');
  if (programBtn) {
    if (currentPath.includes('programa.html')) {
      programBtn.classList.add('active');
    } else {
      programBtn.classList.remove('active');
    }
  }
}

// ================= Otras funciones (mantener las tuyas) =================
function initNavEvents() {
  // ... tu código actual de initNavEvents ...
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('main-menu');
  const icon = menuToggle ? menuToggle.querySelector('i') : null;

  if (menuToggle && menu && icon) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      icon.classList.toggle('fa-bars', !isOpen);
      icon.classList.toggle('fa-times', isOpen);
    });
  }

  document.getElementById('program-btn')?.addEventListener('click', toggleDropdown);

  // Botones de idioma (mantener los tuyos)
  document.getElementById('btn-ca')?.addEventListener('click', () => { changeLanguage('ca'); updateActiveLanguage('ca'); });
  document.getElementById('btn-es')?.addEventListener('click', () => { changeLanguage('es'); updateActiveLanguage('es'); });
  document.getElementById('btn-en')?.addEventListener('click', () => { changeLanguage('en'); updateActiveLanguage('en'); });
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

// ================= INIT =================
document.addEventListener('DOMContentLoaded', () => {
  loadNav();
  initScrollEffect();
  initCarousel();
  initSmoothScroll();
});

// Exponer funciones globales
window.toggleDropdown = toggleDropdown;
window.goToProgram = goToProgram;