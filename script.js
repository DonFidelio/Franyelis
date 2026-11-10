/* =========================================================
   SALUD CERCANA · contenido e interactividad
   ---------------------------------------------------------
   ¿Quieres cambiar textos? Casi todo vive en los bloques
   de DATOS de abajo (perfiles, beneficios, programas,
   guía, testimonios y preguntas). Edita solo el texto
   entre comillas y guarda.
   ========================================================= */

/* ---------- CONFIGURACIÓN ---------- */
const CONFIG = {
  // Correo que recibirá los mensajes si no usas un servicio de formularios.
  // Déjalo vacío hasta tener el oficial.
  correoContacto: "",
  // Opcional: URL de Formspree (https://formspree.io) para recibir mensajes sin servidor.
  formEndpoint: ""
};

/* ---------- DATOS EDITABLES ---------- */

// Pestañas "Para ti"
const PERFILES = [
  { id: "personas", nombre: "Personas", emoji: "🙂",
    titulo: "Atención clara para tu día a día",
    texto: "Información simple sobre servicios y procesos, para que sepas qué esperar antes de dar el primer paso.",
    puntos: ["Orientación en lenguaje sencillo", "Recursos para entender los procesos", "Canales de atención por confirmar"] },
  { id: "familias", nombre: "Familias", emoji: "👨‍👩‍👧",
    titulo: "Cuidado pensado para toda la casa",
    texto: "Un espacio para que cada integrante de la familia encuentre la información que necesita.",
    puntos: ["Información para todas las edades", "Consejos de prevención en casa", "Datos oficiales próximamente"] },
  { id: "empresas", nombre: "Empresas", emoji: "🏢",
    titulo: "Bienestar para tu equipo",
    texto: "Propuestas para cuidar a quienes hacen crecer tu organización. Contenido demostrativo.",
    puntos: ["Alternativas para equipos de cualquier tamaño", "Acompañamiento en la implementación", "Cotización cuando haya datos oficiales"] },
  { id: "profesionales", nombre: "Profesionales", emoji: "🩺",
    titulo: "Trabajemos juntos",
    texto: "Si eres profesional de la salud, aquí podrás conocer cómo sumarte cuando abramos la convocatoria.",
    puntos: ["Proceso de incorporación (por definir)", "Herramientas de apoyo", "Contacto directo con el equipo"] }
];

// Beneficios
const BENEFICIOS = [
  { emoji: "🎁", titulo: "Recompensas por cuidarte", texto: "Ideas para premiar los hábitos saludables." },
  { emoji: "📱", titulo: "Herramientas digitales", texto: "Información accesible desde tu teléfono." },
  { emoji: "💬", titulo: "Soporte cercano", texto: "Te acompañamos por los canales que confirmemos." },
  { emoji: "🧑‍⚕️", titulo: "Atención virtual", texto: "Orientación rápida cuando la necesites." },
  { emoji: "🤝", titulo: "Recursos comunitarios", texto: "Programas locales para apoyarte." },
  { emoji: "💊", titulo: "Acceso a medicamentos", texto: "Información sobre opciones y orientación." },
  { emoji: "👁️", titulo: "Salud visual", texto: "Cuidar tus ojos también es prioridad." },
  { emoji: "🧘", titulo: "Bienestar emocional", texto: "Espacios para el equilibrio y la calma." }
];

