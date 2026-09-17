// BUSINESS.JS — Estilo Joni

// Animación de aparición suave para las tarjetas
const cards = document.querySelectorAll(".business-card");

const revealOnScroll = () => {
  const triggerPoint = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerPoint) {
      card.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Efecto hover dinámico estilo Joni
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.borderColor = "#4a7bff";
    card.style.boxShadow = "0 0 25px rgba(74, 123, 255, 0.45)";
    card.style.transform = "translateY(-4px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.borderColor = "#20263d";
    card.style.boxShadow = "0 0 25px rgba(0, 0, 0, 0.35)";
    card.style.transform = "translateY(0)";
  });
});

// Botón principal con animación suave
const mainButton = document.querySelector(".btn.primary");

if (mainButton) {
  mainButton.addEventListener("mouseenter", () => {
    mainButton.style.boxShadow = "0 0 25px rgba(74, 123, 255, 0.6)";
    mainButton.style.transform = "scale(1.05)";
  });

  mainButton.addEventListener("mouseleave", () => {
    mainButton.style.boxShadow = "0 0 18px rgba(74, 123, 255, 0.5)";
    mainButton.style.transform = "scale(1)";
  });
}

// Animación del título del plan Business
const title = document.querySelector(".business-hero h1");

if (title) {
  title.style.opacity = "0";
  title.style.transform = "translateY(20px)";

  setTimeout(() => {
    title.style.transition = "0.8s ease";
    title.style.opacity = "1";
    title.style.transform = "translateY(0)";
  }, 200);
}
