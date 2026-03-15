function calcularIMC(peso, altura){
    return peso / (altura * altura);
}

const rangosIMC = [
    { max: 25, clasificacion: "NORMAL" },
    { max: 30, clasificacion: "SOBREPESO" },
    { max: 35, clasificacion: "OBESIDAD I" },
    { max: 40, clasificacion: "OBESIDAD II" },
    { max: Infinity, clasificacion: "OBESIDAD III" }
];

function obtenerClasificacion(imc) {
    for(const rango of rangosIMC){
        if (imc < rango.max){
            return rango.clasificacion;
        }
    }
}

module.exports = {
    calcularIMC,
    obtenerClasificacion
};