// Programas (el carrusel). categoria: "cronicos" | "familia" | "bienestar"
const PROGRAMAS = [
  { emoji: "🩸", categoria: "cronicos", titulo: "Control de diabetes", texto: "Información y acompañamiento para el cuidado continuo." },
  { emoji: "🫁", categoria: "cronicos", titulo: "Respira mejor", texto: "Recursos para asma y cuidado respiratorio." },
  { emoji: "❤️", categoria: "cronicos", titulo: "Cuida tu corazón", texto: "Hábitos y seguimiento para la salud cardiovascular." },
  { emoji: "👶", categoria: "familia", titulo: "Salud infantil", texto: "Orientación para las primeras etapas de la vida." },
  { emoji: "🌸", categoria: "familia", titulo: "Salud de la mujer", texto: "Información en cada etapa, con respeto y claridad." },
  { emoji: "🧓", categoria: "familia", titulo: "Años dorados", texto: "Acompañamiento para personas mayores." },
  { emoji: "🧠", categoria: "bienestar", titulo: "Mente en calma", texto: "Herramientas para manejar el estrés día a día." },
  { emoji: "🥗", categoria: "bienestar", titulo: "Nutrición", texto: "Ideas simples para comer mejor." },
  { emoji: "🏃", categoria: "bienestar", titulo: "Movimiento", texto: "Actividad física al ritmo de cada persona." }
];
const CATEGORIAS = [
  { id: "todos", nombre: "Todos" },
  { id: "cronicos", nombre: "Cuidado continuo" },
  { id: "familia", nombre: "Familia" },
  { id: "bienestar", nombre: "Bienestar" }
];

// Guía interactiva: 2 preguntas → una recomendación
const GUIA = {
  p1: { pregunta: "¿Para quién es la información?", opciones: [
    { emoji: "🙋", texto: "Para mí", valor: "yo" },
    { emoji: "👨‍👩‍👧", texto: "Para mi familia", valor: "familia" },
    { emoji: "🏢", texto: "Para mi empresa o equipo", valor: "empresa" }
  ]},
  p2: { pregunta: "¿Qué te interesa más ahora?", opciones: [
    { emoji: "🩺", texto: "Servicios médicos", valor: "servicios" },
    { emoji: "📋", texto: "Entender procesos y canales", valor: "orientacion" },
    { emoji: "🌿", texto: "Prevención y bienestar", valor: "bienestar" }
  ]},
  resultados: {
    "yo-servicios": { emoji: "🩺", titulo: "Servicios médicos", texto: "Pronto publicaremos aquí el detalle de servicios disponibles." },
    "yo-orientacion": { emoji: "📋", titulo: "Orientación personal", texto: "Te explicaremos los procesos paso a paso cuando estén confirmados." },
    "yo-bienestar": { emoji: "🌿", titulo: "Bienestar y prevención", texto: "Recursos prácticos para cuidar tu salud todos los días." },
    "familia-servicios": { emoji: "👨‍👩‍👧", titulo: "Servicios para la familia", texto: "Información para cada integrante, en un solo lugar." },
    "familia-orientacion": { emoji: "📋", titulo: "Orientación familiar", texto: "Guías sencillas para saber a dónde acudir." },
    "familia-bienestar": { emoji: "🌸", titulo: "Bienestar en casa", texto: "Hábitos y consejos para todas las edades." },
    "empresa-servicios": { emoji: "🏢", titulo: "Propuestas para empresas", texto: "Alternativas para cuidar a tu equipo (por confirmar)." },
    "empresa-orientacion": { emoji: "🤝", titulo: "Acompañamiento a organizaciones", texto: "Te guiaremos en la implementación cuando haya datos oficiales." },
    "empresa-bienestar": { emoji: "🧘", titulo: "Bienestar laboral", texto: "Ideas para equipos más sanos y motivados." }
  }
};

// Testimonios (¡ficticios! reemplázalos por reales con permiso)
const TESTIMONIOS = [
  { texto: "Por fin encontré información clara y sin tecnicismos.", autor: "Persona de ejemplo A" },
  { texto: "Me sentí escuchada desde el primer mensaje.", autor: "Persona de ejemplo B" },
  { texto: "Saber qué esperar antes de la cita me dio mucha tranquilidad.", autor: "Persona de ejemplo C" }
];

// Preguntas frecuentes
const FAQS = [
  { q: "¿Cuándo estarán disponibles los servicios?", a: "Estamos preparando este espacio. Publicaremos las fechas oficiales cuando estén confirmadas." },
  { q: "¿Cómo puedo contactarlos?", a: "Por ahora puedes dejar tu mensaje en el formulario de contacto. Añadiremos los canales oficiales muy pronto." },
  { q: "¿Esta web sustituye la consulta con un médico?", a: "No. Este sitio es informativo y no sustituye la orientación de un profesional de salud. En una emergencia, acude al servicio de urgencias más cercano." },
  { q: "¿Qué especialidades habrá?", a: "El listado de especialidades y profesionales se publicará cuando se incorporen los datos oficiales." },
  { q: "¿Mis datos están seguros?", a: "El formulario es demostrativo. Antes de publicar el sitio oficial se añadirá una política de privacidad." }
];

