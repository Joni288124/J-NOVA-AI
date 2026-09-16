const descriptionInput = document.getElementById("description");
const generateBtn = document.getElementById("generateBtn");
const resultHtml = document.getElementById("resultHtml");

generateBtn.addEventListener("click", () => {
    const desc = descriptionInput.value.trim();

    if (desc === "") {
        resultHtml.textContent = "Escribe el tipo de web que quieres generar.";
        return;
    }

    const generatedHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>${desc} — Página Generada</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background: #f4f4f4; }
        header { background: #222; color: #fff; padding: 20px; text-align: center; }
        section { padding: 20px; }
        .hero { background: #333; color: #fff; padding: 40px; text-align: center; }
        .card { background: #fff; margin: 10px 0; padding: 15px; border-radius: 8px; box-shadow: 0 0 5px rgba(0,0,0,0.1); }
        footer { background: #222; color: #fff; text-align: center; padding: 10px; margin-top: 20px; }
    </style>
</head>
<body>
    <header>
        <h1>${desc}</h1>
    </header>

    <section class="hero">
        <h2>Inicio</h2>
        <p>Esta página ha sido generada automáticamente según tu descripción.</p>
    </section>

    <section>
        <div class="card">
            <h3>Sobre esta web</h3>
            <p>Esta web está diseñada para: ${desc}. Aquí puedes añadir información principal.</p>
        </div>

        <div class="card">
            <h3>Contenido principal</h3>
            <p>Añade aquí tus productos, servicios o información relevante.</p>
        </div>

        <div class="card">
            <h3>Contacto</h3>
            <p>Incluye aquí tus redes sociales, email o cualquier forma de contacto.</p>
        </div>
    </section>

    <footer>
        <p>Página generada automáticamente por J-NOVA</p>
    </footer>
</body>
</html>
    `;

    resultHtml.textContent = generatedHtml;
});
