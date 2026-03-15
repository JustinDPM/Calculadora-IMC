const { contextBridge } = require("electron");
const imc = require("./renderer/imc");
const fs = require('fs');
const path = require('path');
const dataFile = path.join(__dirname, 'historial.json'); // archivo donde guardaremos

if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([])); // array vacío inicial
}

function guardarRegistroArchivo(registro) {
    let historial = [];
    if (fs.existsSync(dataFile)) {
        historial = JSON.parse(fs.readFileSync(dataFile));
    }
    historial.push(registro);
    fs.writeFileSync(dataFile, JSON.stringify(historial, null, 2));
}

function obtenerHistorialArchivo() {
    if (fs.existsSync(dataFile)) {
        return JSON.parse(fs.readFileSync(dataFile));
    }
    return [];
}

console.log("PRELOAD CARGADO");

contextBridge.exposeInMainWorld("imcAPI", {
    calcularIMC: imc.calcularIMC,
    obtenerClasificacion: imc.obtenerClasificacion,
    guardarRegistroArchivo,
    obtenerHistorialArchivo
});