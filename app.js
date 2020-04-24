const { app, BrowserWindow, ipcMain } = require('electron')
const request = require('./redis');
const functions = require('./functions');
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
                width: 600,
                height: 200,
                parent: window,
                webPreferences: {
                    nodeIntegration: true
                }
            })
            sizeWordWin.webContents.openDevTools()
            sizeWordWin.loadFile('./renderer/addSizeWord.html');
            // cleanup
            sizeWordWin.on('closed', () => {
                sizeWordWin = null
            })
        }
    });
    ipcMain.on('add-sizeWord-form', (event, data) => {
        // console.log('form', data);
        let size = Number(data['inputSize']);
        let countStrings = functions.getRandom(100, 500);
        let text = [];
        text = functions.generateText(text, countStrings, size);
        let polindromArray = [];
        polindromArray = functions.polindromText(text, polindromArray);
        const textRedis = JSON.stringify(text);
        const polindromRedis = JSON.stringify(polindromArray);
        request.setCountWords(countStrings);
        request.setSourceText(textRedis);
        request.setPolindrom(polindromRedis);
    });
}

app.whenReady().then(createGeneralWindow)