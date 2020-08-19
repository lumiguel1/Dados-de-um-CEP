function validar() {
    // Pega o CEP e inseri na URL da API.
    var cep = document.getElementById('cep');
    var url = "https://api.postmon.com.br/v1/cep/" + cep.value;

    // Pega os elementos de outros campos. 
    var cidade = document.getElementById('cidade');
    var bairro = document.getElementById('bairro');
    var estado = document.getElementById('estado');
    var logradouro = document.getElementById('logradouro');

    // Valida o CEP.
    if (cep.value.length != 8) {
        alert("Erro: Tamanho de CEP inválido!")
    }
    else if(isNaN(parseInt(cep.value))){
        alert("Erro: Tipo de Dado inválido")
    }
    else{
        // Faz o Request da API.
        fetch(url, { method: 'GET' })
            .then(function (response) {
                response.json()
                    .then(function (dado) {
                        cidade.value = dado.cidade
                        bairro.value = dado.bairro
                        estado.value = dado.estado
                        logradouro.value = dado.logradouro
                    });
            })
    }
}