/* ---------- UTILIDADES ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- AVISO SUPERIOR ---------- */
(function announce() {
  const bar = $("#announce");
  try { if (sessionStorage.getItem("hideAnnounce") === "1") bar.classList.add("hide"); } catch (e) {}
  $("#announceClose").addEventListener("click", () => {
    bar.classList.add("hide");
    try { sessionStorage.setItem("hideAnnounce", "1"); } catch (e) {}
  });
})();

/* ---------- HEADER: sombra, menú móvil, enlace activo ---------- */
(function header() {
  const hdr = $(".site-header"), burger = $("#burger"), nav = $("#nav"), toTop = $("#toTop");

  const onScroll = () => {
    hdr.classList.toggle("scrolled", window.scrollY > 8);
    toTop.classList.toggle("show", window.scrollY > 700);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const setMenu = (open) => {
    nav.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  };
  burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  $$("a", nav).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

  // Marca el enlace de la sección visible
  const links = $$('a[href^="#"]', nav).filter((a) => !a.classList.contains("nav-cta"));
  const map = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting && map.has(en.target.id)) {
        links.forEach((l) => l.classList.remove("active"));
        map.get(en.target.id).classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
})();

/* ---------- PESTAÑAS "PARA TI" ---------- */
(function tabs() {
  const list = $("#tabList"), panels = $("#tabPanels");
  list.innerHTML = PERFILES.map((p, i) =>
    `<button class="tab" role="tab" id="tab-${p.id}" aria-controls="panel-${p.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(p.nombre)}</button>`
  ).join("");
  panels.innerHTML = PERFILES.map((p, i) => `
    <div class="panel ${i === 0 ? "on" : ""}" role="tabpanel" id="panel-${p.id}" aria-labelledby="tab-${p.id}" ${i === 0 ? "" : "hidden"}>
      <div>
        <h3>${esc(p.titulo)}</h3>
        <p>${esc(p.texto)}</p>
        <ul>${p.puntos.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        <div class="btn-row"><a class="btn btn-primary" href="#contacto">Quiero saber más</a></div>
      </div>
      <div class="panel-art" aria-hidden="true">${p.emoji}</div>
    </div>`).join("");

  const tabEls = $$(".tab", list);
  const select = (idx, focus) => {
    tabEls.forEach((t, i) => {
      const on = i === idx;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = $("#" + t.getAttribute("aria-controls"));
      panel.classList.toggle("on", on);
      panel.hidden = !on;
    });
    if (focus) tabEls[idx].focus();
  };
  tabEls.forEach((t, i) => {
    t.addEventListener("click", () => select(i));
    t.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); select((i + 1) % tabEls.length, true); }
      if (e.key === "ArrowLeft") { e.preventDefault(); select((i - 1 + tabEls.length) % tabEls.length, true); }
    });
  });
})();

/* ---------- BENEFICIOS ---------- */
$("#benefits").innerHTML = BENEFICIOS.map((b, i) => `
  <article class="benefit reveal" style="transition-delay:${(i % 4) * 70}ms">
    <div class="ico" aria-hidden="true">${b.emoji}</div>
    <h3>${esc(b.titulo)}</h3>
    <p>${esc(b.texto)}</p>
  </article>`).join("");

