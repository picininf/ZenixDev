// Número do WhatsApp (somente dígitos, com DDI 55 + DDD). Troque pelo número real.
const WHATSAPP_NUMERO = "5500000000000";

// Ano no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Header com fundo ao rolar
const header = document.querySelector(".header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Menu mobile
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", aberto);
  navToggle.setAttribute("aria-expanded", aberto);
});

nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

// Animação ao entrar na tela
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Formulário: valida e abre o WhatsApp com a mensagem pronta
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const campos = ["nome", "email", "mensagem"].map((id) => document.getElementById(id));
  let valido = true;

  campos.forEach((campo) => {
    const ok = campo.value.trim() !== "" && campo.checkValidity();
    campo.classList.toggle("is-invalid", !ok);
    if (!ok) valido = false;
  });

  if (!valido) {
    formMsg.textContent = "Preencha nome, um e-mail válido e a mensagem.";
    formMsg.className = "form__msg is-error";
    return;
  }

  const dados = new FormData(form);
  const texto =
    `Olá! Meu nome é ${dados.get("nome")} (${dados.get("email")}).\n` +
    `Tenho interesse em: ${dados.get("servico")}.\n\n` +
    `${dados.get("mensagem")}`;

  window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");

  formMsg.textContent = "Abrimos o WhatsApp com sua mensagem. É só enviar!";
  formMsg.className = "form__msg is-ok";
  form.reset();
});
