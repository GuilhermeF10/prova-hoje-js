let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {
    return l.indexOf(Number(n)) != -1;
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`; // Corrigido para usar crases
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior) maior = valores[pos];
            if (valores[pos] < menor) menor = valores[pos];
        }

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`; // Corrigido para usar crases
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`; // Corrigido para usar crases
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`; // Corrigido para usar crases
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`; // Corrigido para usar crases
    }
}