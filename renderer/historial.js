
window.addEventListener("DOMContentLoaded", () => {
    
    const botonVolver = document.getElementById("botonVolver");
    const historial = window.imcAPI.obtenerHistorialArchivo();
    const tablaHistorial = document.getElementById("tablaHistorial")

    historial.forEach(registro => {
        const fila = document.createElement("tr")

        fila.innerHTML = `
            <td>${registro.nombre}</td>
            <td>${registro.peso}</td>
            <td>${registro.altura}</td>
            <td>${registro.imc}</td>
            <td>${registro.clasificacion}</td>
        `;

        tablaHistorial.appendChild(fila);
    });

    botonVolver.addEventListener("click", () => {
        window.location.href = "../views/index.html";
    });



});