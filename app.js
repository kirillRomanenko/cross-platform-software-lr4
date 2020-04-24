const { app, BrowserWindow } = require('electron')

function createGeneralWindow() {
    // Создаем окно браузера.
    let window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    // window.webContents.openDevTools()
    window.loadFile('index.html')
}

app.whenReady().then(createGeneralWindow)