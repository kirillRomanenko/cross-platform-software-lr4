const { ipcRenderer } = require('electron');
document.getElementById('addSizeForm').addEventListener('submit', function (e) {
    e.preventDefault()

    let data = {};
    global.data = data;
    $('#addSizeForm').find('input, textearea, select').each(function () {
        data[this.id] = $(this).val();
    });
    console.log(data);
    ipcRenderer.send('add-sizeWord-form', data);
    $('#addSizeForm')[0].reset();
})