/* ---------- PROGRAMAS: filtros + carrusel ---------- */
(function programas() {
  const track = $("#track"), chips = $("#chips");

  track.innerHTML = PROGRAMAS.map((p, i) => `
    <article class="program c${i % 4}" data-cat="${esc(p.categoria)}">
      <div class="emoji" aria-hidden="true">${p.emoji}</div>
      <h3>${esc(p.titulo)}</h3>
      <p>${esc(p.texto)}</p>
      <a href="#contacto">Pedir información →</a>
    </article>`).join("");

  chips.innerHTML = CATEGORIAS.map((c, i) =>
    `<button type="button" class="chip ${i === 0 ? "on" : ""}" data-cat="${esc(c.id)}" aria-pressed="${i === 0}">${esc(c.nombre)}</button>`
  ).join("");

  chips.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    $$(".chip", chips).forEach((c) => { c.classList.toggle("on", c === btn); c.setAttribute("aria-pressed", String(c === btn)); });
    const cat = btn.dataset.cat;
    $$(".program", track).forEach((p) => p.classList.toggle("hidden", cat !== "todos" && p.dataset.cat !== cat));
    track.scrollTo({ left: 0, behavior: "auto" });
  });

  const step = () => Math.min(track.clientWidth * 0.8, 340);
  const smooth = reduceMotion ? "auto" : "smooth";
  $("#prev").addEventListener("click", () => track.scrollBy({ left: -step(), behavior: smooth }));
  $("#next").addEventListener("click", () => track.scrollBy({ left: step(), behavior: smooth }));
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") track.scrollBy({ left: step(), behavior: smooth });
    if (e.key === "ArrowLeft") track.scrollBy({ left: -step(), behavior: smooth });
  });
})();

/* ---------- GUÍA INTERACTIVA ---------- */
(function guia() {
  const box = $("#quiz"), bar = $("#progressBar");
  const state = { a1: null };

  const optionsHTML = (arr) => arr.map((o) =>
    `<button type="button" class="opt" data-v="${esc(o.valor)}"><span class="e" aria-hidden="true">${o.emoji}</span>${esc(o.texto)}</button>`
  ).join("");

  function step1() {
    state.a1 = null; bar.style.width = "8%";
    box.innerHTML = `<span class="q-step">Pregunta 1 de 2</span><h3>${esc(GUIA.p1.pregunta)}</h3><div class="opts">${optionsHTML(GUIA.p1.opciones)}</div>`;
    $$(".opt", box).forEach((b) => b.addEventListener("click", () => { state.a1 = b.dataset.v; step2(); }));
  }
  function step2() {
    bar.style.width = "50%";
    box.innerHTML = `<span class="q-step">Pregunta 2 de 2</span><h3>${esc(GUIA.p2.pregunta)}</h3><div class="opts">${optionsHTML(GUIA.p2.opciones)}</div><button type="button" class="linklike" id="back">← Volver</button>`;
    $$(".opt", box).forEach((b) => b.addEventListener("click", () => result(state.a1 + "-" + b.dataset.v)));
    $("#back").addEventListener("click", step1);
  }
  function result(key) {
    bar.style.width = "100%";
    const r = GUIA.resultados[key];
    box.innerHTML = `<div class="result"><div class="big" aria-hidden="true">${r.emoji}</div><span class="q-step">Te sugerimos</span><h3>${esc(r.titulo)}</h3><p>${esc(r.texto)}</p>
      <div class="btn-row"><a class="btn btn-primary" href="#contacto">Hablar con alguien</a><button type="button" class="linklike" id="again">Empezar de nuevo</button></div></div>`;
    $("#again").addEventListener("click", step1);
  }
  step1();
})();

/* ---------- TESTIMONIOS (rotan solos) ---------- */
(function testimonios() {
  const stage = $("#quoteStage"), dotsBox = $("#dots"), wrap = $("#quotes");
  let i = 0, timer = null;

  dotsBox.innerHTML = TESTIMONIOS.map((_, n) => `<button type="button" class="dot" role="tab" aria-label="Testimonio ${n + 1}"></button>`).join("");
  const dots = $$(".dot", dotsBox);

  function show(n) {
    i = (n + TESTIMONIOS.length) % TESTIMONIOS.length;
    const t = TESTIMONIOS[i];
    stage.innerHTML = `<figure class="quote" style="margin:0"><blockquote>${esc(t.texto)}</blockquote><cite>${esc(t.autor)}</cite></figure>`;
    dots.forEach((d, k) => { d.classList.toggle("on", k === i); d.setAttribute("aria-selected", String(k === i)); });
  }
  const start = () => { if (reduceMotion || timer) return; timer = setInterval(() => show(i + 1), 6000); };
  const stop = () => { clearInterval(timer); timer = null; };

  dots.forEach((d, n) => d.addEventListener("click", () => { show(n); stop(); start(); }));
  wrap.addEventListener("mouseenter", stop);
  wrap.addEventListener("mouseleave", start);
  wrap.addEventListener("focusin", stop);
  wrap.addEventListener("focusout", start);
  show(0); start();
})();

