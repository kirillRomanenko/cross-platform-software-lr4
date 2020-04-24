const { ipcRenderer } = require('electron');
document.getElementById('buttonSizeWord').addEventListener('click', () => {
    ipcRenderer.send('add-sizeWord-window');
});
document.getElementById('buttonSourceData').addEventListener('click', () => {
    ipcRenderer.send('add-sourceData-report');
});
document.getElementById('buttonResult').addEventListener('click', () => {
    ipcRenderer.send('add-polindrom-report');
});