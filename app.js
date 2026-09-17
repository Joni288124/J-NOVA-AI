  const mainContent = document.getElementById("mainContent");
const buttons = document.querySelectorAll(".sidebar button");

function loadGenerator() {
  mainContent.innerHTML = `
    <h1>Generador de páginas web</h1>
    <textarea id="desc" placeholder="Describe la web que quieres generar..."></textarea>
    <button class="action" id="generateBtn">Generar</button>
    <pre id="resultHtml"></pre>
  `;
  document.getElementById("generateBtn").onclick = () => {
    const desc = document.getElementById("desc").value.trim();
    if (!desc) {
      document.getElementById("resultHtml").textContent = "Escribe una descripción.";
      return;
    }
    document.getElementById("resultHtml").textContent = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>${desc}</title>
<style>
body { font-family: Arial; background:#f4f4f4; margin:0; }
header { background:#222; color:#fff; padding:20px; text-align:center; }
section { padding:20px; }
.card { background:#fff; padding:15px; margin:10px 0; border-radius:8px; }
footer { background:#222; color:#fff; text-align:center; padding:10px; margin-top:20px; }
</style>
</head>
<body>
<header><h1>${desc}</h1></header>
<section>
<div class="card"><h3>Sobre esta web</h3><p>${desc}</p></div>
<div class="card"><h3>Contenido</h3><p>Añade aquí tu contenido.</p></div>
<div class="card"><h3>Contacto</h3><p>Redes sociales o email.</p></div>
</section>
<footer>Generado por J‑NOVA Business AI</footer>
</body>
</html>`;
  };
}

function loadSimpleTool(title, placeholder, templateText) {
  mainContent.innerHTML = `
    <h1>${title}</h1>
    <textarea id="input" placeholder="${placeholder}"></textarea>
    <button class="action" id="runBtn">Generar</button>
    <pre id="result"></pre>
  `;
  document.getElementById("runBtn").onclick = () => {
    const value = document.getElementById("input").value.trim();
    document.getElementById("result").textContent =
      templateText.replace("{{value}}", value || "tu idea");
  };
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const tool = btn.dataset.tool;
    if (tool === "generator") loadGenerator();
    if (tool === "ideas") loadSimpleTool(
      "Ideas de negocio",
      "¿Qué tipo de negocio buscas?",
      "Ideas relacionadas con: {{value}}\n\n- Servicio digital\n- Producto escalable\n- Modelo de suscripción\n- Plataforma automatizada"
    );
    if (tool === "problems") loadSimpleTool(
      "Resolver problemas",
      "Describe tu problema...",
      "Solución sugerida para: {{value}}\n\n1. Analiza la causa.\n2. Divide el problema.\n3. Aplica soluciones por partes.\n4. Evalúa el resultado."
    );
    if (tool === "planner") loadSimpleTool(
      "Planificador",
      "¿Qué quieres planificar?",
      "Plan creado para: {{value}}\n\n- Objetivo\n- Pasos\n- Recursos\n- Tiempo estimado"
    );
    if (tool === "study") loadSimpleTool(
      "Asistente de estudio",
      "Tema que quieres estudiar...",
      "Resumen del tema: {{value}}\n\n- Concepto principal\n- Puntos clave\n- Ejemplos\n- Conclusión"
    );
    if (tool === "text") loadSimpleTool(
      "Generador de textos",
      "¿Qué texto necesitas?",
      "Texto generado sobre: {{value}}\n\nEste es un borrador que puedes adaptar a tu estilo."
    );
  });
});
