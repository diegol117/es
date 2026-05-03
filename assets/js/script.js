
// --- Lógica de Biografía (See More / See Less) ---
const btn = document.getElementById('see-more-btn');
const content = document.getElementById('bio-hidden-content');

btn.addEventListener('click', function () {
    if (content.style.display === "none") {
        content.style.display = "block";
        this.textContent = "See Less";
    } else {
        content.style.display = "none";
        this.textContent = "See More";
    }
});

btn.addEventListener('mouseenter', function () {
    this.style.backgroundColor = '#007bff';
    this.style.color = '#ffffff';
    this.style.boxShadow = '0 0 15px rgba(0, 123, 255, 0.4)';
});

btn.addEventListener('mouseleave', function () {
    this.style.backgroundColor = 'transparent';
    this.style.color = '#007bff';
    this.style.boxShadow = 'none';
});


// --- Lógica de Perfiles Académicos (Footer) ---
function toggleAcademic() {
    const moreLogos = document.getElementById('more-academic');
    const icon = document.getElementById('academic-icon');
    const btnAcademic = document.querySelector('.btn-show-more');

    if (moreLogos.style.display === 'none' || moreLogos.style.display === '') {
        moreLogos.style.display = 'flex';
        icon.innerText = '−';
        btnAcademic.style.borderColor = '#fff'; // Brillo al estar activo
    } else {
        moreLogos.style.display = 'none';
        icon.innerText = '+';
        btnAcademic.style.borderColor = '#444';
    }
}
/**
 * Nexo Discreto - Importador de Módulos Académicos
 */
document.addEventListener("DOMContentLoaded", function() {
    const contenedor = document.getElementById('contenedor-modulos');

    if (!contenedor) {
        console.error("Error: No se encontró el elemento 'contenedor-modulos' en el DOM.");
        return;
    }

    fetch('aprendizaje.html')
        .then(response => {
            console.log("Estado de la respuesta:", response.status); // Ver si encuentra el archivo
            if (!response.ok) throw new Error("Archivo no encontrado");
            return response.text();
        })
        .then(data => {
            contenedor.innerHTML = data;
        })
        .catch(error => {
            console.error('Error detallado:', error);
            contenedor.innerHTML = "<p style='color:white;'>Error al cargar los módulos. Revisa la consola (F12).</p>";
        });
});

