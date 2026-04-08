// ================= COOKIE CONSENT INJECTED =================

const COOKIE_NAME = "cookie_consent";

// 1. Función para inyectar el HTML automáticamente al cargar el script
function injectCookieBanner() {
    const bannerHTML = `
    <div id="cookie-banner" class="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-2xl bg-white shadow-2xl rounded-2xl p-6 z-50 hidden border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300">
        <div class="flex flex-col gap-4">
            <div>
                <h3 class="text-lg font-semibold text-gray-800" data-key="cookieTitle">Cookies</h3>
                <p class="text-sm text-gray-600 mt-1 leading-relaxed" data-key="cookieText">
                Utilitzem galetes pròpies i de tercers per millorar la teva experiència, analitzar el trànsit i mostrar contingut personalitzat Pots consultar la nostra
                 <a href='politica-cookies.html' class='text-[#7a044b] font-medium hover:underline' data-key='cookieLink'>Política de Cookies</a>
                </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-3 sm:justify-end">
                <button id="btn-reject" class="px-4 py-2 rounded-xl text-sm font-medium bg-gray-100 hover:bg-gray-200 transition">
                    <span data-key="cookieReject">Rebutjar</span>
                </button>
                <button id="btn-accept" class="px-5 py-2 rounded-xl text-sm font-semibold bg-[#7a044b]/70 text-white hover:bg-[#7a044b]/80 transition shadow">
                    <span data-key="cookieAccept">Acceptar </span>
                </button>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', bannerHTML);
}

function setCookieConsent(value) {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    document.cookie = `${COOKIE_NAME}=${value};expires=${date.toUTCString()};path=/;SameSite=Lax`;
}

function getCookieConsent() {
    return document.cookie
        .split("; ")
        .find(row => row.startsWith(COOKIE_NAME + "="))
        ?.split("=")[1] || null;
}

// Función para resetear (ahora funcionará en cualquier página)
function resetCookies() {
    document.cookie = COOKIE_NAME + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax";
    localStorage.clear();
    location.reload();
}

function showCookieBanner() {
    const banner = document.getElementById("cookie-banner");
    if (!banner) return;

    if (!getCookieConsent()) {
        banner.classList.remove("hidden");
        // Pequeño delay para que la transición de entrada funcione
        setTimeout(() => {
            banner.classList.add("translate-y-0", "opacity-100");
        }, 100);
    }
}

function hideCookieBanner() {
    const banner = document.getElementById("cookie-banner");
    if (!banner) return;
    banner.classList.add("opacity-0", "translate-y-10");
    setTimeout(() => { banner.classList.add("hidden"); }, 300);
}

function initCookieConsent() {
    const acceptBtn = document.getElementById("btn-accept");
    const rejectBtn = document.getElementById("btn-reject");

    acceptBtn?.addEventListener("click", () => {
        setCookieConsent("all");
        hideCookieBanner();
    });

    rejectBtn?.addEventListener("click", () => {
        setCookieConsent("rejected");
        hideCookieBanner();
    });
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    injectCookieBanner(); // Inyectamos el HTML primero
    showCookieBanner();   // Luego comprobamos si hay que mostrarlo
    initCookieConsent();  // Y activamos los botones
});