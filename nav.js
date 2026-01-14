document.addEventListener("DOMContentLoaded", function () {
    // 1️⃣ Insertar navbar en todas las páginas
    const navHTML = `
<header class="navbar">
    <div class="nav-container">
        <a href="index.html" class="logo">Barcelona Sociolingüística</a>
        
        <div class="nav-right">
        
        <nav>
            <button class="menu-toggle" id="menu-toggle">☰</button>
            <ul id="menu">
                <li><a href="index.html" id="nav-index"></a></li>
                <li><a href="participacio.html" id="nav-participacio"></a></li>
                <li><a href="programa.html" id="nav-programa"></a></li>
                <li><a href="inscripcion.html" id="nav-temas"></a></li>
            </ul>
        </nav>
        <button class="lang-btn" id="btn-lang"><span>CAT</span><span>ES</span></button>
        </div>
    </div>
</header>`;
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // 2️⃣ Marcar página actual
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const map = {
        "index.html": "nav-index",
        "temas.html": "nav-temas",
        "participacio.html": "nav-participacio",
        "programa.html": "nav-programa"
    };
    if (map[currentPage]) document.getElementById(map[currentPage]).classList.add("active");

    // 3️⃣ JSON con todas las traducciones
    const translations = {

        "index.html": {
            "nav-index": {
                ca: "Inici",
                es: "Inicio"
            },
            "nav-participacio": {
                ca: "Participació",
                es: "Participación"
            },
            "nav-programa": {
                ca: "Programa",
                es: "Programa"
            },
            "nav-temas": {
                ca: "Inscripció",
                es: "Inscripción"
            },
            "hero-title": {
                "ca": "I Jornada d'Acollida Sociolingüística",
                "es": "I Jornada de Acogida Sociolingüística"
            },
            "hero-date": {
                "ca": "8 de maig de 2026 · Barcelona",
                "es": "8 de mayo de 2026 · Barcelona"
            },
            "intro-text": {
                "ca": "Les entitats de la <b>Coordinadora de la Llengua de Barcelona </b>organitzen la I Jornada d’Acollida Sociolingüística, divendres 8 de maig a la Lleialtat Santsenca i Centre Social de Sants, Barcelona. Serà un espai de <b>visibilització, formació, reflexió i debat</b> sobre la tasca que els diferents agents educatius de la ciutat –entitats socials, CNL, CFA, centres educatius i altres projectes comunitaris– duen a terme en l’acollida sociolingüística de persones joves i adultes en contextos de migració.\n\nConscients de la importància de construir ponts per a la inclusió sociolingüística, la Jornada vol reunir<b> totes les veus implicades:</b> professionals, voluntariat, docents, persones investigadores i responsables de polítiques públiques, així com estudiants i alumnat que actualment participen en processos d’acollida sociolingüística. La seva experiència directa és fonamental per comprendre els reptes reals, valorar els èxits i atendre a les transformacions que vivim.\n\nL’esdeveniment vol obrir espais de reflexió compartida, enfortir la formació en pràctiques inclusives –especialment rellevant davant la manca d’itineraris formatius universitaris específics– i explorar vies per incidir en la política pública i millorar recursos, metodologies i coordinacions. La Jornada és també una oportunitat per <b>construir una xarxa col·laborativa</b> que doni continuïtat als projectes que fan de Barcelona una ciutat més inclusiva, acollidora i diversa.",
                "es": "Las entidades de la <b>Coordinadora de la Lengua de Barcelona </b>organizan la I Jornada de Acogida Sociolingüística, el viernes 8 de mayo en la Lleialtat Santsenca y Centro Social de Sants, Barcelona. Será un espacio de <b>visibilización, formación, reflexión y</b> debate sobre la labor que los distintos agentes educativos de la ciudad –entidades sociales, CNL, CFA, centros educativos y otros proyectos comunitarios– realizan en la acogida sociolingüística de personas jóvenes y adultas en contextos de migración.\n\nConscientes de la importancia de construir puentes para la inclusión sociolingüística, la Jornada quiere reunir<b> todas las voces implicadas:</b> profesionales, voluntariado, docentes, investigadores y responsables de políticas públicas, así como estudiantes que participan actualmente en procesos de acogida sociolingüística. Su experiencia directa es fundamental para comprender los retos reales, valorar los éxitos y atender las transformaciones que vivimos.\n\nEl evento busca abrir espacios de reflexión compartida, fortalecer la formación en prácticas inclusivas –especialmente relevante ante la falta de itinerarios formativos universitarios específicos– y explorar formas de incidir en la política pública y mejorar recursos, metodologías y coordinaciones. La Jornada es también una oportunidad para <b>construir una red colaborativa</b> que dé continuidad a los proyectos que hacen de Barcelona una ciudad más inclusiva, acogedora y diversa."
            }, "inscripcio-title": { "ca": "Inscripció", "es": "Inscripción" },
            "rsvp-btn": {
                "ca": "Inscriure'm ara",
                "es": "Inscribrme ahora"
            },
            "footer-text": {
                "ca": "© 2026 Coordinadora de la Llengua de Barcelona",
                "es": "© 2026 Coordinadora de la Lengua de Barcelona"
            }
        },
        "participacio.html": {
            "nav-index": {
                ca: "Inici",
                es: "Inicio"
            },
            "nav-participacio": {
                ca: "Participació",
                es: "Participación"
            },
            "nav-programa": {
                ca: "Programa",
                es: "Programa"
            },
            "nav-temas": {
                ca: "Inscripció",
                es: "Inscripción"
            },
            "page-header-title": {
                "ca": "Participació",
                "es": "Participación"
            },
            "intro-paragraph": {
                "ca": "Convidem tots els agents educatius, professionals, docents, persones voluntàries, persones investigadores, estudiants i alumnat en procés d’acollida sociolingüística a presentar propostes en qualsevol dels àmbits següents:",
                "es": "Invitamos a todos los agentes educativos, profesionales, docentes, personas voluntarias, investigadores, estudiantes a presentar propuestas en cualquiera de los siguientes ámbitos:"
            },
            "tematiques-title": {
                "ca": "Temàtiques d’interès",
                "es": "Temáticas de interés"
            },
            "tematiques-list-1": {
                "ca": "<b>Aprenentatge de la llengua, alfabetització i llengües d’acollida:</b> Processos d’aprenentatge lingüístic, alfabetització inicial i experiències de programes de llengües d’acollida.",
                "es": "<b>Aprendizaje de la lengua, alfabetización y lenguas de acogida:</b> Procesos de aprendizaje lingüístico, alfabetización inicial y experiencias de programas de lenguas de acogida."
            },
            "tematiques-list-2": {
                "ca": "<b>Inclusió i integració sociolingüística:</b> Pràctiques i metodologies que promouen la cohesió social.",
                "es": "<b>Inclusión e integración sociolingüística:</b> Prácticas y metodologías que promueven la cohesión social."
            },
            "tematiques-list-3": {
                "ca": "<b>Polítiques públiques i drets lingüístics:</b> Reptes i propostes de millora en polítiques d’acollida.",
                "es": "<b>Políticas públicas y derechos lingüísticos:</b> Retos y propuestas de mejora en políticas de acogida."
            },
            "tematiques-list-4": {
                "ca": "<b>Deskilling, reskilling i reconeixement de competències:</b> Estratègies de requalificació i inserció.",
                "es": "<b>Deskilling, reskilling y reconocimiento de competencias:</b> Estrategias de recalificación e inserción."
            },
            "tematiques-list-5": {
                "ca": "<b>Benestar emocional i diversitat:</b> Acompanyament i cura emocional.",
                "es": "<b>Bienestar emocional y diversidad:</b> Acompañamiento y cuidado emocional."
            },
            "tematiques-list-6": {
                "ca": "<b>Innovació pedagògica:</b> Metodologies inclusives.",
                "es": "<b>Innovación pedagógica:</b> Metodologías inclusivas."
            },
            "tematiques-list-7": {
                "ca": "<b>Món digital:</b> Recursos i competències tecnològiques.",
                "es": "<b>Mundo digital:</b> Recursos y competencias tecnológicas."
            },
            "tematiques-list-8": {
                "ca": "<b>Voluntariat i formació professional:</b> Acompanyament i reconeixement.",
                "es": "<b>Voluntariado y formación profesional:</b> Acompañamiento y reconocimiento."
            },
            "tematiques-list-9": {
                "ca": "<b>Interculturalitat:</b> Mirada intercultural i comunitària.",
                "es": "<b>Interculturalidad:</b> Mirada intercultural y comunitaria."
            },
            "tematiques-list-10": {
                "ca": "<b>Altres aportacions:</b> Propostes rellevants.",
                "es": "<b>Otras aportaciones:</b> Propuestas relevantes."
            },
            "formats-title": {
                "ca": "Formats de participació",
                "es": "Formatos de participación"
            },
            "card-title-1": { "ca": "Tallers", "es": "Talleres" },
            "card-desc-1": { "ca": "Espais pràctics i participatius per experimentar metodologies i estratègies d’acollida.", "es": "Espacios prácticos y participativos para experimentar metodologías y estrategias de acogida." },
            "card-title-2": { "ca": "Comunicacions", "es": "Comunicaciones" },
            "card-desc-2": { "ca": "Presentacions breus per compartir projectes i generar intercanvi de coneixement.", "es": "Presentaciones breves para compartir proyectos y generar intercambio de conocimiento." },
            "card-title-3": { "ca": "Grups de debat", "es": "Grupos de debate" },
            "card-desc-3": { "ca": "Espais oberts per reflexionar col·lectivament i identificar reptes compartits.", "es": "Espacios abiertos para reflexionar colectivamente e identificar retos compartidos." },


            "comunicado-jornda": {

                "ca": "<b>A la Jornada comptarem amb</b> <i>7 comunicacions, 7 tallers pràctics i 7 espais de debat.</i> Les propostes se seleccionaran segons criteris de qualitat, rellevància i diversitat temàtica, vetllant perquè hi hagi una <b>representació equilibrada de totes les veus</b>, incloent-hi les de les persones que viuen processos d’acollida sociolingüística. Us convidem a enviar les vostres propostes i el pòster al correu <a href='mailto:formaciócoordinadora@gmail.com'>formaciócoordinadora@gmail.com</a>",

                "es": "<b>En la Jornada contaremos con</b> <i>7 comunicaciones, 7 talleres prácticos y 7 espacios de debate.</i> Las propuestas se seleccionarán según criterios de calidad, relevancia y diversidad temática, asegurando una <b>representación equilibrada de todas las voces</b>, incluidas las de las personas que viven procesos de acogida sociolingüística. Les invitamos a enviar sus propuestas y el póster al correo <a href='mailto:formacióncoordinadora@gmail.com'>formacióncoordinadora@gmail.com</a>"

            },
            "footer-text": {
                "ca": "© 2026 Coordinadora de la Llengua de Barcelona",
                "es": "© 2026 Coordinadora de la Lengua de Barcelona"
            }
        },
        "programa.html": {
            "nav-index": {
                ca: "Inici",
                es: "Inicio"
            },
            "nav-participacio": {
                ca: "Participació",
                es: "Participación"
            },
            "nav-programa": {
                ca: "Programa",
                es: "Programa"
            },
            "nav-temas": {
                ca: "Inscripció",
                es: "Inscripción"
            },
            "page-header-title": { "ca": "Programa de la Jornada", "es": "Programa de la Jornada" },
            "programa-item-1": { "ca": "Benvinguda i registre", "es": "Bienvenida y registro" },
            "programa-item-2": { "ca": "Ponència inaugural", "es": "Ponencia inaugural" },
            "programa-item-3": { "ca": "Tallers participatius", "es": "Talleres participativos" },
            "programa-item-4": { "ca": "Pausa-cafè ", "es": "Pausa-café" },
            "programa-item-5": { "ca": "Comunicacions", "es": "Comunicaciones" },
            "programa-item-6": { "ca": "Grups de reflexió / \"Parlem-ne\"", "es": "Grupos de reflexión / \"Hablemos\"" },
            "programa-item-7": { "ca": "Dinar ", "es": "Comer" },
            "programa-item-8": { "ca": "Taula rodona", "es": "Mesa redonda" },
            "programa-item-9": { "ca": "Tancament", "es": "Cierre" },

            "footer-text": { "ca": "© 2026 Coordinadora de la Llengua de Barcelona", "es": "© 2026 Coordinadora de la Lengua de Barcelona" }
        },
        "inscripcion.html": {
            "nav-index": {
                ca: "Inici",
                es: "Inicio"
            },
            "nav-participacio": {
                ca: "Participació",
                es: "Participación"
            },
            "nav-programa": {
                ca: "Programa",
                es: "Programa"
            },
            "nav-temas": {
                ca: "Inscripció",
                es: "Inscripción"
            },
            "page-header-title": {
                "ca": "Inscripció",
                "es": "Inscripción"
            },
            "rsvp-btn": {
                "ca": "Inscriure'm ara",
                "es": "Inscribrme ahora"
            },
            "subtitle": {
                "ca": "Us hi esperem",
                "es": "Os esperamos"
            },
            "save-date": {
                "ca": "Save the date! Divendres, 8 de maig de 2026",
                "es": "¡Save the date! Viernes, 8 de mayo de 2026"
            },
            "participation-text": {
                "ca": "Si no és possible presentar una proposta, també és molt valuosa la participació <b>fent difusió</b> de la Jornada i <b>organitzar-se per assistir-hi</b>, sigui a títol personal o des de les entitats i centres, convidant especialment alumnat i grups de classe a participar de la Jornada.",
                "es": "Si no es posible presentar una propuesta, también es muy valiosa la participación <b>difundiendo</b> la Jornada y <b>organizándose para asistir</b>, ya sea a título personal o desde las entidades y centros, invitando especialmente a alumnado y grupos de clase a participar de la Jornada."
            },
            "footer-text": {
                "ca": "© 2026 Coordinadora de la Llengua de Barcelona",
                "es": "© 2026 Coordinadora de la Lengua de Barcelona"
            }
        }
    };


    // 4️⃣ Detectar idioma guardado o usar 'ca'
    let currentLang = localStorage.getItem('lang') || 'ca';

    // 5️⃣ Botón de idioma
    const langBtn = document.getElementById("btn-lang");
    langBtn.addEventListener("click", () => {
        currentLang = currentLang === 'ca' ? 'es' : 'ca';
        localStorage.setItem('lang', currentLang);
        applyTranslations();
    });

    // 6️⃣ Función para aplicar traducciones
    function applyTranslations() {
        const pageTranslations = translations[currentPage];
        if (!pageTranslations) return;

        // ... (tu código actual de traducción de textos) ...
        for (const [id, textObj] of Object.entries(pageTranslations)) {
            const el = document.getElementById(id);
            if (el) {
                const textWithBreaks = textObj[currentLang].replace(/\n/g, "<br>");
                el.innerHTML = textWithBreaks;
            }
        }

        // 💡 NUEVA LÓGICA PARA EL BOTÓN
        const langBtn = document.getElementById("btn-lang");
        if (langBtn) {
            // Limpiamos clases anteriores
            langBtn.classList.remove("lang-cat", "lang-es");

            // Añadimos la clase según el idioma actual
            if (currentLang === 'ca') {
                langBtn.classList.add("lang-cat");
            } else {
                langBtn.classList.add("lang-es");
            }
        }
    }
    // Al final de tu código de DOMContentLoaded
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle) {
        menuToggle.addEventListener("click", (e) => {
            // Evita que el clic se propague (opcional)
            e.stopPropagation();
            menu.classList.toggle("show");

            // Cambia el icono con una pequeña rotación
            menuToggle.textContent = menu.classList.contains("show") ? "✕" : "☰";
        });
    }

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", (e) => {
        if (menu.classList.contains("show") && !menu.contains(e.target) && e.target !== menuToggle) {
            menu.classList.remove("show");
            menuToggle.textContent = "☰";
        }
    });

    // 7️⃣ Aplicar traducciones al cargar la página
    applyTranslations();
});
