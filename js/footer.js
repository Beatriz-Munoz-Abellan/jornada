// ====================== FOOTER.JS - Versión mejorada con Info + y Contacto ======================
function loadFooter() {
  const footerContainer = document.getElementById('main-footer');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <!-- ====================== ORGANITZACIÓ I COL·LABORADORS ====================== -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-8">

        <!-- Logos Organitzadors i Col·laboradors -->
        <div class="mb-20 text-center">
          <h4 data-key="organitza" class="text-base text-gray-600 uppercase tracking-wider mb-7"> Organitza</h4>

          <div class="flex flex-wrap justify-center items-center gap-10 md:gap-12 opacity-90">

            <div class="w-40 h-24 flex items-center justify-center">
              <img src="img/Logo_ACOF letras abajo.png" class="max-h-full max-w-full object-contain">
            </div>
            <div class="w-40 h-24 flex items-center justify-center">
              <img src="img/Coordinadora De La Llengua - 1.png" class="max-h-full max-w-full object-contain">
            </div>
            <div class="w-40 h-24 flex items-center justify-center">
              <img src="img/Camins.png" class="max-h-full max-w-full object-contain">
            </div>
            <div class="w-40 h-24 flex items-center justify-center">
              <img src="img/EICA-Color.png" class="max-h-full max-w-full object-contain">
            </div>
            <div class="w-40 h-24 flex items-center justify-center">
              <img src="img/EdV_color_horizontal.png" class="max-h-full max-w-full object-contain">
            </div>
            <div class="w-40 h-24 flex items-center justify-center">
              <img src="img/Bayt.png" class="max-h-full max-w-full object-contain">
            </div>
            <div class="w-40 h-24 flex items-center justify-center">
              <img src="img/LaTroca_logo_horitzontal.png" class="max-h-full max-w-full object-contain">
            </div>
            <div class="w-40 h-24 flex items-center justify-center">
              <img src="img/logo CEAR_cat.jpg" class="max-h-full max-w-full object-contain">
            </div>
            <div class="w-40 h-24 flex items-center justify-center">
              <img src="img/001 CNL DE BARCELONA.png" class="max-h-full max-w-full object-contain">
            </div>
            <div class="w-40 h-24 flex items-center justify-center">
              <img src="img/UAB-GREIP.png" class="max-h-full max-w-full object-contain">
            </div>
            <div class="w-40 h-24 flex items-center justify-center">
              <img src="img/Xarxa d_acompanyament.png" class="max-h-full max-w-full object-contain">
            </div>

          </div>
        </div>

        <!-- Bloques Institucionales -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-8xl items-start text-center mb-20">

          <div>
            <h4 data-key="CertificatUB" class="text-base text-gray-600 uppercase tracking-wider mb-6">Certificat per la UB</h4>
            <div class="flex justify-center">
              <img src="img/logo ice.png" class="h-16 object-contain">
            </div>
          </div>

          <div>
            <h4 data-key="recolzament" class="text-base text-gray-600 uppercase tracking-wider mb-6"> Amb el recolzament de</h4>
            <div class="flex flex-wrap justify-center items-center gap-6">
              <img src="img/politicalinguistica_v3.jpg" class="h-16 object-contain">
              <img src="img/educacio_v3.jpg" class="h-16 object-contain">
              <img src="img/drets_socials_v3.jpg" class="h-16 object-contain">
            </div>
          </div>

          <div>
            <h4 data-key="finançament" class="text-base text-gray-600 uppercase tracking-wider mb-6">Amb el finançament de</h4>
            <div class="flex justify-center gap-4">
              <img src="img/AJBCN_Sign_Com_Vermell_Transparent.png" class="h-12 object-contain">
            </div>
            <div class="flex justify-center gap-4 mt-4">
              <img src="img/EPIM.jpg" class="h-16 object-contain">
            </div>
          </div>

        </div>

        <!-- Col·laboracions -->
        <div class="pt-7 border-t border-gray-300 text-center mb-16">
          <h4 data-key="col·laboració" class="text-base text-gray-600 uppercase tracking-wider mb-7"> Amb la col·laboració de</h4>
          <div class="flex flex-wrap justify-center items-center gap-12 opacity-80">
            <img src="img/Casa Asia.png" class="h-16 object-contain">
            <img src="img/Logo_Dialegs_v2 (1).png" class="h-16 object-contain">
            <img src="img/Accem.png" class="h-12 object-contain">
          </div>
        </div>
      </div>
    </section>

    <!-- ====================== INFO + + CONTACTE CLÁSICO ====================== -->
    <footer class="bg-gray-900 text-gray-300 py-16">
      <div class="max-w-7xl mx-auto px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">

          <!-- Columna 1: Info General -->
          <div>
            <h4  class="text-white text-lg font-semibold mb-6" data-key="heroTitle" >I Jornada d’Acollida Sociolingüística</h4>
            <p class="text-sm leading-relaxed" data-key="footerInfoDesc">
             Una jornada organitzada per ACOF i la Coordinadora de la Llengua de Barcelona amb el suport d’entitats compromeses amb l’acollida lingüística i la inclusió.
            </p>
            <p  class="text-xs text-gray-500 mt-8" data-key="heroDate">
            8 de maig de 2026 · Barcelona
            </p>
            <div class=" w-40 py-4 text-sm">
              <img src="img/Logo_ACOF letras abajo.png" class="max-h-full max-w-full object-contain">
            </div>
          </div>

          <!-- Columna 2: Enllaços Ràpids -->
          <div>
            <h4 class="text-white text-lg font-semibold mb-6" data-key="footerLinksTitle">Enllaços ràpids</h4>
            <div class="space-y-3 text-sm">
              <a href="index.html" class="hover:text-white transition-colors block" data-key="navHome">INICI</a>
              <a href="nosotros.html" class="hover:text-white transition-colors block" data-key="navAbout">QUI SOM?</a>
              <a href="programa.html" class="hover:text-white transition-colors block" data-key="navProgram">PROGRAMA</a>
              <a href="inscripcion.html" class="hover:text-white transition-colors block" data-key="navRegister">INSCRIPCIÓ</a>
              <a href="contacto.html" class="hover:text-white transition-colors block" data-key="navContact">CONTACTE</a>

            </div>
          </div>

          <!-- Columna 3: Contacte + Xarxes -->
          <div>
            <h4 class="text-white text-lg font-semibold mb-6" data-key="navContact">CONTACTE</h4>
            
            <div class="space-y-4 text-sm">
              <a href="mailto:formaciocoordinadora@gmail.com" class="flex items-center gap-3 hover:text-white transition-colors">
                <i class="fa-solid fa-envelope w-5"></i>
                <span> formaciocoordinadora@gmail.com</span>
              </a>
              <a href="tel:+34604541305" class="flex items-center gap-3 hover:text-white transition-colors">
                <i class="fa-solid fa-phone w-5"></i>
                <span>604 54 15 05</span>
              </a>
            </div>

            <!-- Iconos de redes sociales -->
            <div class="flex gap-5 mt-10">
              <a href="https://www.instagram.com/acof_bcn/" target="_blank" class="text-gray-400 hover:text-white transition-colors text-2xl">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/ComissioDeFormacio/" target="_blank"class="text-gray-400 hover:text-white transition-colors text-2xl">
                <i class="fa-brands fa-facebook"></i>
              </a>
             
              <a href="https://x.com/FormacioCoordLL" target="_blank" class="text-gray-400 hover:text-white transition-colors text-2xl">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

        </div>

        <!-- Copyright -->
        <div class="border-t border-gray-800 mt-6 pt-8 text-center text-xs text-gray-500" data-key="pieCredi">
          © 2026 I Jornada d’Acollida Sociolingüística · Tots els drets reservats
        </div>

      </div>
    </footer>
  `;
}

// Carregar el footer
document.addEventListener('DOMContentLoaded', loadFooter);