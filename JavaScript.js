function tela(val) {
    document.getElementById('resultado').value += val;
}

function igual() {
    try {
        const stringOperation = document.getElementById('resultado').value;
        const operation = eval(stringOperation);
        
        if (operation === Infinity) {
            document.getElementById('resultado').value = 'Impossible!';
        } else {
            document.getElementById('resultado').value = operation;
        }
    } catch (_error) {
        document.getElementById('resultado').value = '';
    }
}

function limpar() {
    document.getElementById('resultado').value = '';
}
