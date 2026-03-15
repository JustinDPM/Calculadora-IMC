const { calcularIMC, obtenerClasificacion } = require("./imc");

window.addEventListener("DOMContentLoaded", () => {
    
    const pesoIngresado = document.getElementById("peso");
    const alturaIngresada = document.getElementById("altura");
    const boton = document.getElementById("boton");

    const resultado = document.getElementById("resultado");
    const clasificacion = document.getElementById("clasificacion");


    boton.addEventListener("click", () => {

        const peso = parseFloat(pesoIngresado.value);
        const altura = parseFloat(alturaIngresada.value);

        if(!peso || !altura){
            resultado.textContent = "Ingresa peso y altura";
            return;
        }
        
        const imc = calcularIMC(peso, altura);

        resultado.textContent = "Tu imc es " + imc.toFixed(2);
        clasificacion.textContent = obtenerClasificacion(imc); 

    });
});