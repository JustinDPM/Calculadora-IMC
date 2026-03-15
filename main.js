const { app, BrowserWindow } = require("electron")
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 700,
        height: 600,
            webPreferences: {
        preload: path.join(__dirname, "preload.js"),             
        nodeIntegration: false,
        contextIsolation: true,
        sandbox: false
    }
    });

    win.loadFile('views/index.html')
    //win.webContents.openDevTools();
}

app.whenReady().then(() =>{
    createWindow()
})