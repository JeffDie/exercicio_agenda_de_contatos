const form = document.getElementById('form-agenda');
const inputNumero = document.getElementById('numero-contato');
const inputNome = document.getElementById('nome-contato');
const nomes = [];
const numeros = [];
const numberRegex = /^\(?[1-9]{2}\)??(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/;

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    validarTelefone();
})

function adicionaLinha(){
    if(nomes.includes(inputNome.value)){
        alert(`O nome: ${inputNome.value} já existe na sua agenda`)
    }else if(numeros.includes(inputNumero.value)){
        alert(`O numero: ${inputNumero.value} já existe na sua agenda`)
    }else if(!validarTelefone()){
        alert(`O numero precisa estar preenchido corretamente`)
    }else{
        nomes.push(inputNome.value);
        numeros.push(inputNumero.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function validarTelefone(){
    if(numberRegex.test(inputNumero.value)){
        return true;
    }else{
        return false;
    }
}

