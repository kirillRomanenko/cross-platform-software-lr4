const { app, BrowserWindow, ipcMain } = require('electron')
// require('electron-reload')(__dirname)

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
    window.loadFile('index.html');

    let sizeWordWin;
    ipcMain.on('add-sizeWord-window', () => {
        if (!sizeWordWin) {
            sizeWordWin = new BrowserWindow({
                width: 400,
                height: 400,
                parent: window
            })
            sizeWordWin.loadFile('./renderer/addSizeWord.html');

            // cleanup
            sizeWordWin.on('closed', () => {
                sizeWordWin = null
            })
        }
    })
}

app.whenReady().then(createGeneralWindow)