/* ---------- PREGUNTAS FRECUENTES (con buscador) ---------- */
(function faq() {
  const list = $("#faq-list"), search = $("#faqSearch"), empty = $("#faqEmpty");
  list.innerHTML = FAQS.map((f) => `<details data-t="${esc((f.q + " " + f.a).toLowerCase())}"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("");
  const items = $$("details", list);

  // Solo una abierta a la vez
  items.forEach((d) => d.addEventListener("toggle", () => {
    if (d.open) items.forEach((o) => { if (o !== d) o.open = false; });
  }));

  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    items.forEach((d) => {
      const match = !q || d.dataset.t.includes(q);
      d.classList.toggle("hidden", !match);
      if (match) shown++;
    });
    empty.hidden = shown !== 0;
  });
})();

/* ---------- FORMULARIO DE CONTACTO ---------- */
(function formulario() {
  const form = $("#contactForm"), status = $("#formStatus");
  const rules = {
    nombre: (v) => (v.trim().length < 2 ? "Escribe tu nombre." : ""),
    correo: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Escribe un correo válido."),
    mensaje: (v) => (v.trim().length < 10 ? "Cuéntanos un poco más (mínimo 10 caracteres)." : "")
  };

  function validate() {
    let ok = true;
    Object.keys(rules).forEach((name) => {
      const field = form.elements[name];
      const msg = rules[name](field.value);
      $(`.err[data-for="${name}"]`, form).textContent = msg;
      field.classList.toggle("invalid", !!msg);
      field.setAttribute("aria-invalid", msg ? "true" : "false");
      if (msg) ok = false;
    });
    return ok;
  }
  const say = (txt, cls) => { status.textContent = txt; status.className = "form-status " + (cls || ""); };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    say("");
    if (!validate()) { say("Revisa los campos marcados.", "bad"); return; }
    const data = Object.fromEntries(new FormData(form).entries());

    if (CONFIG.formEndpoint) {
      try {
        say("Enviando…");
        const res = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
        if (!res.ok) throw new Error("fallo");
        form.reset();
        say("¡Gracias! Recibimos tu mensaje.", "ok");
      } catch (err) {
        say("No pudimos enviarlo. Inténtalo de nuevo más tarde.", "bad");
      }
    } else if (CONFIG.correoContacto) {
      const asunto = encodeURIComponent("Contacto web: " + data.tema);
      const cuerpo = encodeURIComponent(`Nombre: ${data.nombre}\nCorreo: ${data.correo}\n\n${data.mensaje}`);
      window.location.href = `mailto:${CONFIG.correoContacto}?subject=${asunto}&body=${cuerpo}`;
      say("Abriendo tu aplicación de correo…", "ok");
    } else {
      form.reset();
      say("Gracias. (Modo demostración: el mensaje aún no se envía a ningún lugar.)", "ok");
    }
  });

  // Limpia el error al escribir
  Object.keys(rules).forEach((name) => form.elements[name].addEventListener("input", () => {
    $(`.err[data-for="${name}"]`, form).textContent = "";
    form.elements[name].classList.remove("invalid");
  }));
})();

/* ---------- APARECER AL HACER SCROLL ---------- */
(function reveal() {
  const els = $$(".reveal");
  if (!("IntersectionObserver" in window) || reduceMotion) { els.forEach((e) => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach((e) => io.observe(e));
})();
