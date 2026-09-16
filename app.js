const mainContent = document.getElementById("mainContent");
const buttons = document.querySelectorAll(".sidebar button");

/* PLANTILLA DEL GENERADOR WEB */
function loadGenerator() {
    mainContent.innerHTML = `
        <h1>Generador de Páginas Web</h1>
        <textarea id="desc" placeholder="Describe la web que quieres generar..."></textarea>
        <button class="action" id="generateBtn">Generar Página</button>
        <pre id="resultHtml"></pre>
    `;

    const generateBtn = document.getElementById("generateBtn");
    const resultHtml = document.getElementById("resultHtml");

    generateBtn.addEventListener("click", () => {
        const desc = document.getElementById("desc").value.trim();

        if (desc === "") {
            resultHtml.textContent = "Escribe una descripción.";
            return;
        }

        const html = `
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
<footer>Generado por J‑NOVA IA</footer>
</body>
</html>
        `;

        resultHtml.textContent = html;
    });
}

/* IDEAS DE NEGOCIO */
function loadIdeas() {
    mainContent.innerHTML = `
        <h1>Ideas de Negocio</h1>
        <textarea id="ideaInput" placeholder="¿Qué tipo de negocio buscas?"></textarea>
        <button class="action" id="ideaBtn">Generar Ideas</button>
        <pre id="ideaResult"></pre>
    `;

    document.getElementById("ideaBtn").addEventListener("click", () => {
        const idea = document.getElementById("ideaInput").value.trim();
        document.getElementById("ideaResult").textContent =
            `Aquí tienes ideas relacionadas con: ${idea}\n\n- Plataforma digital\n- Servicio automatizado\n- Producto escalable\n- Modelo de suscripción`;
    });
}

/* RESOLVER PROBLEMAS */
function loadProblems() {
    mainContent.innerHTML = `
        <h1>Resolver Problemas</h1>
        <textarea id="problemInput" placeholder="Describe tu problema..."></textarea>
        <button class="action" id="problemBtn">Resolver</button>
        <pre id="problemResult"></pre>
    `;

    document.getElementById("problemBtn").addEventListener("click", () => {
        const problem = document.getElementById("problemInput").value.trim();
        document.getElementById("problemResult").textContent =
            `Solución sugerida para: ${problem}\n\n1. Analiza la causa.\n2. Divide el problema.\n3. Aplica una solución por partes.\n4. Evalúa el resultado.`;
    });
}

/* PLANIFICADOR */
function loadPlanner() {
    mainContent.innerHTML = `
        <h1>Planificador</h1>
        <textarea id="planInput" placeholder="¿Qué quieres planificar?"></textarea>
        <button class="action" id="planBtn">Crear Plan</button>
        <pre id="planResult"></pre>
    `;

    document.getElementById("planBtn").addEventListener("click", () => {
        const plan = document.getElementById("planInput").value.trim();
        document.getElementById("planResult").textContent =
            `Plan creado para: ${plan}\n\n- Objetivo\n- Pasos\n- Recursos\n- Tiempo estimado`;
    });
}

/* ASISTENTE DE ESTUDIO */
function loadStudy() {
    mainContent.innerHTML = `
        <h1>Asistente de Estudio</h1>
        <textarea id="studyInput" placeholder="Tema que quieres estudiar..."></textarea>
        <button class="action" id="studyBtn">Generar Resumen</button>
        <pre id="studyResult"></pre>
    `;

    document.getElementById("studyBtn").addEventListener("click", () => {
        const topic = document.getElementById("studyInput").value.trim();
        document.getElementById("studyResult").textContent =
            `Resumen del tema: ${topic}\n\n- Concepto principal\n- Puntos clave\n- Ejemplos\n- Conclusión`;
    });
}

/* CAMBIO DE HERRAMIENTAS */
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const tool = btn.dataset.tool;

        if (tool === "generator") loadGenerator();
        if (tool === "ideas") loadIdeas();
        if (tool === "problems") loadProblems();
        if (tool === "planner") loadPlanner();
        if (tool === "study") loadStudy();
    });
});
