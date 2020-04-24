const { ipcRenderer } = require('electron');
document.getElementById('buttonSizeWord').addEventListener('click', () => {
    ipcRenderer.send('add-sizeWord-window');
});