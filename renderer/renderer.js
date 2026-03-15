
window.addEventListener("DOMContentLoaded", () => {
    
    const pesoIngresado = document.getElementById("peso");
    const alturaIngresada = document.getElementById("altura");
    const nombreIngreasado = document.getElementById("nombre")
    
    const botonIMC = document.getElementById("boton");
    const botonHistorial = document.getElementById("botonHistorial");
 
    const resultado = document.getElementById("resultado");
    const clasificacion = document.getElementById("clasificacion");

    let historial = [];
     


    botonIMC.addEventListener("click", () => {

        const nombre = nombreIngreasado.value;
        const peso = parseFloat(pesoIngresado.value);
        const altura = parseFloat(alturaIngresada.value);

        if(!peso || !altura){
            resultado.textContent = "Ingresa peso y altura";
            return;
        }
        
        const imc = window.imcAPI.calcularIMC(peso, altura);
        const clasif = window.imcAPI.obtenerClasificacion(imc);

        resultado.textContent = "Tu imc es " + imc.toFixed(2);
        clasificacion.textContent = "Clasificacion: " + clasif; 

        const registro = {
            nombre,
            peso,
            altura,
            imc: imc.toFixed(2),
            clasificacion: clasif
        };

        historial.push(registro);
        window.imcAPI.guardarRegistroArchivo(registro);

    });

    botonHistorial.addEventListener("click", () => {
        window.location.href = "../views/historial.html";
        
    });

});