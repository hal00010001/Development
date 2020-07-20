var nome = 'Almir'
var clc = require('cli-color');

function exibirMensagem(nome){
    console.log(clc.green('Olá, ', nome));
    console.log(clc.red.bgWhite.underline('Underlined red text on white background.'))
}

exibirMensagem(nome);