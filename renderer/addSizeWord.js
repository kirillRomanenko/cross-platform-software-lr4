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



// $('#buttonSend').on('click', (e) => {
//     e.preventDefault()
//     let size;
//     size = Number($('#inputSize').val());
//     $('#inputSize').val('');
//     if (size > 0) {
//         console.log(size);
//         ipcRenderer.send('add-sizeWord-form', size);
//         // let countStrings = functions.getRandom(100, 500);
//         // let text = [];
//         // text = functions.generateText(text, countStrings, size);
//         // let polindromArray = [];
//         // polindromArray = functions.polindromText(text, polindromArray);
//         // const textRedis = JSON.stringify(text);
//         // const polindromRedis = JSON.stringify(polindromArray);
//         // request.setCountWords(countStrings);
//         // request.setSourceText(textRedis);
//         // request.setPolindrom(polindromRedis);
//     }


// })